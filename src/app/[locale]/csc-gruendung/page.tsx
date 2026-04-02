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
        { question: 'Was kostet es, einen CSC zu gründen?', answer: 'Die Kosten variieren je nach Bundesland, Standort und Konzept erheblich. Rechnet mit Notarkosten, Vereinsregister-Gebühren, Mietkaution, technischer Ausstattung und Rechtsberatung. Realistisch sollte man mit einem fünfstelligen Betrag planen.' },
        { question: 'Wie lange dauert der Genehmigungsprozess?', answer: 'Das hängt stark vom Bundesland und der zuständigen Behörde ab. Rechnet mit mehreren Monaten – von der Vereinsgründung bis zur Anbaugenehmigung kann ein halbes Jahr oder mehr vergehen.' },
        { question: 'Brauche ich Cannabis-Erfahrung?', answer: 'Anbau-Erfahrung ist ein großer Vorteil, aber keine zwingende Voraussetzung. Entscheidend sind organisatorisches Talent, Vereinserfahrung und die Bereitschaft, sich schnell in komplexe Themen einzuarbeiten.' },
        { question: 'Könnt ihr uns bei der Satzung helfen?', answer: 'Wir können euch zeigen, was in unserer Satzung steht und warum – als Orientierung. Eure Satzung müsst ihr aber selbst erarbeiten, idealerweise mit anwaltlicher Prüfung.' },
      ]
    : [
        { question: 'What does it cost to found a CSC?', answer: 'Costs vary significantly depending on the state, location and concept. Expect notary fees, association register fees, rent deposit, technical equipment and legal advice. Realistically, plan for a five-figure sum.' },
        { question: 'How long does the approval process take?', answer: 'This depends heavily on the state and responsible authority. Expect several months – from founding the association to receiving the cultivation license can take six months or more.' },
        { question: 'Do I need cannabis experience?', answer: 'Growing experience is a big advantage but not a strict requirement. What matters is organizational talent, association experience and the willingness to quickly learn complex topics.' },
        { question: 'Can you help with the statutes?', answer: 'We can show you what\'s in our statutes and why – as orientation. But you need to develop your own, ideally with legal review.' },
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
