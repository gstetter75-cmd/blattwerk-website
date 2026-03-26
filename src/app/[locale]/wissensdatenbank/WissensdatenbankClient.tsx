'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import type { KnowledgeCategory } from '@/data/knowledge/types';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
};

const iconEmoji: Record<string, string> = {
  Scale: '\u2696',
  HeartPulse: '\u2665',
  Atom: '\u2B21',
  Droplets: '\u25C8',
  Sprout: '\u2295',
  Landmark: '\u25A3',
  Stethoscope: '\u271A',
};

type CategoryWithCount = KnowledgeCategory & { articleCount: number };

interface Props {
  isDE: boolean;
  categories: CategoryWithCount[];
}

export function WissensdatenbankClient({ isDE, categories }: Props) {
  return (
    <>
      {/* -- Hero -- */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <p className="text-sm font-medium text-accent mb-4">
              {isDE ? 'Wissensdatenbank' : 'Knowledge Base'}
            </p>
            <h1 className="font-heading font-bold text-4xl lg:text-5xl leading-tight mb-6 max-w-3xl">
              {isDE ? 'Wissen' : 'Knowledge'}
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed max-w-2xl">
              {isDE
                ? 'Fundiertes Wissen rund um Cannabis \u2013 von der Rechtslage \u00fcber Gesundheit bis zum Anbau.'
                : 'In-depth knowledge about cannabis \u2013 from legal aspects to health and cultivation.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories grid */}
      <HomeSection>
        <section className="py-16 lg:py-24 bg-bg-surface">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-10">
              {isDE ? 'Kategorien' : 'Categories'}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {categories.map((category, i) => {
                const emoji = iconEmoji[category.icon] ?? '\u25CE';

                return (
                  <Link
                    key={category.key}
                    href={`/wissensdatenbank/${category.key}`}
                    className="group block p-6 rounded-xl border border-[var(--border)] bg-bg-elevated hover:border-accent/30 transition-colors"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-2xl opacity-30 group-hover:opacity-60 transition-opacity" aria-hidden="true">
                        {emoji}
                      </span>
                      <span className="text-sm font-medium text-accent">
                        {category.articleCount}{' '}
                        {isDE ? 'Artikel' : category.articleCount === 1 ? 'Article' : 'Articles'}
                      </span>
                    </div>

                    <h3 className="font-heading font-semibold text-lg mb-2 group-hover:opacity-70 transition-opacity">
                      {isDE ? category.label_de : category.label_en}
                    </h3>

                    <p className="text-sm leading-relaxed text-ink-muted mb-4">
                      {isDE ? category.description_de : category.description_en}
                    </p>

                    <p className="text-sm font-medium text-ink-faint group-hover:translate-x-1 transition-transform inline-block">
                      {isDE ? 'Alle Artikel' : 'All articles'} &#8594;
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </HomeSection>

      {/* Disclaimer */}
      <div className="border-t border-[var(--border)] py-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs leading-relaxed max-w-3xl text-ink-faint">
            {isDE
              ? 'Hinweis: Die Informationen in unserer Wissensdatenbank dienen der allgemeinen Aufkl\u00e4rung und ersetzen keine medizinische oder rechtliche Beratung. Bei gesundheitlichen Fragen wende dich bitte an einen Arzt.'
              : 'Note: The information in our knowledge base is for general education and does not replace medical or legal advice. For health questions, please consult a doctor.'}
          </p>
        </div>
      </div>
    </>
  );
}

function HomeSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
