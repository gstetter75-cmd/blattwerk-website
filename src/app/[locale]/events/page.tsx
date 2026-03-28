import { createMetadata, PAGE_META } from '@/lib/metadata';
import { setRequestLocale } from 'next-intl/server';
import { WQFPageHero } from '@/components/layout/WQFPageHero';
import { HeroImage } from '@/components/decorative/HeroImage';
import { EventsClient } from './EventsClient';
import { BreadcrumbSchema, EventListSchema } from '@/lib/schema';
import { upcomingEvents, pastEvents } from '@/data/events';

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
  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'Home', href: '' },
          { name: isDE ? 'Veranstaltungen' : 'Events', href: '/events' },
        ]}
      />
      <EventListSchema events={upcomingEvents} locale={locale} />
      <WQFPageHero
        label={isDE ? 'Veranstaltungen' : 'Events'}
        title="Events"
        subtitle={
          isDE
            ? 'Workshops, Vorträge, Versammlungen und mehr – bleib informiert über unsere Vereinsaktivitäten.'
            : 'Workshops, lectures, assemblies and more – stay informed about our club activities.'
        }
        accentColor="gold"
      />
      <HeroImage
        src="/images/cannabis-plants-outdoor.jpg"
        alt={isDE ? 'Cannabis-Pflanzen im Freien' : 'Cannabis plants outdoors'}
        height="240px"
      />
      <EventsClient isDE={isDE} upcomingEvents={upcomingEvents} pastEvents={pastEvents} />
    </>
  );
}
