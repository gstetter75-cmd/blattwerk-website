import { createMetadata } from '@/lib/metadata';
import { setRequestLocale } from 'next-intl/server';
import { CscGruendungClient } from './CscGruendungClient';
import { BreadcrumbSchema } from '@/lib/schema';

const PAGE_META = {
  de: {
    title: 'CSC gründen – Unterstützung für Gründungsinteressierte',
    description: 'Du willst einen Cannabis Social Club gründen? BlattWerk e.V. teilt Erfahrungen und steht bei Fragen zur Seite. Hilfe zur Selbsthilfe.',
  },
  en: {
    title: 'Start a CSC – Support for Aspiring Founders',
    description: 'Want to start a Cannabis Social Club? BlattWerk e.V. shares experiences and helps with questions. Help for self-help.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return createMetadata(locale, PAGE_META, 'csc-gruendung');
}

export default async function CscGruendungPage({
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
          { name: isDE ? 'CSC gründen' : 'Start a CSC', href: '/csc-gruendung' },
        ]}
      />
      <CscGruendungClient isDE={isDE} />
    </>
  );
}
