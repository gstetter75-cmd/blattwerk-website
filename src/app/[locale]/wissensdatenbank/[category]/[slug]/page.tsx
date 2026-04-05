import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { notFound } from 'next/navigation';
import { OptimizedImage } from '@/components/OptimizedImage';
import { ArrowLeft, Clock, Calendar, Tag, AlertTriangle, BookOpen, User } from 'lucide-react';
import { allArticles, getArticleBySlug, getCategoryByKey } from '@/data/knowledge';
import { ArticleSchema, BreadcrumbSchema } from '@/lib/schema';

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

  if (!article || !category || article.category !== categoryKey) notFound();

  const title = isDE ? article.title_de : article.title_en;
  const summary = isDE ? article.summary_de : article.summary_en;
  const content = isDE ? article.content_de : article.content_en;
  const paragraphs = content.split('\n\n').filter(Boolean);

  const relatedArticles = article.related_slugs
    .map((s) => allArticles.find((a) => a.slug === s))
    .filter(Boolean);

  const isLegalOrMedical = article.category === 'legal' || article.category === 'medicine';

  const glassStyle = { background: 'var(--glass)', backdropFilter: 'blur(12px)' } as const;

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'Home', href: '' },
          { name: isDE ? 'Wissensdatenbank' : 'Knowledge Base', href: '/wissensdatenbank' },
          { name: isDE ? category.label_de : category.label_en, href: `/wissensdatenbank/${categoryKey}` },
          { name: title, href: `/wissensdatenbank/${categoryKey}/${slug}` },
        ]}
      />
      <ArticleSchema
        title={title}
        description={summary}
        slug={slug}
        category={categoryKey}
        locale={locale}
        datePublished={article.last_updated}
        dateModified={article.last_updated}
        readingTime={article.reading_time}
        authorName="Redaktion BlattWerk e.V."
      />

      {/* Article Header */}
      <section className="relative overflow-hidden py-12 lg:py-16 border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/wissensdatenbank/${categoryKey}`}
            className="inline-flex items-center gap-2 text-ink-faint hover:text-ink transition-colors mb-6 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            {isDE ? category.label_de : category.label_en}
          </Link>
          <h1 className="font-heading font-bold text-3xl lg:text-4xl text-ink mb-4">
            {title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-ink-faint">
            <span className="inline-flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {isDE ? 'Redaktion BlattWerk e.V.' : 'BlattWerk e.V. Editorial'}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {article.reading_time} min {isDE ? 'Lesezeit' : 'read'}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {isDE ? 'Aktualisiert: ' : 'Updated: '}{article.last_updated}
            </span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero Image */}
          {article.images && article.images.length > 0 && (
            <div className="relative w-full rounded-xl overflow-hidden mb-8" style={{ aspectRatio: '16/7' }}>
              <OptimizedImage
                src={article.images[0].src}
                alt={isDE ? article.images[0].alt_de : article.images[0].alt_en}
                fill
                className="object-cover"
                style={{ opacity: 0.7 }}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--bg) 0%, transparent 40%)' }} />
            </div>
          )}

          {/* Summary Box */}
          <div className="rounded-xl border border-[var(--border)] p-6 mb-8" style={glassStyle}>
            <p className="text-ink leading-relaxed font-medium">{summary}</p>
          </div>

          {/* Legal/Medical Disclaimer */}
          {isLegalOrMedical && (
            <div className="flex items-start gap-3 p-4 bg-gold-theme/5 border border-gold-theme/20 rounded-lg mb-8">
              <AlertTriangle className="w-4 h-4 text-gold-theme shrink-0 mt-0.5 opacity-80" />
              <p className="text-sm text-ink-muted">
                {article.category === 'legal'
                  ? isDE
                    ? 'Hinweis: Dieser Artikel dient der allgemeinen Information und ersetzt keine Rechtsberatung. Die Rechtslage kann sich ändern. Stand: ' + article.last_updated
                    : 'Note: This article is for general information and does not replace legal advice. The legal situation may change. As of: ' + article.last_updated
                  : isDE
                    ? 'Hinweis: Dieser Artikel dient der allgemeinen Information und ersetzt keine ärztliche Beratung. Bei gesundheitlichen Fragen wende dich bitte an einen Arzt.'
                    : 'Note: This article is for general information and does not replace medical advice. For health questions, please consult a doctor.'}
              </p>
            </div>
          )}

          {/* Article Content */}
          <div className="space-y-5">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-ink-muted leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* E-E-A-T: Author & Sources */}
          <div className="mt-10 p-5 rounded-xl border border-[var(--border)] bg-bg-surface">
            <p className="text-sm font-medium text-ink mb-2">
              {isDE ? 'Über diesen Artikel' : 'About this article'}
            </p>
            <p className="text-xs text-ink-muted leading-relaxed mb-2">
              {isDE
                ? 'Verfasst und geprüft von der Redaktion BlattWerk e.V. — lizenzierte Anbauvereinigung in Hildesheim. Unsere Artikel basieren auf dem aktuellen Stand der Gesetzgebung, wissenschaftlichen Publikationen und unserer praktischen Erfahrung als Cannabis Social Club.'
                : 'Written and reviewed by the BlattWerk e.V. editorial team — licensed cultivation association in Hildesheim. Our articles are based on current legislation, scientific publications and our practical experience as a Cannabis Social Club.'}
            </p>
            <p className="text-xs text-ink-faint">
              {isDE
                ? `Zuletzt aktualisiert: ${article.last_updated} · Hast du einen Fehler gefunden oder fehlt etwas? `
                : `Last updated: ${article.last_updated} · Found an error or something missing? `}
              <Link href="/kontakt" className="text-accent hover:underline">
                {isDE ? 'Sag uns Bescheid' : 'Let us know'}
              </Link>
            </p>
          </div>

          {/* Tags */}
          <div className="mt-6 pt-6 border-t border-[var(--border)]">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-sm text-accent rounded-full"
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
              <h2 className="font-heading italic text-2xl text-ink mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-accent opacity-70" />
                {isDE ? 'Verwandte Artikel' : 'Related Articles'}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedArticles.map((related) => {
                  if (!related) return null;
                  return (
                    <Link
                      key={related.slug}
                      href={`/wissensdatenbank/${related.category}/${related.slug}`}
                      className="group block rounded-lg border border-[var(--border)] hover:border-accent/30 p-4 transition-all duration-200"
                      style={glassStyle}
                    >
                      <h3 className="font-heading italic text-base text-ink mb-1 group-hover:text-accent transition-colors">
                        {isDE ? related.title_de : related.title_en}
                      </h3>
                      <p className="text-xs text-ink-faint line-clamp-2">
                        {isDE ? related.summary_de : related.summary_en}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Back Link */}
          <div className="mt-12 pt-6 border-t border-[var(--border)]">
            <Link
              href={`/wissensdatenbank/${categoryKey}`}
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              {isDE ? `Zurück zu ${category.label_de}` : `Back to ${category.label_en}`}
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
