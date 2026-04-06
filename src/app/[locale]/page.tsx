import { createMetadata, PAGE_META } from '@/lib/metadata';
import { useTranslations, useLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowRight, ExternalLink, Check, Sprout, Sun, Leaf, BookOpen, Users, Newspaper, Calendar, Shield, Mail } from 'lucide-react';
import { strains } from '@/data/strains';
import { allArticles, allCategories } from '@/data/knowledge';
import { blogPosts } from '@/data/blog';
import { HomeHero, HomeSection } from '@/components/home/HomeAnimations';
import { OrganizationSchema, WebSiteSchema, LocalBusinessSchema } from '@/lib/schema';
import { OptimizedImage } from '@/components/OptimizedImage';

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

  return (
    <>
      {/* ═══════════════════════════════════════
          HERO — Club story front and center
      ═══════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <OptimizedImage
          src="/images/cannabis-plant-veg.jpg"
          alt={isDE ? 'Cannabis-Pflanze in der Wachstumsphase' : 'Cannabis plant in vegetative growth stage'}
          fill
          className="object-cover"
          style={{ opacity: 0.12 }}
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, var(--bg) 0%, transparent 40%, transparent 60%, var(--bg) 100%)' }}
        />

        <div className="relative w-full max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-20">
          <HomeHero>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8">
              <Check className="w-4 h-4" />
              {isDE ? 'Anbaulizenz erteilt — 18. März 2026' : 'Cultivation license granted — March 18, 2026'}
            </div>

            <h1
              className="font-heading font-bold leading-[1.05] mb-6 max-w-4xl"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            >
              {isDE
                ? 'Cannabis Social Club Hildesheim — Wir bauen an.'
                : 'Cannabis Social Club Hildesheim — We\'re Growing.'}
            </h1>

            <p className="text-lg leading-relaxed mb-10 max-w-2xl text-ink-muted">
              {isDE
                ? 'BlattWerk e.V. ist ein Cannabis Social Club in Hildesheim — mit erteilter Anbaulizenz und aktivem Anbau. Gemeinschaft, Qualität und Transparenz.'
                : 'BlattWerk e.V. is a Cannabis Social Club in Hildesheim — with a granted cultivation license and active growing. Community, quality and transparency.'}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/mitgliedschaft"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white rounded-lg transition-all duration-200 hover:opacity-90"
                style={{ background: 'var(--accent)' }}
              >
                {isDE ? 'Mitglied werden' : 'Become a member'} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/ueber-uns"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-ink-muted border border-[var(--border)] rounded-lg hover:bg-bg-surface transition-colors duration-200"
              >
                {t('learn_more')}
              </Link>
            </div>
          </HomeHero>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TIMELINE — where we are
      ═══════════════════════════════════════ */}
      <HomeSection>
        <section className="py-16 lg:py-24 border-t border-[var(--border)]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-sm font-medium text-accent mb-4">
              {isDE ? 'Unser Weg' : 'Our Journey'}
            </p>
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-12">
              {isDE ? 'Unser Weg — vom Verein zum aktiven Anbau' : 'Our journey — from club to active growing'}
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  icon: Users,
                  status: 'done' as const,
                  title: isDE ? 'Vereinsgründung' : 'Club founded',
                  text: isDE ? 'Eingetragen im Vereinsregister Hildesheim' : 'Registered in Hildesheim association register',
                  date: '04.09.2025',
                },
                {
                  icon: Check,
                  status: 'done' as const,
                  title: isDE ? 'Anbaulizenz' : 'Cultivation license',
                  text: isDE ? 'Offizielle Genehmigung zum gemeinschaftlichen Anbau' : 'Official permit for communal cultivation',
                  date: '18.03.2026',
                },
                {
                  icon: Sprout,
                  status: 'active' as const,
                  title: isDE ? 'Anbau läuft' : 'Growing in progress',
                  text: isDE ? 'Infrastruktur aufbauen, erste Pflanzen setzen' : 'Building infrastructure, planting first crops',
                  date: isDE ? 'Jetzt' : 'Now',
                },
                {
                  icon: Sun,
                  status: 'upcoming' as const,
                  title: isDE ? 'Erste Ernte' : 'First harvest',
                  text: isDE ? 'Qualitätsgeprüft, für unsere Mitglieder' : 'Quality-tested, for our members',
                  date: isDE ? 'Bald' : 'Soon',
                },
              ].map(({ icon: Icon, status, title, text, date }) => (
                <div
                  key={title}
                  className={`relative p-6 rounded-xl border transition-all ${
                    status === 'active'
                      ? 'border-accent bg-accent/5'
                      : status === 'done'
                      ? 'border-[var(--border)] bg-bg-elevated'
                      : 'border-dashed border-[var(--border)] bg-bg'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                    status === 'done'
                      ? 'bg-accent/10 text-accent'
                      : status === 'active'
                      ? 'bg-accent text-white'
                      : 'bg-bg-surface text-ink-faint'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-mono text-ink-faint mb-2">{date}</p>
                  <h3 className="font-heading font-semibold mb-1.5">{title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{text}</p>
                  {status === 'done' && (
                    <div className="absolute top-4 right-4">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </HomeSection>

      {/* ═══════════════════════════════════════
          ABOUT — who we are (short, punchy)
      ═══════════════════════════════════════ */}
      <HomeSection>
        <section className="py-20 lg:py-28 bg-bg-surface">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-medium text-accent mb-4">
                  {isDE ? 'Über uns' : 'About Us'}
                </p>
                <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6 leading-tight">
                  {isDE
                    ? 'Mehr als ein Verein — eine Gemeinschaft'
                    : 'More than a club — a community'}
                </h2>
                <p className="text-ink-muted leading-relaxed mb-4">
                  {isDE
                    ? 'BlattWerk e.V. steht für verantwortungsvollen, legalen Cannabisanbau in Hildesheim. Seit unserer Gründung setzen wir auf Transparenz, Aufklärung und eine starke Gemeinschaft.'
                    : 'BlattWerk e.V. stands for responsible, legal cannabis cultivation in Hildesheim. Since our founding, we\'ve prioritized transparency, education and a strong community.'}
                </p>
                <p className="text-ink-muted leading-relaxed mb-8">
                  {isDE
                    ? 'Mit der Anbaulizenz im März 2026 haben wir den nächsten großen Schritt gemacht. Jetzt bauen wir an — und du kannst Teil davon sein.'
                    : 'With our cultivation license in March 2026, we\'ve taken the next big step. Now we\'re growing — and you can be part of it.'}
                </p>
                <Link
                  href="/ueber-uns"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                >
                  {t('learn_more')} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, title: isDE ? 'Gemeinschaft' : 'Community', text: isDE ? 'Aktive Mitglieder, die gemeinsam anbauen' : 'Active members growing together' },
                  { icon: Check, title: isDE ? 'Lizenziert' : 'Licensed', text: isDE ? 'Offiziell genehmigt nach KCanG' : 'Officially approved under KCanG' },
                  { icon: BookOpen, title: isDE ? 'Aufklärung' : 'Education', text: isDE ? 'Wissen statt Klischees' : 'Knowledge over clichés' },
                  { icon: Leaf, title: isDE ? 'Qualität' : 'Quality', text: isDE ? 'Kontrollierter Anbau, geprüfte Sorten' : 'Controlled cultivation, tested strains' },
                ].map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="p-5 rounded-xl border border-[var(--border)] bg-bg-elevated"
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
          CTA — join us
      ═══════════════════════════════════════ */}
      <HomeSection>
        <section className="py-16 lg:py-20" style={{ background: 'var(--bg-dark)', color: '#F5FAF7' }}>
          <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4 leading-tight">
              {isDE ? 'Werde Teil von BlattWerk' : 'Join BlattWerk'}
            </h2>
            <p className="text-base leading-relaxed opacity-70 max-w-xl mx-auto mb-8">
              {isDE
                ? 'Wir suchen Mitglieder, die mit uns anbauen und lernen wollen. Der Beitritt erfolgt über die Hanf-App.'
                : 'We\'re looking for members who want to grow and learn with us. Join via the Hanf-App.'}
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
        </section>
      </HomeSection>

      {/* ═══════════════════════════════════════
          QUICK LINKS — explore more
      ═══════════════════════════════════════ */}
      <HomeSection>
        <section className="py-16 lg:py-24 border-t border-[var(--border)]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-sm font-medium text-accent mb-4">
              {isDE ? 'Mehr entdecken' : 'Explore More'}
            </p>
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-10">
              {isDE ? 'Mehr entdecken' : 'Explore More'}
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                  className="group flex flex-col p-5 rounded-xl border border-[var(--border)] bg-bg-elevated hover:shadow-md transition-all duration-200"
                >
                  <Icon className="w-5 h-5 text-accent mb-3" />
                  <h3 className="font-heading font-semibold text-sm mb-1.5 group-hover:text-accent transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs text-ink-muted leading-relaxed mb-3">{text}</p>
                  <span className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-accent">
                    {isDE ? 'Mehr erfahren' : 'Learn more'} <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </HomeSection>

      {/* ═══════════════════════════════════════
          STRAINS — preview
      ═══════════════════════════════════════ */}
      <HomeSection>
        <section className="py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <p className="text-sm font-medium text-accent mb-3">
                  {t('strain_label')}
                </p>
                <h2 className="font-heading font-bold text-2xl lg:text-3xl leading-tight">
                  {isDE ? 'Unsere Sorten' : 'Our Strains'}
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
                    {isDE ? strain.description_de : strain.description_en}
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
        <section className="py-20 lg:py-28 bg-bg-surface">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <p className="text-sm font-medium text-gold-theme mb-3">
                  {t('knowledge_label')}
                </p>
                <h2 className="font-heading font-bold text-2xl lg:text-3xl leading-tight">
                  {t('section_knowledge_title')}
                </h2>
              </div>
              <Link
                href="/wissensdatenbank"
                className="inline-flex items-center gap-2 text-sm font-medium text-gold-theme hover:underline shrink-0"
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
        </section>
      </HomeSection>

      {/* ═══════════════════════════════════════
          BLOG — latest news
      ═══════════════════════════════════════ */}
      <HomeSection>
        <section className="py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <p className="text-sm font-medium text-accent mb-3">
                  <Newspaper className="w-4 h-4 inline-block mr-1.5 -mt-0.5" />
                  {isDE ? 'Neuigkeiten' : 'News'}
                </p>
                <h2 className="font-heading font-bold text-2xl lg:text-3xl leading-tight">
                  {isDE ? 'Aktuelles aus dem Verein' : 'Latest from the club'}
                </h2>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline shrink-0"
              >
                {isDE ? 'Alle Beiträge' : 'All posts'} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {blogPosts.slice(0, 3).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group p-6 rounded-xl border border-[var(--border)] bg-bg-elevated hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-3.5 h-3.5 text-ink-faint" />
                    <span className="text-xs font-mono text-ink-faint">{post.date}</span>
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
        </section>
      </HomeSection>
    </>
  );
}
