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
    answer: 'Nach der Mitgliedsanfrage über die Hanf-App wirst du als vorläufiges Mitglied zugelassen. Für die vollständige Mitgliedschaft musst du einem Vorstandsmitglied persönlich deinen Ausweis vorzeigen.',
  },
  {
    question: 'Kann ich in mehreren Clubs gleichzeitig Mitglied sein?',
    answer: 'Nein. Das Konsumcannabisgesetz (KCanG) schreibt ausdrücklich vor, dass du nur in einer Anbauvereinigung gleichzeitig Mitglied sein darfst.',
  },
  {
    question: 'Was passiert, wenn ich kündigen möchte?',
    answer: 'Die Mitgliedschaft kann mit einer Kündigungsfrist von drei Monaten zum Monatsende gekündigt werden. Die Kündigung erfolgt schriftlich oder über die Hanf-App.',
  },
  {
    question: 'Welche Rechte habe ich als Mitglied?',
    answer: 'Du hast Stimmrecht bei der Mitgliederversammlung, Zugang zu den Vereinsräumen, kannst an Workshops teilnehmen und Cannabis im Rahmen der gesetzlichen Grenzen beziehen (max. 25g/Tag, 50g/Monat).',
  },
  {
    question: 'Ab welchem Alter kann ich Mitglied werden?',
    answer: 'Du musst mindestens 21 Jahre alt sein. Das KCanG erlaubt zwar die Mitgliedschaft ab 18, BlattWerk hat sich aber bewusst für 21 Jahre entschieden.',
  },
  {
    question: 'Wie viel Cannabis darf ich pro Monat beziehen?',
    answer: 'Maximal 25 Gramm pro Tag und 50 Gramm pro Kalendermonat. Für 18- bis 21-Jährige (bei anderen Clubs) gelten strengere Grenzen: 30 Gramm pro Monat bei max. 10% THC.',
  },
  {
    question: 'Wann kann ich das erste Mal Cannabis beziehen?',
    answer: 'Sobald unsere erste Ernte abgeschlossen und qualitätsgeprüft ist. Wir befinden uns aktuell im aktiven Anbau und informieren über den genauen Zeitpunkt per Blog und E-Mail.',
  },
  {
    question: 'Welche Sorten baut BlattWerk an?',
    answer: 'Wir planen mit einer breiten Auswahl an Sorten — Indica, Sativa und Hybrid — mit unterschiedlichen THC/CBD-Verhältnissen und Terpenprofilen. Alle Sorten findest du in unserer Sortendatenbank.',
  },
  {
    question: 'Ist die Mitgliedschaft wirklich legal?',
    answer: 'Ja. BlattWerk e.V. ist eine lizenzierte Anbauvereinigung nach dem KCanG. Die Anbaulizenz wurde am 18. März 2026 erteilt. Gemeinschaftlicher Anbau und Abgabe an volljährige Mitglieder sind gesetzlich erlaubt.',
  },
  {
    question: 'Muss ich selbst beim Anbau mithelfen?',
    answer: 'Nein. Der Anbau wird vom Anbaurat und erfahrenen Mitgliedern organisiert. Du kannst dich aber freiwillig einbringen, z.B. bei Grow-Workshops oder der Ernte.',
  },
] as const;

const FAQ_ITEMS_EN = [
  {
    question: 'How long does the admission process take?',
    answer: 'After submitting your membership request via the Hanf-App, you are admitted as a provisional member. For full membership, you must personally present your ID to a board member.',
  },
  {
    question: 'Can I be a member of multiple clubs at the same time?',
    answer: 'No. The Cannabis Act (KCanG) explicitly stipulates that you may only be a member of one cultivation association at a time.',
  },
  {
    question: 'What happens if I want to cancel my membership?',
    answer: 'Membership can be terminated with three months\' notice at the end of the month. Cancellation is done in writing or via the Hanf-App.',
  },
  {
    question: 'What rights do I have as a member?',
    answer: 'You have voting rights at the general assembly, access to club premises, can attend workshops, and obtain cannabis within legal limits (max. 25g/day, 50g/month).',
  },
  {
    question: 'What is the minimum age to become a member?',
    answer: 'You must be at least 21 years old. While the KCanG allows membership from age 18, BlattWerk has deliberately set the limit at 21.',
  },
  {
    question: 'How much cannabis can I obtain per month?',
    answer: 'A maximum of 25 grams per day and 50 grams per calendar month. For members aged 18-21 (at other clubs), stricter limits apply: 30 grams per month with max. 10% THC.',
  },
  {
    question: 'When can I obtain cannabis for the first time?',
    answer: 'Once our first harvest is complete and quality-tested. We are currently in active cultivation and will announce the exact date via blog and email.',
  },
  {
    question: 'Which strains does BlattWerk grow?',
    answer: 'We are planning with a wide selection of strains — indica, sativa and hybrid — with different THC/CBD ratios and terpene profiles. All strains can be found in our strain database.',
  },
  {
    question: 'Is the membership really legal?',
    answer: 'Yes. BlattWerk e.V. is a licensed cultivation association under the KCanG. The cultivation license was granted on March 18, 2026. Communal cultivation and distribution to adult members is legally permitted.',
  },
  {
    question: 'Do I have to help with growing?',
    answer: 'No. Growing is organized by the growing council and experienced members. But you can volunteer, e.g. at grow workshops or harvest.',
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
