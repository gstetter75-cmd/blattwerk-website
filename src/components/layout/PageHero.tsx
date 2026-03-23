'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  accent?: string;
  colorScheme?: 'green' | 'gold';
}

export function PageHero({ title, subtitle, accent, colorScheme = 'green' }: PageHeroProps) {
  const isGold = colorScheme === 'gold';
  const prefersReduced = useReducedMotion();

  const blobColor = isGold ? 'rgba(245,158,11,0.12)' : 'rgba(34,197,94,0.12)';
  const blobColor2 = isGold ? 'rgba(217,119,6,0.06)' : 'rgba(21,128,61,0.06)';
  const accentBar = isGold ? 'bg-gold-theme' : 'bg-accent';
  const accentText = isGold ? 'text-gold-theme' : 'text-accent';

  return (
    <section className="relative overflow-hidden py-16 lg:py-24 border-b border-[var(--border)]">
      {/* Blobs */}
      <div
        className="blob-animation absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${blobColor} 0%, transparent 65%)`, filter: 'blur(80px)' }}
      />
      <div
        className="blob-animation absolute -bottom-20 right-0 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${blobColor2} 0%, transparent 65%)`, filter: 'blur(70px)', animationDelay: '4s' }}
      />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, var(--text-faint) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        opacity: 0.25,
      }} />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span
          className="font-heading italic font-bold text-ink whitespace-nowrap"
          style={{ fontSize: 'clamp(5rem, 16vw, 16rem)', opacity: 0.02, lineHeight: 1 }}
        >
          {title}
        </span>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {accent && (
          <motion.p
            initial={prefersReduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-xs font-bold uppercase tracking-[0.2em] mb-4 font-body ${accentText}`}
          >
            {accent}
          </motion.p>
        )}

        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          <div className={`h-px w-12 ${accentBar} mx-auto mb-5 opacity-60`} />

          <h1
            className="font-heading italic font-bold text-ink mb-5 leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            {title}
          </h1>
        </motion.div>

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
