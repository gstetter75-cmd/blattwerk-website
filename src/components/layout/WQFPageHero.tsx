'use client';

interface WQFPageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  accentColor?: 'green' | 'gold';
}

export function WQFPageHero({ label, title, subtitle, accentColor = 'green' }: WQFPageHeroProps) {
  const accentClass = accentColor === 'gold' ? 'text-gold-theme' : 'text-accent';

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden border-b border-[var(--border)]">
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <p className={`animate-fade-up text-sm font-medium mb-4 ${accentClass}`}>
          {label}
        </p>

        <h1 className="animate-fade-up stagger-1 font-heading font-bold text-4xl lg:text-5xl leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="animate-fade-up stagger-2 mt-6 text-lg leading-relaxed max-w-2xl text-ink-muted">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
