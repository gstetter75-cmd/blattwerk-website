import { setRequestLocale } from 'next-intl/server';
import { PenLine, Rss } from 'lucide-react';

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
      {/* Hero */}
      <section className="bg-deep-forest text-warm-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl mb-4">Blog</h1>
          <p className="text-warm-white/70 text-lg max-w-2xl mx-auto">
            {isDE
              ? 'Neuigkeiten, Berichte und Einblicke aus unserem Verein.'
              : 'News, reports and insights from our association.'}
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-sand/30 rounded-2xl p-12 lg:p-16 border border-sand/50">
            <PenLine className="w-12 h-12 text-sage/40 mx-auto mb-6" />
            <h2 className="font-heading text-2xl text-deep-forest mb-4">
              {isDE ? 'Noch keine Beiträge' : 'No Posts Yet'}
            </h2>
            <p className="text-charcoal/60 leading-relaxed max-w-md mx-auto mb-8">
              {isDE
                ? 'Wir arbeiten an unseren ersten Blogbeiträgen. Bald findest du hier Neuigkeiten aus dem Verein, Berichte von Veranstaltungen und spannende Hintergrundartikel.'
                : 'We are working on our first blog posts. Soon you will find news from the association, event reports and interesting background articles here.'}
            </p>
            <div className="flex items-center justify-center gap-2 text-sage">
              <Rss className="w-4 h-4" />
              <p className="text-sm">
                {isDE ? 'Demnächst verfügbar' : 'Coming soon'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
