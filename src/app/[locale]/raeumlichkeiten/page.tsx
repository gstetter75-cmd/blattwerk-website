import { setRequestLocale } from 'next-intl/server';
import { RaeumlichkeitenClient } from './RaeumlichkeitenClient';

export default async function FacilitiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isDE = locale === 'de';
  return <RaeumlichkeitenClient isDE={isDE} />;
}
