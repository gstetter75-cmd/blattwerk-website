import { setRequestLocale } from 'next-intl/server';
import { StrainOverview } from '@/components/strains/StrainOverview';

export default async function StrainsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <StrainOverview />;
}
