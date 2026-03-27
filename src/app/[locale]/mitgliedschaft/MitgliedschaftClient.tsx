'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
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

  const requirements = [
    isDE
      ? 'Mindestalter 21 Jahre (Personalausweis oder Reisepass erforderlich)'
      : 'Minimum age 21 years (ID card or passport required)',
    isDE
      ? 'Wohnsitz in Deutschland (Meldebescheinigung)'
      : 'Residence in Germany (registration certificate)',
    isDE
      ? 'Anerkennung der Vereinssatzung und Vereinsregeln'
      : 'Acceptance of the association statutes and rules',
    isDE
      ? 'Keine Mitgliedschaft in einer anderen Anbauvereinigung'
      : 'No membership in another cultivation association',
  ];

  const steps = [
    {
      title: isDE ? 'Antrag stellen' : 'Submit Application',
      text: isDE
        ? 'Registriere dich über die Hanf-App und stelle dort deinen Aufnahmeantrag.'
        : 'Register via the Hanf-App and submit your admission application there.',
    },
    {
      title: isDE ? 'Identitätsprüfung' : 'Identity Verification',
      text: isDE
        ? 'Deine Identität und dein Alter werden geprüft. Dies ist gesetzlich vorgeschrieben.'
        : 'Your identity and age will be verified. This is legally required.',
    },
    {
      title: isDE ? 'Aufnahme' : 'Admission',
      text: isDE
        ? 'Nach erfolgreicher Prüfung wirst du als Mitglied aufgenommen und erhältst Zugang.'
        : 'After successful verification, you will be admitted as a member and receive access.',
    },
    {
      title: isDE ? 'Beitrag zahlen' : 'Pay Membership Fee',
      text: isDE
        ? 'Der monatliche Mitgliedsbeitrag wird per Lastschrift eingezogen.'
        : 'The monthly membership fee is collected by direct debit.',
    },
  ];

  const fees = [
    {
      label: isDE ? 'Aufnahmegebühr (einmalig)' : 'Admission fee (one-time)',
      value: '12,00 €',
    },
    {
      label: isDE ? 'Monatlicher Mitgliedsbeitrag' : 'Monthly membership fee',
      value: '5,00 €',
    },
    {
      label: isDE
        ? 'Cannabis-Bezug (zusätzlich zum Beitrag)'
        : 'Cannabis purchase (in addition to fee)',
      value: isDE ? 'nach Selbstkostenpreis' : 'at cost price',
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
        ? 'Die Mitgliedschaft kann mit einer Kündigungsfrist von drei Monaten zum Monatsende gekündigt werden.'
        : 'Membership can be cancelled with three months\' notice to the end of the month.',
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
        ? 'Du musst mindestens 21 Jahre alt sein.'
        : 'You must be at least 21 years old.',
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
              {isDE ? 'Mitglied werden' : 'Become a Member'}
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed max-w-2xl">
              {isDE
                ? 'Werde Teil unserer Gemeinschaft. Hier erfährst du alles über die Voraussetzungen, den Aufnahmeprozess und deine Rechte als Mitglied.'
                : 'Become part of our community. Here you will find everything about the requirements, the admission process and your rights as a member.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* -- Requirements -- */}
      <HomeSection>
        <section className="py-16 lg:py-24 bg-bg-surface">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Voraussetzungen' : 'Requirements'}
            </h2>
            <p className="text-ink-muted mb-10 max-w-xl">
              {isDE ? 'Wer kann Mitglied werden?' : 'Who can become a member?'}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {requirements.map((text, i) => (
                <div key={i} className="p-5 rounded-xl border border-[var(--border)] bg-bg-elevated">
                  <p className="text-sm text-ink-muted leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </HomeSection>

      {/* -- Process Steps -- */}
      <HomeSection>
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Aufnahmeprozess' : 'Admission Process'}
            </h2>
            <p className="text-ink-muted mb-10 max-w-xl">
              {isDE ? 'So wirst du Mitglied' : 'How to join'}
            </p>

            <div className="grid md:grid-cols-4 gap-5">
              {steps.map(({ title, text }, i) => (
                <div key={i} className="p-5 rounded-xl border border-[var(--border)] bg-bg-elevated">
                  <span className="text-xs font-mono text-ink-faint mb-3 block">{i + 1}.</span>
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
        <section className="py-16 lg:py-24 bg-bg-surface">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-10">
              {isDE ? 'Kosten & Beiträge' : 'Costs & Fees'}
            </h2>

            {fees.map(({ label, value }, i) => (
              <div
                key={i}
                className={`flex items-center justify-between py-5 ${i > 0 ? 'border-t border-[var(--border)]' : ''}`}
              >
                <span className="text-sm text-ink-muted">{label}</span>
                <span className="font-mono text-sm font-bold">{value}</span>
              </div>
            ))}

            <p className="text-xs mt-8 text-ink-faint">
              {isDE
                ? 'Der Verein ist nicht gewinnorientiert. Alle Beiträge dienen ausschließlich der Deckung der Betriebskosten.'
                : 'The association is non-profit. All fees serve exclusively to cover operating costs.'}
            </p>
          </div>
        </section>
      </HomeSection>

      {/* -- FAQ -- */}
      <HomeSection>
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-10">
              {isDE ? 'Häufige Fragen' : 'Common Questions'}
            </h2>

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
              {isDE ? 'Aufnahmeantrag stellen' : 'Submit your application'}
            </h2>
            <p className="text-ink-muted mb-8 max-w-xl">
              {isDE
                ? 'Der Aufnahmeantrag für unseren Verein erfolgt ausschließlich über die Hanf-App. Dort kannst du dich registrieren, deinen Antrag einreichen und den Status verfolgen.'
                : 'The admission application for our association is exclusively via the Hanf-App. There you can register, submit your application and track the status.'}
            </p>

            <a
              href="https://diehanfapp.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-md transition-all duration-200 hover:-translate-y-0.5 bg-accent text-white"
            >
              {isDE ? 'Zur Hanf-App' : 'Go to Hanf-App'}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>
      </HomeSection>
    </>
  );
}
