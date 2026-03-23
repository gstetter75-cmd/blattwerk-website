'use client';

import { useState, useMemo } from 'react';
import { useLocale } from 'next-intl';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Search, SlidersHorizontal, X, AlertCircle } from 'lucide-react';
import {
  strains,
  effectLabels,
  flavorLabels,
  terpeneLabels,
  thcRanges,
  thcRangesMap,
} from '@/data/strains';
import type { Strain } from '@/data/strains';
import { StrainCard } from './StrainCard';
import { StrainCardSkeleton } from './StrainCardSkeleton';
import { staggerContainer, fadeUp, reducedFadeIn } from '@/lib/animations';
import { Z } from '@/lib/z-index';

type SortKey = 'name-asc' | 'name-desc' | 'thc-desc' | 'rating-desc';

interface Filters {
  types: Set<string>;
  effects: Set<string>;
  thcRangeKeys: Set<string>;
  terpenes: Set<string>;
  flavors: Set<string>;
}

const emptyFilters = (): Filters => ({
  types: new Set(),
  effects: new Set(),
  thcRangeKeys: new Set(),
  terpenes: new Set(),
  flavors: new Set(),
});

const TYPE_OPTIONS = [
  { value: 'indica', label: { de: 'Indica', en: 'Indica' } },
  { value: 'sativa', label: { de: 'Sativa', en: 'Sativa' } },
  { value: 'hybrid', label: { de: 'Hybrid', en: 'Hybrid' } },
] as const;

function toggleSetItem<T>(set: Set<T>, item: T): Set<T> {
  const next = new Set(set);
  if (next.has(item)) {
    next.delete(item);
  } else {
    next.add(item);
  }
  return next;
}

function filterStrains(strainList: Strain[], query: string, filters: Filters): Strain[] {
  const lowerQuery = query.toLowerCase();

  return strainList.filter((s) => {
    if (query) {
      const matches =
        s.name.toLowerCase().includes(lowerQuery) ||
        s.description_de.toLowerCase().includes(lowerQuery) ||
        s.description_en.toLowerCase().includes(lowerQuery) ||
        s.flavors.some((f) => f.toLowerCase().includes(lowerQuery)) ||
        s.medical.some((m) => m.toLowerCase().includes(lowerQuery));
      if (!matches) return false;
    }

    if (filters.types.size > 0 && !filters.types.has(s.type)) return false;

    if (filters.effects.size > 0) {
      const hasEffect = Array.from(filters.effects).some(
        (e) => s.effects[e as keyof typeof s.effects] >= 50
      );
      if (!hasEffect) return false;
    }

    if (filters.thcRangeKeys.size > 0) {
      const thc = s.cannabinoids.thc;
      const inRange = Array.from(filters.thcRangeKeys).some((key) => {
        const range = thcRangesMap.get(key);
        return range ? thc >= range.min && thc <= range.max : false;
      });
      if (!inRange) return false;
    }

    if (filters.terpenes.size > 0) {
      const hasTerpene = Array.from(filters.terpenes).some(
        (t) => s.terpenes[t as keyof typeof s.terpenes] >= 0.1
      );
      if (!hasTerpene) return false;
    }

    if (filters.flavors.size > 0) {
      const hasFlavor = Array.from(filters.flavors).some((f) => s.flavors.includes(f));
      if (!hasFlavor) return false;
    }

    return true;
  });
}

function sortStrains(strainList: Strain[], sort: SortKey): Strain[] {
  return [...strainList].sort((a, b) => {
    switch (sort) {
      case 'name-asc':    return a.name.localeCompare(b.name);
      case 'name-desc':   return b.name.localeCompare(a.name);
      case 'thc-desc':    return b.cannabinoids.thc - a.cannabinoids.thc;
      case 'rating-desc': return b.rating - a.rating;
      default:            return 0;
    }
  });
}

interface CheckboxGroupProps {
  title: string;
  items: { value: string; label: string }[];
  selected: Set<string>;
  onChange: (value: string) => void;
}

function CheckboxGroup({ title, items, selected, onChange }: CheckboxGroupProps) {
  return (
    <div>
      <p className="text-xs font-semibold text-ink-muted uppercase tracking-wider mb-3">
        {title}
      </p>
      <div className="space-y-2">
        {items.map(({ value, label }) => (
          <label key={value} className="flex items-center gap-2.5 cursor-pointer group">
            <input
              type="checkbox"
              checked={selected.has(value)}
              onChange={() => onChange(value)}
              className="w-4 h-4 rounded border-[var(--border)] accent-accent cursor-pointer bg-bg-elevated"
            />
            <span className="text-sm text-ink-muted group-hover:text-ink transition-colors">
              {label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

interface SidebarContentProps {
  lang: 'de' | 'en';
  filters: Filters;
  hasActiveFilters: boolean;
  filterItems: ReturnType<typeof buildFilterItems>;
  onReset: () => void;
  onUpdate: (key: keyof Filters, value: string) => void;
}

function buildFilterItems(lang: 'de' | 'en') {
  const topFlavors = ['earthy', 'citrus', 'berry', 'sweet', 'pine', 'floral', 'tropical', 'lemon', 'blueberry', 'mango'];
  return {
    effects:  Object.entries(effectLabels).map(([key, labels]) => ({ value: key, label: labels[lang] })),
    terpenes: Object.entries(terpeneLabels).map(([key, labels]) => ({ value: key, label: labels[lang] })),
    flavors:  topFlavors.map((key) => ({ value: key, label: flavorLabels[key]?.[lang] ?? key })),
    thc:      thcRanges.map((r) => ({ value: r.key, label: r.label[lang] })),
    types:    TYPE_OPTIONS.map((t) => ({ value: t.value, label: t.label[lang] })),
  };
}

function SidebarContent({ lang, filters, hasActiveFilters, filterItems, onReset, onUpdate }: SidebarContentProps) {
  return (
    <aside className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-heading italic text-lg text-ink">
          {lang === 'de' ? 'Filter' : 'Filters'}
        </h2>
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 transition-colors cursor-pointer"
          >
            <X className="w-3 h-3" />
            {lang === 'de' ? 'Zurücksetzen' : 'Reset'}
          </button>
        )}
      </div>

      <CheckboxGroup title={lang === 'de' ? 'Typ' : 'Type'} items={filterItems.types} selected={filters.types} onChange={(v) => onUpdate('types', v)} />
      <CheckboxGroup title="THC" items={filterItems.thc} selected={filters.thcRangeKeys} onChange={(v) => onUpdate('thcRangeKeys', v)} />
      <CheckboxGroup title={lang === 'de' ? 'Wirkung' : 'Effects'} items={filterItems.effects} selected={filters.effects} onChange={(v) => onUpdate('effects', v)} />
      <CheckboxGroup title={lang === 'de' ? 'Terpene' : 'Terpenes'} items={filterItems.terpenes} selected={filters.terpenes} onChange={(v) => onUpdate('terpenes', v)} />
      <CheckboxGroup title={lang === 'de' ? 'Geschmack' : 'Flavors'} items={filterItems.flavors} selected={filters.flavors} onChange={(v) => onUpdate('flavors', v)} />
    </aside>
  );
}

export function StrainOverview() {
  const locale = useLocale();
  const lang = locale === 'de' ? 'de' : 'en';
  const prefersReduced = useReducedMotion();

  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<SortKey>('name-asc');
  const [filters, setFilters] = useState<Filters>(emptyFilters);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sortOptions: { value: SortKey; label: string }[] = [
    { value: 'name-asc',    label: 'A–Z' },
    { value: 'name-desc',   label: 'Z–A' },
    { value: 'thc-desc',    label: lang === 'de' ? 'THC (hoch→niedrig)' : 'THC (high→low)' },
    { value: 'rating-desc', label: lang === 'de' ? 'Bewertung (beste zuerst)' : 'Rating (best first)' },
  ];

  const updateFilters = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: toggleSetItem(prev[key], value) }));
  };

  const hasActiveFilters =
    filters.types.size > 0 ||
    filters.effects.size > 0 ||
    filters.thcRangeKeys.size > 0 ||
    filters.terpenes.size > 0 ||
    filters.flavors.size > 0;

  const resetFilters = () => setFilters(emptyFilters());

  const results = useMemo(() => {
    const filtered = filterStrains(strains, query, filters);
    return sortStrains(filtered, sort);
  }, [query, filters, sort]);

  const filterItems = useMemo(() => buildFilterItems(lang), [lang]);

  const totalActive =
    filters.types.size + filters.effects.size + filters.thcRangeKeys.size +
    filters.terpenes.size + filters.flavors.size;

  const cardVariants = prefersReduced ? reducedFadeIn : fadeUp;
  const containerVariants = prefersReduced ? {} : staggerContainer;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page Header */}
      <div className="mb-10">
        <h1
          className="font-heading italic font-medium text-ink mb-2"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          {lang === 'de' ? 'Sortendatenbank' : 'Strain Database'}
        </h1>
        <p className="text-ink-muted text-lg">
          {lang === 'de'
            ? `${strains.length} Sorten in unserer Datenbank — informativ und wissenschaftlich dokumentiert.`
            : `${strains.length} strains in our database — documented informatively and scientifically.`}
        </p>
      </div>

      {/* Search + Sort bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={lang === 'de' ? 'Sorte suchen…' : 'Search strain…'}
            className="w-full pl-9 pr-4 py-2.5 border border-[var(--border)] rounded-md bg-bg-elevated text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 text-sm transition-colors"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted hover:text-ink transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          className="px-3 py-2.5 border border-[var(--border)] rounded-md bg-bg-elevated text-ink text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 cursor-pointer"
        >
          {sortOptions.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>

        {/* Mobile filter toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden flex items-center gap-2 px-4 py-2.5 border border-[var(--border)] rounded-md bg-bg-elevated text-ink text-sm hover:bg-bg-elevated/80 transition-colors cursor-pointer"
        >
          <SlidersHorizontal className="w-4 h-4" />
          {lang === 'de' ? 'Filter' : 'Filters'}
          {hasActiveFilters && (
            <span className="ml-auto bg-accent text-void text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
              {totalActive}
            </span>
          )}
        </button>
      </div>

      <div className="flex gap-8">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-56 shrink-0">
          <div
            className="sticky top-24 rounded-lg border border-[var(--border)] p-5"
            style={{ background: 'var(--glass)', backdropFilter: 'blur(12px)' }}
          >
            <SidebarContent
              lang={lang}
              filters={filters}
              hasActiveFilters={hasActiveFilters}
              filterItems={filterItems}
              onReset={resetFilters}
              onUpdate={updateFilters}
            />
          </div>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden fixed inset-0 bg-bg/60 backdrop-blur-sm"
                style={{ zIndex: Z.overlay }}
                onClick={() => setSidebarOpen(false)}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="lg:hidden fixed top-0 right-0 h-full w-72 max-w-[90vw] border-l border-[var(--border)] overflow-y-auto p-5"
                style={{ zIndex: Z.overlay + 1, background: 'var(--bg-surface)', backdropFilter: 'blur(20px)' }}
              >
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="absolute top-4 right-4 text-ink-muted hover:text-ink transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <SidebarContent
                  lang={lang}
                  filters={filters}
                  hasActiveFilters={hasActiveFilters}
                  filterItems={filterItems}
                  onReset={resetFilters}
                  onUpdate={updateFilters}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Grid */}
        <div className="flex-1 min-w-0">
          {results.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Search className="w-12 h-12 text-ink-faint mb-4" />
              <p className="font-heading italic text-xl text-ink mb-2">
                {lang === 'de' ? 'Keine Ergebnisse' : 'No results found'}
              </p>
              <p className="text-ink-muted text-sm">
                {lang === 'de'
                  ? 'Versuche andere Suchbegriffe oder Filter.'
                  : 'Try different search terms or filters.'}
              </p>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="mt-4 text-sm text-accent hover:text-accent-soft underline cursor-pointer"
                >
                  {lang === 'de' ? 'Filter zurücksetzen' : 'Reset filters'}
                </button>
              )}
            </div>
          ) : (
            <>
              <p className="text-sm text-ink-muted mb-5">
                {lang === 'de' ? `${results.length} Sorten gefunden` : `${results.length} strains found`}
              </p>
              <motion.div
                key={`${query}-${sort}-${JSON.stringify(Array.from(filters.types))}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
              >
                {results.map((strain) => (
                  <motion.div key={strain.slug} variants={cardVariants}>
                    <StrainCard strain={strain} locale={locale} />
                  </motion.div>
                ))}
              </motion.div>
            </>
          )}
        </div>
      </div>

      {/* Medical Disclaimer */}
      <div className="mt-12 flex gap-3 p-4 bg-bg-elevated rounded-lg border border-[var(--border)]">
        <AlertCircle className="w-4 h-4 text-ink-muted shrink-0 mt-0.5" />
        <p className="text-xs text-ink-muted leading-relaxed">
          {lang === 'de'
            ? 'Die Informationen in dieser Datenbank dienen ausschließlich zu Informations- und Bildungszwecken. Sie ersetzen keine medizinische Beratung. Konsumiere Cannabis stets verantwortungsvoll und im Einklang mit den geltenden Gesetzen.'
            : 'The information in this database is for informational and educational purposes only. It does not replace medical advice. Always consume cannabis responsibly and in accordance with applicable laws.'}
        </p>
      </div>
    </div>
  );
}
