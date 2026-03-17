import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import {
  Scale,
  HeartPulse,
  Atom,
  Droplets,
  Sprout,
  Landmark,
  Stethoscope,
  Search,
  ArrowRight,
} from 'lucide-react';
import { allCategories, getArticlesByCategory } from '@/data/knowledge';

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
      {/* Hero */}
      <section className="bg-deep-forest text-warm-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl mb-4">
            {isDE ? 'Wissensdatenbank' : 'Knowledge Base'}
          </h1>
          <p className="text-warm-white/70 text-lg max-w-2xl mx-auto mb-8">
            {isDE
              ? 'Fundiertes Wissen rund um Cannabis – von der Rechtslage über Gesundheit bis zum Anbau.'
              : 'In-depth knowledge about cannabis – from legal aspects to health and cultivation.'}
          </p>

          {/* Search placeholder */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-sage" />
            <input
              type="text"
              placeholder={isDE ? 'Artikel durchsuchen...' : 'Search articles...'}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-warm-white text-charcoal placeholder-sage/60 focus:outline-none focus:ring-2 focus:ring-amber"
              disabled
            />
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCategories.map((category) => {
              const Icon = iconMap[category.icon] ?? Atom;
              const articleCount = getArticlesByCategory(category.key).length;

              return (
                <Link
                  key={category.key}
                  href={`/wissensdatenbank/${category.key}`}
                  className="group bg-warm-white border border-sand/50 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-amber/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-sand/30 flex items-center justify-center shrink-0 group-hover:bg-amber/10 transition-colors">
                      <Icon className="w-6 h-6 text-amber" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="font-heading text-xl text-deep-forest mb-1 group-hover:text-amber transition-colors">
                        {isDE ? category.label_de : category.label_en}
                      </h2>
                      <p className="text-sm text-sage mb-3">
                        {articleCount}{' '}
                        {isDE
                          ? articleCount === 1
                            ? 'Artikel'
                            : 'Artikel'
                          : articleCount === 1
                            ? 'Article'
                            : 'Articles'}
                      </p>
                      <p className="text-sm text-charcoal/60 leading-relaxed">
                        {isDE ? category.description_de : category.description_en}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-sm text-amber font-medium">
                    {isDE ? 'Alle Artikel' : 'All articles'}{' '}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sand/30 rounded-lg p-6 text-center">
            <p className="text-sm text-sage">
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
