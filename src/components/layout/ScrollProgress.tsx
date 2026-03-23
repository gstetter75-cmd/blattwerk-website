'use client';

import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const total = scrollHeight - clientHeight;
      setProgress(total > 0 ? scrollTop / total : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-px z-[9998] pointer-events-none origin-left"
      style={{
        width: '100%',
        transform: `scaleX(${progress})`,
        background: 'var(--accent)',
        opacity: 0.7,
        transition: 'transform 0.1s linear',
      }}
    />
  );
}
