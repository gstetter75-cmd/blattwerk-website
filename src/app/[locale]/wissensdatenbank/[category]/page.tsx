import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, ArrowRight, Tag } from 'lucide-react';
import { allCategories, getArticlesByCategory, getCategoryByKey } from '@/data/knowledge';

export function generateStaticParams() {
  return allCategories.flatMap((cat) => [
    { locale: 'de', category: cat.key },
    { locale: 'en', category: cat.key },
  ]);
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category: categoryKey } = await params;
  setRequestLocale(locale);
  const isDE = locale === 'de';

  const category = getCategoryByKey(categoryKey);
  if (!category) notFound();

  const articles = getArticlesByCategory(categoryKey);

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden py-12 lg:py-16 border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/wissensdatenbank"
            className="inline-flex items-center gap-2 text-ink-faint hover:text-ink transition-colors mb-6 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            {isDE ? 'Zurück zur Übersicht' : 'Back to overview'}
          </Link>
          <h1 className="font-heading italic font-medium text-ink mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            {isDE ? category.label_de : category.label_en}
          </h1>
          <p className="text-ink-muted max-w-2xl">
            {isDE ? category.description_de : category.description_en}
          </p>
        </div>
      </section>

      {/* Article List */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/wissensdatenbank/${categoryKey}/${article.slug}`}
                className="group flex gap-5 rounded-xl border border-[var(--border)] hover:border-accent/30 p-5 transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'var(--glass)', backdropFilter: 'blur(12px)' }}
              >
                <div className="flex-1 min-w-0">
                  <h2 className="font-heading italic text-xl text-ink mb-2 group-hover:text-accent transition-colors">
                    {isDE ? article.title_de : article.title_en}
                  </h2>
                  <p className="text-ink-muted leading-relaxed text-sm mb-3">
                    {isDE ? article.summary_de : article.summary_en}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1 text-xs text-ink-faint">
                      <Clock className="w-3.5 h-3.5" />
                      {article.reading_time} min {isDE ? 'Lesezeit' : 'read'}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-2 py-0.5 bg-accent/10 text-xs text-accent rounded-full"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="shrink-0 self-center">
                  <ArrowRight className="w-5 h-5 text-ink-faint group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>

          {articles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-ink-muted">
                {isDE ? 'Noch keine Artikel in dieser Kategorie.' : 'No articles in this category yet.'}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
