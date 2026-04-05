import { setRequestLocale } from 'next-intl/server';
import { BreadcrumbSchema } from '@/lib/schema';
import { createAlternates } from '@/lib/metadata';
import { StrainCompare } from '@/components/strains/StrainCompare';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const isDE = locale === 'de';
  return {
    title: isDE
      ? 'Sortenvergleich — Cannabis-Sortendatenbank | BlattWerk'
      : 'Strain Comparison — Cannabis Strain Database | BlattWerk',
    description: isDE
      ? 'Vergleiche bis zu 3 Cannabis-Sorten nebeneinander: THC, CBD, Terpene, Wirkung und Anbauinfos auf einen Blick.'
      : 'Compare up to 3 cannabis strains side by side: THC, CBD, terpenes, effects and growing info at a glance.',
    alternates: createAlternates(locale, 'sortendatenbank/vergleich'),
  };
}

export default async function ComparePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isDE = locale === 'de';

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'Home', href: '' },
          { name: isDE ? 'Sortendatenbank' : 'Strain Database', href: '/sortendatenbank' },
          { name: isDE ? 'Vergleich' : 'Compare', href: '/sortendatenbank/vergleich' },
        ]}
      />
      <StrainCompare />
    </>
  );
}
