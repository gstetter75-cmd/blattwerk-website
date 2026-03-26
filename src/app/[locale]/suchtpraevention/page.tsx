import { createMetadata, PAGE_META } from '@/lib/metadata';
import { setRequestLocale } from 'next-intl/server';
import { SuchtpraeventionClient } from './SuchtpraeventionClient';
import { HeroImage } from '@/components/decorative/HeroImage';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return createMetadata(locale, PAGE_META.prevention);
}

export default async function PreventionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isDE = locale === 'de';
  return (
    <>
      <SuchtpraeventionClient isDE={isDE} />
      <HeroImage
        src="/images/knowledge/prevention.jpg"
        alt={isDE ? 'Prävention und Gesundheit' : 'Prevention and health'}
        height="200px"
        gradient="top"
      />
    </>
  );
}
