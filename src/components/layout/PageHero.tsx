'use client';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  accent?: string;
  colorScheme?: 'green' | 'gold';
}

export function PageHero({ title, subtitle, accent, colorScheme = 'green' }: PageHeroProps) {
  const accentText = colorScheme === 'gold' ? 'text-gold-theme' : 'text-accent';

  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {accent && (
          <p className={`animate-fade-up text-sm font-medium mb-4 ${accentText}`}>
            {accent}
          </p>
        )}

        <h1 className="animate-fade-up stagger-1 font-heading font-bold text-4xl lg:text-5xl leading-tight mb-5">
          {title}
        </h1>

        {subtitle && (
          <p className="animate-fade-up stagger-2 text-ink-muted text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
