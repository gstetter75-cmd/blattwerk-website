import { setRequestLocale } from 'next-intl/server';
import { SuchtpraeventionClient } from './SuchtpraeventionClient';

export default async function PreventionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isDE = locale === 'de';
  return <SuchtpraeventionClient isDE={isDE} />;
}
