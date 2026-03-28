import { createMetadata, PAGE_META } from '@/lib/metadata';
import { setRequestLocale } from 'next-intl/server';
import { MitgliedschaftClient } from './MitgliedschaftClient';
import { BreadcrumbSchema, FAQSchema } from '@/lib/schema';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return createMetadata(locale, PAGE_META.membership, 'mitgliedschaft');
}

const FAQ_ITEMS_DE = [
  {
    question: 'Wie lange dauert der Aufnahmeprozess?',
    answer: 'In der Regel dauert die Prüfung 1-2 Wochen. Sobald dein Antrag genehmigt ist, wirst du benachrichtigt.',
  },
  {
    question: 'Kann ich in mehreren Clubs gleichzeitig Mitglied sein?',
    answer: 'Nein. Das KCanG schreibt vor, dass man nur in einer Anbauvereinigung gleichzeitig Mitglied sein darf.',
  },
  {
    question: 'Was passiert, wenn ich kündigen möchte?',
    answer: 'Die Mitgliedschaft kann mit einer Kündigungsfrist von drei Monaten zum Monatsende gekündigt werden.',
  },
  {
    question: 'Welche Rechte habe ich als Mitglied?',
    answer: 'Du hast Stimmrecht bei der Mitgliederversammlung, Zugang zu den Vereinsräumen und kannst Cannabis im Rahmen der gesetzlichen Grenzen beziehen.',
  },
  {
    question: 'Ab welchem Alter kann ich Mitglied werden?',
    answer: 'Du musst mindestens 21 Jahre alt sein.',
  },
] as const;

const FAQ_ITEMS_EN = [
  {
    question: 'How long does the admission process take?',
    answer: 'The review typically takes 1-2 weeks. You will be notified once your application is approved.',
  },
  {
    question: 'Can I be a member of multiple clubs at the same time?',
    answer: 'No. The KCanG stipulates that you may only be a member of one cultivation association at a time.',
  },
  {
    question: 'What happens if I want to cancel my membership?',
    answer: 'Membership can be terminated with three months\' notice at the end of the month.',
  },
  {
    question: 'What rights do I have as a member?',
    answer: 'You have voting rights at the general assembly, access to the club premises and can obtain cannabis within the legal limits.',
  },
  {
    question: 'What is the minimum age to become a member?',
    answer: 'You must be at least 21 years old.',
  },
] as const;

export default async function MembershipPage({
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
          { name: isDE ? 'Mitgliedschaft' : 'Membership', href: '/mitgliedschaft' },
        ]}
      />
      <FAQSchema items={isDE ? FAQ_ITEMS_DE : FAQ_ITEMS_EN} />
      <MitgliedschaftClient isDE={isDE} />
    </>
  );
}
