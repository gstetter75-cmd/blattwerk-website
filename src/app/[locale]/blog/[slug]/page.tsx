import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowLeft, Clock, Tag, User } from 'lucide-react';
import { blogPosts, getBlogPostBySlug } from '@/data/blog';
import { BreadcrumbSchema, ArticleSchema } from '@/lib/schema';
import { createAlternates } from '@/lib/metadata';

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.flatMap((post) => [
    { locale: 'de', slug: post.slug },
    { locale: 'en', slug: post.slug },
  ]);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  const isDE = locale === 'de';
  const title = isDE ? post.title_de : post.title_en;
  const description = (isDE ? post.summary_de : post.summary_en).slice(0, 160);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    alternates: createAlternates(locale, `blog/${slug}`),
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const isDE = locale === 'de';

  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const title = isDE ? post.title_de : post.title_en;
  const content = isDE ? post.content_de : post.content_en;
  const paragraphs = content.split('\n\n').filter(Boolean);

  const date = new Date(post.date + 'T00:00:00');
  const formattedDate = date.toLocaleDateString(isDE ? 'de-DE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;
  const nextPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'Home', href: '' },
          { name: 'Blog', href: '/blog' },
          { name: title, href: `/blog/${slug}` },
        ]}
      />
      <ArticleSchema
        title={title}
        description={isDE ? post.summary_de : post.summary_en}
        slug={slug}
        category="blog"
        locale={locale}
        datePublished={post.date}
      />

      <article className="pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-ink-faint hover:text-ink transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            {isDE ? 'Alle Beiträge' : 'All posts'}
          </Link>

          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-ink-faint">
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {formattedDate}
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <User className="w-3 h-3" />
                {post.author}
              </span>
            </div>
            <h1 className="font-heading font-bold text-3xl lg:text-4xl leading-tight mb-4">
              {title}
            </h1>
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2 py-0.5 bg-accent/10 text-xs text-accent rounded-full"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="space-y-4">
            {paragraphs.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-ink-muted">
                {paragraph}
              </p>
            ))}
          </div>

          {(prevPost || nextPost) && (
            <nav className="mt-16 pt-8 border-t border-[var(--border)] grid sm:grid-cols-2 gap-4">
              {prevPost && (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="p-4 rounded-xl border border-[var(--border)] hover:border-accent/30 transition-colors"
                >
                  <span className="text-xs text-ink-faint">
                    {isDE ? '← Älter' : '← Older'}
                  </span>
                  <p className="font-heading font-semibold text-sm mt-1">
                    {isDE ? prevPost.title_de : prevPost.title_en}
                  </p>
                </Link>
              )}
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="p-4 rounded-xl border border-[var(--border)] hover:border-accent/30 transition-colors sm:text-right sm:col-start-2"
                >
                  <span className="text-xs text-ink-faint">
                    {isDE ? 'Neuer →' : 'Newer →'}
                  </span>
                  <p className="font-heading font-semibold text-sm mt-1">
                    {isDE ? nextPost.title_de : nextPost.title_en}
                  </p>
                </Link>
              )}
            </nav>
          )}
        </div>
      </article>
    </>
  );
}
