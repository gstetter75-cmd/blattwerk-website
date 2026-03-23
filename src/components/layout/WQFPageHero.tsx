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
  const accent = accentColor === 'gold' ? 'var(--gold)' : 'var(--accent)';

  return (
    <section
      className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Ambient glow */}
      <div
        className="blob-animation absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${accentColor === 'gold' ? 'rgba(245,158,11,0.06)' : 'rgba(34,197,94,0.06)'} 0%, transparent 65%)`,
          filter: 'blur(80px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={prefersReduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold uppercase tracking-[0.25em] mb-6 font-body"
          style={{ color: accent }}
        >
          {label}
        </motion.p>

        <motion.h1
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05 }}
          className="font-heading italic font-bold leading-none"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', color: 'var(--text)' }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={prefersReduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-8 text-base leading-relaxed max-w-lg"
            style={{ color: 'var(--text-muted)' }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
