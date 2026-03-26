import { createMetadata, PAGE_META } from '@/lib/metadata';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowRight, ExternalLink, Leaf, BookOpen, Users, Shield } from 'lucide-react';
import { strains } from '@/data/strains';
import { allArticles } from '@/data/knowledge';
import { HomeHero, HomeSection } from '@/components/home/HomeAnimations';
import { OrganizationSchema } from '@/lib/schema';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return createMetadata(locale, PAGE_META.home);
}

export default async function HomePage({
  params,
}: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <OrganizationSchema />
      <HomeContent />
    </>
  );
}

function HomeContent() {
  const t = useTranslations('home');

  return (
    <>
      {/* ═══════════════════════════════════════
          HERO — large image, clear message
      ═══════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background image */}
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/cannabis-plant-veg.jpg`}
          alt=""
          fill
          className="object-cover"
          style={{ opacity: 0.15 }}
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, var(--bg) 0%, transparent 40%, transparent 60%, var(--bg) 100%)' }}
        />

        <div className="relative w-full max-w-6xl mx-auto px-6 lg:px-8 pt-24 pb-16">
          <HomeHero>
            <p className="text-sm font-medium text-accent mb-6">
              Cannabis Social Club · Hildesheim
            </p>

            <h1
              className="font-heading font-bold leading-[1.05] mb-6 max-w-3xl"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            >
              {t('hero_title')}
            </h1>

            <p className="text-lg leading-relaxed mb-10 max-w-xl text-ink-muted">
              {t('hero_text')}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/mitgliedschaft"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white rounded-lg transition-all duration-200 hover:opacity-90"
                style={{ background: 'var(--accent)' }}
              >
                {t('join_button')} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/sortendatenbank"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-ink-muted border border-[var(--border)] rounded-lg hover:bg-bg-surface transition-colors duration-200"
              >
                {t('explore_strains')}
              </Link>
            </div>
          </HomeHero>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ABOUT — who we are
      ═══════════════════════════════════════ */}
      <HomeSection>
        <section className="py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-medium text-accent mb-4">
                  {t('section_about_title') || 'Über den Verein'}
                </p>
                <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6 leading-tight">
                  Gemeinschaft, Aufklärung und verantwortungsvoller Umgang
                </h2>
                <p className="text-ink-muted leading-relaxed mb-8">
                  {t('section_about_text')}
                </p>
                <Link
                  href="/ueber-uns"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                  style={{ color: 'var(--accent)' }}
                >
                  {t('learn_more')} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Feature cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, title: t('pillar_3_title'), text: t('pillar_3_text') },
                  { icon: Shield, title: t('pillar_1_title'), text: t('pillar_1_text') },
                  { icon: BookOpen, title: t('pillar_4_title'), text: t('pillar_4_text') },
                  { icon: Leaf, title: t('pillar_2_title'), text: t('pillar_2_text') },
                ].map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="p-5 rounded-xl border border-[var(--border)] bg-bg-elevated"
                    style={{ boxShadow: '0 1px 3px var(--shadow)' }}
                  >
                    <Icon className="w-5 h-5 text-accent mb-3" />
                    <h3 className="font-heading font-semibold text-sm mb-1.5">{title}</h3>
                    <p className="text-xs text-ink-muted leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </HomeSection>

      {/* ═══════════════════════════════════════
          CTA — membership (early, not buried)
      ═══════════════════════════════════════ */}
      <HomeSection>
        <section className="py-16 lg:py-20" style={{ background: 'var(--bg-dark)', color: '#F5FAF7' }}>
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="lg:max-w-lg">
                <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4 leading-tight">
                  {t('section_join_title')}
                </h2>
                <p className="text-sm leading-relaxed opacity-70">
                  {t('section_join_text')}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://diehanfapp.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg transition-all duration-200 hover:opacity-90"
                  style={{ background: '#95D5B2', color: '#1A2E22' }}
                >
                  {t('section_join_button')} <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  href="/mitgliedschaft"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium rounded-lg border border-white/20 hover:bg-white/10 transition-colors"
                  style={{ color: '#F5FAF7' }}
                >
                  {t('learn_more')}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </HomeSection>

      {/* ═══════════════════════════════════════
          STRAINS — concrete preview
      ═══════════════════════════════════════ */}
      <HomeSection>
        <section className="py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <p className="text-sm font-medium text-accent mb-3">
                  {t('strain_label')}
                </p>
                <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-tight">
                  {strains.length} Sorten dokumentiert
                </h2>
              </div>
              <Link
                href="/sortendatenbank"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline shrink-0"
              >
                {t('explore_strains')} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {strains.slice(0, 3).map((strain) => (
                <Link
                  key={strain.slug}
                  href={`/sortendatenbank/${strain.slug}`}
                  className="group p-6 rounded-xl border border-[var(--border)] bg-bg-elevated hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                      {strain.type}
                    </span>
                    <span className="text-xs text-ink-faint">
                      THC {strain.cannabinoids.thc}%
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                    {strain.name}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed line-clamp-2">
                    {strain.description_de}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </HomeSection>

      {/* ═══════════════════════════════════════
          KNOWLEDGE — article previews
      ═══════════════════════════════════════ */}
      <HomeSection>
        <section className="py-20 lg:py-28" style={{ background: 'var(--bg-surface)' }}>
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <p className="text-sm font-medium mb-3" style={{ color: 'var(--gold)' }}>
                  {t('knowledge_label')}
                </p>
                <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-tight">
                  {t('section_knowledge_title')}
                </h2>
              </div>
              <Link
                href="/wissensdatenbank"
                className="inline-flex items-center gap-2 text-sm font-medium hover:underline shrink-0"
                style={{ color: 'var(--gold)' }}
              >
                {t('explore_knowledge')} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {allArticles.slice(0, 3).map((article) => (
                <Link
                  key={article.slug}
                  href={`/wissensdatenbank/${article.category}/${article.slug}`}
                  className="group p-6 rounded-xl bg-bg-elevated border border-[var(--border)] hover:shadow-md transition-all duration-200"
                >
                  <span className="text-xs font-medium text-ink-faint mb-3 block">
                    {article.reading_time} min · {article.tags.slice(0, 2).join(', ')}
                  </span>
                  <h3 className="font-heading font-semibold text-base mb-2 group-hover:text-accent transition-colors leading-snug">
                    {article.title_de}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed line-clamp-2">
                    {article.summary_de}
                  </p>
                </Link>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { value: `${allArticles.length}+`, label: t('stat_articles') },
                { value: String(strains.length), label: t('stat_strains') },
                { value: '8', label: t('stat_categories') },
                { value: '100%', label: t('stat_free') },
              ].map(({ value, label }) => (
                <div key={label} className="text-center p-5 rounded-xl bg-bg-elevated border border-[var(--border)]">
                  <p className="font-heading font-bold text-2xl lg:text-3xl mb-1">{value}</p>
                  <p className="text-xs text-ink-faint">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </HomeSection>
    </>
  );
}
