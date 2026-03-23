'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { WQFPageHero } from '@/components/layout/WQFPageHero';

interface Props {
  isDE: boolean;
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55 },
} as const;

const sectionBorder = { borderTop: '1px solid rgba(255,255,255,0.06)' } as const;
const rowDivider = { borderTop: '1px solid rgba(255,255,255,0.06)' } as const;

export function MitgliedschaftClient({ isDE }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const requirements = [
    {
      num: '01',
      text: isDE
        ? 'Mindestalter 21 Jahre (Personalausweis oder Reisepass erforderlich)'
        : 'Minimum age 21 years (ID card or passport required)',
    },
    {
      num: '02',
      text: isDE
        ? 'Wohnsitz in Deutschland (Meldebescheinigung)'
        : 'Residence in Germany (registration certificate)',
    },
    {
      num: '03',
      text: isDE
        ? 'Anerkennung der Vereinssatzung und Vereinsregeln'
        : 'Acceptance of the association statutes and rules',
    },
    {
      num: '04',
      text: isDE
        ? 'Keine Mitgliedschaft in einer anderen Anbauvereinigung'
        : 'No membership in another cultivation association',
    },
  ];

  const steps = [
    {
      num: '01',
      title: isDE ? 'Antrag stellen' : 'Submit Application',
      text: isDE
        ? 'Registriere dich über die Hanf-App und stelle dort deinen Aufnahmeantrag.'
        : 'Register via the Hanf-App and submit your admission application there.',
    },
    {
      num: '02',
      title: isDE ? 'Identitätsprüfung' : 'Identity Verification',
      text: isDE
        ? 'Deine Identität und dein Alter werden geprüft. Dies ist gesetzlich vorgeschrieben.'
        : 'Your identity and age will be verified. This is legally required.',
    },
    {
      num: '03',
      title: isDE ? 'Aufnahme' : 'Admission',
      text: isDE
        ? 'Nach erfolgreicher Prüfung wirst du als Mitglied aufgenommen und erhältst Zugang.'
        : 'After successful verification, you will be admitted as a member and receive access.',
    },
    {
      num: '04',
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
        ? 'Die Mitgliedschaft kann jederzeit mit einer Frist von einem Monat zum Monatsende gekündigt werden.'
        : "Membership can be cancelled at any time with one month's notice to the end of the month.",
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
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <WQFPageHero
        label={isDE ? 'Mitgliedschaft' : 'Membership'}
        title={isDE ? 'Mitglied werden' : 'Become a Member'}
        subtitle={
          isDE
            ? 'Werde Teil unserer Gemeinschaft. Hier erfährst du alles über die Voraussetzungen, den Aufnahmeprozess und deine Rechte als Mitglied.'
            : 'Become part of our community. Here you will find everything about the requirements, the admission process and your rights as a member.'
        }
        accentColor="green"
      />

      {/* ── Requirements ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={sectionBorder}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-16">
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-4"
              style={{ color: 'var(--accent)' }}
            >
              {isDE ? 'Voraussetzungen' : 'Requirements'}
            </p>
            <h2
              className="font-heading italic font-bold"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--text)' }}
            >
              {isDE ? 'Wer kann Mitglied werden?' : 'Who can become a member?'}
            </h2>
          </motion.div>

          <ul className="space-y-0">
            {requirements.map(({ num, text }, i) => (
              <motion.li
                key={num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="flex items-start gap-6 py-5"
                style={i > 0 ? rowDivider : undefined}
              >
                <span
                  className="font-mono text-xs shrink-0 mt-0.5 w-6 text-right"
                  style={{ color: 'var(--text-faint)' }}
                >
                  {num}
                </span>
                <span
                  className="pl-4 text-sm leading-relaxed font-body"
                  style={{
                    color: 'var(--text-muted)',
                    borderLeft: '1px solid rgba(34,197,94,0.25)',
                  }}
                >
                  {text}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Process Steps ────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={sectionBorder}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-16">
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-4"
              style={{ color: 'var(--accent)' }}
            >
              {isDE ? 'Aufnahmeprozess' : 'Admission Process'}
            </p>
            <h2
              className="font-heading italic font-bold"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--text)' }}
            >
              {isDE ? 'So wirst du Mitglied' : 'How to join'}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-px" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
            {steps.map(({ num, title, text }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="p-8"
                style={{ background: 'var(--bg)' }}
              >
                <p
                  className="font-mono text-xs mb-6"
                  style={{ color: 'var(--text-faint)' }}
                >
                  {num}
                </p>
                <h3
                  className="font-heading italic font-bold text-xl mb-3"
                  style={{ color: 'var(--text)' }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed font-body"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fees ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={sectionBorder}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-16">
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-4"
              style={{ color: 'var(--gold)' }}
            >
              {isDE ? 'Beiträge' : 'Fees'}
            </p>
            <h2
              className="font-heading italic font-bold"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--text)' }}
            >
              {isDE ? 'Kosten & Beiträge' : 'Costs & Fees'}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
          >
            {fees.map(({ label, value }, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-5"
                style={i > 0 ? rowDivider : undefined}
              >
                <span
                  className="text-sm font-body"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {label}
                </span>
                <span
                  className="font-mono text-sm font-bold"
                  style={{ color: 'var(--text)' }}
                >
                  {value}
                </span>
              </div>
            ))}
          </motion.div>

          <p
            className="text-xs font-body mt-8"
            style={{ color: 'var(--text-faint)' }}
          >
            {isDE
              ? 'Der Verein ist nicht gewinnorientiert. Alle Beiträge dienen ausschließlich der Deckung der Betriebskosten.'
              : 'The association is non-profit. All fees serve exclusively to cover operating costs.'}
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={sectionBorder}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-16">
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-4"
              style={{ color: 'var(--accent)' }}
            >
              FAQ
            </p>
            <h2
              className="font-heading italic font-bold"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--text)' }}
            >
              {isDE ? 'Häufige Fragen' : 'Common Questions'}
            </h2>
          </motion.div>

          <ul className="space-y-0">
            {faqs.map(({ q, a }, i) => {
              const isOpen = openFaq === i;
              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  style={i > 0 ? rowDivider : undefined}
                >
                  <button
                    type="button"
                    className="w-full text-left flex items-start justify-between gap-4 py-6"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span
                      className="font-heading italic font-bold text-base leading-snug"
                      style={{ color: 'var(--text)' }}
                    >
                      {q}
                    </span>
                    <span
                      className="font-mono text-lg shrink-0 mt-0.5 transition-transform duration-300"
                      style={{
                        color: 'var(--accent)',
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
                        <p
                          className="pb-6 text-sm leading-relaxed font-body"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={sectionBorder}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65 }}
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-6"
              style={{ color: 'var(--accent)' }}
            >
              {isDE ? 'Jetzt starten' : 'Get started'}
            </p>
            <h2
              className="font-heading italic font-bold mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--text)' }}
            >
              {isDE ? 'Aufnahmeantrag stellen' : 'Submit your application'}
            </h2>
            <p
              className="text-base leading-relaxed font-body mb-10 max-w-xl"
              style={{ color: 'var(--text-muted)' }}
            >
              {isDE
                ? 'Der Aufnahmeantrag für unseren Verein erfolgt ausschließlich über die Hanf-App. Dort kannst du dich registrieren, deinen Antrag einreichen und den Status verfolgen.'
                : 'The admission application for our association is exclusively via the Hanf-App. There you can register, submit your application and track the status.'}
            </p>

            <a
              href="https://diehanfapp.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] font-body transition-opacity duration-200 hover:opacity-70"
              style={{ color: 'var(--accent)' }}
            >
              {isDE ? 'Zur Hanf-App' : 'Go to Hanf-App'}
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
