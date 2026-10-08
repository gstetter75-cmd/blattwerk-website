import type { ReactNode } from 'react';
import { preload } from 'react-dom';
import type { LucideIcon } from 'lucide-react';
import { createMetadata, PAGE_META } from '@/lib/metadata';
import { useTranslations, useLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowRight, ExternalLink, Check, Sprout, Sun, Leaf, BookOpen, Users, Newspaper, Calendar, Shield, Mail, Camera } from 'lucide-react';
import { strains } from '@/data/strains';
import { formatPercent } from '@/data/strains/labels';
import { allArticles, allCategories } from '@/data/knowledge';
import { blogPosts } from '@/data/blog';
import { HomeHero, HomeSection } from '@/components/home/HomeAnimations';
import { OrganizationSchema, WebSiteSchema, LocalBusinessSchema } from '@/lib/schema';
import { OptimizedImage, getWebpSrcSet, getWebpUrl } from '@/components/OptimizedImage';

/* ─── Layout constants (shared rhythm across all home sections) ─── */
const CONTAINER = 'max-w-6xl mx-auto px-6 lg:px-8';
const SECTION_Y = 'py-16 sm:py-20 lg:py-24';
const CARD_HOVER = 'transition-all duration-200 hover:shadow-md hover:border-accent/30 motion-safe:hover:-translate-y-0.5';

/** Warm ambient light behind the hero, derived from theme tokens so it adapts to light and dark mode */
const HERO_GLOW = [
  'radial-gradient(55% 60% at 88% 18%, color-mix(in srgb, var(--accent) 16%, transparent) 0%, transparent 70%)',
  'radial-gradient(45% 50% at 0% 100%, color-mix(in srgb, var(--gold) 10%, transparent) 0%, transparent 70%)',
].join(', ');

/** Fades the hero backdrop photo into the page background at the top and bottom edge */
const HERO_FADE = 'linear-gradient(to bottom, var(--bg) 0%, transparent 40%, transparent 60%, var(--bg) 100%)';

/** Hero backdrop photo; HomePage preloads exactly the variant the <picture> will pick */
const HERO_IMAGE = {
  src: '/images/cannabis-plant-veg.jpg',
  sizes: '100vw',
} as const;

const PHOTO_SHADOW = '0 30px 60px -30px rgba(26, 46, 34, 0.45)';

const MONTHS_DE = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'] as const;
const MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] as const;

/**
 * Formats an ISO date (YYYY-MM-DD) with fixed month names instead of Intl,
 * so the static HTML never depends on the build machine's locale or timezone.
 */
function formatPostDate(isoDate: string, isDE: boolean): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate);
  if (!match) return isoDate;
  const [, year, month, day] = match;
  const monthName = (isDE ? MONTHS_DE : MONTHS_EN)[Number(month) - 1];
  if (!monthName) return isoDate;
  const dayNumber = Number(day);
  return isDE ? `${dayNumber}. ${monthName} ${year}` : `${monthName} ${dayNumber}, ${year}`;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return createMetadata(locale, PAGE_META.home);
}

export default async function HomePage({
  params,
}: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  // LCP image: same candidates and sizes as the hero <picture>, so the browser reuses the preloaded file.
  preload(getWebpUrl(HERO_IMAGE.src), {
    as: 'image',
    type: 'image/webp',
    imageSrcSet: getWebpSrcSet(HERO_IMAGE.src),
    imageSizes: HERO_IMAGE.sizes,
    fetchPriority: 'high',
  });
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <LocalBusinessSchema />
      <HomeContent />
    </>
  );
}

function HomeContent() {
  const t = useTranslations('home');
  const locale = useLocale();
  const isDE = locale === 'de';

  const milestones = [
    {
      icon: Users,
      status: 'done' as const,
      title: isDE ? 'Vereinsgründung' : 'Club founded',
      text: isDE ? 'Gründungsversammlung im Mai 2025, eingetragen im Vereinsregister Hildesheim am 04.09.2025' : 'Founding assembly in May 2025, registered in the Hildesheim association register on 04.09.2025',
      date: isDE ? 'Mai 2025' : 'May 2025',
    },
    {
      icon: Check,
      status: 'done' as const,
      title: isDE ? 'Anbaulizenz' : 'Cultivation license',
      text: isDE ? 'Offizielle Genehmigung zum gemeinschaftlichen Anbau' : 'Official permit for communal cultivation',
      date: isDE ? '18. März 2026' : 'March 18, 2026',
    },
    {
      icon: Sprout,
      status: 'done' as const,
      title: isDE ? 'Räume & Nutzungsänderung' : 'Premises & change of use',
      text: isDE ? 'Räume gesichert, Konzept steht — Nutzungsänderung von der Stadt genehmigt' : 'Premises secured, concept finalised — change-of-use permit approved',
      date: isDE ? 'Genehmigt' : 'Approved',
    },
    {
      icon: Sun,
      status: 'active' as const,
      title: isDE ? 'Anbaustart' : 'Growing start',
      text: isDE ? 'Letzte Vorbereitungen laufen — qualitätsgeprüft, für unsere Mitglieder' : 'Final preparations under way — quality-tested, for our members',
      date: isDE ? 'Demnächst' : 'Coming soon',
    },
  ];

  return (
    <>
      {/* ═══════════════════════════════════════
          HERO — Club story front and center
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Plant photo stays a faint backdrop: the club and its people lead, not the product */}
        <OptimizedImage
          src={HERO_IMAGE.src}
          alt={isDE ? 'Cannabis-Pflanze in der Wachstumsphase' : 'Cannabis plant in vegetative growth stage'}
          fill
          className="object-cover"
          style={{ opacity: 0.12 }}
          priority
          sizes={HERO_IMAGE.sizes}
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: HERO_FADE }} />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: HERO_GLOW }} />

        <div className={`relative ${CONTAINER} pt-28 pb-16 lg:pt-32 lg:pb-20 min-h-[70vh] lg:min-h-[88vh] flex items-center`}>
          <div className="w-full">
            <HomeHero>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium mb-8 ring-1 ring-inset ring-accent/20">
                <Check className="w-4 h-4 shrink-0" />
                <span>
                  {isDE ? 'Anbaulizenz erteilt — ' : 'Cultivation license granted — '}
                  <span className="whitespace-nowrap">{isDE ? '18. März 2026' : 'March 18, 2026'}</span>
                </span>
              </div>

              <h1
                className="font-heading font-bold leading-[1.08] tracking-[-0.01em] mb-6 max-w-3xl text-balance"
                style={{ fontSize: 'clamp(2.25rem, 1.4rem + 3.6vw, 3.75rem)' }}
              >
                {isDE
                  ? 'Cannabis Social Club Hildesheim — Anbaustart steht bevor.'
                  : 'Cannabis Social Club Hildesheim — Growing start coming soon.'}
              </h1>

              <p className="text-lg leading-relaxed mb-10 max-w-2xl text-ink-muted">
                {isDE
                  ? 'BlattWerk e.V. ist ein Cannabis Social Club in Hildesheim — mit erteilter Anbaulizenz. Räume stehen, Nutzungsänderung genehmigt — der Anbau startet in Kürze. Gemeinschaft, Qualität und Transparenz.'
                  : 'BlattWerk e.V. is a Cannabis Social Club in Hildesheim — with a granted cultivation license. Premises secured, change-of-use permit approved — growing starts soon. Community, quality and transparency.'}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/mitgliedschaft"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[var(--on-accent)] rounded-lg shadow-sm transition-all duration-200 hover:opacity-90 motion-safe:hover:-translate-y-0.5"
                  style={{ background: 'var(--accent)' }}
                >
                  {isDE ? 'Mitgliedschaft' : 'Membership'} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/ueber-uns"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-ink border border-[var(--border)] bg-bg-elevated/60 rounded-lg hover:bg-bg-surface transition-colors duration-200"
                >
                  {t('learn_more')}
                </Link>
              </div>
            </HomeHero>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TIMELINE — where we are
          Mobile/tablet: compact vertical timeline. Desktop: four nodes on a line.
      ═══════════════════════════════════════ */}
      <HomeSection className={`${SECTION_Y} bg-bg-surface`} labelledBy="home-milestones-title">
        <div className={CONTAINER}>
          <SectionIntro
            id="home-milestones-title"
            eyebrow={isDE ? 'Meilensteine' : 'Milestones'}
            title={isDE ? 'Unser Weg — vom Verein zur Anbauvereinigung' : 'Our journey — from club to cultivation association'}
          />

          <ol className="max-w-2xl lg:max-w-none lg:grid lg:grid-cols-4 lg:gap-6">
            {milestones.map(({ icon: Icon, status, title, text, date }, index) => {
              const isActive = status === 'active';
              const isLast = index === milestones.length - 1;
              return (
                <li key={title} className="relative flex gap-4 pb-7 last:pb-0 lg:flex-col lg:gap-0 lg:pb-0">
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="absolute left-5 top-12 bottom-2 w-px -translate-x-1/2 bg-accent/30 lg:left-12 lg:-right-4 lg:top-5 lg:bottom-auto lg:h-px lg:w-auto lg:translate-x-0"
                    />
                  )}

                  <span className="relative flex h-10 w-10 shrink-0 items-center justify-center">
                    {isActive && (
                      <span aria-hidden="true" className="absolute inset-0 rounded-full bg-accent/25 motion-safe:animate-ping" />
                    )}
                    <span
                      className={`relative flex h-10 w-10 items-center justify-center rounded-full ${
                        isActive
                          ? 'bg-accent text-white ring-4 ring-accent/20'
                          : 'border border-accent/30 bg-bg-elevated text-accent'
                      }`}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </span>
                  </span>

                  <div
                    className={`min-w-0 flex-1 pt-1 lg:mt-5 lg:p-5 lg:rounded-2xl lg:border ${
                      isActive ? 'lg:border-accent/50 lg:bg-bg-elevated lg:shadow-sm' : 'lg:border-[var(--border)] lg:bg-bg-elevated'
                    }`}
                  >
                    <p className={`mb-1 flex items-center gap-1.5 text-xs font-mono ${isActive ? 'text-accent font-semibold' : 'text-ink-faint'}`}>
                      {!isActive && <Check className="w-3.5 h-3.5 text-accent" aria-hidden="true" />}
                      {date}
                      <span className="sr-only">
                        {isActive ? (isDE ? ' (aktuell)' : ' (in progress)') : (isDE ? ' (erledigt)' : ' (completed)')}
                      </span>
                    </p>
                    <h3 className="font-heading font-semibold mb-1">{title}</h3>
                    <p className="text-sm text-ink-muted leading-relaxed">{text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </HomeSection>

      {/* ═══════════════════════════════════════
          ABOUT — who we are: real people first
      ═══════════════════════════════════════ */}
      <HomeSection className={`${SECTION_Y} overflow-hidden`} labelledBy="home-about-title">
        <div className={CONTAINER}>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-x-14 lg:gap-y-6">
            <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:self-end">
              <Eyebrow>{isDE ? 'Über uns' : 'About Us'}</Eyebrow>
              <h2 id="home-about-title" className="font-heading font-bold text-3xl lg:text-4xl leading-tight text-balance">
                {isDE
                  ? 'Mehr als ein Verein — eine Gemeinschaft'
                  : 'More than a club — a community'}
              </h2>
            </div>

            <figure className="lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:row-span-2 lg:self-center">
              <div className="relative">
                <div aria-hidden="true" className="absolute -inset-3 sm:-inset-4 rotate-1 lg:rotate-2 rounded-[2rem] bg-accent/10" />
                <div
                  className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-bg-surface"
                  style={{ boxShadow: PHOTO_SHADOW }}
                >
                  <OptimizedImage
                    src="/images/maryjane-2026-team.jpg"
                    alt={isDE
                      ? 'Sieben Mitglieder von BlattWerk e.V. stehen gemeinsam auf einer Dachterrasse unter Lichterketten am Abend'
                      : 'Seven members of BlattWerk e.V. standing together on a rooftop terrace under string lights in the evening'}
                    width={4000}
                    height={2293}
                    className="block w-full h-auto"
                    sizes="(min-width: 1024px) 38rem, calc(100vw - 3rem)"
                  />
                </div>
              </div>
              <figcaption className="relative mt-5 flex items-center gap-2 text-sm text-ink-muted">
                <Camera className="w-4 h-4 shrink-0 text-accent" aria-hidden="true" />
                {isDE ? 'Unser Team bei der Mary Jane Berlin 2026' : 'Our team during Mary Jane Berlin 2026'}
              </figcaption>
            </figure>

            <div className="lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:self-start">
              <p className="text-ink-muted leading-relaxed mb-4">
                {isDE
                  ? 'BlattWerk e.V. steht für verantwortungsvollen, legalen Cannabisanbau in Hildesheim. Seit unserer Gründung setzen wir auf Transparenz, Aufklärung und eine starke Gemeinschaft.'
                  : 'BlattWerk e.V. stands for responsible, legal cannabis cultivation in Hildesheim. Since our founding, we\'ve prioritized transparency, education and a strong community.'}
              </p>
              <p className="text-ink-muted leading-relaxed mb-8">
                {isDE
                  ? 'Mit der Anbaulizenz im März 2026 haben wir den nächsten großen Schritt gemacht. Räume und Konzept stehen, die Nutzungsänderung ist genehmigt — als Nächstes startet der Anbau.'
                  : 'With our cultivation license in March 2026, we\'ve taken the next big step. Premises and concept are ready and the change-of-use permit has been approved — next up is the start of growing.'}
              </p>
              <Link
                href="/ueber-uns"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                {t('learn_more')} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <ul className="mt-12 lg:mt-16 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {[
              { icon: Users, title: isDE ? 'Gemeinschaft' : 'Community', text: isDE ? 'Engagierte Mitglieder mit gemeinsamer Vision' : 'Committed members with a shared vision' },
              { icon: Check, title: isDE ? 'Lizenziert' : 'Licensed', text: isDE ? 'Offiziell genehmigt nach KCanG' : 'Officially approved under KCanG' },
              { icon: BookOpen, title: isDE ? 'Aufklärung' : 'Education', text: isDE ? 'Wissen statt Klischees' : 'Knowledge over clichés' },
              { icon: Leaf, title: isDE ? 'Qualität' : 'Quality', text: isDE ? 'Kontrollierter Anbau, geprüfte Sorten' : 'Controlled cultivation, tested strains' },
            ].map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-start gap-4 rounded-2xl bg-bg-surface p-4 sm:flex-col sm:gap-0 sm:p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent sm:mb-4">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-heading font-semibold mb-1">{title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </HomeSection>

      {/* ═══════════════════════════════════════
          CTA — join us
      ═══════════════════════════════════════ */}
      {/* Glow lives in the section background: the reveal wrapper is transformed and would clip absolute children */}
      <HomeSection
        className="py-16 lg:py-20"
        style={{
          background: 'radial-gradient(60% 90% at 50% 0%, rgba(149, 213, 178, 0.14) 0%, transparent 70%), var(--bg-dark)',
          color: '#F5FAF7',
        }}
        labelledBy="home-cta-title"
      >
        <div className={`${CONTAINER} text-center`}>
          <h2 id="home-cta-title" className="font-heading font-bold text-3xl lg:text-4xl mb-4 leading-tight">
            {isDE ? 'Mitgliedschaft' : 'Membership'}
          </h2>
          <p className="text-base leading-relaxed opacity-75 max-w-xl mx-auto mb-8">
            {isDE
              ? 'Der Aufnahmeantrag erfolgt über die Hanf-App. Mitglied werden können Erwachsene ab 21 Jahren mit Wohnsitz in Deutschland.'
              : 'Membership applications are made via the Hanf-App. Membership is open to adults aged 21 and over residing in Germany.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
              {isDE ? 'Infos zur Mitgliedschaft' : 'Membership info'}
            </Link>
          </div>
        </div>
      </HomeSection>

      {/* ═══════════════════════════════════════
          QUICK LINKS — explore more
      ═══════════════════════════════════════ */}
      <HomeSection className={`${SECTION_Y} bg-bg-surface`} labelledBy="home-explore-title">
        <div className={CONTAINER}>
          <SectionIntro
            id="home-explore-title"
            eyebrow={isDE ? 'Mehr entdecken' : 'Explore More'}
            title={isDE ? 'Alle Bereiche im Überblick' : 'Everything in one place'}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {[
              {
                icon: Calendar,
                title: 'Events',
                text: isDE
                  ? 'Infoveranstaltungen, Workshops und Vereinstreffen'
                  : 'Info events, workshops and club meetings',
                href: '/events' as const,
              },
              {
                icon: Shield,
                title: isDE ? 'Suchtprävention' : 'Prevention',
                text: isDE
                  ? 'Unser Präventionskonzept und Beratungsangebote'
                  : 'Our prevention concept and counseling services',
                href: '/suchtpraevention' as const,
              },
              {
                icon: Sprout,
                title: isDE ? 'CSC gründen' : 'Start a CSC',
                text: isDE
                  ? 'Praxisleitfaden für deine eigene Anbauvereinigung'
                  : 'Practical guide for your own cultivation association',
                href: '/csc-gruendung' as const,
              },
              {
                icon: Mail,
                title: isDE ? 'Kontakt' : 'Contact',
                text: isDE
                  ? 'Fragen? Schreib uns — wir antworten persönlich'
                  : 'Questions? Write us — we respond personally',
                href: '/kontakt' as const,
              },
            ].map(({ icon: Icon, title, text, href }) => (
              <Link
                key={href}
                href={href}
                className={`group flex flex-col p-5 rounded-2xl border border-[var(--border)] bg-bg-elevated ${CARD_HOVER}`}
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <h3 className="font-heading font-semibold mb-1.5 group-hover:text-accent transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed mb-4">{text}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-accent">
                  {title} <ArrowRight className="w-3 h-3 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </HomeSection>

      {/* ═══════════════════════════════════════
          STRAINS — preview
      ═══════════════════════════════════════ */}
      <HomeSection className={SECTION_Y} labelledBy="home-strains-title">
        <div className={CONTAINER}>
          <SectionIntro
            id="home-strains-title"
            eyebrow={t('strain_label')}
            title={isDE ? 'Sortendatenbank' : 'Strain Database'}
            action={
              <Link
                href="/sortendatenbank"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline shrink-0"
              >
                {t('explore_strains')} <ArrowRight className="w-4 h-4" />
              </Link>
            }
          />

          <div className="grid md:grid-cols-3 gap-5">
            {strains.slice(0, 3).map((strain) => (
              <Link
                key={strain.slug}
                href={`/sortendatenbank/${strain.slug}`}
                className={`group p-6 rounded-2xl border border-[var(--border)] bg-bg-elevated ${CARD_HOVER}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                    {strain.type}
                  </span>
                  <span className="text-xs text-ink-faint">
                    THC {formatPercent(strain.cannabinoids.thc, isDE ? 'de' : 'en')}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                  {strain.name}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed line-clamp-2">
                  {isDE ? strain.description_de : strain.description_en}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </HomeSection>

      {/* ═══════════════════════════════════════
          KNOWLEDGE — article previews
      ═══════════════════════════════════════ */}
      <HomeSection className={`${SECTION_Y} bg-bg-surface`} labelledBy="home-knowledge-title">
        <div className={CONTAINER}>
          <SectionIntro
            id="home-knowledge-title"
            tone="gold"
            eyebrow={t('knowledge_label')}
            title={t('section_knowledge_title')}
            action={
              <Link
                href="/wissensdatenbank"
                className="inline-flex items-center gap-2 text-sm font-medium text-gold-theme hover:underline shrink-0"
              >
                {t('explore_knowledge')} <ArrowRight className="w-4 h-4" />
              </Link>
            }
          />

          <div className="grid md:grid-cols-3 gap-5">
            {allArticles.slice(0, 3).map((article) => (
              <Link
                key={article.slug}
                href={`/wissensdatenbank/${article.category}/${article.slug}`}
                className={`group p-6 rounded-2xl bg-bg-elevated border border-[var(--border)] ${CARD_HOVER}`}
              >
                <span className="text-xs font-medium text-ink-faint mb-3 block">
                  {article.reading_time} min · {article.tags.slice(0, 2).join(', ')}
                </span>
                <h3 className="font-heading font-semibold text-base mb-2 group-hover:text-accent transition-colors leading-snug">
                  {isDE ? article.title_de : article.title_en}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed line-clamp-2">
                  {isDE ? article.summary_de : article.summary_en}
                </p>
              </Link>
            ))}
          </div>

          {/* Knowledge category quick links */}
          <div className="mt-10 pt-8 border-t border-[var(--border)]">
            <p className="text-sm font-medium text-ink-muted mb-4">
              {isDE ? 'Alle Themengebiete' : 'All Topics'}
            </p>
            <div className="flex flex-wrap gap-2">
              {allCategories.map((cat) => (
                <Link
                  key={cat.key}
                  href={`/wissensdatenbank/${cat.key}`}
                  className="px-3 py-1.5 text-sm rounded-full border border-[var(--border)] bg-bg-elevated text-ink-muted hover:text-accent hover:border-accent/30 transition-colors"
                >
                  {isDE ? cat.label_de : cat.label_en}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </HomeSection>

      {/* ═══════════════════════════════════════
          BLOG — latest news
      ═══════════════════════════════════════ */}
      <HomeSection className={SECTION_Y} labelledBy="home-news-title">
        <div className={CONTAINER}>
          <SectionIntro
            id="home-news-title"
            icon={Newspaper}
            eyebrow={isDE ? 'Neuigkeiten' : 'News'}
            title={isDE ? 'Aktuelles aus dem Verein' : 'Latest from the club'}
            action={
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline shrink-0"
              >
                {isDE ? 'Alle Beiträge' : 'All posts'} <ArrowRight className="w-4 h-4" />
              </Link>
            }
          />

          <div className="grid md:grid-cols-3 gap-5">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`group flex flex-col p-6 rounded-2xl border border-[var(--border)] bg-bg-elevated ${CARD_HOVER}`}
              >
                <div className="flex items-center gap-2 mb-3 text-xs font-medium text-ink-faint">
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  <time dateTime={post.date}>{formatPostDate(post.date, isDE)}</time>
                </div>
                <h3 className="font-heading font-semibold text-base mb-2 group-hover:text-accent transition-colors leading-snug">
                  {isDE ? post.title_de : post.title_en}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed line-clamp-2">
                  {isDE ? post.summary_de : post.summary_en}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </HomeSection>
    </>
  );
}

/* ─── Section heading helpers ─── */

interface EyebrowProps {
  readonly children: ReactNode;
  readonly tone?: 'accent' | 'gold';
  readonly icon?: LucideIcon;
}

function Eyebrow({ children, tone = 'accent', icon: Icon }: EyebrowProps) {
  const toneClass = tone === 'gold' ? 'text-gold-theme' : 'text-accent';
  return (
    <p className={`mb-3 inline-flex items-center gap-2 text-[0.8125rem] font-semibold uppercase tracking-[0.12em] ${toneClass}`}>
      {Icon
        ? <Icon className="w-4 h-4" aria-hidden="true" />
        : <span aria-hidden="true" className="h-px w-6 bg-current opacity-60" />}
      {children}
    </p>
  );
}

interface SectionIntroProps {
  readonly id: string;
  readonly eyebrow: ReactNode;
  readonly title: ReactNode;
  readonly tone?: 'accent' | 'gold';
  readonly icon?: LucideIcon;
  /** Optional link shown next to the heading on wider screens */
  readonly action?: ReactNode;
}

function SectionIntro({ id, eyebrow, title, tone, icon, action }: SectionIntroProps) {
  return (
    <div className="mb-10 lg:mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <Eyebrow tone={tone} icon={icon}>{eyebrow}</Eyebrow>
        <h2 id={id} className="font-heading font-bold text-2xl sm:text-3xl leading-tight text-balance">
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}
