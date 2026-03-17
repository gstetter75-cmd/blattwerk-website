import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, ArrowRight, Tag } from 'lucide-react';
import {
  allCategories,
  getArticlesByCategory,
  getCategoryByKey,
} from '@/data/knowledge';

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

  if (!category) {
    notFound();
  }

  const articles = getArticlesByCategory(categoryKey);

  return (
    <>
      {/* Header */}
      <section className="bg-deep-forest text-warm-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/wissensdatenbank"
            className="inline-flex items-center gap-2 text-warm-white/60 hover:text-warm-white transition-colors mb-6 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            {isDE ? 'Zurück zur Übersicht' : 'Back to overview'}
          </Link>
          <h1 className="font-heading text-3xl sm:text-4xl mb-3">
            {isDE ? category.label_de : category.label_en}
          </h1>
          <p className="text-warm-white/70 max-w-2xl">
            {isDE ? category.description_de : category.description_en}
          </p>
        </div>
      </section>

      {/* Article List */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/wissensdatenbank/${categoryKey}/${article.slug}`}
                className="group block bg-warm-white border border-sand/50 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-amber/30 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <h2 className="font-heading text-xl text-deep-forest mb-2 group-hover:text-amber transition-colors">
                      {isDE ? article.title_de : article.title_en}
                    </h2>
                    <p className="text-charcoal/70 leading-relaxed mb-3">
                      {isDE ? article.summary_de : article.summary_en}
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1 text-xs text-sage">
                        <Clock className="w-3.5 h-3.5" />
                        {article.reading_time} min {isDE ? 'Lesezeit' : 'read'}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 px-2 py-0.5 bg-sand/40 text-xs text-sage rounded-full"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 self-center">
                    <ArrowRight className="w-5 h-5 text-sage group-hover:text-amber group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {articles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-sage">
                {isDE
                  ? 'Noch keine Artikel in dieser Kategorie.'
                  : 'No articles in this category yet.'}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
