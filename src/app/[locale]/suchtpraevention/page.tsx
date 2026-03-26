import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { SuchtpraeventionClient } from './SuchtpraeventionClient';

export const metadata: Metadata = {
  title: 'Suchtprävention',
  description:
    'Unser Präventionskonzept: Aufklärung, Beratung und verantwortungsvoller Umgang mit Cannabis. BlattWerk e.V. Hildesheim.',
};

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
