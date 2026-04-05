import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import {
  ArrowLeft,
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
  typeConfig,
  difficultyConfig,
} from '@/data/strains';
import type { Strain } from '@/data/strains';
import { StarRating } from './StarRating';
import { allArticles } from '@/data/knowledge';

interface StrainDetailProps {
  slug: string;
  locale: string;
}

type Lang = 'de' | 'en';

// ─── Sub-components ──────────────────────────────────────────────────────────

function ProgressBar({
  value,
  max = 100,
  colorClass = 'bg-accent',
}: {
  value: number;
  max?: number;
  colorClass?: string;
}) {
  const pct = Math.min(100, (value / max) * 100);
  return (
    <div className="h-1.5 bg-bg-elevated rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full transition-all ${colorClass}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="pt-8 border-t border-[var(--border)]">
      <h2 className="font-heading italic text-xl text-ink mb-5">{title}</h2>
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

  const similar = strains
    .filter((s) => s.type === strain.type && s.slug !== strain.slug)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  // Find related knowledge articles based on strain's terpenes, cannabinoids, and growing info
  const topTerpeneKeys = Object.entries(strain.terpenes)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 2)
    .map(([key]) => key.toLowerCase());

  const strainKeywords = [
    ...topTerpeneKeys,
    'thc', 'cbd',
    strain.cannabinoids.cbd >= 5 ? 'cbd' : '',
    strain.growing.difficulty === 'easy' ? 'indoor' : '',
    'anbau', 'growing', 'terpene', 'cannabinoid',
  ].filter(Boolean);

  const relatedArticles = allArticles
    .filter((article) => {
      const searchText = `${article.title_de} ${article.title_en} ${article.tags.join(' ')} ${article.category}`.toLowerCase();
      return strainKeywords.some((kw) => searchText.includes(kw));
    })
    .slice(0, 3);

  const sortedEffects = Object.entries(strain.effects)
    .sort(([, a], [, b]) => b - a) as [keyof typeof effectLabels, number][];

  const sortedTerpenes = Object.entries(strain.terpenes)
    .sort(([, a], [, b]) => b - a) as [keyof typeof terpeneLabels, number][];

  const cannabinoidEntries: { key: string; label: string; value: number; colorClass: string }[] = [
    { key: 'thc',  label: 'THC',  value: strain.cannabinoids.thc,  colorClass: 'bg-accent' },
    { key: 'cbd',  label: 'CBD',  value: strain.cannabinoids.cbd,  colorClass: 'bg-ink-muted/60' },
    { key: 'cbg',  label: 'CBG',  value: strain.cannabinoids.cbg,  colorClass: 'bg-gold-theme/60' },
    { key: 'cbc',  label: 'CBC',  value: strain.cannabinoids.cbc,  colorClass: 'bg-indigo-400/60' },
    { key: 'thcv', label: 'THCV', value: strain.cannabinoids.thcv, colorClass: 'bg-violet-400/60' },
  ];

  const sortedNegatives = Object.entries(strain.negatives)
    .sort(([, a], [, b]) => b - a) as [keyof typeof negativeLabels, number][];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">

      {/* Back link */}
      <Link
        href="/sortendatenbank"
        className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        {lang === 'de' ? 'Zurück zur Übersicht' : 'Back to overview'}
      </Link>

      {/* Header Card */}
      <div
        className="rounded-xl border border-[var(--border)] p-6 lg:p-8"
        style={{ background: 'var(--glass)', backdropFilter: 'blur(16px)' }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="font-heading italic text-3xl sm:text-4xl text-ink font-medium">
                {strain.name}
              </h1>
              <span className={`text-sm font-medium px-3 py-1 rounded-full ${config.badgeBordered}`}>
                {config.label[lang]}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <StarRating rating={strain.rating} size="md" />
              <span className="font-mono text-sm text-ink font-semibold">
                {strain.rating.toFixed(1)}
              </span>
              <span className="text-sm text-ink-muted">
                ({strain.review_count.toLocaleString()}{' '}
                {lang === 'de' ? 'Bewertungen' : 'reviews'})
              </span>
            </div>
          </div>

          {/* THC / CBD prominent */}
          <div className="flex gap-3 font-mono shrink-0">
            <div
              className="text-center rounded-lg px-5 py-4 border border-[var(--border)]"
              style={{ background: 'var(--bg-elevated)' }}
            >
              <p className="text-xs text-ink-muted mb-1">THC</p>
              <p className="text-2xl font-bold text-accent">{strain.cannabinoids.thc}%</p>
            </div>
            <div
              className="text-center rounded-lg px-5 py-4 border border-[var(--border)]"
              style={{ background: 'var(--bg-elevated)' }}
            >
              <p className="text-xs text-ink-muted mb-1">CBD</p>
              <p className="text-2xl font-bold text-ink">{strain.cannabinoids.cbd}%</p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-ink-muted leading-relaxed">{description}</p>
      </div>

      {/* Genetics */}
      <Section title={lang === 'de' ? 'Genetik / Stammbaum' : 'Genetics / Lineage'}>
        <div className="flex items-center justify-center gap-4 flex-wrap py-4">
          {[
            { role: lang === 'de' ? 'Elternteil 1' : 'Parent 1', name: strain.genetics.parent1 },
            null,
            { role: lang === 'de' ? 'Elternteil 2' : 'Parent 2', name: strain.genetics.parent2 },
          ].map((item, i) =>
            item === null ? (
              <span key={i} className="text-ink-faint text-2xl font-thin select-none">×</span>
            ) : (
              <div
                key={i}
                className="rounded-lg px-5 py-3 text-center border border-[var(--border)]"
                style={{ background: 'var(--glass)', backdropFilter: 'blur(8px)' }}
              >
                <p className="text-xs text-ink-muted mb-1">{item.role}</p>
                <p className="font-heading italic text-ink">{item.name}</p>
              </div>
            )
          )}
          <span className="hidden sm:block text-ink-faint text-xl">→</span>
          <div
            className="rounded-lg px-5 py-3 text-center border border-accent/30"
            style={{ background: 'rgba(34,197,94,0.08)' }}
          >
            <p className="text-xs text-accent/70 mb-1">{lang === 'de' ? 'Ergebnis' : 'Result'}</p>
            <p className="font-heading italic text-ink">{strain.name}</p>
          </div>
        </div>
      </Section>

      {/* Effects */}
      <Section title={lang === 'de' ? 'Wirkungsprofile' : 'Effect Profile'}>
        <div className="space-y-3.5">
          {sortedEffects.map(([key, value]) => (
            <div key={key} className="grid grid-cols-[140px_1fr_36px] items-center gap-3">
              <span className="text-sm text-ink-muted truncate">{effectLabels[key][lang]}</span>
              <ProgressBar
                value={value}
                colorClass={value >= 70 ? 'bg-accent' : value >= 40 ? 'bg-accent/50' : 'bg-accent/25'}
              />
              <span className="font-mono text-xs text-ink-muted text-right">{value}%</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Cannabinoid Profile */}
      <Section title={lang === 'de' ? 'Cannabinoidprofil' : 'Cannabinoid Profile'}>
        <div className="space-y-3.5">
          {cannabinoidEntries.map(({ key, label, value, colorClass }) => (
            <div key={key} className="grid grid-cols-[80px_1fr_60px] items-center gap-3">
              <span className="text-sm font-mono text-ink-muted">{label}</span>
              <ProgressBar value={value} max={35} colorClass={colorClass} />
              <span className="font-mono text-xs text-ink-muted text-right">{value}%</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Terpene Profile */}
      <Section title={lang === 'de' ? 'Terpenprofil' : 'Terpene Profile'}>
        <div className="space-y-3.5">
          {sortedTerpenes.map(([key, value]) => (
            <div key={key} className="grid grid-cols-[140px_1fr_60px] items-center gap-3">
              <span className="text-sm text-ink-muted">{terpeneLabels[key][lang]}</span>
              <ProgressBar value={value} max={0.5} colorClass="bg-gold-theme/70" />
              <span className="font-mono text-xs text-ink-muted text-right">
                {(value * 100).toFixed(0)}%
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Flavors */}
      <Section title={lang === 'de' ? 'Geschmack & Aroma' : 'Flavors & Aroma'}>
        <div className="flex flex-wrap gap-2">
          {strain.flavors.map((f) => (
            <span
              key={f}
              className="px-3 py-1.5 bg-bg-elevated border border-[var(--border)] rounded-full text-sm text-ink-muted"
            >
              {flavorLabels[f]?.[lang] ?? f}
            </span>
          ))}
        </div>
      </Section>

      {/* Negative Effects */}
      <Section title={lang === 'de' ? 'Mögliche Nebenwirkungen' : 'Possible Side Effects'}>
        <div className="space-y-3.5">
          {sortedNegatives.map(([key, value]) => (
            <div key={key} className="grid grid-cols-[160px_1fr_36px] items-center gap-3">
              <span className="text-sm text-ink-muted">{negativeLabels[key][lang]}</span>
              <ProgressBar
                value={value}
                colorClass={value >= 60 ? 'bg-red-500/70' : value >= 30 ? 'bg-amber-400/70' : 'bg-ink-muted/30'}
              />
              <span className="font-mono text-xs text-ink-muted text-right">{value}%</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Medical Uses */}
      <Section title={lang === 'de' ? 'Medizinische Anwendungsgebiete' : 'Medical Applications'}>
        <div className="flex flex-wrap gap-2 mb-4">
          {strain.medical.map((m) => (
            <span
              key={m}
              className="px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-sm text-accent/80"
            >
              {medicalLabels[m]?.[lang] ?? m}
            </span>
          ))}
        </div>
        <div className="flex gap-2.5 p-3.5 bg-bg-elevated rounded-lg border border-[var(--border)]">
          <AlertCircle className="w-4 h-4 text-ink-muted shrink-0 mt-0.5" />
          <p className="text-xs text-ink-muted leading-relaxed">
            {lang === 'de'
              ? 'Diese Angaben dienen nur zur Information und ersetzen keine ärztliche Beratung.'
              : 'This information is for informational purposes only and does not replace medical advice.'}
          </p>
        </div>
      </Section>

      {/* Growing Info */}
      <Section title={lang === 'de' ? 'Anbauinformationen' : 'Growing Information'}>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: Sprout,
              title: lang === 'de' ? 'Schwierigkeit' : 'Difficulty',
              content: (
                <span className={`inline-block text-sm font-medium px-2.5 py-0.5 rounded-full ${difficultyConfig[strain.growing.difficulty].badge}`}>
                  {difficultyConfig[strain.growing.difficulty].label[lang]}
                </span>
              ),
            },
            {
              icon: Sun,
              title: lang === 'de' ? 'Blütezeit' : 'Flowering Time',
              content: (
                <p className="font-mono text-ink font-semibold">
                  {strain.growing.flowering_days_min}–{strain.growing.flowering_days_max}{' '}
                  {lang === 'de' ? 'Tage' : 'days'}
                </p>
              ),
            },
            {
              icon: CloudRain,
              title: lang === 'de' ? 'Ertrag' : 'Yield',
              content: (
                <div className="space-y-1 font-mono text-sm">
                  <p><span className="text-ink-muted">Indoor:</span>{' '}<span className="text-ink font-semibold">{strain.growing.yield_indoor} g/m²</span></p>
                  <p><span className="text-ink-muted">Outdoor:</span>{' '}<span className="text-ink font-semibold">{strain.growing.yield_outdoor} g/{lang === 'de' ? 'Pflanze' : 'plant'}</span></p>
                </div>
              ),
            },
            {
              icon: Ruler,
              title: lang === 'de' ? 'Wuchshöhe' : 'Plant Height',
              content: (
                <p className="font-mono text-ink font-semibold">
                  {strain.growing.height_cm_min}–{strain.growing.height_cm_max} cm
                </p>
              ),
            },
            {
              icon: Thermometer,
              title: lang === 'de' ? 'Anbauort' : 'Growing Location',
              content: (
                <div className="flex gap-2 flex-wrap">
                  {strain.growing.indoor && (
                    <span className="text-xs px-2 py-0.5 bg-bg-elevated border border-[var(--border)] rounded-full text-ink-muted">Indoor</span>
                  )}
                  {strain.growing.outdoor && (
                    <span className="text-xs px-2 py-0.5 bg-bg-elevated border border-[var(--border)] rounded-full text-ink-muted">Outdoor</span>
                  )}
                </div>
              ),
            },
            ...(strain.growing.susceptibilities.length > 0 ? [{
              icon: AlertCircle,
              title: lang === 'de' ? 'Anfälligkeiten' : 'Susceptibilities',
              content: (
                <div className="flex flex-wrap gap-2">
                  {strain.growing.susceptibilities.map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 bg-red-500/10 text-red-400 rounded-full border border-red-500/20">{s}</span>
                  ))}
                </div>
              ),
            }] : []),
          ].map(({ icon: Icon, title, content }) => (
            <div
              key={title}
              className="rounded-lg p-4 border border-[var(--border)] space-y-2"
              style={{ background: 'var(--glass)', backdropFilter: 'blur(8px)' }}
            >
              <div className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-ink-muted" />
                <span className="text-sm font-medium text-ink-muted">{title}</span>
              </div>
              {content}
            </div>
          ))}
        </div>
      </Section>

      {/* Related Knowledge Articles */}
      {relatedArticles.length > 0 && (
        <Section title={lang === 'de' ? 'Weiterführende Artikel' : 'Related Articles'}>
          <div className="grid sm:grid-cols-3 gap-4">
            {relatedArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/wissensdatenbank/${article.category}/${article.slug}`}
                className="block rounded-lg p-4 border border-[var(--border)] hover:border-accent/30 transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'var(--glass)', backdropFilter: 'blur(8px)' }}
              >
                <span className="text-xs font-medium text-accent/70 mb-2 block">
                  {article.reading_time} min
                </span>
                <p className="font-heading text-sm text-ink leading-snug mb-1">
                  {lang === 'de' ? article.title_de : article.title_en}
                </p>
                <p className="text-xs text-ink-muted line-clamp-2">
                  {lang === 'de' ? article.summary_de : article.summary_en}
                </p>
              </Link>
            ))}
          </div>
        </Section>
      )}

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
                  className="block rounded-lg p-4 border border-[var(--border)] hover:border-accent/30 transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: 'var(--glass)', backdropFilter: 'blur(8px)' }}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="font-heading italic text-ink">{s.name}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${sc.badge}`}>
                      {sc.label[lang]}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
                    <span>THC {s.cannabinoids.thc}%</span>
                    <span className="text-ink-faint">·</span>
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
      <div className="flex gap-3 p-4 bg-bg-elevated rounded-lg border border-[var(--border)]">
        <AlertCircle className="w-4 h-4 text-ink-muted shrink-0 mt-0.5" />
        <p className="text-xs text-ink-muted leading-relaxed">
          {lang === 'de'
            ? 'Alle Angaben basieren auf wissenschaftlichen Daten und dienen ausschließlich zu Bildungs- und Informationszwecken. BlattWerk e.V. übernimmt keine Haftung für die Richtigkeit oder Vollständigkeit der Angaben. Cannabis nur legal und verantwortungsvoll konsumieren.'
            : 'All information is based on scientific data and is intended solely for educational and informational purposes. BlattWerk e.V. accepts no liability for the accuracy or completeness of the information. Only consume cannabis legally and responsibly.'}
        </p>
      </div>
    </div>
  );
}
