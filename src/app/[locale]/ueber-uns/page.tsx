import { setRequestLocale } from 'next-intl/server';
import { UeberUnsClient } from './UeberUnsClient';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isDE = locale === 'de';
  return <UeberUnsClient isDE={isDE} />;
}
