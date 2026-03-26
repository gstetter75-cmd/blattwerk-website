import { createMetadata, PAGE_META } from '@/lib/metadata';
import { setRequestLocale } from 'next-intl/server';
import { MitgliedschaftClient } from './MitgliedschaftClient';
import { BreadcrumbSchema, FAQSchema } from '@/lib/schema';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return createMetadata(locale, PAGE_META.membership);
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
    answer: 'Die Mitgliedschaft kann jederzeit mit einer Frist von einem Monat zum Monatsende gekündigt werden.',
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
      <FAQSchema items={FAQ_ITEMS_DE} />
      <MitgliedschaftClient isDE={isDE} />
    </>
  );
}
