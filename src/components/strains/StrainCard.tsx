'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import type { Strain } from '@/data/strains';
import { effectLabels, flavorLabels, typeConfig } from '@/data/strains';
import { StarRating } from './StarRating';

interface StrainCardProps {
  strain: Strain;
  locale: string;
}

export function StrainCard({ strain, locale }: StrainCardProps) {
  const config = typeConfig[strain.type];
  const lang = locale === 'de' ? 'de' : 'en';
  const prefersReduced = useReducedMotion();

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
      <motion.article
        initial={prefersReduced ? false : 'rest'}
        whileHover={prefersReduced ? undefined : 'hover'}
        variants={prefersReduced ? undefined : {
          rest:  { y: 0, boxShadow: '0 0 0px rgba(34,197,94,0)' },
          hover: {
            y: -4,
            boxShadow: config.glow,
            transition: { duration: 0.2, ease: 'easeOut' },
          },
        }}
        className={`rounded-lg border border-[var(--border)] border-t-4 ${config.border} h-full flex flex-col transition-colors duration-200 hover:border-[var(--border)]`}
        style={{
          background: 'var(--glass)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="p-5 flex flex-col gap-3 flex-1">
          {/* Header */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-heading italic text-lg text-ink leading-tight">
              {strain.name}
            </h3>
            <span className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${config.badge}`}>
              {config.label[lang]}
            </span>
          </div>

          {/* THC / CBD */}
          <div className="flex items-center gap-3 font-mono text-sm">
            <span className="text-ink-muted">
              THC{' '}
              <span className="text-accent font-semibold">{strain.cannabinoids.thc}%</span>
            </span>
            <span className="text-ink-faint">·</span>
            <span className="text-ink-muted">
              CBD{' '}
              <span className="text-ink font-semibold">{strain.cannabinoids.cbd}%</span>
            </span>
          </div>

          {/* Top Effects */}
          <div className="flex flex-wrap gap-1.5">
            {topEffects.map((key) => (
              <span
                key={key}
                className="text-xs px-2 py-0.5 bg-bg-elevated text-ink-muted rounded-full border border-[var(--border)]"
              >
                {effectLabels[key][lang]}
              </span>
            ))}
          </div>

          {/* Flavors */}
          {topFlavors.length > 0 && (
            <p className="text-xs text-ink-faint">
              {topFlavors.join(' · ')}
            </p>
          )}

          {/* Rating */}
          <div className="flex items-center gap-2 mt-auto pt-3 border-t border-[var(--border)]">
            <StarRating rating={strain.rating} />
            <span className="text-xs text-ink-muted font-mono">
              {strain.rating.toFixed(1)}
            </span>
            <span className="text-xs text-ink-faint">
              ({strain.review_count.toLocaleString()})
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
