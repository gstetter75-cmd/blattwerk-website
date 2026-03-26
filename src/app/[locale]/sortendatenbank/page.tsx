import { createMetadata, PAGE_META } from '@/lib/metadata';
import { setRequestLocale } from 'next-intl/server';
import { StrainOverview } from '@/components/strains/StrainOverview';
import { BreadcrumbSchema } from '@/lib/schema';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return createMetadata(locale, PAGE_META.strains);
}

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
          { name: locale === 'de' ? 'Sortendatenbank' : 'Strain Database', href: '/sortendatenbank' },
        ]}
      />
      <StrainOverview />
    </>
  );
}
