import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import {
  ArrowLeft,
  Star,
  Sprout,
  Sun,
  CloudRain,
  AlertCircle,
  Thermometer,
  Ruler,
} from 'lucide-react';
import {
  strains,
  getStrainBySlug,
  effectLabels,
  negativeLabels,
  flavorLabels,
  medicalLabels,
  terpeneLabels,
} from '@/data/strains';
import type { Strain } from '@/data/strains';

interface StrainDetailProps {
  slug: string;
  locale: string;
}

type Lang = 'de' | 'en';

// ─── Sub-components ──────────────────────────────────────────────────────────

function ProgressBar({
  value,
  max = 100,
  color = 'bg-deep-forest',
}: {
  value: number;
  max?: number;
  color?: string;
}) {
  const pct = Math.min(100, (value / max) * 100);
  return (
    <div className="h-2 bg-sand rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full transition-all ${color}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= Math.round(rating) ? 'text-amber fill-amber' : 'text-sand fill-sand'
          }`}
        />
      ))}
    </div>
  );
}

const typeConfig = {
  indica: {
    badge: 'bg-indigo-100 text-indigo-800 border border-indigo-200',
    label: { de: 'Indica', en: 'Indica' },
  },
  sativa: {
    badge: 'bg-amber-100 text-amber-800 border border-amber-200',
    label: { de: 'Sativa', en: 'Sativa' },
  },
  hybrid: {
    badge: 'bg-green-100 text-green-800 border border-green-200',
    label: { de: 'Hybrid', en: 'Hybrid' },
  },
} as const;

const difficultyConfig = {
  easy: {
    label: { de: 'Einfach', en: 'Easy' },
    badge: 'bg-green-100 text-green-800',
  },
  medium: {
    label: { de: 'Mittel', en: 'Medium' },
    badge: 'bg-amber-100 text-amber-800',
  },
  hard: {
    label: { de: 'Schwierig', en: 'Hard' },
    badge: 'bg-terracotta/10 text-terracotta',
  },
} as const;

// ─── Section wrapper ──────────────────────────────────────────────────────────

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-6 border-t border-sand">
      <h2 className="font-heading text-xl text-deep-forest mb-4">{title}</h2>
      {children}
    </section>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function StrainDetail({ slug, locale }: StrainDetailProps) {
  const strain = getStrainBySlug(slug);
  if (!strain) notFound();

  const lang: Lang = locale === 'de' ? 'de' : 'en';
  const config = typeConfig[strain.type];
  const description = lang === 'de' ? strain.description_de : strain.description_en;

  // Similar strains (same type, different slug, top 3 by rating)
  const similar = strains
    .filter((s) => s.type === strain.type && s.slug !== strain.slug)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  // Top effects sorted
  const sortedEffects = Object.entries(strain.effects)
    .sort(([, a], [, b]) => b - a) as [keyof typeof effectLabels, number][];

  // Top terpenes sorted
  const sortedTerpenes = Object.entries(strain.terpenes)
    .sort(([, a], [, b]) => b - a) as [keyof typeof terpeneLabels, number][];

  // Cannabinoids
  const cannabinoidEntries: { key: string; label: string; value: number; color: string }[] = [
    { key: 'thc', label: 'THC', value: strain.cannabinoids.thc, color: 'bg-deep-forest' },
    { key: 'cbd', label: 'CBD', value: strain.cannabinoids.cbd, color: 'bg-sage' },
    { key: 'cbg', label: 'CBG', value: strain.cannabinoids.cbg, color: 'bg-amber' },
    { key: 'cbc', label: 'CBC', value: strain.cannabinoids.cbc, color: 'bg-terracotta' },
    { key: 'thcv', label: 'THCV', value: strain.cannabinoids.thcv, color: 'bg-indigo-400' },
  ];

  // Negatives sorted
  const sortedNegatives = Object.entries(strain.negatives)
    .sort(([, a], [, b]) => b - a) as [keyof typeof negativeLabels, number][];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Back link */}
      <Link
        href="/sortendatenbank"
        className="inline-flex items-center gap-2 text-sm text-sage hover:text-deep-forest transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        {lang === 'de' ? 'Zurück zur Übersicht' : 'Back to overview'}
      </Link>

      {/* Header Card */}
      <div className="bg-warm-white border border-sand rounded-lg p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="font-heading text-3xl sm:text-4xl text-deep-forest">
                {strain.name}
              </h1>
              <span className={`text-sm font-medium px-3 py-1 rounded-full ${config.badge}`}>
                {config.label[lang]}
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <StarRating rating={strain.rating} />
              <span className="font-mono text-sm text-charcoal font-semibold">
                {strain.rating.toFixed(1)}
              </span>
              <span className="text-sm text-sage">
                ({strain.review_count.toLocaleString()}{' '}
                {lang === 'de' ? 'Bewertungen' : 'reviews'})
              </span>
            </div>
          </div>

          {/* THC / CBD prominent */}
          <div className="flex gap-4 font-mono">
            <div className="text-center bg-sand/40 rounded-lg px-4 py-3">
              <p className="text-xs text-sage mb-1">THC</p>
              <p className="text-2xl font-bold text-deep-forest">{strain.cannabinoids.thc}%</p>
            </div>
            <div className="text-center bg-sand/40 rounded-lg px-4 py-3">
              <p className="text-xs text-sage mb-1">CBD</p>
              <p className="text-2xl font-bold text-deep-forest">{strain.cannabinoids.cbd}%</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="mt-5 text-charcoal/80 leading-relaxed">{description}</p>
      </div>

      {/* Genetics / Stammbaum */}
      <Section title={lang === 'de' ? 'Genetik / Stammbaum' : 'Genetics / Lineage'}>
        <div className="flex items-center justify-center gap-4 flex-wrap py-4">
          <div className="bg-sand/50 border border-sand rounded-lg px-4 py-3 text-center">
            <p className="text-xs text-sage mb-1">{lang === 'de' ? 'Elternteil 1' : 'Parent 1'}</p>
            <p className="font-heading text-deep-forest">{strain.genetics.parent1}</p>
          </div>
          <div className="text-sage text-2xl font-thin select-none">×</div>
          <div className="bg-sand/50 border border-sand rounded-lg px-4 py-3 text-center">
            <p className="text-xs text-sage mb-1">{lang === 'de' ? 'Elternteil 2' : 'Parent 2'}</p>
            <p className="font-heading text-deep-forest">{strain.genetics.parent2}</p>
          </div>
          <div className="hidden sm:block text-sage text-xl">→</div>
          <div className="bg-deep-forest text-warm-white rounded-lg px-4 py-3 text-center">
            <p className="text-xs text-warm-white/60 mb-1">{lang === 'de' ? 'Ergebnis' : 'Result'}</p>
            <p className="font-heading">{strain.name}</p>
          </div>
        </div>
      </Section>

      {/* Effects */}
      <Section title={lang === 'de' ? 'Wirkungsprofile' : 'Effect Profile'}>
        <div className="space-y-3">
          {sortedEffects.map(([key, value]) => (
            <div key={key} className="grid grid-cols-[130px_1fr_36px] items-center gap-3">
              <span className="text-sm text-charcoal truncate">{effectLabels[key][lang]}</span>
              <ProgressBar
                value={value}
                color={value >= 70 ? 'bg-deep-forest' : value >= 40 ? 'bg-sage' : 'bg-sand'}
              />
              <span className="font-mono text-xs text-sage text-right">{value}%</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Cannabinoid Profile */}
      <Section title={lang === 'de' ? 'Cannabinoidprofil' : 'Cannabinoid Profile'}>
        <div className="space-y-3">
          {cannabinoidEntries.map(({ key, label, value, color }) => (
            <div key={key} className="grid grid-cols-[80px_1fr_60px] items-center gap-3">
              <span className="text-sm font-mono text-charcoal">{label}</span>
              <ProgressBar value={value} max={35} color={color} />
              <span className="font-mono text-xs text-sage text-right">{value}%</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Terpene Profile */}
      <Section title={lang === 'de' ? 'Terpenprofil' : 'Terpene Profile'}>
        <div className="space-y-3">
          {sortedTerpenes.map(([key, value]) => (
            <div key={key} className="grid grid-cols-[140px_1fr_60px] items-center gap-3">
              <span className="text-sm text-charcoal">{terpeneLabels[key][lang]}</span>
              <ProgressBar value={value} max={0.5} color="bg-amber" />
              <span className="font-mono text-xs text-sage text-right">
                {(value * 100).toFixed(0)}%
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Flavors */}
      <Section title={lang === 'de' ? 'Geschmack & Aroma' : 'Flavors & Aroma'}>
        <div className="flex flex-wrap gap-2">
          {strain.flavors.map((f) => {
            const label = flavorLabels[f]?.[lang] ?? f;
            return (
              <span
                key={f}
                className="px-3 py-1.5 bg-sand/60 border border-sand rounded-full text-sm text-charcoal"
              >
                {label}
              </span>
            );
          })}
        </div>
      </Section>

      {/* Negative Effects */}
      <Section title={lang === 'de' ? 'Mögliche Nebenwirkungen' : 'Possible Side Effects'}>
        <div className="space-y-3">
          {sortedNegatives.map(([key, value]) => (
            <div key={key} className="grid grid-cols-[160px_1fr_36px] items-center gap-3">
              <span className="text-sm text-charcoal">{negativeLabels[key][lang]}</span>
              <ProgressBar
                value={value}
                color={value >= 60 ? 'bg-terracotta' : value >= 30 ? 'bg-amber' : 'bg-sage'}
              />
              <span className="font-mono text-xs text-sage text-right">{value}%</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Medical Uses */}
      <Section title={lang === 'de' ? 'Medizinische Anwendungsgebiete' : 'Medical Applications'}>
        <div className="flex flex-wrap gap-2 mb-4">
          {strain.medical.map((m) => {
            const label = medicalLabels[m]?.[lang] ?? m;
            return (
              <span
                key={m}
                className="px-3 py-1.5 bg-deep-forest/10 border border-deep-forest/20 rounded-full text-sm text-deep-forest"
              >
                {label}
              </span>
            );
          })}
        </div>
        <div className="flex gap-2 p-3 bg-sand/40 rounded-lg border border-sand">
          <AlertCircle className="w-4 h-4 text-sage shrink-0 mt-0.5" />
          <p className="text-xs text-sage leading-relaxed">
            {lang === 'de'
              ? 'Diese Angaben dienen nur zur Information und ersetzen keine ärztliche Beratung.'
              : 'This information is for informational purposes only and does not replace medical advice.'}
          </p>
        </div>
      </Section>

      {/* Growing Info */}
      <Section title={lang === 'de' ? 'Anbauinformationen' : 'Growing Information'}>
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Difficulty */}
          <div className="bg-warm-white border border-sand rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Sprout className="w-4 h-4 text-sage" />
              <span className="text-sm font-medium text-charcoal">
                {lang === 'de' ? 'Schwierigkeit' : 'Difficulty'}
              </span>
            </div>
            <span
              className={`inline-block text-sm font-medium px-2.5 py-0.5 rounded-full ${
                difficultyConfig[strain.growing.difficulty].badge
              }`}
            >
              {difficultyConfig[strain.growing.difficulty].label[lang]}
            </span>
          </div>

          {/* Flowering */}
          <div className="bg-warm-white border border-sand rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4 text-amber" />
              <span className="text-sm font-medium text-charcoal">
                {lang === 'de' ? 'Blütezeit' : 'Flowering Time'}
              </span>
            </div>
            <p className="font-mono text-deep-forest font-semibold">
              {strain.growing.flowering_days_min}–{strain.growing.flowering_days_max}{' '}
              {lang === 'de' ? 'Tage' : 'days'}
            </p>
          </div>

          {/* Yield */}
          <div className="bg-warm-white border border-sand rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2">
              <CloudRain className="w-4 h-4 text-sage" />
              <span className="text-sm font-medium text-charcoal">
                {lang === 'de' ? 'Ertrag' : 'Yield'}
              </span>
            </div>
            <div className="space-y-1 font-mono text-sm">
              <p>
                <span className="text-sage">{lang === 'de' ? 'Indoor:' : 'Indoor:'}</span>{' '}
                <span className="text-deep-forest font-semibold">
                  {strain.growing.yield_indoor} g/m²
                </span>
              </p>
              <p>
                <span className="text-sage">{lang === 'de' ? 'Outdoor:' : 'Outdoor:'}</span>{' '}
                <span className="text-deep-forest font-semibold">
                  {strain.growing.yield_outdoor} g/{lang === 'de' ? 'Pflanze' : 'plant'}
                </span>
              </p>
            </div>
          </div>

          {/* Height */}
          <div className="bg-warm-white border border-sand rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Ruler className="w-4 h-4 text-sage" />
              <span className="text-sm font-medium text-charcoal">
                {lang === 'de' ? 'Wuchshöhe' : 'Plant Height'}
              </span>
            </div>
            <p className="font-mono text-deep-forest font-semibold">
              {strain.growing.height_cm_min}–{strain.growing.height_cm_max} cm
            </p>
          </div>

          {/* Indoor / Outdoor */}
          <div className="bg-warm-white border border-sand rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-sage" />
              <span className="text-sm font-medium text-charcoal">
                {lang === 'de' ? 'Anbauort' : 'Growing Location'}
              </span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {strain.growing.indoor && (
                <span className="text-xs px-2 py-0.5 bg-sand/60 rounded-full text-charcoal">
                  Indoor
                </span>
              )}
              {strain.growing.outdoor && (
                <span className="text-xs px-2 py-0.5 bg-sand/60 rounded-full text-charcoal">
                  Outdoor
                </span>
              )}
            </div>
          </div>

          {/* Susceptibilities */}
          {strain.growing.susceptibilities.length > 0 && (
            <div className="bg-warm-white border border-sand rounded-lg p-4 space-y-2">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-terracotta" />
                <span className="text-sm font-medium text-charcoal">
                  {lang === 'de' ? 'Anfälligkeiten' : 'Susceptibilities'}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {strain.growing.susceptibilities.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2 py-0.5 bg-terracotta/10 text-terracotta rounded-full border border-terracotta/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* Similar Strains */}
      {similar.length > 0 && (
        <Section title={lang === 'de' ? 'Ähnliche Sorten' : 'Similar Strains'}>
          <div className="grid sm:grid-cols-3 gap-4">
            {similar.map((s) => {
              const sc = typeConfig[s.type];
              return (
                <Link
                  key={s.slug}
                  href={`/sortendatenbank/${s.slug}`}
                  className="block bg-warm-white border border-sand rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="font-heading text-deep-forest">{s.name}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${sc.badge}`}>
                      {sc.label[lang]}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs text-sage">
                    <span>THC {s.cannabinoids.thc}%</span>
                    <span>·</span>
                    <StarRating rating={s.rating} />
                    <span>{s.rating.toFixed(1)}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Section>
      )}

      {/* Final Disclaimer */}
      <div className="p-4 bg-sand/40 rounded-lg border border-sand flex gap-3">
        <AlertCircle className="w-5 h-5 text-sage shrink-0 mt-0.5" />
        <p className="text-xs text-sage leading-relaxed">
          {lang === 'de'
            ? 'Alle Angaben basieren auf wissenschaftlichen Daten und dienen ausschließlich zu Bildungs- und Informationszwecken. BlattWerk e.V. übernimmt keine Haftung für die Richtigkeit oder Vollständigkeit der Angaben. Cannabis nur legal und verantwortungsvoll konsumieren.'
            : 'All information is based on scientific data and is intended solely for educational and informational purposes. BlattWerk e.V. accepts no liability for the accuracy or completeness of the information. Only consume cannabis legally and responsibly.'}
        </p>
      </div>
    </div>
  );
}
