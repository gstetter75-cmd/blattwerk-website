'use client';

import Image from 'next/image';

interface HeroImageProps {
  readonly src: string;
  readonly alt: string;
  readonly height?: string;
  readonly opacity?: number;
  readonly gradient?: 'top' | 'bottom' | 'both';
}

export function HeroImage({
  src,
  alt,
  height = '320px',
  opacity = 0.35,
  gradient = 'both',
}: HeroImageProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const gradientStyles: Record<string, string> = {
    top: 'linear-gradient(to bottom, var(--bg) 0%, transparent 40%)',
    bottom: 'linear-gradient(to top, var(--bg) 0%, transparent 40%)',
    both: 'linear-gradient(to bottom, var(--bg) 0%, transparent 30%, transparent 70%, var(--bg) 100%)',
  };

  return (
    <section className="relative overflow-hidden border-t border-[var(--border)]" style={{ height }}>
      <Image
        src={`${basePath}${src}`}
        alt={alt}
        fill
        className="object-cover"
        style={{ opacity }}
        sizes="100vw"
      />
      <div className="absolute inset-0" style={{ background: gradientStyles[gradient] }} />
    </section>
  );
}
