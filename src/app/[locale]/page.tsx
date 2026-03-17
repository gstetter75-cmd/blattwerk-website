import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BookOpen, Database, Leaf, Users, ArrowRight, ExternalLink, Info } from 'lucide-react';

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
    { icon: Leaf, value: '12', label: t('stats_harvests') },
    { icon: Database, value: '50+', label: t('stats_strains') },
    { icon: BookOpen, value: '40+', label: t('stats_articles') },
    { icon: Users, value: '—', label: t('stats_members') },
  ];

  return (
    <>
      {/* Info Banner */}
      <div className="bg-sand/50 border-b border-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-sage shrink-0" />
          <p className="text-xs text-sage text-center">{t('info_banner')}</p>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-deep-forest mb-4">
            {t('hero_title')}
          </h1>
          <p className="text-lg sm:text-xl text-sage mb-6">{t('hero_subtitle')}</p>
          <p className="text-charcoal/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('hero_text')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sortendatenbank"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-deep-forest text-warm-white rounded-lg hover:bg-deep-forest/90 transition-colors"
            >
              {t('explore_strains')} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/wissensdatenbank"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-deep-forest text-deep-forest rounded-lg hover:bg-deep-forest/5 transition-colors"
            >
              {t('explore_knowledge')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-sand/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="bg-warm-white rounded-lg p-6 text-center shadow-sm border border-sand/50"
              >
                <Icon className="w-8 h-8 text-amber mx-auto mb-3" />
                <p className="font-heading text-3xl text-deep-forest mb-1">{value}</p>
                <p className="text-sm text-sage">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl text-deep-forest mb-6">
              {t('section_about_title')}
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-8">{t('section_about_text')}</p>
            <Link
              href="/ueber-uns"
              className="inline-flex items-center gap-2 text-amber hover:text-amber/80 transition-colors font-medium"
            >
              {t('learn_more')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Strains & Knowledge Teaser */}
      <section className="bg-sand/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-warm-white rounded-lg p-8 shadow-sm border border-sand/50">
              <Database className="w-10 h-10 text-amber mb-4" />
              <h3 className="font-heading text-2xl text-deep-forest mb-3">
                {t('section_strains_title')}
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-6">{t('section_strains_text')}</p>
              <Link
                href="/sortendatenbank"
                className="inline-flex items-center gap-2 text-amber hover:text-amber/80 transition-colors font-medium"
              >
                {t('explore_strains')} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-warm-white rounded-lg p-8 shadow-sm border border-sand/50">
              <BookOpen className="w-10 h-10 text-amber mb-4" />
              <h3 className="font-heading text-2xl text-deep-forest mb-3">
                {t('section_knowledge_title')}
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-6">{t('section_knowledge_text')}</p>
              <Link
                href="/wissensdatenbank"
                className="inline-flex items-center gap-2 text-amber hover:text-amber/80 transition-colors font-medium"
              >
                {t('explore_knowledge')} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl text-deep-forest mb-6">
            {t('section_join_title')}
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto leading-relaxed mb-8">
            {t('section_join_text')}
          </p>
          <a
            href="https://diehanfapp.de"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-amber text-warm-white rounded-lg hover:bg-amber/90 transition-colors font-medium"
          >
            {t('section_join_button')} <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
