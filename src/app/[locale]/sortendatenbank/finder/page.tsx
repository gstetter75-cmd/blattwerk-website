import { setRequestLocale } from 'next-intl/server';
import { BreadcrumbSchema } from '@/lib/schema';
import { createAlternates } from '@/lib/metadata';
import { StrainFinder } from '@/components/strains/StrainFinder';
import { HeroImage } from '@/components/decorative/HeroImage';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const isDE = locale === 'de';
  return {
    title: isDE
      ? 'Sortenfinder — Cannabis-Sortendatenbank | BlattWerk'
      : 'Strain Finder — Cannabis Strain Database | BlattWerk',
    description: isDE
      ? 'Finde die passende Cannabis-Sorte anhand deiner Präferenzen: Wirkung, THC-Gehalt und Geschmack. Interaktiver Sortenfinder von BlattWerk e.V.'
      : 'Find the right cannabis strain based on your preferences: effects, THC content and flavor. Interactive strain finder by BlattWerk e.V.',
    alternates: createAlternates(locale, 'sortendatenbank/finder'),
  };
}

export default async function FinderPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isDE = locale === 'de';

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'Home', href: '' },
          { name: isDE ? 'Sortendatenbank' : 'Strain Database', href: '/sortendatenbank' },
          { name: isDE ? 'Sortenfinder' : 'Strain Finder', href: '/sortendatenbank/finder' },
        ]}
      />

      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-medium text-accent mb-4">
            {isDE ? 'Sortendatenbank' : 'Strain Database'}
          </p>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl leading-tight mb-4">
            {isDE ? 'Sortenfinder' : 'Strain Finder'}
          </h1>
          <p className="text-lg text-ink-muted max-w-2xl">
            {isDE
              ? 'Beantworte drei kurze Fragen und erhalte passende Sortenempfehlungen aus unserer Datenbank.'
              : 'Answer three short questions and receive matching strain suggestions from our database.'}
          </p>
        </div>
      </section>

      <StrainFinder />
      <HeroImage
        src="/images/cannabis-plants-outdoor.jpg"
        alt={isDE ? 'Cannabis-Pflanzen im Freien' : 'Cannabis plants outdoors'}
        height="180px"
        gradient="top"
      />
    </>
  );
}
