import { createMetadata, PAGE_META } from '@/lib/metadata';
import { setRequestLocale } from 'next-intl/server';
import { WQFPageHero } from '@/components/layout/WQFPageHero';
import { EventsClient } from './EventsClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return createMetadata(locale, PAGE_META.events);
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
      <EventsClient isDE={isDE} />
    </>
  );
}
