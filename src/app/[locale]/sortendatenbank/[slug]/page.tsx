import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { strains, getStrainBySlug, typeConfig } from '@/data/strains';
import { StrainDetail } from '@/components/strains/StrainDetail';
import { BreadcrumbSchema } from '@/lib/schema';
import { createAlternates } from '@/lib/metadata';

const TYPE_SLUGS = ['indica', 'sativa', 'hybrid'] as const;
type TypeSlug = typeof TYPE_SLUGS[number];

const typeIntro: Record<TypeSlug, { de: string; en: string }> = {
  indica: {
    de: 'Indica-Sorten stammen ursprünglich aus den Bergregionen Zentralasiens und zeichnen sich durch kompakten, buschigen Wuchs und breite Blätter aus. Sie haben typischerweise kürzere Blütezeiten (7–9 Wochen) und wirken tendenziell körperlich entspannend — was vor allem auf ihren oft hohen Myrcen-Anteil zurückzuführen ist. Beliebte Einsatzgebiete: Abendentspannung, Schmerzlinderung, Einschlafhilfe. Wichtig: Die Wirkung hängt stärker vom Terpenprofil und Cannabinoidverhältnis ab als von der botanischen Klassifizierung.',
    en: 'Indica strains originally come from the mountain regions of Central Asia and are characterized by compact, bushy growth and broad leaves. They typically have shorter flowering times (7–9 weeks) and tend to have physically relaxing effects — largely due to their often high myrcene content. Popular uses: evening relaxation, pain relief, sleep aid. Important: The effects depend more on the terpene profile and cannabinoid ratio than on botanical classification.',
  },
  sativa: {
    de: 'Sativa-Sorten haben ihren Ursprung in äquatorialen Regionen und wachsen schlank, hoch und mit schmalen Blättern. Die Blütezeit ist länger (10–14 Wochen), dafür können die Erträge höher ausfallen. Sativa-Sorten wirken tendenziell anregend, kreativ und stimmungsaufhellend — oft bedingt durch höhere Anteile an Limonen und Pinene. Beliebte Einsatzgebiete: Tagesaktivitäten, kreatives Arbeiten, soziale Situationen. Auch hier gilt: Das Terpenprofil ist aussagekräftiger als das Label.',
    en: 'Sativa strains originate from equatorial regions and grow tall, slender with narrow leaves. Flowering time is longer (10–14 weeks), but yields can be higher. Sativa strains tend to be stimulating, creative and mood-lifting — often due to higher levels of limonene and pinene. Popular uses: daytime activities, creative work, social situations. Here too: the terpene profile is more informative than the label.',
  },
  hybrid: {
    de: 'Hybrid-Sorten kombinieren Eigenschaften von Indica und Sativa und machen den Großteil der heute verfügbaren Sorten aus. Durch gezielte Kreuzung werden bestimmte Eigenschaften verstärkt — etwa hoher THC-Gehalt mit kurzer Blütezeit oder ein bestimmtes Terpenprofil. Hybrid-Sorten bieten die größte Vielfalt an Wirkungsprofilen und sind oft die beste Wahl für Konsumenten, die eine ausgewogene Wirkung zwischen Kopf und Körper suchen.',
    en: 'Hybrid strains combine characteristics of indica and sativa and make up the majority of strains available today. Through targeted crossbreeding, specific properties are enhanced — such as high THC content with short flowering time or a specific terpene profile. Hybrid strains offer the greatest variety of effect profiles and are often the best choice for consumers seeking a balanced head-body effect.',
  },
};

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const strainParams = strains.map((strain) => ({ slug: strain.slug }));
  const typeParams = TYPE_SLUGS.map((type) => ({ slug: type }));
  return [...strainParams, ...typeParams];
}

export async function generateMetadata({ params }: PageProps) {
  const { slug, locale } = await params;
  const isDE = locale === 'de';

  // Type filter page
  if (TYPE_SLUGS.includes(slug as TypeSlug)) {
    const typeSlug = slug as TypeSlug;
    const config = typeConfig[typeSlug];
    const label = config.label[isDE ? 'de' : 'en'];
    const count = strains.filter((s) => s.type === typeSlug).length;
    return {
      title: isDE
        ? `${label}-Sorten — Cannabis-Sortendatenbank | BlattWerk`
        : `${label} Strains — Cannabis Strain Database | BlattWerk`,
      description: isDE
        ? `${count} ${label}-Cannabis-Sorten mit THC/CBD-Werten, Terpenprofil und Wirkung. Filtern, vergleichen und die richtige Sorte finden.`
        : `${count} ${label} cannabis strains with THC/CBD values, terpene profiles and effects. Filter, compare and find the right strain.`,
      alternates: createAlternates(locale, `sortendatenbank/${slug}`),
    };
  }

  // Strain detail page
  const strain = getStrainBySlug(slug);
  if (!strain) return {};

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
  const isDE = locale === 'de';

  // Type filter page
  if (TYPE_SLUGS.includes(slug as TypeSlug)) {
    const typeSlug = slug as TypeSlug;
    const config = typeConfig[typeSlug];
    const label = config.label[isDE ? 'de' : 'en'];
    const filtered = strains
      .filter((s) => s.type === typeSlug)
      .sort((a, b) => b.rating - a.rating);
    const intro = typeIntro[typeSlug];

    return (
      <>
        <BreadcrumbSchema
          locale={locale}
          items={[
            { name: 'Home', href: '' },
            { name: isDE ? 'Sortendatenbank' : 'Strain Database', href: '/sortendatenbank' },
            { name: label, href: `/sortendatenbank/${slug}` },
          ]}
        />

        <section className="pt-28 pb-12 lg:pt-36 lg:pb-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <Link
              href="/sortendatenbank"
              className="inline-flex items-center gap-2 text-ink-faint hover:text-ink transition-colors mb-6 text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              {isDE ? 'Alle Sorten' : 'All strains'}
            </Link>
            <h1 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
              {isDE ? `${label}-Sorten` : `${label} Strains`}
            </h1>
            <p className="text-ink-muted leading-relaxed max-w-2xl mb-6">
              {isDE ? intro.de : intro.en}
            </p>
            <p className="text-sm text-ink-faint">
              {filtered.length} {isDE ? 'Sorten' : 'strains'}
            </p>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-3">
            {filtered.map((s) => {
              const sc = typeConfig[s.type];
              return (
                <Link
                  key={s.slug}
                  href={`/sortendatenbank/${s.slug}`}
                  className="group flex items-center justify-between gap-4 p-5 rounded-xl border border-[var(--border)] hover:border-accent/30 transition-all"
                  style={{ background: 'var(--glass)', backdropFilter: 'blur(12px)' }}
                >
                  <div className="min-w-0">
                    <h2 className="font-heading italic text-lg text-ink group-hover:text-accent transition-colors">
                      {s.name}
                    </h2>
                    <p className="text-sm text-ink-muted line-clamp-1 mt-1">
                      {isDE ? s.description_de : s.description_en}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="font-mono text-xs text-ink-faint">THC {s.cannabinoids.thc}%</span>
                    <span className="font-mono text-xs text-ink-faint">{s.rating.toFixed(1)}</span>
                    <ArrowRight className="w-4 h-4 text-ink-faint group-hover:text-accent transition-colors" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </>
    );
  }

  // Strain detail page
  const strain = getStrainBySlug(slug);
  if (!strain) notFound();

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
