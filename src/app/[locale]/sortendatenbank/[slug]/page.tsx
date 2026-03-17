import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { strains, getStrainBySlug } from '@/data/strains';
import { StrainDetail } from '@/components/strains/StrainDetail';

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

  const lang = locale === 'de' ? 'de' : 'en';
  const description =
    lang === 'de' ? strain.description_de : strain.description_en;

  return {
    title: `${strain.name} – Sortendatenbank | BlattWerk e.V.`,
    description: description.slice(0, 160),
  };
}

export default async function StrainPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const strain = getStrainBySlug(slug);
  if (!strain) notFound();

  return <StrainDetail slug={slug} locale={locale} />;
}
