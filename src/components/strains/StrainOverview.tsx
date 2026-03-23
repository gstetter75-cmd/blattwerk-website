'use client';

import { useState, useMemo } from 'react';
import { useLocale } from 'next-intl';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Search, X, SlidersHorizontal, AlertCircle } from 'lucide-react';
import { strains, effectLabels, thcRanges, thcRangesMap } from '@/data/strains';
import type { Strain } from '@/data/strains';
import { StrainCard } from './StrainCard';
import { WQFPageHero } from '@/components/layout/WQFPageHero';
import { staggerContainer, fadeUp } from '@/lib/animations';

type SortKey = 'name-asc' | 'thc-desc' | 'rating-desc';

interface Filters {
  types: Set<string>;
  effects: Set<string>;
  thcRangeKeys: Set<string>;
}

const emptyFilters = (): Filters => ({
  types: new Set(),
  effects: new Set(),
  thcRangeKeys: new Set(),
});

const TYPE_OPTIONS = [
  { value: 'indica', label: { de: 'Indica', en: 'Indica' } },
  { value: 'sativa', label: { de: 'Sativa', en: 'Sativa' } },
  { value: 'hybrid', label: { de: 'Hybrid', en: 'Hybrid' } },
] as const;

const TOP_EFFECTS = ['relaxed', 'creative', 'euphoric', 'focused', 'energetic', 'sleepy'];

function filterStrains(list: Strain[], query: string, filters: Filters): Strain[] {
  const q = query.toLowerCase();
  return list.filter((s) => {
    if (q && !s.name.toLowerCase().includes(q) && !s.description_de.toLowerCase().includes(q)) return false;
    if (filters.types.size > 0 && !filters.types.has(s.type)) return false;
    if (filters.effects.size > 0) {
      const has = Array.from(filters.effects).some((e) => s.effects[e as keyof typeof s.effects] >= 55);
      if (!has) return false;
    }
    if (filters.thcRangeKeys.size > 0) {
      const thc = s.cannabinoids.thc;
      const inRange = Array.from(filters.thcRangeKeys).some((key) => {
        const r = thcRangesMap.get(key);
        return r ? thc >= r.min && thc <= r.max : false;
      });
      if (!inRange) return false;
    }
    return true;
  });
}

function sortStrains(list: Strain[], sort: SortKey): Strain[] {
  return [...list].sort((a, b) => {
    if (sort === 'thc-desc')    return b.cannabinoids.thc - a.cannabinoids.thc;
    if (sort === 'rating-desc') return b.rating - a.rating;
    return a.name.localeCompare(b.name);
  });
}

function toggle(set: Set<string>, val: string): Set<string> {
  const n = new Set(set);
  n.has(val) ? n.delete(val) : n.add(val);
  return n;
}

export function StrainOverview() {
  const locale = useLocale();
  const lang = locale === 'de' ? 'de' : 'en';
  const prefersReduced = useReducedMotion();

  const [query, setQuery]             = useState('');
  const [sort, setSort]               = useState<SortKey>('name-asc');
  const [filters, setFilters]         = useState<Filters>(emptyFilters);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const updateFilter = (key: keyof Filters, val: string) =>
    setFilters((prev) => ({ ...prev, [key]: toggle(prev[key], val) }));

  const resetFilters = () => setFilters(emptyFilters());

  const hasActiveFilters = filters.types.size > 0 || filters.effects.size > 0 || filters.thcRangeKeys.size > 0;
  const totalActive = filters.types.size + filters.effects.size + filters.thcRangeKeys.size;

  const results = useMemo(() => {
    const filtered = filterStrains(strains, query, filters);
    return sortStrains(filtered, sort);
  }, [query, filters, sort]);

  const sortOptions: { value: SortKey; label: string }[] = [
    { value: 'name-asc',    label: 'A–Z' },
    { value: 'thc-desc',    label: 'THC ↓' },
    { value: 'rating-desc', label: lang === 'de' ? 'Bewertung' : 'Rating' },
  ];

  return (
    <>
      <WQFPageHero
        label={lang === 'de' ? 'Sorten' : 'Strains'}
        title={lang === 'de' ? 'Sortendatenbank' : 'Strain Database'}
        subtitle={lang === 'de'
          ? `${strains.length} Sorten — wissenschaftlich dokumentiert.`
          : `${strains.length} strains — scientifically documented.`}
        accentColor="green"
      />

      <section className="py-10" style={{ background: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Search + controls */}
          <div className="flex gap-3 mb-8">
            {/* Search input — bottom border only */}
            <div className="relative flex-1 max-w-sm">
              <Search
                className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4"
                style={{ color: 'var(--text-muted)' }}
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={lang === 'de' ? 'Sorte suchen…' : 'Search strain…'}
                className="w-full pl-7 pr-7 py-2.5 bg-transparent text-sm focus:outline-none transition-colors"
                style={{
                  color: 'var(--text)',
                  borderBottom: '1px solid rgba(255,255,255,0.14)',
                }}
                onFocus={(e) => {
                  (e.currentTarget as HTMLInputElement).style.borderBottomColor = 'var(--accent)';
                }}
                onBlur={(e) => {
                  (e.currentTarget as HTMLInputElement).style.borderBottomColor = 'rgba(255,255,255,0.14)';
                }}
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort select */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="px-0 py-2.5 bg-transparent text-sm focus:outline-none cursor-pointer appearance-none"
              style={{
                color: 'var(--text-muted)',
                borderBottom: '1px solid rgba(255,255,255,0.14)',
                paddingRight: '1.5rem',
              }}
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value} style={{ background: '#0f0f0f' }}>
                  {o.label}
                </option>
              ))}
            </select>

            {/* Mobile filter toggle */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden flex items-center gap-2 px-3 py-2.5 text-sm transition-colors cursor-pointer"
              style={{
                color: hasActiveFilters ? 'var(--accent)' : 'var(--text-muted)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderLeftColor: hasActiveFilters ? 'rgba(34,197,94,0.4)' : 'rgba(255,255,255,0.06)',
              }}
            >
              <SlidersHorizontal className="w-4 h-4" />
              {hasActiveFilters && (
                <span
                  className="text-[10px] font-bold w-4 h-4 flex items-center justify-center"
                  style={{ color: 'var(--bg)', background: 'var(--accent)' }}
                >
                  {totalActive}
                </span>
              )}
            </button>
          </div>

          <div className="flex gap-0">
            {/* Desktop sidebar — flat, right border divider */}
            <aside
              className="hidden lg:block w-52 shrink-0 pr-8"
              style={{ borderRight: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="sticky top-24 space-y-7">

                {/* Header */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.22em]"
                    style={{ color: 'var(--text-faint)' }}
                  >
                    {lang === 'de' ? 'Filter' : 'Filters'}
                  </span>
                  {hasActiveFilters && (
                    <button
                      onClick={resetFilters}
                      className="text-[10px] font-bold uppercase tracking-[0.14em] flex items-center gap-1 cursor-pointer"
                      style={{ color: 'rgba(248,113,113,0.8)' }}
                    >
                      <X className="w-3 h-3" />
                      Reset
                    </button>
                  )}
                </div>

                {/* Type filter */}
                <FilterSection
                  label={lang === 'de' ? 'Typ' : 'Type'}
                  lang={lang}
                >
                  {TYPE_OPTIONS.map(({ value, label }) => (
                    <FilterCheckbox
                      key={value}
                      id={`type-${value}`}
                      checked={filters.types.has(value)}
                      onChange={() => updateFilter('types', value)}
                      label={label[lang]}
                    />
                  ))}
                </FilterSection>

                {/* THC filter */}
                <FilterSection label="THC" lang={lang}>
                  {thcRanges.map((r) => (
                    <FilterCheckbox
                      key={r.key}
                      id={`thc-${r.key}`}
                      checked={filters.thcRangeKeys.has(r.key)}
                      onChange={() => updateFilter('thcRangeKeys', r.key)}
                      label={r.label[lang]}
                    />
                  ))}
                </FilterSection>

                {/* Effects filter */}
                <FilterSection
                  label={lang === 'de' ? 'Wirkung' : 'Effects'}
                  lang={lang}
                >
                  {TOP_EFFECTS.map((e) => (
                    <FilterCheckbox
                      key={e}
                      id={`effect-${e}`}
                      checked={filters.effects.has(e)}
                      onChange={() => updateFilter('effects', e)}
                      label={effectLabels[e as keyof typeof effectLabels][lang]}
                    />
                  ))}
                </FilterSection>

              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0 lg:pl-8">

              {/* Result count */}
              <p
                className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
                style={{ color: 'var(--text-faint)' }}
              >
                {lang === 'de' ? `${results.length} Sorten` : `${results.length} strains`}
              </p>

              {/* Mobile sidebar drawer */}
              <AnimatePresence>
                {sidebarOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden mb-6 lg:hidden"
                  >
                    <div
                      className="p-5 space-y-6"
                      style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className="text-[10px] font-bold uppercase tracking-[0.22em]"
                          style={{ color: 'var(--text-faint)' }}
                        >
                          {lang === 'de' ? 'Filter' : 'Filters'}
                        </span>
                        {hasActiveFilters && (
                          <button
                            onClick={resetFilters}
                            className="text-[10px] font-bold uppercase tracking-[0.14em] flex items-center gap-1 cursor-pointer"
                            style={{ color: 'rgba(248,113,113,0.8)' }}
                          >
                            <X className="w-3 h-3" />
                            Reset
                          </button>
                        )}
                      </div>

                      <FilterSection label={lang === 'de' ? 'Typ' : 'Type'} lang={lang}>
                        {TYPE_OPTIONS.map(({ value, label }) => (
                          <FilterCheckbox
                            key={value}
                            id={`mob-type-${value}`}
                            checked={filters.types.has(value)}
                            onChange={() => updateFilter('types', value)}
                            label={label[lang]}
                          />
                        ))}
                      </FilterSection>

                      <FilterSection label="THC" lang={lang}>
                        {thcRanges.map((r) => (
                          <FilterCheckbox
                            key={r.key}
                            id={`mob-thc-${r.key}`}
                            checked={filters.thcRangeKeys.has(r.key)}
                            onChange={() => updateFilter('thcRangeKeys', r.key)}
                            label={r.label[lang]}
                          />
                        ))}
                      </FilterSection>

                      <FilterSection
                        label={lang === 'de' ? 'Wirkung' : 'Effects'}
                        lang={lang}
                      >
                        {TOP_EFFECTS.map((e) => (
                          <FilterCheckbox
                            key={e}
                            id={`mob-effect-${e}`}
                            checked={filters.effects.has(e)}
                            onChange={() => updateFilter('effects', e)}
                            label={effectLabels[e as keyof typeof effectLabels][lang]}
                          />
                        ))}
                      </FilterSection>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Grid or empty state */}
              {results.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <Search
                    className="w-8 h-8 mb-4"
                    style={{ color: 'var(--text-faint)' }}
                  />
                  <p
                    className="font-heading italic text-xl mb-2"
                    style={{ color: 'var(--text)' }}
                  >
                    {lang === 'de' ? 'Keine Ergebnisse' : 'No results found'}
                  </p>
                  <button
                    onClick={resetFilters}
                    className="mt-3 text-sm cursor-pointer underline"
                    style={{ color: 'var(--accent)' }}
                  >
                    {lang === 'de' ? 'Filter zurücksetzen' : 'Reset filters'}
                  </button>
                </div>
              ) : (
                <motion.div
                  key={`${query}-${sort}-${totalActive}`}
                  variants={prefersReduced ? {} : staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
                >
                  {results.map((strain) => (
                    <motion.div key={strain.slug} variants={prefersReduced ? {} : fadeUp}>
                      <StrainCard strain={strain} locale={locale} />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Disclaimer — minimal, no rounded box */}
          <div
            className="mt-14 flex gap-3 py-4"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <AlertCircle
              className="w-3.5 h-3.5 shrink-0 mt-0.5"
              style={{ color: 'var(--text-faint)' }}
            />
            <p
              className="text-xs leading-relaxed"
              style={{ color: 'var(--text-faint)' }}
            >
              {lang === 'de'
                ? 'Diese Informationen dienen ausschließlich zu Bildungszwecken und ersetzen keine medizinische Beratung. Cannabis nur für Vereinsmitglieder ab 21 Jahren.'
                : 'This information is for educational purposes only and does not replace medical advice. Cannabis only for club members aged 21 and over.'}
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

// ── Sub-components ──────────────────────────────────────────────────────────

interface FilterSectionProps {
  label: string;
  lang: string;
  children: React.ReactNode;
}

function FilterSection({ label, children }: FilterSectionProps) {
  return (
    <div>
      <p
        className="text-[9px] font-bold uppercase tracking-[0.25em] mb-3"
        style={{ color: 'var(--text-faint)' }}
      >
        {label}
      </p>
      <div className="space-y-2.5">{children}</div>
    </div>
  );
}

interface FilterCheckboxProps {
  id: string;
  checked: boolean;
  onChange: () => void;
  label: string;
}

function FilterCheckbox({ id, checked, onChange, label }: FilterCheckboxProps) {
  return (
    <label htmlFor={id} className="flex items-center gap-2.5 cursor-pointer group">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-3.5 h-3.5 cursor-pointer accent-[var(--accent)]"
        style={{
          background: 'var(--bg)',
          border: '1px solid rgba(255,255,255,0.14)',
        }}
      />
      <span
        className="text-sm transition-colors group-hover:text-[var(--text)]"
        style={{ color: checked ? 'var(--text)' : 'var(--text-muted)' }}
      >
        {label}
      </span>
    </label>
  );
}
