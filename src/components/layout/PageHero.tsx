'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  accent?: string;
  colorScheme?: 'green' | 'gold';
}

export function PageHero({ title, subtitle, accent, colorScheme = 'green' }: PageHeroProps) {
  const prefersReduced = useReducedMotion();
  const accentText = colorScheme === 'gold' ? 'text-gold-theme' : 'text-accent';

  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {accent && (
          <motion.p
            initial={prefersReduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-sm font-medium mb-4 ${accentText}`}
          >
            {accent}
          </motion.p>
        )}

        <motion.h1
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="font-heading font-bold text-4xl lg:text-5xl leading-tight mb-5"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={prefersReduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-ink-muted text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
