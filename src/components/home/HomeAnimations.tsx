'use client';

import React from 'react';
import { useReveal } from '@/lib/useReveal';

export function HeroContent({ children }: { children: React.ReactNode }) {
  const childArray = React.Children.toArray(children);
  return (
    <div className="animate-fade-up">
      {childArray.map((child, i) => (
        <div key={i} className={`animate-fade-up stagger-${Math.min(i + 1, 4)}`}>
          {child}
        </div>
      ))}
    </div>
  );
}

export function HomeHero({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full animate-fade-up">
      {children}
    </div>
  );
}

export function HomePillar({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useReveal('-60px');
  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

export function HomeSection({ children }: { children: React.ReactNode }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
      {children}
    </div>
  );
}

export function StatsCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
      {children}
    </div>
  );
}

export function SectionHeader({ children }: { children: React.ReactNode }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`reveal mb-12 ${visible ? 'visible' : ''}`}>
      {children}
    </div>
  );
}

export function FeatureGrid({ children }: { children: React.ReactNode }) {
  const { ref, visible } = useReveal();
  const childArray = React.Children.toArray(children);
  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 ${visible ? 'visible' : ''}`}
    >
      {childArray.map((child, i) => (
        <div key={i} className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${i * 0.08}s` }}>
          {child}
        </div>
      ))}
    </div>
  );
}
