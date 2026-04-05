'use client';

import { useState, useMemo } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ArrowLeft, X, ChevronDown, Plus } from 'lucide-react';
import {
  strains,
  effectLabels,
  negativeLabels,
  terpeneLabels,
  flavorLabels,
  medicalLabels,
  typeConfig,
  difficultyConfig,
} from '@/data/strains';
import type { Strain } from '@/data/strains';
import { StarRating } from './StarRating';

type Lang = 'de' | 'en';

const MAX_COMPARE = 3;

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
        className={`h-full rounded-full ${colorClass}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

function StrainSelector({
  selected,
  onSelect,
  onRemove,
  excludeSlugs,
  lang,
}: {
  selected: Strain | null;
  onSelect: (slug: string) => void;
  onRemove: () => void;
  excludeSlugs: Set<string>;
  lang: Lang;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return strains
      .filter((s) => !excludeSlugs.has(s.slug))
      .filter((s) => !q || s.name.toLowerCase().includes(q))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [query, excludeSlugs]);

  if (selected) {
    const config = typeConfig[selected.type];
    return (
      <div
        className="rounded-xl border border-[var(--border)] p-4 relative"
        style={{ background: 'var(--glass)', backdropFilter: 'blur(12px)' }}
      >
        <button
          onClick={onRemove}
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-bg-elevated transition-colors cursor-pointer"
        >
          <X className="w-4 h-4 text-ink-faint" />
        </button>
        <h3 className="font-heading italic text-lg text-ink mb-1">{selected.name}</h3>
        <span className={`inline-block text-xs px-2 py-0.5 rounded-full ${config.badge}`}>
          {config.label[lang]}
        </span>
        <div className="flex items-center gap-3 mt-3 font-mono text-sm">
          <span>THC <span className="font-semibold text-accent">{selected.cannabinoids.thc}%</span></span>
          <span className="text-ink-faint">&middot;</span>
          <span>CBD <span className="font-semibold">{selected.cannabinoids.cbd}%</span></span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <StarRating rating={selected.rating} />
          <span className="text-xs font-mono text-ink-muted">{selected.rating.toFixed(1)}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-full rounded-xl border-2 border-dashed border-[var(--border)] hover:border-accent/40 p-8 flex flex-col items-center justify-center gap-2 transition-colors cursor-pointer"
      >
        <Plus className="w-6 h-6 text-ink-faint" />
        <span className="text-sm text-ink-muted">
          {lang === 'de' ? 'Sorte auswählen' : 'Select strain'}
        </span>
      </button>

      {open && (
        <div
          className="absolute top-full left-0 right-0 mt-2 z-50 rounded-xl border border-[var(--border)] shadow-xl max-h-80 overflow-hidden flex flex-col"
          style={{ background: 'var(--bg-elevated)' }}
        >
          <div className="p-3 border-b border-[var(--border)]">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={lang === 'de' ? 'Suchen…' : 'Search…'}
              className="w-full px-3 py-2 bg-bg border border-[var(--border)] rounded-lg text-sm focus:outline-none focus:border-accent"
              autoFocus
            />
          </div>
          <div className="overflow-y-auto flex-1">
            {filtered.length === 0 ? (
              <p className="p-4 text-sm text-ink-muted text-center">
                {lang === 'de' ? 'Keine Treffer' : 'No matches'}
              </p>
            ) : (
              filtered.map((s) => {
                const c = typeConfig[s.type];
                return (
                  <button
                    key={s.slug}
                    onClick={() => {
                      onSelect(s.slug);
                      setOpen(false);
                      setQuery('');
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-bg transition-colors flex items-center justify-between gap-3 cursor-pointer"
                  >
                    <div className="min-w-0">
                      <span className="text-sm font-heading italic text-ink">{s.name}</span>
                      <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full ${c.badge}`}>
                        {c.label[lang]}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-ink-faint shrink-0">
                      THC {s.cannabinoids.thc}%
                    </span>
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Comparison sections ─────────────────────────────────────────────────

function CompareRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-4" style={{ gridTemplateColumns: `160px repeat(${MAX_COMPARE}, 1fr)` }}>
      <span className="text-sm text-ink-muted self-center">{label}</span>
      {children}
    </div>
  );
}

function CompareSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pt-6 border-t border-[var(--border)]">
      <h2 className="font-heading italic text-xl text-ink mb-5">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────

export function StrainCompare() {
  const locale = useLocale();
  const lang: Lang = locale === 'de' ? 'de' : 'en';

  const [selectedSlugs, setSelectedSlugs] = useState<(string | null)[]>([null, null, null]);

  const selected = selectedSlugs.map((slug) =>
    slug ? strains.find((s) => s.slug === slug) ?? null : null,
  );

  const activeSlugs = new Set(selectedSlugs.filter(Boolean) as string[]);
  const activeStrains = selected.filter(Boolean) as Strain[];
  const hasComparison = activeStrains.length >= 2;

  const handleSelect = (index: number, slug: string) => {
    setSelectedSlugs((prev) => {
      const next = [...prev];
      next[index] = slug;
      return next;
    });
  };

  const handleRemove = (index: number) => {
    setSelectedSlugs((prev) => {
      const next = [...prev];
      next[index] = null;
      return next;
    });
  };

  const effectKeys = Object.keys(effectLabels) as (keyof typeof effectLabels)[];
  const terpeneKeys = Object.keys(terpeneLabels) as (keyof typeof terpeneLabels)[];
  const negativeKeys = Object.keys(negativeLabels) as (keyof typeof negativeLabels)[];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Link
        href="/sortendatenbank"
        className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        {lang === 'de' ? 'Zurück zur Übersicht' : 'Back to overview'}
      </Link>

      <div>
        <h1 className="font-heading font-bold text-3xl lg:text-4xl mb-3">
          {lang === 'de' ? 'Sortenvergleich' : 'Strain Comparison'}
        </h1>
        <p className="text-ink-muted">
          {lang === 'de'
            ? 'Wähle bis zu 3 Sorten aus, um sie direkt nebeneinander zu vergleichen.'
            : 'Select up to 3 strains to compare them side by side.'}
        </p>
      </div>

      {/* Strain selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {selectedSlugs.map((slug, i) => (
          <StrainSelector
            key={i}
            selected={selected[i]}
            onSelect={(s) => handleSelect(i, s)}
            onRemove={() => handleRemove(i)}
            excludeSlugs={activeSlugs}
            lang={lang}
          />
        ))}
      </div>

      {/* Comparison tables */}
      {hasComparison && (
        <div className="space-y-8 overflow-x-auto">

          {/* Cannabinoids */}
          <CompareSection title={lang === 'de' ? 'Cannabinoide' : 'Cannabinoids'}>
            {(['thc', 'cbd', 'cbg', 'cbc', 'thcv'] as const).map((key) => (
              <CompareRow key={key} label={key.toUpperCase()}>
                {selected.map((s, i) => (
                  <div key={i} className="space-y-1">
                    {s ? (
                      <>
                        <ProgressBar
                          value={s.cannabinoids[key]}
                          max={35}
                          colorClass={key === 'thc' ? 'bg-accent' : 'bg-ink-muted/60'}
                        />
                        <span className="text-xs font-mono text-ink-muted">{s.cannabinoids[key]}%</span>
                      </>
                    ) : (
                      <span className="text-xs text-ink-faint">—</span>
                    )}
                  </div>
                ))}
              </CompareRow>
            ))}
          </CompareSection>

          {/* Effects */}
          <CompareSection title={lang === 'de' ? 'Wirkung' : 'Effects'}>
            {effectKeys.map((key) => (
              <CompareRow key={key} label={effectLabels[key][lang]}>
                {selected.map((s, i) => (
                  <div key={i} className="space-y-1">
                    {s ? (
                      <>
                        <ProgressBar
                          value={s.effects[key]}
                          colorClass={s.effects[key] >= 70 ? 'bg-accent' : s.effects[key] >= 40 ? 'bg-accent/50' : 'bg-accent/25'}
                        />
                        <span className="text-xs font-mono text-ink-muted">{s.effects[key]}%</span>
                      </>
                    ) : (
                      <span className="text-xs text-ink-faint">—</span>
                    )}
                  </div>
                ))}
              </CompareRow>
            ))}
          </CompareSection>

          {/* Terpenes */}
          <CompareSection title={lang === 'de' ? 'Terpenprofil' : 'Terpene Profile'}>
            {terpeneKeys.map((key) => (
              <CompareRow key={key} label={terpeneLabels[key][lang]}>
                {selected.map((s, i) => (
                  <div key={i} className="space-y-1">
                    {s ? (
                      <>
                        <ProgressBar value={s.terpenes[key]} max={0.5} colorClass="bg-gold-theme/70" />
                        <span className="text-xs font-mono text-ink-muted">{(s.terpenes[key] * 100).toFixed(0)}%</span>
                      </>
                    ) : (
                      <span className="text-xs text-ink-faint">—</span>
                    )}
                  </div>
                ))}
              </CompareRow>
            ))}
          </CompareSection>

          {/* Negatives */}
          <CompareSection title={lang === 'de' ? 'Mögliche Nebenwirkungen' : 'Possible Side Effects'}>
            {negativeKeys.map((key) => (
              <CompareRow key={key} label={negativeLabels[key][lang]}>
                {selected.map((s, i) => (
                  <div key={i} className="space-y-1">
                    {s ? (
                      <>
                        <ProgressBar
                          value={s.negatives[key]}
                          colorClass={s.negatives[key] >= 60 ? 'bg-red-500/70' : s.negatives[key] >= 30 ? 'bg-amber-400/70' : 'bg-ink-muted/30'}
                        />
                        <span className="text-xs font-mono text-ink-muted">{s.negatives[key]}%</span>
                      </>
                    ) : (
                      <span className="text-xs text-ink-faint">—</span>
                    )}
                  </div>
                ))}
              </CompareRow>
            ))}
          </CompareSection>

          {/* Flavors */}
          <CompareSection title={lang === 'de' ? 'Geschmack & Aroma' : 'Flavors & Aroma'}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {selected.map((s, i) => (
                <div key={i}>
                  {s ? (
                    <div className="flex flex-wrap gap-1.5">
                      {s.flavors.map((f) => (
                        <span
                          key={f}
                          className="px-2.5 py-1 bg-bg-elevated border border-[var(--border)] rounded-full text-xs text-ink-muted"
                        >
                          {flavorLabels[f]?.[lang] ?? f}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-xs text-ink-faint">—</span>
                  )}
                </div>
              ))}
            </div>
          </CompareSection>

          {/* Medical */}
          <CompareSection title={lang === 'de' ? 'Medizinische Anwendung' : 'Medical Uses'}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {selected.map((s, i) => (
                <div key={i}>
                  {s ? (
                    <div className="flex flex-wrap gap-1.5">
                      {s.medical.map((m) => (
                        <span
                          key={m}
                          className="px-2.5 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs text-accent/80"
                        >
                          {medicalLabels[m]?.[lang] ?? m}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-xs text-ink-faint">—</span>
                  )}
                </div>
              ))}
            </div>
          </CompareSection>

          {/* Growing info */}
          <CompareSection title={lang === 'de' ? 'Anbauinformationen' : 'Growing Information'}>
            <CompareRow label={lang === 'de' ? 'Schwierigkeit' : 'Difficulty'}>
              {selected.map((s, i) => (
                <div key={i}>
                  {s ? (
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${difficultyConfig[s.growing.difficulty].badge}`}>
                      {difficultyConfig[s.growing.difficulty].label[lang]}
                    </span>
                  ) : (
                    <span className="text-xs text-ink-faint">—</span>
                  )}
                </div>
              ))}
            </CompareRow>
            <CompareRow label={lang === 'de' ? 'Blütezeit' : 'Flowering'}>
              {selected.map((s, i) => (
                <div key={i}>
                  {s ? (
                    <span className="text-sm font-mono text-ink">
                      {s.growing.flowering_days_min}–{s.growing.flowering_days_max} {lang === 'de' ? 'Tage' : 'days'}
                    </span>
                  ) : (
                    <span className="text-xs text-ink-faint">—</span>
                  )}
                </div>
              ))}
            </CompareRow>
            <CompareRow label={lang === 'de' ? 'Ertrag Indoor' : 'Yield Indoor'}>
              {selected.map((s, i) => (
                <div key={i}>
                  {s ? (
                    <span className="text-sm font-mono text-ink">{s.growing.yield_indoor} g/m²</span>
                  ) : (
                    <span className="text-xs text-ink-faint">—</span>
                  )}
                </div>
              ))}
            </CompareRow>
            <CompareRow label={lang === 'de' ? 'Wuchshöhe' : 'Height'}>
              {selected.map((s, i) => (
                <div key={i}>
                  {s ? (
                    <span className="text-sm font-mono text-ink">{s.growing.height_cm_min}–{s.growing.height_cm_max} cm</span>
                  ) : (
                    <span className="text-xs text-ink-faint">—</span>
                  )}
                </div>
              ))}
            </CompareRow>
          </CompareSection>
        </div>
      )}

      {!hasComparison && activeStrains.length > 0 && (
        <p className="text-center text-ink-muted py-8">
          {lang === 'de'
            ? 'Wähle mindestens eine weitere Sorte zum Vergleichen aus.'
            : 'Select at least one more strain to compare.'}
        </p>
      )}
    </div>
  );
}
