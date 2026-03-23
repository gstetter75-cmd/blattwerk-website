import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import {
  BookOpen, Database, Leaf, Users, ArrowRight, ExternalLink,
  Info, Sprout, FlaskConical,
} from 'lucide-react';
import {
  HeroContent,
  StatsCard,
  SectionHeader,
  FeatureGrid,
} from '@/components/home/HomeAnimations';
import { CannabisLeaf } from '@/components/decorative/CannabisLeaf';
import { DotGrid } from '@/components/decorative/DotGrid';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations('home');

  const stats = [
    { icon: Sprout, value: '12', label: t('stats_harvests') },
    { icon: Database, value: '89', label: t('stats_strains') },
    { icon: BookOpen, value: '40+', label: t('stats_articles') },
    { icon: Users, value: '—', label: t('stats_members') },
  ];

  const features = [
    {
      icon: Database,
      title: t('section_strains_title'),
      text: t('section_strains_text'),
      href: '/sortendatenbank',
      cta: t('explore_strains'),
    },
    {
      icon: BookOpen,
      title: t('section_knowledge_title'),
      text: t('section_knowledge_text'),
      href: '/wissensdatenbank',
      cta: t('explore_knowledge'),
    },
    {
      icon: FlaskConical,
      title: t('section_about_title'),
      text: t('section_about_text'),
      href: '/ueber-uns',
      cta: t('learn_more'),
    },
  ];

  return (
    <>
      {/* Info Banner */}
      <div className="bg-gold-theme/10 border-b border-gold-theme/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-center gap-2">
          <Info className="w-3.5 h-3.5 text-gold-theme shrink-0" />
          <p className="text-xs text-gold-theme/80 text-center">{t('info_banner')}</p>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden py-24 lg:py-36">
        {/* Dot grid */}
        <DotGrid className="absolute inset-0 w-full h-full" opacity={0.025} spacing={32} />

        {/* Blob Backgrounds */}
        <div
          className="blob-animation absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 65%)',
            filter: 'blur(80px)',
            animationDelay: '3s',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 65%)',
            filter: 'blur(100px)',
            animationDelay: '6s',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Decorative large leaf — right background */}
        <CannabisLeaf
          size={520}
          opacity={0.03}
          className="absolute -top-20 -right-20 text-accent pointer-events-none select-none"
          style={{ transform: 'rotate(15deg)' } as React.CSSProperties}
        />
        {/* Small leaf — bottom left */}
        <CannabisLeaf
          size={240}
          opacity={0.025}
          className="absolute bottom-0 left-0 text-accent pointer-events-none select-none"
          style={{ transform: 'rotate(-35deg)' } as React.CSSProperties}
        />

        {/* Background watermark text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-heading italic font-medium text-ink whitespace-nowrap"
            style={{ fontSize: 'clamp(8rem, 22vw, 22rem)', opacity: 0.015, lineHeight: 1 }}
          >
            Blattwerk
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">

            {/* Left — Headline */}
            <div className="lg:w-[58%]">
              <HeroContent>
                <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-5 font-body">
                  Cannabis Social Club · Hildesheim
                </p>
                <h1
                  className="font-heading italic font-medium text-ink mb-6 leading-none"
                  style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
                >
                  {t('hero_title')}
                </h1>
                <p className="text-ink-muted text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
                  {t('hero_text')}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/mitgliedschaft"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold text-void rounded-md text-sm transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: 'linear-gradient(135deg, #22c55e, #86efac)',
                      boxShadow: '0 0 20px rgba(34,197,94,0.25)',
                    }}
                  >
                    {t('section_join_button')} <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/sortendatenbank"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-ink-muted hover:text-ink border border-[var(--border)] rounded-md text-sm hover:bg-bg-elevated hover:border-accent/30 transition-all duration-200"
                  >
                    {t('explore_strains')}
                  </Link>
                </div>
              </HeroContent>
            </div>

            {/* Right — Glass Stats Card */}
            <div className="lg:w-[42%]">
              <StatsCard>
                <div
                  className="rounded-xl border border-[var(--border)] p-6 lg:p-8"
                  style={{
                    background: 'var(--glass)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)',
                  }}
                >
                  <p className="text-xs font-semibold text-ink-muted uppercase tracking-widest mb-6 font-body">
                    Blattwerk e.V. — 2024
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map(({ icon: Icon, value, label }) => (
                      <div key={label} className="flex flex-col gap-1">
                        <Icon className="w-5 h-5 text-accent mb-1 opacity-80" />
                        <p className="font-heading text-3xl italic font-medium text-ink">
                          {value}
                        </p>
                        <p className="text-xs text-ink-muted leading-snug">{label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-5 border-t border-[var(--border)]">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      <span className="text-xs text-ink-muted">
                        Aktiv seit 2024 · Hildesheim
                      </span>
                    </div>
                  </div>
                </div>
              </StatsCard>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <DotGrid className="absolute inset-0 w-full h-full" opacity={0.03} spacing={28} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader>
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3 font-body">
              Entdecke Blattwerk
            </p>
            <h2
              className="font-heading italic font-medium text-ink mb-0"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Alles an einem Ort
            </h2>
          </SectionHeader>

          <FeatureGrid>
            {features.map(({ icon: Icon, title, text, href, cta }) => (
              <div
                key={href}
                className="group rounded-xl border border-[var(--border)] p-6 lg:p-8 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'var(--glass)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading text-xl italic font-medium text-ink mb-3">
                  {title}
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed mb-6">{text}</p>
                <Link
                  href={href}
                  className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-soft font-medium transition-colors"
                >
                  {cta}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </FeatureGrid>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative overflow-hidden rounded-2xl border border-[var(--border)] px-8 py-16 lg:px-16 lg:py-20 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(34,197,94,0.06) 0%, rgba(245,158,11,0.04) 100%)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {/* Blob inside CTA */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />
            <div className="relative">
              <Leaf className="w-8 h-8 text-accent mx-auto mb-6 opacity-60" />
              <h2
                className="font-heading italic font-medium text-ink mb-4"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                {t('section_join_title')}
              </h2>
              <p className="text-ink-muted max-w-xl mx-auto leading-relaxed mb-8 text-base">
                {t('section_join_text')}
              </p>
              <a
                href="https://diehanfapp.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-void rounded-md text-sm transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #22c55e, #86efac)',
                  boxShadow: '0 0 24px rgba(34,197,94,0.3)',
                }}
              >
                {t('section_join_button')} <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
