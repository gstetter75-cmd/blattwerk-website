'use client';

import { useRef, useEffect } from 'react';

interface HeroVideoProps {
  readonly src: string;
  readonly height?: string;
  readonly opacity?: number;
  readonly gradient?: 'top' | 'bottom' | 'both';
  readonly poster?: string;
}

/**
 * Full-width background video with gradient overlay.
 * Auto-plays muted, loops, pauses when not visible.
 */
export function HeroVideo({
  src,
  height = '400px',
  opacity = 0.3,
  gradient = 'both',
  poster,
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const gradientStyles: Record<string, string> = {
    top: 'linear-gradient(to bottom, var(--bg) 0%, transparent 40%)',
    bottom: 'linear-gradient(to top, var(--bg) 0%, transparent 40%)',
    both: 'linear-gradient(to bottom, var(--bg) 0%, transparent 25%, transparent 75%, var(--bg) 100%)',
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ height, borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity }}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0" style={{ background: gradientStyles[gradient] }} />
    </section>
  );
}
