import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { ParticleSphere } from '@/components/decorative/ParticleSphere';
import { HomeHero, HomePillar, HomeSection } from '@/components/home/HomeAnimations';

export default async function HomePage({
  params,
}: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HomeContent />;
}

const PILLARS = [
  {
    num: '01',
    title: 'Verantwortung',
    text: 'Bewusster, verantwortungsvoller Umgang mit Cannabis – für Mitglieder, Familie und Gemeinschaft.',
  },
  {
    num: '02',
    title: 'Transparenz',
    text: 'Offene Kommunikation, klare Regeln und nachvollziehbare Entscheidungen in allen Vereinsangelegenheiten.',
  },
  {
    num: '03',
    title: 'Gemeinschaft',
    text: 'Mehr als ein Verein – ein Netzwerk gleichgesinnter Menschen in Hildesheim.',
  },
  {
    num: '04',
    title: 'Aufklärung',
    text: 'Wissenschaftlich fundiertes Wissen zu Cannabinoiden, Prävention und Rechtslage.',
  },
] as const;

const STRAIN_FEATURES = [
  {
    label: 'Genetik & Herkunft',
    text: 'Vollständige Stammbäume, Kreuzungshistorie und Herkunftsregionen aller 89 dokumentierten Sorten.',
  },
  {
    label: 'Terpenprofil & Aroma',
    text: 'Detaillierte Terpendaten – Myrcen, Limonen, Caryophyllen – mit Aromacharakter und Geschmacksprofil.',
  },
  {
    label: 'Wirkung & Cannabinoide',
    text: 'THC/CBD-Werte, Wirkungsspektrum und Effektprofil für informierte, bewusste Entscheidungen.',
  },
] as const;

function HomeContent() {
  const t = useTranslations('home');

  return (
    <>
      {/* ════════════════════════════════════
          HERO — full-screen, WQF style
      ════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: 'var(--bg)' }}>

        {/* Ambient glow behind sphere */}
        <div className="absolute right-[-5%] top-[10%] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 65%)', filter: 'blur(80px)' }} />

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-20">
          <div className="flex flex-col lg:flex-row lg:items-center">

            {/* Left — Text */}
            <div className="lg:w-[55%] lg:pr-16 py-16 lg:py-0">
              <HomeHero>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-10 font-body">
                  Cannabis Social Club · Hildesheim
                </p>

                <h1
                  className="font-heading italic font-bold leading-[0.95] mb-8"
                  style={{ fontSize: 'clamp(3.5rem, 7.5vw, 7rem)', color: 'var(--text)' }}
                >
                  {t('hero_title')}
                </h1>

                <div className="w-10 h-px mb-8" style={{ background: 'rgba(34,197,94,0.4)' }} />

                <p className="text-base leading-relaxed mb-12 max-w-md" style={{ color: 'var(--text-muted)' }}>
                  {t('hero_text')}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/mitgliedschaft"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.12em] font-body transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: 'var(--accent)',
                      color: 'var(--bg)',
                      boxShadow: '0 0 28px rgba(34,197,94,0.25)',
                    }}
                  >
                    Mitglied werden <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/sortendatenbank"
                    className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.12em] font-body transition-all duration-200"
                    style={{ color: 'var(--text-muted)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    {t('explore_strains')}
                  </Link>
                </div>
              </HomeHero>
            </div>

            {/* Right — Sphere */}
            <div className="hidden lg:flex lg:w-[45%] items-center justify-end">
              <ParticleSphere size={500} count={360} />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: 0.2 }}>
          <div className="w-px h-12 animate-pulse" style={{ background: 'var(--text)' }} />
        </div>
      </section>

      {/* ════════════════════════════════════
          PILLARS — numbered, divider layout
      ════════════════════════════════════ */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
          >
            {PILLARS.map((p, i) => (
              <HomePillar key={p.num} delay={i * 0.08}>
                <div
                  className="py-12 px-6 lg:px-8 h-full"
                  style={{
                    borderRight: i < PILLARS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  }}
                >
                  <p className="font-mono text-xs mb-6" style={{ color: 'var(--text-faint)' }}>
                    {p.num} / 04
                  </p>
                  <h3 className="font-heading italic text-xl mb-4" style={{ color: 'var(--text)' }}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {p.text}
                  </p>
                </div>
              </HomePillar>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          STRAINS — large heading + 3 columns
      ════════════════════════════════════ */}
      <HomeSection>
        <section className="py-28 lg:py-40" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            {/* Header row */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-5 font-body"
                  style={{ color: 'var(--accent)' }}>
                  Sortendatenbank
                </p>
                <h2
                  className="font-heading italic font-bold leading-none"
                  style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)', color: 'var(--text)' }}
                >
                  89 Sorten.<br />
                  Wissenschaftlich<br />
                  dokumentiert.
                </h2>
              </div>
              <Link
                href="/sortendatenbank"
                className="shrink-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] font-body transition-colors duration-200"
                style={{ color: 'var(--accent)' }}
              >
                {t('explore_strains')} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 3-column feature blocks */}
            <div
              className="grid grid-cols-1 md:grid-cols-3"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderLeft: '1px solid rgba(255,255,255,0.06)' }}
            >
              {STRAIN_FEATURES.map(({ label, text }) => (
                <div
                  key={label}
                  className="p-8 lg:p-10"
                  style={{ borderRight: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="w-px h-10 mb-8" style={{ background: 'rgba(34,197,94,0.3)' }} />
                  <h3 className="font-heading italic text-lg mb-3" style={{ color: 'var(--text)' }}>
                    {label}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </HomeSection>

      {/* ════════════════════════════════════
          KNOWLEDGE — left text, right stats
      ════════════════════════════════════ */}
      <HomeSection>
        <section className="py-28 lg:py-40" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-24">

              {/* Left */}
              <div className="lg:w-1/2">
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-5 font-body"
                  style={{ color: 'var(--gold)' }}>
                  Wissensdatenbank
                </p>
                <h2
                  className="font-heading italic font-bold leading-none mb-6"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--text)' }}
                >
                  {t('section_knowledge_title')}
                </h2>
                <p className="text-sm leading-relaxed mb-10 max-w-md"
                  style={{ color: 'var(--text-muted)' }}>
                  {t('section_knowledge_text')}
                </p>
                <Link
                  href="/wissensdatenbank"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] font-body transition-colors duration-200"
                  style={{ color: 'var(--gold)' }}
                >
                  {t('explore_knowledge')} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Right — stat grid */}
              <div className="lg:w-1/2">
                <div
                  className="grid grid-cols-2"
                  style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  {[
                    { value: '40+', label: 'Wissensartikel' },
                    { value: '89', label: 'Sorten dokumentiert' },
                    { value: '12', label: 'Kategorien' },
                    { value: '100%', label: 'Kostenfrei zugänglich' },
                  ].map(({ value, label }, i) => (
                    <div
                      key={label}
                      className="p-8 lg:p-10"
                      style={{
                        borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                        borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                      }}
                    >
                      <p
                        className="font-heading italic font-bold mb-2"
                        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text)' }}
                      >
                        {value}
                      </p>
                      <p className="text-xs uppercase tracking-[0.1em] font-body"
                        style={{ color: 'var(--text-muted)' }}>
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </HomeSection>

      {/* ════════════════════════════════════
          JOIN CTA — large text, two-col
      ════════════════════════════════════ */}
      <section className="py-28 lg:py-40" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">

            <div className="lg:w-1/2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-5 font-body"
                style={{ color: 'var(--accent)' }}>
                Mitgliedschaft
              </p>
              <h2
                className="font-heading italic font-bold leading-none"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--text)' }}
              >
                {t('section_join_title')}
              </h2>
            </div>

            <div className="lg:w-auto flex flex-col gap-4">
              <p className="text-sm leading-relaxed max-w-sm mb-2"
                style={{ color: 'var(--text-muted)' }}>
                {t('section_join_text')}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://diehanfapp.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.12em] font-body transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: 'var(--accent)',
                    color: 'var(--bg)',
                    boxShadow: '0 0 24px rgba(34,197,94,0.2)',
                  }}
                >
                  {t('section_join_button')} <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/ueber-uns"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.12em] font-body transition-colors duration-200"
                  style={{ color: 'var(--text-muted)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {t('learn_more')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
