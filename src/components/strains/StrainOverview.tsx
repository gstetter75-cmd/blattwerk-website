'use client';

import { useState, useMemo } from 'react';
import { useLocale } from 'next-intl';
import { Search, SlidersHorizontal, X, AlertCircle } from 'lucide-react';
import {
  strains,
  effectLabels,
  flavorLabels,
  terpeneLabels,
  thcRanges,
} from '@/data/strains';
import type { Strain } from '@/data/strains';
import { StrainCard } from './StrainCard';

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
    // Search
    if (query) {
      const matches =
        s.name.toLowerCase().includes(lowerQuery) ||
        s.description_de.toLowerCase().includes(lowerQuery) ||
        s.description_en.toLowerCase().includes(lowerQuery) ||
        s.flavors.some((f) => f.toLowerCase().includes(lowerQuery)) ||
        s.medical.some((m) => m.toLowerCase().includes(lowerQuery));
      if (!matches) return false;
    }

    // Type filter
    if (filters.types.size > 0 && !filters.types.has(s.type)) return false;

    // Effect filter
    if (filters.effects.size > 0) {
      const hasEffect = Array.from(filters.effects).some(
        (e) => s.effects[e as keyof typeof s.effects] >= 50
      );
      if (!hasEffect) return false;
    }

    // THC range filter
    if (filters.thcRangeKeys.size > 0) {
      const thc = s.cannabinoids.thc;
      const inRange = Array.from(filters.thcRangeKeys).some((key) => {
        const range = thcRanges.find((r) => r.key === key);
        return range ? thc >= range.min && thc <= range.max : false;
      });
      if (!inRange) return false;
    }

    // Terpene filter
    if (filters.terpenes.size > 0) {
      const hasTerpene = Array.from(filters.terpenes).some(
        (t) => s.terpenes[t as keyof typeof s.terpenes] >= 0.1
      );
      if (!hasTerpene) return false;
    }

    // Flavor filter
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
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      case 'thc-desc':
        return b.cannabinoids.thc - a.cannabinoids.thc;
      case 'rating-desc':
        return b.rating - a.rating;
      default:
        return 0;
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
      <p className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
        {title}
      </p>
      <div className="space-y-1.5">
        {items.map(({ value, label }) => (
          <label
            key={value}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <input
              type="checkbox"
              checked={selected.has(value)}
              onChange={() => onChange(value)}
              className="w-4 h-4 rounded border-sand text-deep-forest accent-deep-forest cursor-pointer"
            />
            <span className="text-sm text-charcoal group-hover:text-deep-forest transition-colors">
              {label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

export function StrainOverview() {
  const locale = useLocale();
  const lang = locale === 'de' ? 'de' : 'en';

  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<SortKey>('name-asc');
  const [filters, setFilters] = useState<Filters>(emptyFilters);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sortOptions: { value: SortKey; label: string }[] = [
    { value: 'name-asc', label: lang === 'de' ? 'A–Z' : 'A–Z' },
    { value: 'name-desc', label: lang === 'de' ? 'Z–A' : 'Z–A' },
    { value: 'thc-desc', label: lang === 'de' ? 'THC (hoch→niedrig)' : 'THC (high→low)' },
    {
      value: 'rating-desc',
      label: lang === 'de' ? 'Bewertung (beste zuerst)' : 'Rating (best first)',
    },
  ];

  const updateFilters = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: toggleSetItem(prev[key], value),
    }));
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

  const effectItems = Object.entries(effectLabels).map(([key, labels]) => ({
    value: key,
    label: labels[lang],
  }));

  const terpeneItems = Object.entries(terpeneLabels).map(([key, labels]) => ({
    value: key,
    label: labels[lang],
  }));

  const topFlavors = ['earthy', 'citrus', 'berry', 'sweet', 'pine', 'floral', 'tropical', 'lemon', 'blueberry', 'mango'];
  const flavorItems = topFlavors.map((key) => ({
    value: key,
    label: flavorLabels[key]?.[lang] ?? key,
  }));

  const thcItems = thcRanges.map((r) => ({
    value: r.key,
    label: r.label[lang],
  }));

  const typeItems = TYPE_OPTIONS.map((t) => ({
    value: t.value,
    label: t.label[lang],
  }));

  const Sidebar = () => (
    <aside className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-lg text-deep-forest">
          {lang === 'de' ? 'Filter' : 'Filters'}
        </h2>
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="text-xs text-terracotta hover:text-terracotta/70 flex items-center gap-1 transition-colors cursor-pointer"
          >
            <X className="w-3 h-3" />
            {lang === 'de' ? 'Zurücksetzen' : 'Reset'}
          </button>
        )}
      </div>

      <CheckboxGroup
        title={lang === 'de' ? 'Typ' : 'Type'}
        items={typeItems}
        selected={filters.types}
        onChange={(v) => updateFilters('types', v)}
      />

      <CheckboxGroup
        title="THC"
        items={thcItems}
        selected={filters.thcRangeKeys}
        onChange={(v) => updateFilters('thcRangeKeys', v)}
      />

      <CheckboxGroup
        title={lang === 'de' ? 'Wirkung' : 'Effects'}
        items={effectItems}
        selected={filters.effects}
        onChange={(v) => updateFilters('effects', v)}
      />

      <CheckboxGroup
        title={lang === 'de' ? 'Terpene' : 'Terpenes'}
        items={terpeneItems}
        selected={filters.terpenes}
        onChange={(v) => updateFilters('terpenes', v)}
      />

      <CheckboxGroup
        title={lang === 'de' ? 'Geschmack' : 'Flavors'}
        items={flavorItems}
        selected={filters.flavors}
        onChange={(v) => updateFilters('flavors', v)}
      />
    </aside>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="font-heading text-4xl text-deep-forest mb-2">
          {lang === 'de' ? 'Sortendatenbank' : 'Strain Database'}
        </h1>
        <p className="text-sage text-lg">
          {lang === 'de'
            ? `${strains.length} Sorten in unserer Datenbank — informativ und wissenschaftlich dokumentiert.`
            : `${strains.length} strains in our database — documented informatively and scientifically.`}
        </p>
      </div>

      {/* Search + Sort bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sage" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={lang === 'de' ? 'Sorte suchen…' : 'Search strain…'}
            className="w-full pl-9 pr-4 py-2.5 border border-sand rounded-lg bg-warm-white text-charcoal placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-deep-forest/30 focus:border-deep-forest/40 text-sm"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sage hover:text-charcoal transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          className="px-3 py-2.5 border border-sand rounded-lg bg-warm-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-deep-forest/30 cursor-pointer"
        >
          {sortOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>

        {/* Mobile filter toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden flex items-center gap-2 px-4 py-2.5 border border-sand rounded-lg bg-warm-white text-charcoal text-sm hover:bg-sand/30 transition-colors cursor-pointer"
        >
          <SlidersHorizontal className="w-4 h-4" />
          {lang === 'de' ? 'Filter' : 'Filters'}
          {hasActiveFilters && (
            <span className="ml-auto bg-deep-forest text-warm-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {filters.types.size +
                filters.effects.size +
                filters.thcRangeKeys.size +
                filters.terpenes.size +
                filters.flavors.size}
            </span>
          )}
        </button>
      </div>

      <div className="flex gap-8">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-24 bg-warm-white border border-sand rounded-lg p-5">
            <Sidebar />
          </div>
        </div>

        {/* Mobile Sidebar */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-40 flex">
            <div
              className="absolute inset-0 bg-charcoal/40"
              onClick={() => setSidebarOpen(false)}
            />
            <div className="relative ml-auto w-72 max-w-[90vw] bg-warm-white h-full overflow-y-auto p-5 shadow-xl">
              <button
                onClick={() => setSidebarOpen(false)}
                className="absolute top-4 right-4 text-sage hover:text-charcoal transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <Sidebar />
            </div>
          </div>
        )}

        {/* Grid */}
        <div className="flex-1 min-w-0">
          {results.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Search className="w-12 h-12 text-sand mb-4" />
              <p className="font-heading text-xl text-deep-forest mb-2">
                {lang === 'de' ? 'Keine Ergebnisse' : 'No results found'}
              </p>
              <p className="text-sage text-sm">
                {lang === 'de'
                  ? 'Versuche andere Suchbegriffe oder Filter.'
                  : 'Try different search terms or filters.'}
              </p>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="mt-4 text-sm text-amber hover:text-amber/70 underline cursor-pointer"
                >
                  {lang === 'de' ? 'Filter zurücksetzen' : 'Reset filters'}
                </button>
              )}
            </div>
          ) : (
            <>
              <p className="text-sm text-sage mb-4">
                {lang === 'de'
                  ? `${results.length} Sorten gefunden`
                  : `${results.length} strains found`}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {results.map((strain) => (
                  <StrainCard key={strain.slug} strain={strain} locale={locale} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Medical Disclaimer */}
      <div className="mt-12 p-4 bg-sand/40 rounded-lg border border-sand flex gap-3">
        <AlertCircle className="w-5 h-5 text-sage shrink-0 mt-0.5" />
        <p className="text-xs text-sage leading-relaxed">
          {lang === 'de'
            ? 'Die Informationen in dieser Datenbank dienen ausschließlich zu Informations- und Bildungszwecken. Sie ersetzen keine medizinische Beratung. Konsumiere Cannabis stets verantwortungsvoll und im Einklang mit den geltenden Gesetzen.'
            : 'The information in this database is for informational and educational purposes only. It does not replace medical advice. Always consume cannabis responsibly and in accordance with applicable laws.'}
        </p>
      </div>
    </div>
  );
}
