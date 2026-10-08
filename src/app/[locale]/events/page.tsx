import { createMetadata, PAGE_META } from '@/lib/metadata';
import { setRequestLocale } from 'next-intl/server';
import { WQFPageHero } from '@/components/layout/WQFPageHero';
import { HeroImage } from '@/components/decorative/HeroImage';
import { EventsClient } from './EventsClient';
import { BreadcrumbSchema, EventListSchema } from '@/lib/schema';
import { events, getTodayIsoDate, partitionByAudience, splitEventsByDate } from '@/data/events';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return createMetadata(locale, PAGE_META.events, 'events');
}

export default async function EventsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isDE = locale === 'de';
  // Static export: split at build time; EventsClient re-splits with the visitor's date.
  const buildDate = getTodayIsoDate();
  const { upcoming } = splitEventsByDate(events, buildDate);
  // Internal appointments (board meetings etc.) are not public events: keep them out of search results.
  const { publicEvents } = partitionByAudience(upcoming);
  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'Home', href: '' },
          { name: isDE ? 'Veranstaltungen' : 'Events', href: '/events' },
        ]}
      />
      <EventListSchema events={publicEvents} locale={locale} />
      <WQFPageHero
        label={isDE ? 'Veranstaltungen' : 'Events'}
        title={isDE ? 'Veranstaltungen & Workshops — Hildesheim' : 'Events & Workshops — Hildesheim'}
        subtitle={
          isDE
            ? 'Workshops, Vorträge, Versammlungen und mehr – bleib informiert über unsere Vereinsaktivitäten.'
            : 'Workshops, lectures, assemblies and more – stay informed about our club activities.'
        }
        accentColor="gold"
      />
      <HeroImage
        src="/images/cannabis-indoor.jpg"
        alt={isDE ? 'Cannabis-Pflanzen im Indoor-Grow' : 'Cannabis plants in indoor grow'}
        height="240px"
      />
      <EventsClient isDE={isDE} events={events} buildDate={buildDate} />
    </>
  );
}
