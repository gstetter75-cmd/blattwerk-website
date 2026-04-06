'use client';

import { useReveal } from '@/lib/useReveal';

export function HomeSection({ children }: { children: React.ReactNode }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
      {children}
    </div>
  );
}
