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
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden border-b border-[var(--border)]">
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={prefersReduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-sm font-medium mb-4 ${accentClass}`}
        >
          {label}
        </motion.p>

        <motion.h1
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05 }}
          className="font-heading font-bold text-4xl lg:text-5xl leading-tight"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={prefersReduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-6 text-lg leading-relaxed max-w-2xl text-ink-muted"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
