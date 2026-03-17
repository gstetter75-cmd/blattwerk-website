'use client';

import { Star } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import type { Strain } from '@/data/strains';
import { effectLabels, flavorLabels } from '@/data/strains';

interface StrainCardProps {
  strain: Strain;
  locale: string;
}

const typeConfig = {
  indica: {
    border: 'border-t-indigo-500',
    badge: 'bg-indigo-100 text-indigo-800',
    label: { de: 'Indica', en: 'Indica' },
  },
  sativa: {
    badge: 'bg-amber-100 text-amber-800',
    border: 'border-t-amber',
    label: { de: 'Sativa', en: 'Sativa' },
  },
  hybrid: {
    badge: 'bg-green-100 text-green-800',
    border: 'border-t-deep-forest',
    label: { de: 'Hybrid', en: 'Hybrid' },
  },
} as const;

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-3.5 h-3.5 ${
            star <= Math.round(rating)
              ? 'text-amber fill-amber'
              : 'text-sand fill-sand'
          }`}
        />
      ))}
    </div>
  );
}

export function StrainCard({ strain, locale }: StrainCardProps) {
  const config = typeConfig[strain.type];
  const lang = locale === 'de' ? 'de' : 'en';

  const topEffects = Object.entries(strain.effects)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([key]) => key as keyof typeof effectLabels);

  const topFlavors = strain.flavors.slice(0, 3).map((f) => {
    const label = flavorLabels[f];
    return label ? label[lang] : f;
  });

  return (
    <Link href={`/sortendatenbank/${strain.slug}`}>
      <article
        className={`bg-warm-white rounded-lg border border-sand shadow-sm hover:shadow-md transition-shadow duration-200 border-t-4 ${config.border} h-full flex flex-col`}
      >
        <div className="p-5 flex flex-col gap-3 flex-1">
          {/* Header */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-heading text-lg text-deep-forest leading-tight">
              {strain.name}
            </h3>
            <span
              className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${config.badge}`}
            >
              {config.label[lang]}
            </span>
          </div>

          {/* THC / CBD */}
          <div className="flex items-center gap-3 font-mono text-sm">
            <span className="text-charcoal">
              THC{' '}
              <span className="text-deep-forest font-semibold">
                {strain.cannabinoids.thc}%
              </span>
            </span>
            <span className="text-charcoal/40">·</span>
            <span className="text-charcoal">
              CBD{' '}
              <span className="text-deep-forest font-semibold">
                {strain.cannabinoids.cbd}%
              </span>
            </span>
          </div>

          {/* Top Effects */}
          <div className="flex flex-wrap gap-1.5">
            {topEffects.map((key) => (
              <span
                key={key}
                className="text-xs px-2 py-0.5 bg-sand/60 text-charcoal rounded-full"
              >
                {effectLabels[key][lang]}
              </span>
            ))}
          </div>

          {/* Flavors */}
          {topFlavors.length > 0 && (
            <p className="text-xs text-sage">
              {topFlavors.join(' · ')}
            </p>
          )}

          {/* Rating */}
          <div className="flex items-center gap-2 mt-auto pt-2 border-t border-sand/50">
            <StarRating rating={strain.rating} />
            <span className="text-xs text-sage font-mono">
              {strain.rating.toFixed(1)}
            </span>
            <span className="text-xs text-sage/60">
              ({strain.review_count.toLocaleString()})
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
