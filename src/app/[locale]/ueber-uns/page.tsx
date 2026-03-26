import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { UeberUnsClient } from './UeberUnsClient';
import { BreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Über uns',
  description:
    'Erfahre mehr über BlattWerk e.V. – unsere Mission, Werte, den Vorstand und die Vereinsstruktur des Cannabis Social Club Hildesheim.',
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isDE = locale === 'de';

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'Home', href: '' },
          { name: isDE ? 'Über uns' : 'About us', href: '/ueber-uns' },
        ]}
      />
      <UeberUnsClient isDE={isDE} />
    </>
  );
}
