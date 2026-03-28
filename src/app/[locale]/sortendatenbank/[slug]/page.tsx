import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { strains, getStrainBySlug } from '@/data/strains';
import { StrainDetail } from '@/components/strains/StrainDetail';
import { BreadcrumbSchema } from '@/lib/schema';

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return strains.map((strain) => ({ slug: strain.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug, locale } = await params;
  const strain = getStrainBySlug(slug);
  if (!strain) return {};

  const isDE = locale === 'de';
  const description = (isDE ? strain.description_de : strain.description_en).slice(0, 160);
  const dbLabel = isDE ? 'Sortendatenbank' : 'Strain Database';
  const altLocale = isDE ? 'en' : 'de';
  const path = `sortendatenbank/${slug}`;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://blattwerk.dev';

  return {
    title: `${strain.name} – ${dbLabel} | BlattWerk e.V.`,
    description,
    keywords: [strain.name, strain.type, 'Cannabis', 'BlattWerk', dbLabel],
    openGraph: {
      title: `${strain.name} – ${dbLabel} | BlattWerk e.V.`,
      description,
      type: 'website',
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}/${path}/`,
      languages: {
        [altLocale]: `${BASE_URL}/${altLocale}/${path}/`,
        'x-default': `${BASE_URL}/de/${path}/`,
      },
    },
  };
}

export default async function StrainPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const strain = getStrainBySlug(slug);
  if (!strain) notFound();

  const isDE = locale === 'de';
  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'Home', href: '' },
          { name: isDE ? 'Sortendatenbank' : 'Strain Database', href: '/sortendatenbank' },
          { name: strain.name, href: `/sortendatenbank/${slug}` },
        ]}
      />
      <StrainDetail slug={slug} locale={locale} />
    </>
  );
}
