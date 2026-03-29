import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { strains, getStrainBySlug } from '@/data/strains';
import { StrainDetail } from '@/components/strains/StrainDetail';
import { BreadcrumbSchema } from '@/lib/schema';
import { createAlternates } from '@/lib/metadata';

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

  return {
    title: `${strain.name} – ${dbLabel} | BlattWerk e.V.`,
    description,
    keywords: [strain.name, strain.type, 'Cannabis', 'BlattWerk', dbLabel],
    openGraph: {
      title: `${strain.name} – ${dbLabel} | BlattWerk e.V.`,
      description,
      type: 'website',
    },
    alternates: createAlternates(locale, `sortendatenbank/${slug}`),
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
