'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { HomeSection } from '@/components/shared/HomeSection';

interface Props {
  isDE: boolean;
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
};

export function MitgliedschaftClient({ isDE }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      title: isDE ? 'Cannabis zum Selbstkostenpreis' : 'Cannabis at Cost Price',
      text: isDE
        ? 'Kein Gewinnaufschlag. Du zahlst nur die tatsächlichen Kosten für Anbau, Energie und Material. Das ist gesetzlich vorgeschrieben und macht den Unterschied zum Schwarzmarkt.'
        : 'No profit markup. You only pay the actual costs for growing, energy and materials. This is legally mandated and sets us apart from the black market.',
    },
    {
      title: isDE ? 'Geprüfte Qualität & Sortenvielfalt' : 'Tested Quality & Strain Variety',
      text: isDE
        ? 'Jede Ernte wird auf Reinheit und Cannabinoid-Gehalt geprüft. Du weißt genau, was du konsumierst — Sorte, THC/CBD-Werte und Terpenprofil. Keine Streckmittel, keine Unsicherheit.'
        : 'Every harvest is tested for purity and cannabinoid content. You know exactly what you consume — strain, THC/CBD values and terpene profile. No adulterants, no uncertainty.',
    },
    {
      title: isDE ? 'Mitbestimmung & Gemeinschaft' : 'Participation & Community',
      text: isDE
        ? 'Du hast Stimmrecht bei der Mitgliederversammlung und kannst aktiv mitgestalten — von der Sortenauswahl bis zur Vereinsarbeit. BlattWerk ist kein anonymer Laden, sondern dein Verein.'
        : 'You have voting rights at the general assembly and can actively participate — from strain selection to club operations. BlattWerk is not an anonymous shop, it\'s your club.',
    },
    {
      title: isDE ? 'Workshops & Wissen' : 'Workshops & Education',
      text: isDE
        ? 'Zugang zu regelmäßigen Workshops: Safer-Use, Grow-Einführungen, Verkostungen und Vorträge. Dazu unsere Wissensdatenbank mit 40+ Fachartikeln zu Recht, Gesundheit und Anbau.'
        : 'Access to regular workshops: safer use, grow introductions, tastings and lectures. Plus our knowledge base with 40+ articles on law, health and growing.',
    },
  ];

  const requirements = [
    {
      title: isDE ? 'Mindestalter 21 Jahre' : 'Minimum Age 21',
      text: isDE
        ? 'Du musst mindestens 21 Jahre alt sein. Ein gültiger Personalausweis oder Reisepass ist für die Altersverifikation erforderlich. Das KCanG schreibt die Altersprüfung gesetzlich vor.'
        : 'You must be at least 21 years old. A valid ID card or passport is required for age verification. The KCanG legally mandates age verification.',
    },
    {
      title: isDE ? 'Wohnsitz in Deutschland' : 'Residence in Germany',
      text: isDE
        ? 'Du brauchst einen gemeldeten Wohnsitz in Deutschland. Eine aktuelle Meldebescheinigung wird im Rahmen des Aufnahmeprozesses geprüft.'
        : 'You need a registered residence in Germany. A current registration certificate is verified during the admission process.',
    },
    {
      title: isDE ? 'Keine Doppelmitgliedschaft' : 'No Dual Membership',
      text: isDE
        ? 'Das KCanG erlaubt nur die Mitgliedschaft in einer Anbauvereinigung gleichzeitig. Falls du bei einem anderen Club Mitglied bist, musst du dort zuerst austreten.'
        : 'The KCanG only allows membership in one cultivation association at a time. If you are a member of another club, you must leave there first.',
    },
    {
      title: isDE ? 'Vereinssatzung akzeptieren' : 'Accept Club Statutes',
      text: isDE
        ? 'Du erkennst die Vereinssatzung, die Vereinsregeln und unser Suchtpräventionskonzept an. Das schützt den Verein und alle Mitglieder.'
        : 'You accept the association statutes, rules and our addiction prevention concept. This protects the club and all members.',
    },
  ];

  const steps = [
    {
      title: isDE ? 'In der Hanf-App registrieren' : 'Register in the Hanf-App',
      text: isDE
        ? 'Lade die Hanf-App herunter, erstelle deinen Account und stelle bei „BlattWerk Hildesheim" eine Mitgliedsanfrage. Das geht in wenigen Minuten.'
        : 'Download the Hanf-App, create your account and submit a membership request to "BlattWerk Hildesheim". This takes just a few minutes.',
    },
    {
      title: isDE ? 'Vorläufige Aufnahme' : 'Provisional Admission',
      text: isDE
        ? 'Nach Eingang deiner Anfrage wirst du als vorläufiges Mitglied zugelassen. Damit kannst du dich schon mit dem Verein vertraut machen.'
        : 'After receiving your request, you are admitted as a provisional member. This allows you to familiarize yourself with the club.',
    },
    {
      title: isDE ? 'Ausweiskontrolle beim Vorstand' : 'ID Check with the Board',
      text: isDE
        ? 'Für die vollständige Mitgliedschaft musst du einem Vorstandsmitglied persönlich deinen Ausweis vorzeigen. Das ist gesetzlich vorgeschrieben, um Alter und Identität zu bestätigen.'
        : 'For full membership, you must personally present your ID to a board member. This is legally required to confirm age and identity.',
    },
    {
      title: isDE ? 'Vollmitglied & Loslegen' : 'Full Member & Get Started',
      text: isDE
        ? 'Nach der Ausweiskontrolle bist du vollwertiges Mitglied. Der monatliche Beitrag von 10 € wird per Lastschrift eingezogen. Sobald die erste Ernte steht, kannst du Cannabis zum Selbstkostenpreis beziehen.'
        : 'After the ID check, you are a full member. The monthly fee of €10 is collected by direct debit. Once the first harvest is ready, you can obtain cannabis at cost price.',
    },
  ];

  const fees = [
    {
      label: isDE ? 'Aufnahmegebühr (einmalig)' : 'Admission fee (one-time)',
      value: '12,00 €',
      note: isDE
        ? 'Deckt die Verwaltungskosten für Identitätsprüfung und Dokumentation.'
        : 'Covers administrative costs for identity verification and documentation.',
    },
    {
      label: isDE ? 'Monatlicher Mitgliedsbeitrag' : 'Monthly membership fee',
      value: '10,00 €',
      note: isDE
        ? 'Finanziert Miete, Strom, Versicherung und laufende Betriebskosten des Vereins.'
        : 'Funds rent, electricity, insurance and ongoing operating costs of the club.',
    },
    {
      label: isDE
        ? 'Cannabis-Bezug (zusätzlich zum Beitrag)'
        : 'Cannabis purchase (in addition to fee)',
      value: isDE
        ? 'nach Selbstkostenpreis'
        : 'at cost price',
      note: isDE
        ? 'Anbau, Energie, Material — kein Gewinnaufschlag. Der exakte Preis hängt von der Sorte und der Erntemenge ab.'
        : 'Growing, energy, materials — no profit markup. The exact price depends on the strain and harvest quantity.',
    },
  ];

  const faqs = [
    {
      q: isDE
        ? 'Wie lange dauert der Aufnahmeprozess?'
        : 'How long does the admission process take?',
      a: isDE
        ? 'In der Regel 1–2 Wochen ab Eingang deines vollständigen Antrags. Die Dauer hängt davon ab, wie schnell du alle Unterlagen einreichst. Sobald dein Antrag genehmigt ist, wirst du per E-Mail benachrichtigt.'
        : 'Usually 1–2 weeks from receipt of your complete application. The duration depends on how quickly you submit all documents. You will be notified by email once your application is approved.',
    },
    {
      q: isDE
        ? 'Kann ich in mehreren Clubs gleichzeitig Mitglied sein?'
        : 'Can I be a member of multiple clubs at the same time?',
      a: isDE
        ? 'Nein. Das Konsumcannabisgesetz (KCanG) schreibt ausdrücklich vor, dass du nur in einer Anbauvereinigung gleichzeitig Mitglied sein darfst. Bei der Aufnahme bestätigst du, dass du keinem anderen Club angehörst.'
        : 'No. The Cannabis Act (KCanG) explicitly stipulates that you may only be a member of one cultivation association at a time. During admission, you confirm that you do not belong to another club.',
    },
    {
      q: isDE
        ? 'Was passiert, wenn ich kündigen möchte?'
        : 'What happens if I want to cancel?',
      a: isDE
        ? 'Die Mitgliedschaft kann mit einer Kündigungsfrist von drei Monaten zum Monatsende gekündigt werden. Die Kündigung erfolgt schriftlich oder über die Hanf-App. Bereits gezahlte Beiträge werden nicht erstattet.'
        : 'Membership can be cancelled with three months\' notice to the end of the month. Cancellation is done in writing or via the Hanf-App. Fees already paid are not refunded.',
    },
    {
      q: isDE
        ? 'Welche Rechte habe ich als Mitglied?'
        : 'What rights do I have as a member?',
      a: isDE
        ? 'Du hast Stimmrecht bei der Mitgliederversammlung, Zugang zu den Vereinsräumen, kannst an Workshops und Veranstaltungen teilnehmen und Cannabis im Rahmen der gesetzlichen Grenzen beziehen (max. 25g/Tag, 50g/Monat).'
        : 'You have voting rights at the general assembly, access to club premises, can attend workshops and events, and obtain cannabis within legal limits (max. 25g/day, 50g/month).',
    },
    {
      q: isDE
        ? 'Ab welchem Alter kann ich Mitglied werden?'
        : 'At what age can I become a member?',
      a: isDE
        ? 'Du musst mindestens 21 Jahre alt sein. Das KCanG erlaubt zwar die Mitgliedschaft ab 18 Jahren, BlattWerk e.V. hat sich jedoch bewusst für eine Altersgrenze von 21 Jahren entschieden — zum Schutz jüngerer Erwachsener.'
        : 'You must be at least 21 years old. While the KCanG allows membership from age 18, BlattWerk e.V. has deliberately set the age limit at 21 — to protect younger adults.',
    },
    {
      q: isDE
        ? 'Wie viel Cannabis darf ich pro Monat beziehen?'
        : 'How much cannabis can I obtain per month?',
      a: isDE
        ? 'Das KCanG erlaubt maximal 25 Gramm pro Tag und 50 Gramm pro Kalendermonat. Für Mitglieder zwischen 18 und 21 Jahren (bei anderen Clubs) gelten strengere Grenzen: 30 Gramm pro Monat bei maximal 10% THC-Gehalt.'
        : 'The KCanG allows a maximum of 25 grams per day and 50 grams per calendar month. For members aged 18–21 (at other clubs) stricter limits apply: 30 grams per month with a maximum of 10% THC content.',
    },
    {
      q: isDE
        ? 'Wann kann ich das erste Mal Cannabis beziehen?'
        : 'When can I obtain cannabis for the first time?',
      a: isDE
        ? 'Sobald unsere erste Ernte abgeschlossen und qualitätsgeprüft ist. Wir befinden uns aktuell im aktiven Anbau. Über den genauen Zeitpunkt informieren wir über unseren Blog und per E-Mail.'
        : 'Once our first harvest is complete and quality-tested. We are currently in active cultivation. We will announce the exact date via our blog and email.',
    },
    {
      q: isDE
        ? 'Welche Sorten baut BlattWerk an?'
        : 'Which strains does BlattWerk grow?',
      a: isDE
        ? 'Wir planen mit über 50 Sorten — Indica, Sativa und Hybrid — mit unterschiedlichen THC/CBD-Verhältnissen und Terpenprofilen. Die finale Auswahl richtet sich auch nach den Wünschen unserer Mitglieder. Alle Sorten findest du in unserer Sortendatenbank.'
        : 'We are planning with over 50 strains — indica, sativa and hybrid — with different THC/CBD ratios and terpene profiles. The final selection also considers member preferences. All strains can be found in our strain database.',
    },
    {
      q: isDE
        ? 'Ist die Mitgliedschaft wirklich legal?'
        : 'Is the membership really legal?',
      a: isDE
        ? 'Ja. BlattWerk e.V. ist eine lizenzierte Anbauvereinigung nach dem Konsumcannabisgesetz (KCanG). Die Anbaulizenz wurde am 18. März 2026 erteilt. Der gemeinschaftliche Anbau und die Abgabe an volljährige Mitglieder sind gesetzlich erlaubt.'
        : 'Yes. BlattWerk e.V. is a licensed cultivation association under the Cannabis Act (KCanG). The cultivation license was granted on March 18, 2026. Communal cultivation and distribution to adult members is legally permitted.',
    },
    {
      q: isDE
        ? 'Muss ich selbst beim Anbau mithelfen?'
        : 'Do I have to help with growing?',
      a: isDE
        ? 'Nein, das ist keine Pflicht. Der Anbau wird von unserem Anbaurat und erfahrenen Mitgliedern organisiert. Du kannst dich aber freiwillig einbringen — zum Beispiel bei Grow-Workshops oder der Ernte.'
        : 'No, it\'s not mandatory. Growing is organized by our growing council and experienced members. But you can volunteer — for example at grow workshops or harvest.',
    },
  ];

  return (
    <>
      {/* -- Hero -- */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <p className="text-sm font-medium text-accent mb-4">
              {isDE ? 'Mitgliedschaft' : 'Membership'}
            </p>
            <h1 className="font-heading font-bold text-4xl lg:text-5xl leading-tight mb-6 max-w-3xl">
              {isDE ? 'Mitglied werden bei BlattWerk e.V.' : 'Become a Member at BlattWerk e.V.'}
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-4">
              {isDE
                ? 'BlattWerk e.V. ist ein lizenzierter Cannabis Social Club in Hildesheim. Als Mitglied beziehst du qualitätsgeprüftes Cannabis zum Selbstkostenpreis — legal, transparent und ohne Schwarzmarkt.'
                : 'BlattWerk e.V. is a licensed Cannabis Social Club in Hildesheim. As a member, you obtain quality-tested cannabis at cost price — legal, transparent and without the black market.'}
            </p>
            <p className="text-base text-ink-muted leading-relaxed max-w-2xl">
              {isDE
                ? 'Keine Gewinnabsicht, keine anonymen Strukturen. Ein Verein von und für Erwachsene, die Cannabis verantwortungsvoll konsumieren.'
                : 'No profit motive, no anonymous structures. A club by and for adults who consume cannabis responsibly.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* -- Benefits -- */}
      <HomeSection>
        <section className="py-16 lg:py-24 bg-bg-surface">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Was du als Mitglied bekommst' : 'What You Get as a Member'}
            </h2>
            <p className="text-ink-muted mb-10 max-w-xl">
              {isDE
                ? 'Eine Mitgliedschaft bei BlattWerk ist kein Abo — es ist Teilhabe an einem legalen, gemeinschaftlichen Projekt.'
                : 'A membership at BlattWerk is not a subscription — it\'s participation in a legal, communal project.'}
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {benefits.map(({ title, text }, i) => (
                <div key={i} className="p-6 rounded-xl border border-[var(--border)] bg-bg-elevated">
                  <h3 className="font-heading font-semibold text-base mb-2">{title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </HomeSection>

      {/* -- Requirements -- */}
      <HomeSection>
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Voraussetzungen für die Mitgliedschaft' : 'Membership Requirements'}
            </h2>
            <p className="text-ink-muted mb-10 max-w-xl">
              {isDE
                ? 'Diese Voraussetzungen sind gesetzlich vorgeschrieben und gelten für alle Cannabis Social Clubs in Deutschland.'
                : 'These requirements are legally mandated and apply to all Cannabis Social Clubs in Germany.'}
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {requirements.map(({ title, text }, i) => (
                <div key={i} className="p-6 rounded-xl border border-[var(--border)] bg-bg-elevated">
                  <h3 className="font-heading font-semibold text-base mb-2">{title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-ink-muted mt-8 max-w-2xl">
              {isDE
                ? 'Alle Anforderungen basieren auf dem Konsumcannabisgesetz (KCanG). '
                : 'All requirements are based on the Cannabis Act (KCanG). '}
              <Link
                href="/wissensdatenbank/legal/cannabis-social-clubs"
                className="text-accent hover:underline"
              >
                {isDE ? 'Mehr zu den gesetzlichen Regeln für CSCs' : 'More about legal rules for CSCs'}
              </Link>
            </p>
          </div>
        </section>
      </HomeSection>

      {/* -- Process Steps -- */}
      <HomeSection>
        <section className="py-16 lg:py-24 bg-bg-surface">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Aufnahmeprozess — So wirst du Mitglied' : 'Admission Process — How to Join'}
            </h2>
            <p className="text-ink-muted mb-10 max-w-xl">
              {isDE
                ? 'Vom Antrag bis zur Mitgliedschaft in 4 Schritten. Der gesamte Prozess läuft über die Hanf-App.'
                : 'From application to membership in 4 steps. The entire process runs through the Hanf-App.'}
            </p>

            <div className="grid md:grid-cols-4 gap-5">
              {steps.map(({ title, text }, i) => (
                <div key={i} className="p-5 rounded-xl border border-[var(--border)] bg-bg-elevated">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent text-sm font-bold mb-3">
                    {i + 1}
                  </span>
                  <h3 className="font-heading font-semibold text-base mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </HomeSection>

      {/* -- Fees -- */}
      <HomeSection>
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Kosten & Beiträge' : 'Costs & Fees'}
            </h2>
            <p className="text-ink-muted mb-10 max-w-xl">
              {isDE
                ? 'BlattWerk e.V. ist nicht gewinnorientiert. Alle Beiträge decken ausschließlich die laufenden Betriebskosten.'
                : 'BlattWerk e.V. is non-profit. All fees exclusively cover ongoing operating costs.'}
            </p>

            {fees.map(({ label, value, note }, i) => (
              <div
                key={i}
                className={`py-5 ${i > 0 ? 'border-t border-[var(--border)]' : ''}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-ink">{label}</span>
                  <span className="font-mono text-sm font-bold">{value}</span>
                </div>
                <p className="text-xs text-ink-faint">{note}</p>
              </div>
            ))}
          </div>
        </section>
      </HomeSection>

      {/* -- Why BlattWerk -- */}
      <HomeSection>
        <section className="py-16 lg:py-24 bg-bg-surface">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Warum BlattWerk?' : 'Why BlattWerk?'}
            </h2>
            <p className="text-ink-muted mb-8 max-w-xl">
              {isDE
                ? 'Es gibt viele Cannabis Social Clubs. Das unterscheidet uns:'
                : 'There are many Cannabis Social Clubs. Here\'s what sets us apart:'}
            </p>

            <div className="space-y-4">
              {[
                {
                  title: isDE ? 'Lizenziert und legal' : 'Licensed and Legal',
                  text: isDE
                    ? 'Anbaulizenz erteilt am 18. März 2026. Wir sind kein Graubereich — wir sind eine offiziell genehmigte Anbauvereinigung nach dem KCanG.'
                    : 'Cultivation license granted on March 18, 2026. We are not a gray area — we are an officially approved cultivation association under the KCanG.',
                },
                {
                  title: isDE ? 'Transparent & gemeinnützig' : 'Transparent & Non-Profit',
                  text: isDE
                    ? 'Eingetragen im Vereinsregister Hildesheim. Kein Gewinnziel, keine versteckten Kosten. Die Finanzen werden den Mitgliedern offengelegt.'
                    : 'Registered in the Hildesheim association register. No profit goal, no hidden costs. Finances are disclosed to members.',
                },
                {
                  title: isDE ? 'Prävention ernst genommen' : 'Prevention Taken Seriously',
                  text: isDE
                    ? 'Unser Suchtpräventionskonzept ist nicht nur Pflicht — wir meinen es ernst. Selbsttest, lokale Beratungsstellen und ehrliche Aufklärung über Risiken.'
                    : 'Our addiction prevention concept is not just an obligation — we mean it. Self-test, local counseling and honest education about risks.',
                },
                {
                  title: isDE ? 'Verwurzelt in Hildesheim' : 'Rooted in Hildesheim',
                  text: isDE
                    ? 'BlattWerk ist kein Franchise und kein anonymes Online-Projekt. Wir sind ein lokaler Verein mit echten Menschen, echten Räumen und einer echten Gemeinschaft am Wetzellplatz 2.'
                    : 'BlattWerk is not a franchise and not an anonymous online project. We are a local club with real people, real premises and a real community at Wetzellplatz 2.',
                },
              ].map(({ title, text }, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl border border-[var(--border)] bg-bg-elevated">
                  <span className="text-accent text-lg shrink-0 mt-0.5">&#10003;</span>
                  <div>
                    <h3 className="font-heading font-semibold text-base mb-1">{title}</h3>
                    <p className="text-sm text-ink-muted leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </HomeSection>

      {/* -- FAQ -- */}
      <HomeSection>
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Häufige Fragen zur Mitgliedschaft' : 'Membership FAQ'}
            </h2>
            <p className="text-ink-muted mb-10 max-w-xl">
              {isDE
                ? 'Die wichtigsten Fragen rund um Beitritt, Kosten, Rechte und Ablauf bei BlattWerk e.V.'
                : 'The most important questions about joining, costs, rights and processes at BlattWerk e.V.'}
            </p>

            <ul className="space-y-0">
              {faqs.map(({ q, a }, i) => {
                const isOpen = openFaq === i;
                return (
                  <li
                    key={i}
                    className={i > 0 ? 'border-t border-[var(--border)]' : ''}
                  >
                    <button
                      type="button"
                      className="w-full text-left flex items-start justify-between gap-4 py-6"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span className="font-heading font-bold text-base leading-snug">
                        {q}
                      </span>
                      <span
                        className="font-mono text-lg shrink-0 mt-0.5 transition-transform duration-300 text-accent"
                        style={{
                          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        }}
                      >
                        +
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 text-sm leading-relaxed text-ink-muted">
                            {a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </HomeSection>

      {/* -- CTA -- */}
      <HomeSection>
        <section className="py-16 lg:py-24 bg-bg-surface">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Jetzt Aufnahmeantrag stellen' : 'Submit Your Application Now'}
            </h2>
            <p className="text-ink-muted mb-8 max-w-xl">
              {isDE
                ? 'Der Aufnahmeantrag läuft über die Hanf-App. Dort registrierst du dich, reichst deinen Antrag ein und verfolgst den Status. Bei Fragen erreichst du uns jederzeit über unser Kontaktformular.'
                : 'The admission application runs through the Hanf-App. There you register, submit your application and track the status. For questions, reach us anytime via our contact form.'}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://diehanfapp.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-md transition-all duration-200 hover:-translate-y-0.5 bg-accent text-white"
              >
                {isDE ? 'Zur Hanf-App' : 'Go to Hanf-App'}
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-md border border-[var(--border)] hover:bg-bg-elevated transition-colors"
              >
                {isDE ? 'Fragen? Kontakt aufnehmen' : 'Questions? Contact us'}
              </Link>
            </div>
          </div>
        </section>
      </HomeSection>
    </>
  );
}
