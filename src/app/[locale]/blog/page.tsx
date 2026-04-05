import { createMetadata } from '@/lib/metadata';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Clock, ArrowRight, Tag } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import { BreadcrumbSchema } from '@/lib/schema';

const PAGE_META = {
  de: {
    title: 'Blog & Neuigkeiten – Cannabis Social Club Hildesheim',
    description: 'Aktuelle Neuigkeiten von BlattWerk e.V.: Anbaulizenz, Vereinsgründung, Anbau-Updates und Meilensteine aus dem Cannabis Social Club Hildesheim.',
  },
  en: {
    title: 'Blog & News – Cannabis Social Club Hildesheim',
    description: 'Latest news from BlattWerk e.V.: cultivation license, founding, growing updates and milestones from Cannabis Social Club Hildesheim.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return createMetadata(locale, PAGE_META, 'blog');
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isDE = locale === 'de';

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'Home', href: '' },
          { name: 'Blog', href: '/blog' },
        ]}
      />

      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-medium text-accent mb-4">Blog</p>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl leading-tight mb-4">
            {isDE ? 'Blog — Cannabis Social Club Hildesheim' : 'Blog — Cannabis Social Club Hildesheim'}
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed max-w-2xl">
            {isDE
              ? 'Aktuelle Meilensteine, Einblicke und Updates aus unserem Verein.'
              : 'Latest milestones, insights and updates from our association.'}
          </p>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {blogPosts.length === 0 ? (
            <p className="text-ink-muted py-16 text-center">
              {isDE ? 'Noch keine Beiträge vorhanden.' : 'No posts yet.'}
            </p>
          ) : (
            <div className="space-y-6">
              {blogPosts.map((post) => {
                const title = isDE ? post.title_de : post.title_en;
                const summary = isDE ? post.summary_de : post.summary_en;
                const date = new Date(post.date + 'T00:00:00');
                const formattedDate = date.toLocaleDateString(isDE ? 'de-DE' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                });

                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block p-6 rounded-xl border border-[var(--border)] bg-bg-elevated hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono text-ink-faint">
                        <Clock className="w-3 h-3 inline mr-1" />
                        {formattedDate}
                      </span>
                      <span className="text-xs text-ink-faint">·</span>
                      <span className="text-xs text-ink-faint">{post.author}</span>
                    </div>
                    <h2 className="font-heading font-semibold text-xl mb-2 group-hover:text-accent transition-colors">
                      {title}
                    </h2>
                    <p className="text-sm text-ink-muted leading-relaxed mb-4">
                      {summary}
                    </p>
                    <div className="flex items-center justify-between">
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
                      <ArrowRight className="w-4 h-4 text-ink-faint group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
