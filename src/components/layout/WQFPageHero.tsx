'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface WQFPageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  accentColor?: 'green' | 'gold';
}

export function WQFPageHero({ label, title, subtitle, accentColor = 'green' }: WQFPageHeroProps) {
  const prefersReduced = useReducedMotion();
  const accentClass = accentColor === 'gold' ? 'text-gold-theme' : 'text-accent';

  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden border-b border-[var(--border)]">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={prefersReduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-xs font-bold uppercase tracking-[0.25em] mb-6 font-body ${accentClass}`}
        >
          {label}
        </motion.p>

        <motion.h1
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05 }}
          className="font-heading italic font-bold leading-none"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={prefersReduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-8 text-base leading-relaxed max-w-lg text-ink-muted"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
