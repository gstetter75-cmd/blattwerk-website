'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, scaleIn, staggerContainer, reducedFadeIn } from '@/lib/animations';

function useVariants() {
  const prefersReduced = useReducedMotion();
  return {
    item: prefersReduced ? reducedFadeIn : fadeUp,
    container: prefersReduced ? {} : staggerContainer,
    card: prefersReduced ? reducedFadeIn : scaleIn,
  };
}

export function HeroContent({ children }: { children: React.ReactNode }) {
  const { container, item } = useVariants();
  const childArray = React.Children.toArray(children);
  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      {childArray.map((child, i) => (
        <motion.div key={i} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

export function StatsCard({ children }: { children: React.ReactNode }) {
  const { card } = useVariants();
  return (
    <motion.div variants={card} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
      {children}
    </motion.div>
  );
}

export function SectionHeader({ children }: { children: React.ReactNode }) {
  const { item } = useVariants();
  return (
    <motion.div
      variants={item}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="mb-12"
    >
      {children}
    </motion.div>
  );
}

export function FeatureGrid({ children }: { children: React.ReactNode }) {
  const { container, item } = useVariants();
  const childArray = React.Children.toArray(children);
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10"
    >
      {childArray.map((child, i) => (
        <motion.div key={i} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
