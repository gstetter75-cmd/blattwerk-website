import { setRequestLocale } from 'next-intl/server';
import {
  Shield,
  BookOpen,
  Users,
  Eye,
  Leaf,
  UserCircle,
  ScrollText,
  ListChecks,
} from 'lucide-react';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isDE = locale === 'de';

  const values = [
    {
      icon: Shield,
      title: isDE ? 'Verantwortung' : 'Responsibility',
      text: isDE
        ? 'Wir setzen auf verantwortungsvollen Umgang mit Cannabis und stellen den Jugendschutz in den Mittelpunkt unseres Handelns.'
        : 'We advocate for responsible cannabis use and place youth protection at the center of our actions.',
    },
    {
      icon: BookOpen,
      title: isDE ? 'Aufklärung' : 'Education',
      text: isDE
        ? 'Fundierte, evidenzbasierte Informationen sind die Grundlage unserer Arbeit. Wir klären sachlich und ohne Verharmlosung auf.'
        : 'Well-founded, evidence-based information is the foundation of our work. We educate objectively and without trivialization.',
    },
    {
      icon: Users,
      title: isDE ? 'Gemeinschaft' : 'Community',
      text: isDE
        ? 'Als Verein leben wir von unserer Gemeinschaft. Jedes Mitglied trägt aktiv zu unserem gemeinsamen Ziel bei.'
        : 'As an association, we thrive on our community. Every member actively contributes to our shared goal.',
    },
    {
      icon: Eye,
      title: isDE ? 'Transparenz' : 'Transparency',
      text: isDE
        ? 'Offene Kommunikation, nachvollziehbare Entscheidungen und transparente Finanzen sind für uns selbstverständlich.'
        : 'Open communication, traceable decisions and transparent finances are a matter of course for us.',
    },
  ];

  const boardMembers = [
    {
      role: isDE ? '1. Vorsitzende/r' : 'Chairperson',
      name: 'N.N.',
      description: isDE
        ? 'Vertretung des Vereins, Koordination der Vereinsarbeit'
        : 'Representation of the association, coordination of activities',
    },
    {
      role: isDE ? '2. Vorsitzende/r' : 'Vice Chairperson',
      name: 'N.N.',
      description: isDE
        ? 'Stellvertretung, Mitgliederbetreuung'
        : 'Deputy, member support',
    },
    {
      role: isDE ? 'Kassenwart/in' : 'Treasurer',
      name: 'N.N.',
      description: isDE
        ? 'Finanzverwaltung, Buchführung, Beitragswesen'
        : 'Financial management, bookkeeping, membership fees',
    },
    {
      role: isDE ? 'Schriftführer/in' : 'Secretary',
      name: 'N.N.',
      description: isDE
        ? 'Protokollführung, Schriftverkehr, Dokumentation'
        : 'Minutes, correspondence, documentation',
    },
  ];

  const growingCouncil = [
    {
      role: isDE ? 'Anbauleitung' : 'Head of Cultivation',
      name: 'N.N.',
      description: isDE
        ? 'Planung und Überwachung des gemeinschaftlichen Anbaus'
        : 'Planning and supervision of communal cultivation',
    },
    {
      role: isDE ? 'Qualitätssicherung' : 'Quality Assurance',
      name: 'N.N.',
      description: isDE
        ? 'Kontrolle der Anbaubedingungen und Produktqualität'
        : 'Monitoring growing conditions and product quality',
    },
    {
      role: isDE ? 'Suchtprävention' : 'Addiction Prevention',
      name: 'N.N.',
      description: isDE
        ? 'Beratung, Prävention und Vermittlung an Hilfsangebote'
        : 'Counseling, prevention and referral to support services',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-deep-forest text-warm-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl mb-4">
            {isDE ? 'Über uns' : 'About Us'}
          </h1>
          <p className="text-warm-white/70 text-lg max-w-2xl mx-auto">
            {isDE
              ? 'BlattWerk e.V. ist eine Anbauvereinigung (Cannabis Social Club) mit Sitz in Deutschland.'
              : 'BlattWerk e.V. is a cultivation association (Cannabis Social Club) based in Germany.'}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Leaf className="w-10 h-10 text-amber mx-auto mb-4" />
            <h2 className="font-heading text-3xl text-deep-forest mb-4">
              {isDE ? 'Unsere Mission' : 'Our Mission'}
            </h2>
            <p className="text-charcoal/70 leading-relaxed max-w-2xl mx-auto">
              {isDE
                ? 'BlattWerk e.V. steht für einen verantwortungsvollen, aufgeklärten und gemeinschaftlichen Umgang mit Cannabis. Als eingetragener Verein verfolgen wir das Ziel, unseren Mitgliedern im Rahmen des Konsumcannabisgesetzes (KCanG) Zugang zu qualitätskontrolliertem Cannabis zu ermöglichen – bei gleichzeitiger Förderung von Prävention, Aufklärung und Jugendschutz.'
                : 'BlattWerk e.V. stands for responsible, informed and communal handling of cannabis. As a registered association, we aim to provide our members with access to quality-controlled cannabis within the framework of the Cannabis Consumption Act (KCanG) – while promoting prevention, education and youth protection.'}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand/30 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-deep-forest text-center mb-10">
            {isDE ? 'Unsere Werte' : 'Our Values'}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-warm-white rounded-xl p-6 shadow-sm border border-sand/50 text-center"
              >
                <Icon className="w-8 h-8 text-amber mx-auto mb-4" />
                <h3 className="font-heading text-lg text-deep-forest mb-2">
                  {title}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board - Vorstand */}
      <section id="vorstand" className="py-16 lg:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <UserCircle className="w-10 h-10 text-amber mx-auto mb-4" />
            <h2 className="font-heading text-3xl text-deep-forest mb-2">
              {isDE ? 'Vorstand' : 'Board'}
            </h2>
            <p className="text-sage">
              {isDE
                ? 'Die gewählten Vertreter unseres Vereins'
                : 'The elected representatives of our association'}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardMembers.map(({ role, name, description }) => (
              <div
                key={role}
                className="bg-warm-white rounded-xl p-6 shadow-sm border border-sand/50 text-center"
              >
                <div className="w-16 h-16 bg-sand/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <UserCircle className="w-8 h-8 text-sage" />
                </div>
                <h3 className="font-heading text-lg text-deep-forest mb-1">
                  {name}
                </h3>
                <p className="text-amber text-sm font-medium mb-2">{role}</p>
                <p className="text-xs text-charcoal/60">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growing Council - Anbaurat */}
      <section id="anbaurat" className="bg-sand/30 py-16 lg:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Leaf className="w-10 h-10 text-amber mx-auto mb-4" />
            <h2 className="font-heading text-3xl text-deep-forest mb-2">
              {isDE ? 'Anbaurat' : 'Growing Council'}
            </h2>
            <p className="text-sage">
              {isDE
                ? 'Verantwortlich für Anbau, Qualität und Prävention'
                : 'Responsible for cultivation, quality and prevention'}
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {growingCouncil.map(({ role, name, description }) => (
              <div
                key={role}
                className="bg-warm-white rounded-xl p-6 shadow-sm border border-sand/50 text-center"
              >
                <div className="w-16 h-16 bg-sand/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <UserCircle className="w-8 h-8 text-sage" />
                </div>
                <h3 className="font-heading text-lg text-deep-forest mb-1">
                  {name}
                </h3>
                <p className="text-amber text-sm font-medium mb-2">{role}</p>
                <p className="text-xs text-charcoal/60">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statutes - Satzung */}
      <section id="satzung" className="py-16 lg:py-20 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <ScrollText className="w-10 h-10 text-amber mx-auto mb-4" />
            <h2 className="font-heading text-3xl text-deep-forest mb-2">
              {isDE ? 'Satzung' : 'Statutes'}
            </h2>
            <p className="text-sage">
              {isDE
                ? 'Die Grundordnung unseres Vereins'
                : 'The bylaws of our association'}
            </p>
          </div>
          <div className="bg-warm-white rounded-xl p-8 shadow-sm border border-sand/50">
            <p className="text-charcoal/70 leading-relaxed mb-4">
              {isDE
                ? 'Die vollständige Satzung des BlattWerk e.V. regelt die Vereinsstruktur, Mitgliedschaft, Organe und alle wesentlichen Prozesse. Sie basiert auf den Anforderungen des KCanG und den Vorgaben des Vereinsrechts.'
                : 'The complete statutes of BlattWerk e.V. regulate the association structure, membership, bodies and all essential processes. They are based on the requirements of the KCanG and the provisions of association law.'}
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              {isDE
                ? 'Die Satzung wird derzeit finalisiert und wird nach Eintragung des Vereins hier veröffentlicht. Sie enthält unter anderem Regelungen zu: Vereinszweck, Mitgliedschaft und Beiträge, Organe des Vereins, Mitgliederversammlung, Jugendschutz und Suchtprävention.'
                : 'The statutes are currently being finalized and will be published here after the association is registered. They contain regulations on: association purpose, membership and fees, bodies of the association, general assembly, youth protection and addiction prevention.'}
            </p>
            <div className="bg-sand/30 rounded-lg p-4 text-center">
              <p className="text-sm text-sage italic">
                {isDE
                  ? 'Die Satzung wird nach Vereinsgründung hier zum Download bereitgestellt.'
                  : 'The statutes will be available for download here after the association is founded.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rules - Regeln */}
      <section id="regeln" className="bg-sand/30 py-16 lg:py-20 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <ListChecks className="w-10 h-10 text-amber mx-auto mb-4" />
            <h2 className="font-heading text-3xl text-deep-forest mb-2">
              {isDE ? 'Vereinsregeln' : 'Club Rules'}
            </h2>
            <p className="text-sage">
              {isDE
                ? 'Verbindliche Regeln für alle Mitglieder'
                : 'Binding rules for all members'}
            </p>
          </div>
          <div className="bg-warm-white rounded-xl p-8 shadow-sm border border-sand/50">
            <ul className="space-y-4">
              {(isDE
                ? [
                    'Der Konsum von Cannabis ist ausschließlich Mitgliedern ab 18 Jahren gestattet.',
                    'Cannabis darf nur in den dafür vorgesehenen Bereichen der Vereinsräume konsumiert werden.',
                    'Die Weitergabe von Cannabis an Nicht-Mitglieder oder Minderjährige ist strengstens untersagt.',
                    'Jedes Mitglied ist verpflichtet, sich an die geltenden Abgabemengen (max. 25g/Tag, 50g/Monat) zu halten.',
                    'Respektvoller Umgang miteinander und gegenseitige Rücksichtnahme sind Grundvoraussetzung.',
                    'Bei Anzeichen von problematischem Konsum ist die Suchtpräventionsbeauftragte/der Suchtpräventionsbeauftragte zu kontaktieren.',
                    'Das Mitbringen und der Konsum anderer Rauschmittel in den Vereinsräumen ist untersagt.',
                    'Verstöße gegen die Vereinsregeln können zum Ausschluss aus dem Verein führen.',
                  ]
                : [
                    'Cannabis consumption is only permitted for members aged 18 and over.',
                    'Cannabis may only be consumed in the designated areas of the club premises.',
                    'Passing cannabis to non-members or minors is strictly prohibited.',
                    'Every member is obliged to comply with the applicable distribution limits (max. 25g/day, 50g/month).',
                    'Respectful interaction and mutual consideration are basic prerequisites.',
                    'If signs of problematic consumption appear, the addiction prevention officer must be contacted.',
                    'Bringing and consuming other intoxicants on the club premises is prohibited.',
                    'Violations of the club rules may lead to exclusion from the association.',
                  ]
              ).map((rule, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-charcoal/70"
                >
                  <span className="w-6 h-6 rounded-full bg-deep-forest text-warm-white text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="leading-relaxed">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
