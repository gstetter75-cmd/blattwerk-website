import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import {
  OrganizationSchema,
  WebSiteSchema,
  BreadcrumbSchema,
  ArticleSchema,
  FAQSchema,
  EventListSchema,
} from '@/lib/schema';
import { events, type BlattWerkEvent } from '@/data/events';

// Fixed fixtures: the upcoming/past split depends on the current date.
const scheduledEvents = events.filter(e => e.time);

function makeScheduledEvent(overrides: Partial<BlattWerkEvent> = {}): BlattWerkEvent {
  return {
    date: '2026-11-14',
    time: '15:00',
    title_de: 'Informationsabend',
    title_en: 'Information evening',
    description_de: 'Beschreibung',
    description_en: 'Description',
    type_de: 'Vortrag',
    type_en: 'Lecture',
    ...overrides,
  };
}

function getJsonLd(element: React.ReactElement): Record<string, unknown> {
  const html = renderToString(element);
  const match = html.match(/>({.*?})</s);
  if (!match) throw new Error('No JSON-LD found in rendered output');
  return JSON.parse(match[1]);
}

describe('Schema.org JSON-LD', () => {
  describe('OrganizationSchema', () => {
    it('renders valid Organization schema', () => {
      const data = getJsonLd(<OrganizationSchema />);
      expect(data['@context']).toBe('https://schema.org');
      expect(data['@type']).toBe('Organization');
      expect(data['name']).toBe('BlattWerk e.V.');
      expect(data['url']).toContain('blattwerk.dev');
    });

    it('includes geo coordinates', () => {
      const data = getJsonLd(<OrganizationSchema />);
      const geo = data['geo'] as Record<string, unknown>;
      expect(geo['@type']).toBe('GeoCoordinates');
      expect(geo['latitude']).toBe(52.1535);
      expect(geo['longitude']).toBe(9.9515);
    });

    it('includes area served', () => {
      const data = getJsonLd(<OrganizationSchema />);
      const area = data['areaServed'] as Record<string, unknown>;
      expect(area['@type']).toBe('City');
      expect(area['name']).toBe('Hildesheim');
    });

    it('includes address with region', () => {
      const data = getJsonLd(<OrganizationSchema />);
      const address = data['address'] as Record<string, unknown>;
      expect(address['addressLocality']).toBe('Hildesheim');
      expect(address['addressRegion']).toBe('Niedersachsen');
      expect(address['postalCode']).toBe('31137');
      expect(address['addressCountry']).toBe('DE');
    });

    it('includes contact point', () => {
      const data = getJsonLd(<OrganizationSchema />);
      const contacts = data['contactPoint'] as Record<string, unknown>[];
      expect(contacts).toHaveLength(1);
      expect(contacts[0]['email']).toBe('info@blattwerk.dev');
    });
  });

  describe('WebSiteSchema', () => {
    it('renders WebSite schema with SearchAction', () => {
      const data = getJsonLd(<WebSiteSchema />);
      expect(data['@type']).toBe('WebSite');
      expect(data['name']).toBe('BlattWerk e.V.');
      const action = data['potentialAction'] as Record<string, unknown>;
      expect(action['@type']).toBe('SearchAction');
    });
  });

  describe('BreadcrumbSchema', () => {
    it('renders breadcrumb items in order', () => {
      const data = getJsonLd(
        <BreadcrumbSchema
          locale="de"
          items={[
            { name: 'Home', href: '' },
            { name: 'Wissensdatenbank', href: '/wissensdatenbank' },
            { name: 'Recht', href: '/wissensdatenbank/legal' },
          ]}
        />
      );
      expect(data['@type']).toBe('BreadcrumbList');
      const items = data['itemListElement'] as Record<string, unknown>[];
      expect(items).toHaveLength(3);
      expect(items[0]['position']).toBe(1);
      expect(items[0]['name']).toBe('Home');
      expect(items[2]['position']).toBe(3);
      expect(items[2]['name']).toBe('Recht');
    });
  });

  describe('ArticleSchema', () => {
    it('renders Article schema with required fields', () => {
      const data = getJsonLd(
        <ArticleSchema
          title="Test Article"
          description="A test description"
          slug="test-slug"
          category="legal"
          locale="de"
          readingTime={5}
        />
      );
      expect(data['@type']).toBe('Article');
      expect(data['headline']).toBe('Test Article');
      expect(data['timeRequired']).toBe('PT5M');
      expect(data['inLanguage']).toBe('de-DE');
    });

    it('renders EN language for english locale', () => {
      const data = getJsonLd(
        <ArticleSchema
          title="Test"
          description="Test"
          slug="test"
          category="legal"
          locale="en"
        />
      );
      expect(data['inLanguage']).toBe('en-US');
    });
  });

  describe('FAQSchema', () => {
    it('renders FAQ items', () => {
      const data = getJsonLd(
        <FAQSchema items={[
          { question: 'Q1?', answer: 'A1' },
          { question: 'Q2?', answer: 'A2' },
        ]} />
      );
      expect(data['@type']).toBe('FAQPage');
      const entities = data['mainEntity'] as Record<string, unknown>[];
      expect(entities).toHaveLength(2);
      expect(entities[0]['name']).toBe('Q1?');
    });
  });

  describe('EventListSchema', () => {
    it('renders Event schemas only for events with time', () => {
      const html = renderToString(<EventListSchema events={events} locale="de" />);
      const matches = html.match(/application\/ld\+json/g);
      expect(scheduledEvents.length).toBeGreaterThan(0);
      expect(matches?.length).toBe(scheduledEvents.length);
    });

    it('includes correct event details', () => {
      const atClubPremises = scheduledEvents.find(e => !e.location_de);
      expect(atClubPremises).toBeDefined();
      const data = getJsonLd(<EventListSchema events={[atClubPremises!]} locale="de" />);
      expect(data['@type']).toBe('Event');
      expect(data['eventStatus']).toContain('EventScheduled');
      const location = data['location'] as Record<string, Record<string, string>>;
      expect(location['address']['addressLocality']).toBe('Hildesheim');
    });

    it('uses the event\'s own location instead of the club address', () => {
      const elsewhere = makeScheduledEvent({ location_de: 'Station Berlin, Luckenwalder Str. 4–6, 10963 Berlin' });
      const data = getJsonLd(<EventListSchema events={[elsewhere]} locale="de" />);
      const location = data['location'] as Record<string, unknown>;
      expect(location['name']).toBe('Station Berlin, Luckenwalder Str. 4–6, 10963 Berlin');
      expect(location['address']).toBe('Station Berlin, Luckenwalder Str. 4–6, 10963 Berlin');
    });

    it('uses the Berlin UTC offset that applies on the event date', () => {
      const winter = getJsonLd(<EventListSchema events={[makeScheduledEvent({ date: '2026-11-14' })]} locale="de" />);
      const summer = getJsonLd(<EventListSchema events={[makeScheduledEvent({ date: '2026-06-11' })]} locale="de" />);
      expect(winter['startDate']).toBe('2026-11-14T15:00:00+01:00');
      expect(summer['startDate']).toBe('2026-06-11T15:00:00+02:00');
    });
  });
});
