import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  Clock,
  Calendar,
  Tag,
  AlertTriangle,
  BookOpen,
} from 'lucide-react';
import {
  allArticles,
  getArticleBySlug,
  getCategoryByKey,
} from '@/data/knowledge';

export function generateStaticParams() {
  return allArticles.flatMap((article) => [
    { locale: 'de', category: article.category, slug: article.slug },
    { locale: 'en', category: article.category, slug: article.slug },
  ]);
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; category: string; slug: string }>;
}) {
  const { locale, category: categoryKey, slug } = await params;
  setRequestLocale(locale);

  const isDE = locale === 'de';
  const article = getArticleBySlug(slug);
  const category = getCategoryByKey(categoryKey);

  if (!article || !category || article.category !== categoryKey) {
    notFound();
  }

  const title = isDE ? article.title_de : article.title_en;
  const summary = isDE ? article.summary_de : article.summary_en;
  const content = isDE ? article.content_de : article.content_en;
  const paragraphs = content.split('\n\n').filter(Boolean);

  const relatedArticles = article.related_slugs
    .map((s) => allArticles.find((a) => a.slug === s))
    .filter(Boolean);

  const isLegalOrMedical =
    article.category === 'legal' || article.category === 'medicine';

  return (
    <>
      {/* Header */}
      <section className="bg-deep-forest text-warm-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/wissensdatenbank/${categoryKey}`}
            className="inline-flex items-center gap-2 text-warm-white/60 hover:text-warm-white transition-colors mb-6 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            {isDE ? category.label_de : category.label_en}
          </Link>
          <h1 className="font-heading text-3xl sm:text-4xl mb-4">{title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-warm-white/60">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {article.reading_time} min {isDE ? 'Lesezeit' : 'read'}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {isDE ? 'Aktualisiert: ' : 'Updated: '}
              {article.last_updated}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Summary Box */}
          <div className="bg-sand/30 border border-sand/50 rounded-xl p-6 mb-10">
            <p className="text-charcoal/80 leading-relaxed font-medium">
              {summary}
            </p>
          </div>

          {/* Legal/Medical Disclaimer */}
          {isLegalOrMedical && (
            <div className="bg-amber/10 border border-amber/30 rounded-lg p-4 mb-10 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber shrink-0 mt-0.5" />
              <p className="text-sm text-charcoal/70">
                {article.category === 'legal'
                  ? isDE
                    ? 'Hinweis: Dieser Artikel dient der allgemeinen Information und ersetzt keine Rechtsberatung. Die Rechtslage kann sich ändern. Stand: ' +
                      article.last_updated
                    : 'Note: This article is for general information and does not replace legal advice. The legal situation may change. As of: ' +
                      article.last_updated
                  : isDE
                    ? 'Hinweis: Dieser Artikel dient der allgemeinen Information und ersetzt keine ärztliche Beratung. Bei gesundheitlichen Fragen wende dich bitte an einen Arzt.'
                    : 'Note: This article is for general information and does not replace medical advice. For health questions, please consult a doctor.'}
              </p>
            </div>
          )}

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-charcoal/80 leading-relaxed mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-sand/50">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sand/30 text-sm text-sage rounded-full"
                >
                  <Tag className="w-3.5 h-3.5" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-12">
              <h2 className="font-heading text-2xl text-deep-forest mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-amber" />
                {isDE ? 'Verwandte Artikel' : 'Related Articles'}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedArticles.map((related) => {
                  if (!related) return null;
                  return (
                    <Link
                      key={related.slug}
                      href={`/wissensdatenbank/${related.category}/${related.slug}`}
                      className="group block bg-warm-white border border-sand/50 rounded-lg p-4 hover:border-amber/30 hover:shadow-sm transition-all"
                    >
                      <h3 className="font-heading text-base text-deep-forest mb-1 group-hover:text-amber transition-colors">
                        {isDE ? related.title_de : related.title_en}
                      </h3>
                      <p className="text-xs text-sage line-clamp-2">
                        {isDE ? related.summary_de : related.summary_en}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Back Link */}
          <div className="mt-12 pt-6 border-t border-sand/50">
            <Link
              href={`/wissensdatenbank/${categoryKey}`}
              className="inline-flex items-center gap-2 text-amber hover:text-amber/80 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              {isDE
                ? `Zurück zu ${category.label_de}`
                : `Back to ${category.label_en}`}
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
