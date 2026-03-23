'use client';

import { useEffect, useRef } from 'react';

interface MousePos { x: number; y: number; }

/**
 * Returns a ref that always holds the latest normalized mouse position.
 * x/y are in [-0.5, 0.5] relative to viewport center.
 * Does NOT cause re-renders — read via ref.current in animation loops.
 */
export function useMouseRef(): React.RefObject<MousePos> {
  const ref = useRef<MousePos>({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      ref.current = {
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      };
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return ref;
}
