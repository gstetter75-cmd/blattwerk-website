import { setRequestLocale } from 'next-intl/server';
import {
  CheckCircle,
  ExternalLink,
  ChevronDown,
  Euro,
  FileCheck,
  Users,
  ShieldCheck,
} from 'lucide-react';

export default async function MembershipPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isDE = locale === 'de';

  const requirements = [
    {
      text: isDE
        ? 'Mindestalter 18 Jahre (Personalausweis oder Reisepass erforderlich)'
        : 'Minimum age 18 years (ID card or passport required)',
    },
    {
      text: isDE
        ? 'Wohnsitz in Deutschland (Meldebescheinigung)'
        : 'Residence in Germany (registration certificate)',
    },
    {
      text: isDE
        ? 'Anerkennung der Vereinssatzung und Vereinsregeln'
        : 'Acceptance of the association statutes and rules',
    },
    {
      text: isDE
        ? 'Keine Mitgliedschaft in einer anderen Anbauvereinigung'
        : 'No membership in another cultivation association',
    },
  ];

  const steps = [
    {
      icon: FileCheck,
      title: isDE ? 'Antrag stellen' : 'Submit Application',
      text: isDE
        ? 'Registriere dich über die Hanf-App und stelle dort deinen Aufnahmeantrag.'
        : 'Register via the Hanf-App and submit your admission application there.',
    },
    {
      icon: ShieldCheck,
      title: isDE ? 'Identitätsprüfung' : 'Identity Verification',
      text: isDE
        ? 'Deine Identität und dein Alter werden geprüft. Dies ist gesetzlich vorgeschrieben.'
        : 'Your identity and age will be verified. This is legally required.',
    },
    {
      icon: Users,
      title: isDE ? 'Aufnahme' : 'Admission',
      text: isDE
        ? 'Nach erfolgreicher Prüfung wirst du als Mitglied aufgenommen und erhältst Zugang.'
        : 'After successful verification, you will be admitted as a member and receive access.',
    },
    {
      icon: Euro,
      title: isDE ? 'Beitrag zahlen' : 'Pay Membership Fee',
      text: isDE
        ? 'Der monatliche Mitgliedsbeitrag wird per Lastschrift eingezogen.'
        : 'The monthly membership fee is collected by direct debit.',
    },
  ];

  const faqs = [
    {
      q: isDE
        ? 'Wie lange dauert der Aufnahmeprozess?'
        : 'How long does the admission process take?',
      a: isDE
        ? 'In der Regel dauert die Prüfung 1–2 Wochen. Sobald dein Antrag genehmigt ist, wirst du benachrichtigt.'
        : 'The review usually takes 1–2 weeks. You will be notified once your application is approved.',
    },
    {
      q: isDE
        ? 'Kann ich in mehreren Clubs gleichzeitig Mitglied sein?'
        : 'Can I be a member of multiple clubs at the same time?',
      a: isDE
        ? 'Nein. Das KCanG schreibt vor, dass man nur in einer Anbauvereinigung gleichzeitig Mitglied sein darf.'
        : 'No. The KCanG stipulates that you may only be a member of one cultivation association at a time.',
    },
    {
      q: isDE
        ? 'Was passiert, wenn ich kündigen möchte?'
        : 'What happens if I want to cancel?',
      a: isDE
        ? 'Die Mitgliedschaft kann jederzeit mit einer Frist von einem Monat zum Monatsende gekündigt werden.'
        : 'Membership can be cancelled at any time with one month\'s notice to the end of the month.',
    },
    {
      q: isDE
        ? 'Welche Rechte habe ich als Mitglied?'
        : 'What rights do I have as a member?',
      a: isDE
        ? 'Du hast Stimmrecht bei der Mitgliederversammlung, Zugang zu den Vereinsräumen und kannst Cannabis im Rahmen der gesetzlichen Grenzen beziehen.'
        : 'You have voting rights at the general assembly, access to the club premises and can obtain cannabis within the legal limits.',
    },
    {
      q: isDE
        ? 'Ab welchem Alter kann ich Mitglied werden?'
        : 'At what age can I become a member?',
      a: isDE
        ? 'Du musst mindestens 18 Jahre alt sein. Für Mitglieder zwischen 18 und 21 gelten besondere Abgaberegelungen (max. 30g/Monat, max. 10% THC).'
        : 'You must be at least 18 years old. Special distribution rules apply for members between 18 and 21 (max. 30g/month, max. 10% THC).',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-deep-forest text-warm-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl mb-4">
            {isDE ? 'Mitgliedschaft' : 'Membership'}
          </h1>
          <p className="text-warm-white/70 text-lg max-w-2xl mx-auto">
            {isDE
              ? 'Werde Teil unserer Gemeinschaft. Hier erfährst du alles über die Voraussetzungen, den Aufnahmeprozess und deine Rechte als Mitglied.'
              : 'Become part of our community. Here you will find everything about the requirements, the admission process and your rights as a member.'}
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-deep-forest text-center mb-10">
            {isDE ? 'Voraussetzungen' : 'Requirements'}
          </h2>
          <div className="space-y-4">
            {requirements.map(({ text }, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-warm-white p-5 rounded-xl border border-sand/50 shadow-sm"
              >
                <CheckCircle className="w-6 h-6 text-deep-forest shrink-0 mt-0.5" />
                <p className="text-charcoal/80 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-sand/30 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-deep-forest text-center mb-10">
            {isDE ? 'Aufnahmeprozess' : 'Admission Process'}
          </h2>
          <div className="space-y-6">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-deep-forest text-warm-white flex items-center justify-center shrink-0">
                    <span className="font-heading text-lg">{i + 1}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 h-8 bg-sand mt-2" />
                  )}
                </div>
                <div className="bg-warm-white rounded-xl p-5 border border-sand/50 shadow-sm flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-amber" />
                    <h3 className="font-heading text-lg text-deep-forest">
                      {title}
                    </h3>
                  </div>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hanf-App CTA */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-deep-forest rounded-2xl p-8 lg:p-12 text-warm-white">
            <h2 className="font-heading text-3xl mb-4">
              {isDE
                ? 'Aufnahmeantrag über die Hanf-App'
                : 'Admission Application via Hanf-App'}
            </h2>
            <p className="text-warm-white/70 max-w-xl mx-auto mb-8">
              {isDE
                ? 'Der Aufnahmeantrag für unseren Verein erfolgt ausschließlich über die Hanf-App. Dort kannst du dich registrieren, deinen Antrag einreichen und den Status verfolgen.'
                : 'The admission application for our association is exclusively via the Hanf-App. There you can register, submit your application and track the status.'}
            </p>
            <a
              href="https://diehanfapp.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-amber text-warm-white rounded-lg hover:bg-amber/90 transition-colors font-medium"
            >
              {isDE ? 'Zur Hanf-App' : 'Go to Hanf-App'}{' '}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="bg-sand/30 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-deep-forest text-center mb-10">
            {isDE ? 'Beiträge' : 'Fees'}
          </h2>
          <div className="bg-warm-white rounded-xl shadow-sm border border-sand/50 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-deep-forest text-warm-white">
                  <th className="text-left px-6 py-4 font-heading">
                    {isDE ? 'Beitragsart' : 'Fee Type'}
                  </th>
                  <th className="text-right px-6 py-4 font-heading">
                    {isDE ? 'Betrag' : 'Amount'}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-sand/50">
                  <td className="px-6 py-4 text-charcoal/80">
                    {isDE ? 'Aufnahmegebühr (einmalig)' : 'Admission fee (one-time)'}
                  </td>
                  <td className="px-6 py-4 text-right text-charcoal/80 font-medium">
                    {isDE ? 'wird noch bekanntgegeben' : 'to be announced'}
                  </td>
                </tr>
                <tr className="border-t border-sand/50">
                  <td className="px-6 py-4 text-charcoal/80">
                    {isDE ? 'Monatlicher Mitgliedsbeitrag' : 'Monthly membership fee'}
                  </td>
                  <td className="px-6 py-4 text-right text-charcoal/80 font-medium">
                    {isDE ? 'wird noch bekanntgegeben' : 'to be announced'}
                  </td>
                </tr>
                <tr className="border-t border-sand/50">
                  <td className="px-6 py-4 text-charcoal/80">
                    {isDE
                      ? 'Cannabis-Bezug (zusätzlich zum Beitrag)'
                      : 'Cannabis purchase (in addition to fee)'}
                  </td>
                  <td className="px-6 py-4 text-right text-charcoal/80 font-medium">
                    {isDE ? 'nach Selbstkostenpreis' : 'at cost price'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-sage text-center mt-4">
            {isDE
              ? 'Der Verein ist nicht gewinnorientiert. Alle Beiträge dienen ausschließlich der Deckung der Betriebskosten.'
              : 'The association is non-profit. All fees serve exclusively to cover operating costs.'}
          </p>
        </div>
      </section>

      {/* Rights & Duties */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-deep-forest text-center mb-10">
            {isDE ? 'Rechte & Pflichten' : 'Rights & Duties'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-warm-white rounded-xl p-6 shadow-sm border border-sand/50">
              <h3 className="font-heading text-xl text-deep-forest mb-4">
                {isDE ? 'Deine Rechte' : 'Your Rights'}
              </h3>
              <ul className="space-y-3">
                {(isDE
                  ? [
                      'Bezug von Cannabis im gesetzlichen Rahmen',
                      'Stimmrecht bei der Mitgliederversammlung',
                      'Nutzung der Vereinsräumlichkeiten',
                      'Zugang zur Wissensdatenbank und Events',
                      'Beratung durch die Suchtprävention',
                    ]
                  : [
                      'Obtaining cannabis within the legal framework',
                      'Voting rights at the general assembly',
                      'Use of club premises',
                      'Access to the knowledge base and events',
                      'Counseling from addiction prevention',
                    ]
                ).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-charcoal/70">
                    <CheckCircle className="w-4 h-4 text-deep-forest shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-warm-white rounded-xl p-6 shadow-sm border border-sand/50">
              <h3 className="font-heading text-xl text-deep-forest mb-4">
                {isDE ? 'Deine Pflichten' : 'Your Duties'}
              </h3>
              <ul className="space-y-3">
                {(isDE
                  ? [
                      'Pünktliche Zahlung des Mitgliedsbeitrags',
                      'Einhaltung der Vereinsregeln und Satzung',
                      'Keine Weitergabe von Cannabis an Dritte',
                      'Verantwortungsvoller Umgang mit Cannabis',
                      'Meldung bei Adress- oder Datenänderungen',
                    ]
                  : [
                      'Punctual payment of membership fees',
                      'Compliance with club rules and statutes',
                      'No passing cannabis to third parties',
                      'Responsible handling of cannabis',
                      'Notification of address or data changes',
                    ]
                ).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-charcoal/70">
                    <CheckCircle className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand/30 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-deep-forest text-center mb-10">
            {isDE ? 'Häufige Fragen' : 'Frequently Asked Questions'}
          </h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <details
                key={i}
                className="group bg-warm-white rounded-xl border border-sand/50 shadow-sm"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-heading text-deep-forest">
                  <span>{q}</span>
                  <ChevronDown className="w-5 h-5 text-sage group-open:rotate-180 transition-transform shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-charcoal/70 leading-relaxed text-sm">
                    {a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
