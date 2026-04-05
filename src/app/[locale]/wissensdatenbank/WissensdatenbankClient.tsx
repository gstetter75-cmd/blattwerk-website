'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import type { KnowledgeCategory } from '@/data/knowledge/types';
import { HomeSection } from '@/components/shared/HomeSection';

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
  ShieldAlert: '\u26A0',
};

type CategoryWithCount = KnowledgeCategory & { articleCount: number };

interface Props {
  isDE: boolean;
  categories: CategoryWithCount[];
}

export function WissensdatenbankClient({ isDE, categories }: Props) {
  const totalArticles = categories.reduce((sum, cat) => sum + cat.articleCount, 0);

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
              {isDE ? 'Cannabis-Wissensdatenbank' : 'Cannabis Knowledge Base'}
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed max-w-2xl">
              {isDE
                ? `${totalArticles} fundierte Artikel zu Cannabis — von der Rechtslage über Gesundheit und Terpene bis zum Anbau. Evidenzbasiert, regelmäßig aktualisiert und frei zugänglich.`
                : `${totalArticles} in-depth articles on cannabis — from legal aspects to health, terpenes and cultivation. Evidence-based, regularly updated and freely accessible.`}
            </p>
          </motion.div>
        </div>
      </section>

      {/* -- Intro Text (SEO Content) -- */}
      <HomeSection>
        <section className="py-12 lg:py-16 bg-bg-surface">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="space-y-4 text-base text-ink-muted leading-relaxed">
              <p>
                {isDE
                  ? 'Die Cannabis-Wissensdatenbank von BlattWerk e.V. ist das zentrale Nachschlagewerk unseres Vereins. Als lizenzierte Anbauvereinigung in Hildesheim haben wir den Anspruch, nicht nur Cannabis anzubauen, sondern auch fundiertes Wissen zu vermitteln — an unsere Mitglieder und an alle, die sich informieren möchten.'
                  : 'The Cannabis Knowledge Base by BlattWerk e.V. is the central reference of our association. As a licensed cultivation association in Hildesheim, we aim not only to grow cannabis but also to provide well-founded knowledge — to our members and to anyone who wants to learn.'}
              </p>
              <p>
                {isDE
                  ? 'Unsere Artikel decken acht Themenbereiche ab: Von den rechtlichen Grundlagen des Konsumcannabisgesetzes (KCanG) über Gesundheit und Safer Use, Cannabinoide und Terpene bis hin zu Anbau-Grundlagen, medizinischem Cannabis, Suchtprävention und der Geschichte der Cannabispflanze. Jeder Artikel wird von der Redaktion BlattWerk e.V. verfasst und regelmäßig auf Aktualität geprüft.'
                  : 'Our articles cover eight topic areas: From the legal foundations of the Cannabis Act (KCanG) to health and safer use, cannabinoids and terpenes, growing basics, medical cannabis, addiction prevention and the history of the cannabis plant. Every article is written by the BlattWerk e.V. editorial team and regularly reviewed for accuracy.'}
              </p>
              <p>
                {isDE
                  ? 'Wichtig: Unsere Wissensdatenbank ersetzt keine medizinische oder rechtliche Beratung. Die Artikel dienen der allgemeinen Aufklärung. Bei konkreten gesundheitlichen Fragen wende dich an einen Arzt, bei rechtlichen Fragen an einen spezialisierten Anwalt.'
                  : 'Important: Our knowledge base does not replace medical or legal advice. The articles serve general education. For specific health questions, consult a doctor; for legal questions, consult a specialized lawyer.'}
              </p>
            </div>
          </div>
        </section>
      </HomeSection>

      {/* Categories grid */}
      <HomeSection>
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Alle Themenbereiche' : 'All Topics'}
            </h2>
            <p className="text-ink-muted mb-10 max-w-xl">
              {isDE
                ? `${categories.length} Kategorien mit insgesamt ${totalArticles} Artikeln — wähle ein Thema, das dich interessiert.`
                : `${categories.length} categories with ${totalArticles} articles in total — choose a topic that interests you.`}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {categories.map((category) => {
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

      {/* Popular topics */}
      <HomeSection>
        <section className="py-16 lg:py-24 bg-bg-surface">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8">
              {isDE ? 'Beliebte Artikel' : 'Popular Articles'}
            </h2>
            <div className="space-y-3">
              {[
                { href: '/wissensdatenbank/legal/kcang-ueberblick', label: isDE ? 'Das KCanG im Überblick — Was erlaubt ist und was nicht' : 'The KCanG Overview — What Is and Isn\'t Permitted' },
                { href: '/wissensdatenbank/terpenes/indica-vs-sativa', label: isDE ? 'Indica vs. Sativa — Was ist der echte Unterschied?' : 'Indica vs. Sativa — What Is the Real Difference?' },
                { href: '/wissensdatenbank/legal/fuehrerschein-cannabis', label: isDE ? 'Cannabis und Führerschein — THC-Grenzwert, MPU, Strafen' : 'Cannabis and Driving License — THC Limits, MPU, Penalties' },
                { href: '/wissensdatenbank/growing/cannabis-sorten-anfaenger', label: isDE ? 'Cannabis-Sorten für Anfänger — Welche Sorte passt zu mir?' : 'Cannabis Strains for Beginners — Which Strain Suits You?' },
                { href: '/wissensdatenbank/terpenes/was-sind-terpene', label: isDE ? 'Was sind Terpene? Definition, Chemie und Wirkung' : 'What Are Terpenes? Definition, Chemistry and Effects' },
                { href: '/wissensdatenbank/legal/cannabis-social-clubs', label: isDE ? 'Cannabis Social Clubs — Regeln, Pflichten und Abgabe' : 'Cannabis Social Clubs — Rules, Obligations and Distribution' },
                { href: '/wissensdatenbank/health/safer-use-regeln', label: isDE ? 'Safer-Use-Regeln für Cannabis' : 'Safer Use Rules for Cannabis' },
                { href: '/wissensdatenbank/legal/was-kostet-ein-cannabis-social-club', label: isDE ? 'Was kostet ein Cannabis Social Club? — Kostenaufstellung' : 'What Does a Cannabis Social Club Cost? — Cost Breakdown' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex items-center gap-3 p-4 rounded-xl border border-[var(--border)] bg-bg-elevated hover:border-accent/30 transition-colors"
                >
                  <span className="text-accent text-sm shrink-0">&#8594;</span>
                  <span className="text-sm font-medium group-hover:text-accent transition-colors">{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </HomeSection>

      {/* Disclaimer */}
      <div className="border-t border-[var(--border)] py-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs leading-relaxed max-w-3xl text-ink-faint">
            {isDE
              ? 'Hinweis: Die Informationen in unserer Wissensdatenbank dienen der allgemeinen Aufklärung und ersetzen keine medizinische oder rechtliche Beratung. Bei gesundheitlichen Fragen wende dich bitte an einen Arzt. Alle Artikel werden von der Redaktion BlattWerk e.V. verfasst und regelmäßig aktualisiert.'
              : 'Note: The information in our knowledge base is for general education and does not replace medical or legal advice. For health questions, please consult a doctor. All articles are written by the BlattWerk e.V. editorial team and regularly updated.'}
          </p>
        </div>
      </div>
    </>
  );
}
