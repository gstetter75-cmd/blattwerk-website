import { createMetadata, PAGE_META } from '@/lib/metadata';
import { setRequestLocale } from 'next-intl/server';
import { PenLine, Rss } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return createMetadata(locale, PAGE_META.blog);
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
      <PageHero
        title="Blog"
        subtitle={isDE ? 'Neuigkeiten, Berichte und Einblicke aus unserem Verein.' : 'News, reports and insights from our association.'}
      />

      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="rounded-2xl border border-[var(--border)] p-12 lg:p-16"
            style={{ background: 'var(--glass)', backdropFilter: 'blur(12px)' }}
          >
            <div className="w-16 h-16 bg-bg-elevated rounded-full flex items-center justify-center mx-auto mb-6">
              <PenLine className="w-7 h-7 text-ink-faint" />
            </div>
            <h2 className="font-heading italic text-2xl text-ink mb-4">
              {isDE ? 'Noch keine Beiträge' : 'No Posts Yet'}
            </h2>
            <p className="text-ink-muted leading-relaxed max-w-md mx-auto mb-8">
              {isDE
                ? 'Wir arbeiten an unseren ersten Blogbeiträgen. Bald findest du hier Neuigkeiten aus dem Verein, Berichte von Veranstaltungen und spannende Hintergrundartikel.'
                : 'We are working on our first blog posts. Soon you will find news from the association, event reports and interesting background articles here.'}
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-bg-elevated rounded-full text-ink-muted text-sm border border-[var(--border)]">
              <Rss className="w-3.5 h-3.5" />
              {isDE ? 'Demnächst verfügbar' : 'Coming soon'}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
