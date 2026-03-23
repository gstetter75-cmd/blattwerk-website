'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sprout, BookOpen, Shield, Wrench, Copy, Check } from 'lucide-react';

interface Props {
  isDE: boolean;
}

const sectionBorder = { borderTop: '1px solid rgba(255,255,255,0.06)' } as const;
const rowDivider = { borderTop: '1px solid rgba(255,255,255,0.06)' } as const;

const IBAN = 'DE00 0000 0000 0000 0000 00';

function CopyIbanButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(value.replace(/\s/g, '')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 transition-opacity duration-200 hover:opacity-70"
      aria-label="IBAN kopieren"
      style={{ color: copied ? 'var(--accent)' : 'var(--text-faint)' }}
    >
      {copied ? (
        <Check className="w-3.5 h-3.5" />
      ) : (
        <Copy className="w-3.5 h-3.5" />
      )}
    </button>
  );
}

export function SpendenClient({ isDE }: Props) {
  const usages = [
    {
      icon: Sprout,
      num: '01',
      title: isDE ? 'Anbauinfrastruktur' : 'Growing Infrastructure',
      text: isDE
        ? 'Investition in Anbauequipment, Beleuchtung und Qualitätssicherung.'
        : 'Investment in growing equipment, lighting and quality assurance.',
    },
    {
      icon: BookOpen,
      num: '02',
      title: isDE ? 'Aufklärung & Prävention' : 'Education & Prevention',
      text: isDE
        ? 'Finanzierung von Informationsmaterialien, Workshops und Präventionsarbeit.'
        : 'Funding of information materials, workshops and prevention work.',
    },
    {
      icon: Shield,
      num: '03',
      title: isDE ? 'Jugendschutz' : 'Youth Protection',
      text: isDE
        ? 'Umsetzung und Weiterentwicklung unserer Jugendschutzmaßnahmen.'
        : 'Implementation and development of our youth protection measures.',
    },
    {
      icon: Wrench,
      num: '04',
      title: isDE ? 'Vereinsräume' : 'Club Premises',
      text: isDE
        ? 'Ausstattung und Instandhaltung unserer Vereinsräumlichkeiten.'
        : 'Equipment and maintenance of our club premises.',
    },
  ];

  const bankDetails: Array<{ label: string; value: string; mono: boolean; copyable: boolean }> = [
    {
      label: isDE ? 'Kontoinhaber' : 'Account Holder',
      value: 'BlattWerk e.V.',
      mono: false,
      copyable: false,
    },
    {
      label: 'IBAN',
      value: IBAN,
      mono: true,
      copyable: true,
    },
    {
      label: 'BIC',
      value: 'XXXXXXXX',
      mono: true,
      copyable: false,
    },
    {
      label: isDE ? 'Bank' : 'Bank',
      value: isDE ? 'wird noch bekanntgegeben' : 'to be announced',
      mono: false,
      copyable: false,
    },
    {
      label: isDE ? 'Verwendungszweck' : 'Reference',
      value: isDE ? 'Spende BlattWerk' : 'Donation BlattWerk',
      mono: false,
      copyable: false,
    },
  ];

  return (
    <>
      {/* ── Why donate: 2×2 grid ─────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-4"
              style={{ color: 'var(--gold)' }}
            >
              {isDE ? 'Wofür wir spenden verwenden' : 'How we use donations'}
            </p>
            <h2
              className="font-heading italic font-bold"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--text)' }}
            >
              {isDE ? 'Deine Unterstützung' : 'Your Support'}
            </h2>
          </motion.div>

          {/* 2×2 grid with thin border lines */}
          <div
            className="grid sm:grid-cols-2"
            style={{ border: '1px solid rgba(255,255,255,0.06)' }}
          >
            {usages.map(({ icon: Icon, num, title, text }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="p-8 lg:p-10"
                style={{
                  background: 'var(--bg)',
                  borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <span
                    className="font-mono text-xs shrink-0 mt-0.5"
                    style={{ color: 'var(--text-faint)' }}
                  >
                    {num}
                  </span>
                  <Icon
                    className="w-4 h-4 shrink-0 mt-0.5"
                    style={{ color: 'var(--gold)' }}
                  />
                </div>
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

      {/* ── Bank details ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={sectionBorder}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-4"
              style={{ color: 'var(--gold)' }}
            >
              {isDE ? 'Bankverbindung' : 'Bank Details'}
            </p>
            <h2
              className="font-heading italic font-bold"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--text)' }}
            >
              {isDE ? 'Überweisung' : 'Bank Transfer'}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-lg"
          >
            {bankDetails.map(({ label, value, mono, copyable }, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-5"
                style={i > 0 ? rowDivider : undefined}
              >
                <span
                  className="text-xs font-bold uppercase tracking-[0.2em] font-body"
                  style={{ color: 'var(--text-faint)' }}
                >
                  {label}
                </span>
                <div className="flex items-center gap-3">
                  <span
                    className={`text-sm ${mono ? 'font-mono' : 'font-body'}`}
                    style={{ color: 'var(--text)' }}
                  >
                    {value}
                  </span>
                  {copyable && <CopyIbanButton value={value} />}
                </div>
              </div>
            ))}
          </motion.div>

          <p
            className="text-xs font-mono mt-8 max-w-lg"
            style={{ color: 'var(--text-faint)' }}
          >
            {isDE
              ? 'Die Bankverbindung wird nach der Vereinsgründung und Kontoeröffnung hier aktualisiert.'
              : 'Bank details will be updated here after the association is founded and the account is opened.'}
          </p>
        </div>
      </section>

      {/* ── Thank you note ───────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={sectionBorder}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65 }}
          >
            <blockquote
              className="font-heading italic font-bold leading-snug"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--text)' }}
            >
              {isDE
                ? '"Jede Spende fließt direkt in unsere Gemeinschaft – kein Gewinn, nur Zweck."'
                : '"Every donation flows directly into our community – no profit, only purpose."'}
            </blockquote>
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] font-body mt-8"
              style={{ color: 'var(--gold)' }}
            >
              BlattWerk e.V.
            </p>
            <p
              className="text-xs font-mono mt-2"
              style={{ color: 'var(--text-faint)' }}
            >
              {isDE
                ? 'Alle Spendengelder werden auf der jährlichen Mitgliederversammlung transparent ausgewiesen.'
                : 'All donations are transparently reported at the annual general assembly.'}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
