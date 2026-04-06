'use client';

import { useRef, useEffect, useState } from 'react';

/**
 * Lightweight replacement for framer-motion's whileInView.
 * Adds 'visible' class when element enters viewport.
 */
export function useReveal(margin = '-80px') {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: margin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [margin]);

  return { ref, visible };
}
