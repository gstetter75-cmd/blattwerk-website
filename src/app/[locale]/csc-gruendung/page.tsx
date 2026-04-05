import { createMetadata } from '@/lib/metadata';
import { setRequestLocale } from 'next-intl/server';
import { CscGruendungClient } from './CscGruendungClient';
import { BreadcrumbSchema, FAQSchema } from '@/lib/schema';

const PAGE_META = {
  de: {
    title: 'Cannabis Social Club gründen – Erfahrungen & Hilfe',
    description: 'Du willst einen Cannabis Social Club gründen? BlattWerk e.V. teilt Erfahrungen aus Vereinsgründung, Lizenzantrag und KCanG-Umsetzung. Tipps, FAQ und Netzwerk.',
  },
  en: {
    title: 'Start a Cannabis Social Club – Experience & Support',
    description: 'Want to start a Cannabis Social Club? BlattWerk e.V. shares experience from founding, license application and KCanG implementation. Tips, FAQ and network.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return createMetadata(locale, PAGE_META, 'csc-gruendung');
}

export default async function CscGruendungPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isDE = locale === 'de';

  const faqItems = isDE
    ? [
        { question: 'Was kostet es insgesamt, einen CSC zu gründen?', answer: 'Rechnet realistisch mit 15.000–50.000 € Startkapital. Die größten Posten sind Räumlichkeiten (Miete, Kaution, Umbau), Anbauausstattung und Rechtsberatung. Dazu kommen laufende Kosten von 2.000–5.000 €/Monat, bevor die erste Ernte stattfindet.' },
        { question: 'Wie lange dauert es von der Idee bis zur Anbaulizenz?', answer: 'Im besten Fall 6–9 Monate, realistischer sind 9–18 Monate. Bei uns dauerte es von der Vereinsgründung (Mai 2025) bis zur Anbaulizenz (März 2026) etwa 10 Monate. Die Behörden-Bearbeitungszeit allein liegt bei 3–12 Monaten.' },
        { question: 'Brauche ich Cannabis-Erfahrung oder Anbau-Know-how?', answer: 'Anbau-Erfahrung im Team ist ein großer Vorteil. Aber der Flaschenhals ist meistens die Organisation: Vereinsrecht, Buchhaltung, Behördenkommunikation. Ein guter Vereinsmanager ist wertvoller als ein guter Grower.' },
        { question: 'Könnt ihr uns bei der Satzung helfen?', answer: 'Wir können unsere Satzung als Orientierung zeigen. Eure Satzung müsst ihr aber selbst erarbeiten und zwingend von einem spezialisierten Anwalt prüfen lassen. Eine fehlerhafte Satzung ist der häufigste Grund für abgelehnte Lizenzanträge.' },
        { question: 'Welche Rechtsform brauche ich?', answer: 'Das KCanG schreibt einen eingetragenen nicht-wirtschaftlichen Verein (e.V.) vor. Andere Rechtsformen wie GmbH oder Genossenschaft sind nicht zulässig.' },
        { question: 'Wie viele Mitglieder brauche ich mindestens?', answer: 'Für die Vereinsgründung reichen 7 Mitglieder. Für den Betrieb empfehlen wir mindestens 20–30 Mitglieder — sowohl zur Finanzierung als auch für die Arbeitsverteilung.' },
        { question: 'Was ist der häufigste Fehler bei der CSC-Gründung?', answer: 'Die Kosten unterschätzen und die Räumlichkeiten zu spät suchen. Der zweithäufigste Fehler: Eine fehlerhafte Satzung einreichen und den Lizenzantrag dadurch um Monate verzögern.' },
        { question: 'Welches Bundesland ist am gründungsfreundlichsten?', answer: 'Die Erfahrungen variieren stark. Bundesländer mit eigenen Cannabis-Behörden sind tendenziell effizienter. Niedersachsen hat einen klar definierten Prozess.' },
      ]
    : [
        { question: 'What does it cost in total to found a CSC?', answer: 'Realistically plan with €15,000–50,000 starting capital. The biggest items are premises (rent, deposit, renovation), growing equipment and legal advice. Add ongoing costs of €2,000–5,000/month before the first harvest.' },
        { question: 'How long from idea to cultivation license?', answer: 'Best case 6–9 months, more realistically 9–18 months. For us it took about 10 months from founding (May 2025) to cultivation license (March 2026). Authority processing time alone is 3–12 months.' },
        { question: 'Do I need cannabis experience or growing know-how?', answer: 'Growing experience in the team is a huge advantage. But the bottleneck is usually organization: association law, accounting, authority communication. A good club manager is more valuable than a good grower.' },
        { question: 'Can you help with the statutes?', answer: 'We can show our statutes as orientation. But you must develop your own and have it reviewed by a specialized lawyer. A faulty statute is the most common reason for rejected license applications.' },
        { question: 'What legal form do I need?', answer: 'The KCanG requires a registered non-commercial association (e.V.). Other legal forms like GmbH or cooperative are not permitted.' },
        { question: 'How many members do I need at minimum?', answer: 'Legally 7 members suffice for founding. For operations we recommend at least 20–30 members — both for financing and work distribution.' },
        { question: 'What is the most common mistake when founding a CSC?', answer: 'Underestimating costs and searching for premises too late. Second most common: submitting faulty statutes and delaying the license application by months.' },
        { question: 'Which state is most founder-friendly?', answer: 'Experiences vary significantly. States with dedicated cannabis authorities tend to be more efficient. Lower Saxony has a clearly defined process.' },
      ];

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'Home', href: '' },
          { name: isDE ? 'CSC gründen' : 'Start a CSC', href: '/csc-gruendung' },
        ]}
      />
      <FAQSchema items={faqItems} />
      <CscGruendungClient isDE={isDE} />
    </>
  );
}
