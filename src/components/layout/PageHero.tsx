import { CannabisLeaf } from '@/components/decorative/CannabisLeaf';
import { DotGrid } from '@/components/decorative/DotGrid';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  accent?: string;
}

export function PageHero({ title, subtitle, accent }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 border-b border-[var(--border)]">
      {/* Dot grid background */}
      <DotGrid className="absolute inset-0 w-full h-full" opacity={0.035} spacing={28} />

      {/* Green blob left */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none blob-animation"
        style={{
          background: 'radial-gradient(circle, rgba(34,197,94,0.09) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />
      {/* Gold blob right */}
      <div
        className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animationDelay: '4s',
        }}
      />

      {/* Decorative large background title */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-heading italic font-medium text-ink whitespace-nowrap"
          style={{ fontSize: 'clamp(6rem, 18vw, 18rem)', opacity: 0.018, lineHeight: 1 }}
        >
          {title}
        </span>
      </div>

      {/* Decorative leaf — top right */}
      <CannabisLeaf
        size={260}
        opacity={0.035}
        className="absolute -top-8 -right-8 text-accent pointer-events-none"
        style={{ transform: 'rotate(20deg)' } as React.CSSProperties}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {accent && (
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4 font-body">
            {accent}
          </p>
        )}
        <h1
          className="font-heading italic font-medium text-ink mb-4"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-ink-muted text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
