import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { StrainOverview } from '@/components/strains/StrainOverview';
import { BreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Sortendatenbank',
  description:
    '89 Cannabis-Sorten wissenschaftlich dokumentiert. Genetik, Terpenprofil, THC/CBD-Werte und Wirkungsspektrum. BlattWerk e.V. Hildesheim.',
};

export default async function StrainsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'Home', href: '' },
          { name: 'Sortendatenbank', href: '/sortendatenbank' },
        ]}
      />
      <StrainOverview />
    </>
  );
}
