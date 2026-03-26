'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { WQFPageHero } from '@/components/layout/WQFPageHero';
import type { KnowledgeCategory } from '@/data/knowledge/types';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
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
  const colCount = 3;
  const totalRows = Math.ceil(categories.length / colCount);

  return (
    <>
      <WQFPageHero
        label={isDE ? 'Wissensdatenbank' : 'Knowledge Base'}
        title={isDE ? 'Wissen' : 'Knowledge'}
        subtitle={isDE
          ? 'Fundiertes Wissen rund um Cannabis \u2013 von der Rechtslage \u00fcber Gesundheit bis zum Anbau.'
          : 'In-depth knowledge about cannabis \u2013 from legal aspects to health and cultivation.'}
      />

      {/* Categories grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-12 text-accent"
          >
            {isDE ? 'Kategorien' : 'Categories'}
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 border border-[var(--border)]">
            {categories.map((category, i) => {
              const emoji = iconEmoji[category.icon] ?? '\u25CE';
              const col = i % colCount;
              const row = Math.floor(i / colCount);

              return (
                <motion.div
                  key={category.key}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  style={{
                    borderRight: col < colCount - 1
                      ? '1px solid var(--border)'
                      : undefined,
                    borderBottom: row < totalRows - 1
                      ? '1px solid var(--border)'
                      : undefined,
                  }}
                >
                  <Link
                    href={`/wissensdatenbank/${category.key}`}
                    className="group block p-8 lg:p-10 h-full"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    {/* Number + emoji */}
                    <div className="flex items-start justify-between mb-6">
                      <span
                        className="font-heading font-bold leading-none text-ink-faint/20"
                        style={{ fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        className="text-2xl opacity-30 group-hover:opacity-60 transition-opacity"
                        aria-hidden="true"
                      >
                        {emoji}
                      </span>
                    </div>

                    {/* Title */}
                    <h2
                      className="font-heading font-bold mb-2 leading-tight group-hover:opacity-70 transition-opacity"
                      style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)' }}
                    >
                      {isDE ? category.label_de : category.label_en}
                    </h2>

                    {/* Article count */}
                    <p className="text-xs font-bold uppercase tracking-[0.2em] font-body mb-4 text-accent">
                      {category.articleCount}{' '}
                      {isDE
                        ? 'Artikel'
                        : category.articleCount === 1
                          ? 'Article'
                          : 'Articles'}
                    </p>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-ink-muted">
                      {isDE ? category.description_de : category.description_en}
                    </p>

                    {/* Arrow */}
                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] font-body group-hover:translate-x-1 transition-transform inline-block text-ink-faint">
                      {isDE ? 'Alle Artikel' : 'All articles'} &#8594;
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-[var(--border)] py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs leading-relaxed max-w-3xl text-ink-faint">
            {isDE
              ? 'Hinweis: Die Informationen in unserer Wissensdatenbank dienen der allgemeinen Aufkl\u00e4rung und ersetzen keine medizinische oder rechtliche Beratung. Bei gesundheitlichen Fragen wende dich bitte an einen Arzt.'
              : 'Note: The information in our knowledge base is for general education and does not replace medical or legal advice. For health questions, please consult a doctor.'}
          </p>
        </div>
      </section>
    </>
  );
}
