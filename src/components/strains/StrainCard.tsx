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

const TYPE_LEFT_BORDER: Record<string, string> = {
  indica: 'rgba(99,102,241,0.5)',
  sativa: 'rgba(245,158,11,0.5)',
  hybrid: 'rgba(34,197,94,0.5)',
};

const TYPE_TEXT_COLOR: Record<string, string> = {
  indica: 'rgba(165,180,252,0.85)',
  sativa: 'rgba(252,211,77,0.85)',
  hybrid: 'rgba(74,222,128,0.85)',
};

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

  const accentBorder = TYPE_LEFT_BORDER[strain.type] ?? 'rgba(34,197,94,0.5)';
  const typeTextColor = TYPE_TEXT_COLOR[strain.type] ?? 'rgba(74,222,128,0.85)';

  return (
    <Link href={`/sortendatenbank/${strain.slug}`} className="block h-full">
      <motion.article
        initial={prefersReduced ? false : { y: 0 }}
        whileHover={prefersReduced ? undefined : { y: -4 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="h-full flex flex-col transition-colors duration-200"
        style={{
          background: 'var(--bg)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderLeft: `4px solid ${accentBorder}`,
        }}
        onMouseEnter={(e) => {
          if (!prefersReduced) {
            (e.currentTarget as HTMLElement).style.borderTopColor = 'rgba(255,255,255,0.12)';
            (e.currentTarget as HTMLElement).style.borderRightColor = 'rgba(255,255,255,0.12)';
            (e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(255,255,255,0.12)';
          }
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderTopColor = 'rgba(255,255,255,0.06)';
          (e.currentTarget as HTMLElement).style.borderRightColor = 'rgba(255,255,255,0.06)';
          (e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(255,255,255,0.06)';
        }}
      >
        <div className="p-5 flex flex-col gap-3 flex-1">

          {/* Name + Type badge */}
          <div className="flex items-start justify-between gap-3">
            <h3
              className="font-heading italic text-lg leading-tight"
              style={{ color: 'var(--text)' }}
            >
              {strain.name}
            </h3>
            <span
              className="shrink-0 text-[10px] font-bold uppercase tracking-[0.18em] mt-0.5"
              style={{ color: typeTextColor }}
            >
              {config.label[lang]}
            </span>
          </div>

          {/* THC / CBD */}
          <div className="flex items-center gap-3 font-mono text-sm">
            <span style={{ color: 'var(--text-muted)' }}>
              THC{' '}
              <span style={{ color: 'var(--accent)' }} className="font-semibold">
                {strain.cannabinoids.thc}%
              </span>
            </span>
            <span style={{ color: 'var(--text-faint)' }}>·</span>
            <span style={{ color: 'var(--text-muted)' }}>
              CBD{' '}
              <span style={{ color: 'var(--text)' }}>
                {strain.cannabinoids.cbd}%
              </span>
            </span>
          </div>

          {/* Effects */}
          <div className="flex flex-wrap gap-1.5">
            {topEffects.map((key) => (
              <span
                key={key}
                className="text-[10px] font-bold uppercase tracking-[0.12em] px-2 py-0.5"
                style={{
                  color: 'var(--text-muted)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {effectLabels[key][lang]}
              </span>
            ))}
          </div>

          {/* Flavors */}
          {topFlavors.length > 0 && (
            <p className="text-xs" style={{ color: 'var(--text-faint)' }}>
              {topFlavors.join(' · ')}
            </p>
          )}

          {/* Rating */}
          <div
            className="flex items-center gap-2 mt-auto pt-3"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <StarRating rating={strain.rating} />
            <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
              {strain.rating.toFixed(1)}
            </span>
            <span className="text-xs" style={{ color: 'var(--text-faint)' }}>
              ({strain.review_count.toLocaleString()})
            </span>
          </div>

        </div>
      </motion.article>
    </Link>
  );
}
