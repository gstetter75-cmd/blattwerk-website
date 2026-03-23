import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Scale, HeartPulse, Atom, Droplets, Sprout, Landmark, Stethoscope, Search, ArrowRight } from 'lucide-react';
import { allCategories, getArticlesByCategory } from '@/data/knowledge';
import { PageHero } from '@/components/layout/PageHero';

const iconMap: Record<string, React.ElementType> = {
  Scale,
  HeartPulse,
  Atom,
  Droplets,
  Sprout,
  Landmark,
  Stethoscope,
};

export default async function KnowledgeBasePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isDE = locale === 'de';

  return (
    <>
      <PageHero
        title={isDE ? 'Wissensdatenbank' : 'Knowledge Base'}
        subtitle={isDE ? 'Fundiertes Wissen rund um Cannabis – von der Rechtslage über Gesundheit bis zum Anbau.' : 'In-depth knowledge about cannabis – from legal aspects to health and cultivation.'}
      />

      {/* Search */}
      <section className="py-8 border-b border-[var(--border)]">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Search className="absolute left-8 sm:left-10 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-faint pointer-events-none" />
          <input
            type="text"
            placeholder={isDE ? 'Artikel durchsuchen...' : 'Search articles...'}
            className="w-full pl-10 pr-4 py-3 bg-bg-elevated border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 text-ink placeholder:text-ink-faint text-sm transition-colors"
            disabled
          />
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {allCategories.map((category) => {
              const Icon = iconMap[category.icon] ?? Atom;
              const articleCount = getArticlesByCategory(category.key).length;

              return (
                <Link
                  key={category.key}
                  href={`/wissensdatenbank/${category.key}`}
                  className="group rounded-xl border border-[var(--border)] hover:border-accent/30 p-6 transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: 'var(--glass)', backdropFilter: 'blur(12px)' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="font-heading italic text-xl text-ink mb-1 group-hover:text-accent transition-colors">
                        {isDE ? category.label_de : category.label_en}
                      </h2>
                      <p className="text-xs text-ink-faint mb-2">
                        {articleCount} {isDE ? 'Artikel' : articleCount === 1 ? 'Article' : 'Articles'}
                      </p>
                      <p className="text-sm text-ink-muted leading-relaxed">
                        {isDE ? category.description_de : category.description_en}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-sm text-accent font-medium">
                    {isDE ? 'Alle Artikel' : 'All articles'}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 bg-bg-elevated rounded-lg border border-[var(--border)]">
            <p className="text-xs text-ink-muted text-center leading-relaxed">
              {isDE
                ? 'Hinweis: Die Informationen in unserer Wissensdatenbank dienen der allgemeinen Aufklärung und ersetzen keine medizinische oder rechtliche Beratung. Bei gesundheitlichen Fragen wende dich bitte an einen Arzt.'
                : 'Note: The information in our knowledge base is for general education and does not replace medical or legal advice. For health questions, please consult a doctor.'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
