import { setRequestLocale } from 'next-intl/server';
import { CheckCircle, ExternalLink, ChevronDown, Euro, FileCheck, Users, ShieldCheck } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';

export default async function MembershipPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isDE = locale === 'de';

  const requirements = [
    { text: isDE ? 'Mindestalter 21 Jahre (Personalausweis oder Reisepass erforderlich)' : 'Minimum age 21 years (ID card or passport required)' },
    { text: isDE ? 'Wohnsitz in Deutschland (Meldebescheinigung)' : 'Residence in Germany (registration certificate)' },
    { text: isDE ? 'Anerkennung der Vereinssatzung und Vereinsregeln' : 'Acceptance of the association statutes and rules' },
    { text: isDE ? 'Keine Mitgliedschaft in einer anderen Anbauvereinigung' : 'No membership in another cultivation association' },
  ];

  const steps = [
    { icon: FileCheck,   title: isDE ? 'Antrag stellen' : 'Submit Application',   text: isDE ? 'Registriere dich über die Hanf-App und stelle dort deinen Aufnahmeantrag.' : 'Register via the Hanf-App and submit your admission application there.' },
    { icon: ShieldCheck, title: isDE ? 'Identitätsprüfung' : 'Identity Verification', text: isDE ? 'Deine Identität und dein Alter werden geprüft. Dies ist gesetzlich vorgeschrieben.' : 'Your identity and age will be verified. This is legally required.' },
    { icon: Users,       title: isDE ? 'Aufnahme' : 'Admission',                   text: isDE ? 'Nach erfolgreicher Prüfung wirst du als Mitglied aufgenommen und erhältst Zugang.' : 'After successful verification, you will be admitted as a member and receive access.' },
    { icon: Euro,        title: isDE ? 'Beitrag zahlen' : 'Pay Membership Fee',    text: isDE ? 'Der monatliche Mitgliedsbeitrag wird per Lastschrift eingezogen.' : 'The monthly membership fee is collected by direct debit.' },
  ];

  const faqs = [
    { q: isDE ? 'Wie lange dauert der Aufnahmeprozess?' : 'How long does the admission process take?', a: isDE ? 'In der Regel dauert die Prüfung 1–2 Wochen. Sobald dein Antrag genehmigt ist, wirst du benachrichtigt.' : 'The review usually takes 1–2 weeks. You will be notified once your application is approved.' },
    { q: isDE ? 'Kann ich in mehreren Clubs gleichzeitig Mitglied sein?' : 'Can I be a member of multiple clubs at the same time?', a: isDE ? 'Nein. Das KCanG schreibt vor, dass man nur in einer Anbauvereinigung gleichzeitig Mitglied sein darf.' : 'No. The KCanG stipulates that you may only be a member of one cultivation association at a time.' },
    { q: isDE ? 'Was passiert, wenn ich kündigen möchte?' : 'What happens if I want to cancel?', a: isDE ? 'Die Mitgliedschaft kann jederzeit mit einer Frist von einem Monat zum Monatsende gekündigt werden.' : "Membership can be cancelled at any time with one month's notice to the end of the month." },
    { q: isDE ? 'Welche Rechte habe ich als Mitglied?' : 'What rights do I have as a member?', a: isDE ? 'Du hast Stimmrecht bei der Mitgliederversammlung, Zugang zu den Vereinsräumen und kannst Cannabis im Rahmen der gesetzlichen Grenzen beziehen.' : 'You have voting rights at the general assembly, access to the club premises and can obtain cannabis within the legal limits.' },
    { q: isDE ? 'Ab welchem Alter kann ich Mitglied werden?' : 'At what age can I become a member?', a: isDE ? 'Du musst mindestens 21 Jahre alt sein.' : 'You must be at least 21 years old.' },
  ];

  const glassCard = 'rounded-xl border border-[var(--border)]';
  const glassStyle = { background: 'var(--glass)', backdropFilter: 'blur(12px)' } as const;

  return (
    <>
      <PageHero
        title={isDE ? 'Mitgliedschaft' : 'Membership'}
        subtitle={isDE ? 'Werde Teil unserer Gemeinschaft. Hier erfährst du alles über die Voraussetzungen, den Aufnahmeprozess und deine Rechte als Mitglied.' : 'Become part of our community. Here you will find everything about the requirements, the admission process and your rights as a member.'}
        accent={isDE ? 'Blattwerk e.V.' : 'Blattwerk e.V.'}
      />

      {/* Requirements */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading italic text-3xl text-ink text-center mb-10">
            {isDE ? 'Voraussetzungen' : 'Requirements'}
          </h2>
          <div className="space-y-3">
            {requirements.map(({ text }, i) => (
              <div key={i} className={`flex items-start gap-4 ${glassCard} p-5`} style={glassStyle}>
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-ink-muted leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-20 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading italic text-3xl text-ink text-center mb-10">
            {isDE ? 'Aufnahmeprozess' : 'Admission Process'}
          </h2>
          <div className="space-y-5">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0 font-heading italic font-medium text-lg">
                    {i + 1}
                  </div>
                  {i < steps.length - 1 && <div className="w-px h-8 bg-[var(--border)] mt-2" />}
                </div>
                <div className={`${glassCard} p-5 flex-1`} style={glassStyle}>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-4 h-4 text-gold-theme opacity-80" />
                    <h3 className="font-heading italic text-lg text-ink">{title}</h3>
                  </div>
                  <p className="text-ink-muted text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hanf-App CTA */}
      <section className="py-16 lg:py-20 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative overflow-hidden rounded-2xl border border-[var(--border)] px-8 py-12 lg:px-12 lg:py-16 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.06) 0%, rgba(245,158,11,0.04) 100%)', backdropFilter: 'blur(12px)' }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%)', filter: 'blur(30px)' }} />
            <div className="relative">
              <h2 className="font-heading italic text-3xl text-ink mb-4">
                {isDE ? 'Aufnahmeantrag über die Hanf-App' : 'Admission Application via Hanf-App'}
              </h2>
              <p className="text-ink-muted max-w-xl mx-auto mb-8 leading-relaxed">
                {isDE ? 'Der Aufnahmeantrag für unseren Verein erfolgt ausschließlich über die Hanf-App. Dort kannst du dich registrieren, deinen Antrag einreichen und den Status verfolgen.' : 'The admission application for our association is exclusively via the Hanf-App. There you can register, submit your application and track the status.'}
              </p>
              <a
                href="https://diehanfapp.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-void rounded-md text-sm transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #22c55e, #86efac)', boxShadow: '0 0 24px rgba(34,197,94,0.3)' }}
              >
                {isDE ? 'Zur Hanf-App' : 'Go to Hanf-App'} <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="py-16 lg:py-20 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading italic text-3xl text-ink text-center mb-10">
            {isDE ? 'Beiträge' : 'Fees'}
          </h2>
          <div className={`${glassCard} overflow-hidden`} style={glassStyle}>
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left px-6 py-4 font-heading italic text-ink font-normal">{isDE ? 'Beitragsart' : 'Fee Type'}</th>
                  <th className="text-right px-6 py-4 font-heading italic text-ink font-normal">{isDE ? 'Betrag' : 'Amount'}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [isDE ? 'Aufnahmegebühr (einmalig)' : 'Admission fee (one-time)', '12,00 €'],
                  [isDE ? 'Monatlicher Mitgliedsbeitrag' : 'Monthly membership fee', '5,00 €'],
                  [isDE ? 'Cannabis-Bezug (zusätzlich zum Beitrag)' : 'Cannabis purchase (in addition to fee)', isDE ? 'nach Selbstkostenpreis' : 'at cost price'],
                ].map(([label, value], i, arr) => (
                  <tr key={i} className={i < arr.length - 1 ? 'border-b border-[var(--border)]' : ''}>
                    <td className="px-6 py-4 text-ink-muted text-sm">{label}</td>
                    <td className="px-6 py-4 text-right text-ink-muted text-sm font-medium">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-ink-muted text-center mt-4">
            {isDE ? 'Der Verein ist nicht gewinnorientiert. Alle Beiträge dienen ausschließlich der Deckung der Betriebskosten.' : 'The association is non-profit. All fees serve exclusively to cover operating costs.'}
          </p>
        </div>
      </section>

      {/* Rights & Duties */}
      <section className="py-16 lg:py-20 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading italic text-3xl text-ink text-center mb-10">
            {isDE ? 'Rechte & Pflichten' : 'Rights & Duties'}
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: isDE ? 'Deine Rechte' : 'Your Rights',
                items: isDE
                  ? ['Bezug von Cannabis im gesetzlichen Rahmen', 'Stimmrecht bei der Mitgliederversammlung', 'Nutzung der Vereinsräumlichkeiten', 'Zugang zur Wissensdatenbank und Events', 'Beratung durch die Suchtprävention']
                  : ['Obtaining cannabis within the legal framework', 'Voting rights at the general assembly', 'Use of club premises', 'Access to the knowledge base and events', 'Counseling from addiction prevention'],
                iconColor: 'text-accent',
              },
              {
                title: isDE ? 'Deine Pflichten' : 'Your Duties',
                items: isDE
                  ? ['Pünktliche Zahlung des Mitgliedsbeitrags', 'Einhaltung der Vereinsregeln und Satzung', 'Keine Weitergabe von Cannabis an Dritte', 'Verantwortungsvoller Umgang mit Cannabis', 'Meldung bei Adress- oder Datenänderungen']
                  : ['Punctual payment of membership fees', 'Compliance with club rules and statutes', 'No passing cannabis to third parties', 'Responsible handling of cannabis', 'Notification of address or data changes'],
                iconColor: 'text-gold-theme',
              },
            ].map(({ title, items, iconColor }) => (
              <div key={title} className={`${glassCard} p-6`} style={glassStyle}>
                <h3 className="font-heading italic text-xl text-ink mb-5">{title}</h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink-muted">
                      <CheckCircle className={`w-4 h-4 ${iconColor} shrink-0 mt-0.5`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading italic text-3xl text-ink text-center mb-10">
            {isDE ? 'Häufige Fragen' : 'Frequently Asked Questions'}
          </h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <details key={i} className={`group ${glassCard}`} style={glassStyle}>
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-heading italic text-ink text-base">
                  <span>{q}</span>
                  <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-ink-muted leading-relaxed text-sm">{a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
