import { setRequestLocale } from 'next-intl/server';
import { MitgliedschaftClient } from './MitgliedschaftClient';

export default async function MembershipPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isDE = locale === 'de';
  return <MitgliedschaftClient isDE={isDE} />;
}
