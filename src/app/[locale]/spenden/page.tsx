import { createMetadata, PAGE_META } from '@/lib/metadata';
import { setRequestLocale } from 'next-intl/server';
import { WQFPageHero } from '@/components/layout/WQFPageHero';
import { SpendenClient } from './SpendenClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return createMetadata(locale, PAGE_META.donations);
}

export default async function DonationsPage({
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
        label={isDE ? 'Spenden' : 'Donate'}
        title={isDE ? 'Unterstütze uns' : 'Support us'}
        subtitle={
          isDE
            ? 'Unterstütze unsere Arbeit und hilf uns, einen verantwortungsvollen Umgang mit Cannabis zu fördern.'
            : 'Support our work and help us promote responsible cannabis use.'
        }
        accentColor="gold"
      />
      <SpendenClient isDE={isDE} />
    </>
  );
}
