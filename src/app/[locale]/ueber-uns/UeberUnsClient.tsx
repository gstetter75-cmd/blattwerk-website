'use client';

import { Check, Sprout, Users, Shield, BookOpen, Leaf } from 'lucide-react';
import { HomeSection } from '@/components/shared/HomeSection';

interface Props {
  isDE: boolean;
}

export function UeberUnsClient({ isDE }: Props) {
  const boardMembers = [
    {
      role: isDE ? '1. Vorsitzender' : 'Chairperson',
      name: 'Gero Stetter',
      text: isDE
        ? 'Vertretung des Vereins, Koordination der Vereinsarbeit'
        : 'Representation of the association, coordination of activities',
    },
    {
      role: isDE ? 'Stell. Vorsitzender' : 'Vice Chairperson',
      name: 'Salvatore Runza',
      text: isDE
        ? 'Strategische Ausrichtung, Mitgliederbetreuung'
        : 'Strategic direction, member support',
    },
    {
      role: isDE ? 'Kassenwart' : 'Treasurer',
      name: 'Thomas Andreas',
      text: isDE
        ? 'Finanzverwaltung, Buchführung, Beitragswesen'
        : 'Financial management, bookkeeping, membership fees',
    },
  ];

  const growingCouncil = [
    {
      role: isDE ? 'Anbauleitung' : 'Head of Cultivation',
      name: 'Florian K.',
      text: isDE
        ? 'Planung und Überwachung des gemeinschaftlichen Anbaus'
        : 'Planning and supervision of communal cultivation',
    },
    {
      role: isDE ? 'Qualitätssicherung' : 'Quality Assurance',
      name: 'Jonas Müller',
      text: isDE
        ? 'Kontrolle der Anbaubedingungen und Produktqualität'
        : 'Monitoring growing conditions and product quality',
    },
    {
      role: isDE ? 'Suchtprävention' : 'Addiction Prevention',
      name: 'Jennifer Trebbin',
      text: isDE
        ? 'Beratung, Prävention und Vermittlung an Hilfsangebote'
        : 'Counseling, prevention and referral to support services',
    },
  ];

  const rules = isDE
    ? [
        'Konsum nur für Mitglieder ab 21 Jahren.',
        'Kein Konsum auf dem Vereinsgelände — gesetzliches Verbot nach §17 KCanG.',
        'Keine Weitergabe an Nicht-Mitglieder oder Minderjährige.',
        'Max. 25g/Tag, 50g/Monat pro Mitglied.',
        'Respektvoller Umgang miteinander.',
        'Bei problematischem Konsum: Suchtpräventionsbeauftragte kontaktieren.',
        'Kein Alkohol und kein Tabak auf dem Vereinsgelände.',
        'Keine anderen Rauschmittel — kein Mischkonsum, auch nicht auf Veranstaltungen.',
        'Verstöße können zum Ausschluss führen.',
      ]
    : [
        'Cannabis only for members aged 21+.',
        'No consumption on club premises — prohibited by law (§17 KCanG).',
        'No sharing with non-members or minors.',
        'Max. 25g/day, 50g/month per member.',
        'Respectful interaction at all times.',
        'Contact prevention officer for problematic use.',
        'No alcohol or tobacco on club premises.',
        'No other intoxicants — no polysubstance use, including at events.',
        'Violations may lead to exclusion.',
      ];

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="animate-fade-up">
            <p className="text-sm font-medium text-accent mb-4">
              {isDE ? 'Über den Verein' : 'About the Club'}
            </p>
            <h1 className="font-heading font-bold text-4xl lg:text-5xl leading-tight mb-6 max-w-3xl">
              {isDE
                ? 'Wir sind BlattWerk — ein Cannabis Social Club aus Hildesheim'
                : 'We are BlattWerk — a Cannabis Social Club from Hildesheim'}
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed max-w-2xl">
              {isDE
                ? 'Gegründet aus der Überzeugung, dass Cannabis verantwortungsvoll, gemeinschaftlich und legal angebaut werden kann. Seit März 2026 haben wir die offizielle Anbaulizenz — und bauen jetzt auf.'
                : 'Founded from the conviction that cannabis can be grown responsibly, communally and legally. Since March 2026 we hold the official cultivation license — and we\'re building now.'}
            </p>
          </div>
        </div>
      </section>

      {/* ── Our story ── */}
      <HomeSection>
        <section className="py-16 lg:py-24 bg-bg-surface">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
                  {isDE ? 'Unsere Geschichte' : 'Our Story'}
                </h2>
                <div className="space-y-4 text-ink-muted leading-relaxed">
                  <p>
                    {isDE
                      ? 'BlattWerk e.V. entstand 2025 in Hildesheim — aus einer Gruppe von Menschen, die an einen besseren Umgang mit Cannabis glauben. Nicht illegal, nicht unkontrolliert, sondern offen, ehrlich und im Rahmen des Konsumcannabisgesetzes.'
                      : 'BlattWerk e.V. was founded in 2025 in Hildesheim — by a group of people who believe in a better approach to cannabis. Not illegal, not uncontrolled, but open, honest and within the Consumer Cannabis Act.'}
                  </p>
                  <p>
                    {isDE
                      ? 'Am 18. März 2026 haben wir die offizielle Anbaulizenz erhalten. Das war ein Meilenstein — für uns und für Hildesheim. Seitdem bauen wir an und entwickeln unsere Infrastruktur weiter. Werde Teil davon.'
                      : 'On March 18, 2026, we received our official cultivation license. That was a milestone — for us and for Hildesheim. Since then, we\'ve been growing and developing our infrastructure. Be part of it.'}
                  </p>
                  <p>
                    {isDE
                      ? 'Wir sind kein anonymer Verein. Hinter BlattWerk stehen echte Menschen mit echten Namen, die sich für Qualität, Transparenz und Gemeinschaft einsetzen.'
                      : 'We\'re not an anonymous club. Behind BlattWerk are real people with real names, committed to quality, transparency and community.'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Check, title: isDE ? 'Lizenziert' : 'Licensed', text: isDE ? 'Offizielle Anbaugenehmigung seit 18.03.2026' : 'Official cultivation license since March 18, 2026' },
                  { icon: Users, title: isDE ? 'Gemeinschaft' : 'Community', text: isDE ? 'Aktive Mitglieder, die gemeinsam etwas aufbauen' : 'Active members building something together' },
                  { icon: Shield, title: isDE ? 'Jugendschutz' : 'Youth protection', text: isDE ? 'Strenge Regeln, Prävention und Aufklärung' : 'Strict rules, prevention and education' },
                  { icon: Leaf, title: isDE ? 'Qualität' : 'Quality', text: isDE ? 'Kontrollierter Anbau, geprüfte Sorten' : 'Controlled cultivation, tested strains' },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="p-5 rounded-xl border border-[var(--border)] bg-bg-elevated">
                    <Icon className="w-5 h-5 text-accent mb-3" />
                    <h3 className="font-heading font-semibold text-sm mb-1.5">{title}</h3>
                    <p className="text-xs text-ink-muted leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </HomeSection>

      {/* ── Board + Growing Council ── */}
      <HomeSection>
        <section id="vorstand" className="py-16 lg:py-24 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Vorstand' : 'Board'}
            </h2>
            <p className="text-ink-muted mb-10 max-w-xl">
              {isDE
                ? 'Der Vorstand vertritt den Verein nach außen und koordiniert die Vereinsarbeit.'
                : 'The board represents the association externally and coordinates club activities.'}
            </p>

            <div className="grid md:grid-cols-3 gap-5 mb-16">
              {boardMembers.map(({ role, name, text }) => {
                const initials = name.split(' ').map((n) => n[0]).join('');
                return (
                  <div key={name} className="p-6 rounded-xl border border-[var(--border)] bg-bg-elevated">
                    <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center font-heading font-bold text-lg mb-4">
                      {initials}
                    </div>
                    <p className="text-xs font-medium text-accent mb-2">{role}</p>
                    <h3 className="font-heading font-semibold text-lg mb-2">{name}</h3>
                    <p className="text-sm text-ink-muted leading-relaxed">{text}</p>
                  </div>
                );
              })}
            </div>

            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Anbaurat' : 'Growing Council'}
            </h2>
            <p className="text-ink-muted mb-10 max-w-xl">
              {isDE
                ? 'Der Anbaurat verantwortet den gemeinschaftlichen Anbau, die Qualitätssicherung und die Suchtprävention.'
                : 'The Growing Council is responsible for communal cultivation, quality assurance and addiction prevention.'}
            </p>

            <div className="grid md:grid-cols-3 gap-5">
              {growingCouncil.map(({ role, name, text }) => {
                const initials = name.split(' ').map((n) => n[0]).join('');
                return (
                  <div key={name} className="p-6 rounded-xl border border-[var(--border)] bg-bg-elevated">
                    <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center font-heading font-bold text-lg mb-4">
                      {initials}
                    </div>
                    <p className="text-xs font-medium text-accent mb-2">{role}</p>
                    <h3 className="font-heading font-semibold text-lg mb-2">{name}</h3>
                    <p className="text-sm text-ink-muted leading-relaxed">{text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </HomeSection>

      {/* ── Club Rules ── */}
      <HomeSection>
        <section id="regeln" className="py-16 lg:py-24 bg-bg-surface scroll-mt-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Vereinsregeln' : 'Club Rules'}
            </h2>
            <p className="text-ink-muted mb-10">
              {isDE
                ? 'Verbindlich für alle Mitglieder. Verstöße können zum Ausschluss führen.'
                : 'Binding for all members. Violations may lead to exclusion.'}
            </p>

            <ol className="space-y-3">
              {rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-4 py-3">
                  <span className="text-xs font-mono text-ink-faint mt-0.5 w-5 shrink-0 text-right">
                    {i + 1}.
                  </span>
                  <span className="text-sm text-ink-muted leading-relaxed">
                    {rule}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </HomeSection>
    </>
  );
}
