'use client';

import { motion } from 'framer-motion';
import { Sprout, BookOpen, Shield, Wrench } from 'lucide-react';

interface Props {
  isDE: boolean;
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

  return (
    <>
      {/* -- Why donate: 2x2 grid -- */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-4 text-gold-theme">
              {isDE ? 'Wofür wir spenden verwenden' : 'How we use donations'}
            </p>
            <h2
              className="font-heading font-bold"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              {isDE ? 'Deine Unterstützung' : 'Your Support'}
            </h2>
          </motion.div>

          {/* 2x2 grid with thin border lines */}
          <div className="grid sm:grid-cols-2 border border-[var(--border)]">
            {usages.map(({ icon: Icon, num, title, text }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="p-8 lg:p-10 bg-bg"
                style={{
                  borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none',
                  borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <span className="font-mono text-xs shrink-0 mt-0.5 text-ink-faint">
                    {num}
                  </span>
                  <Icon className="w-4 h-4 shrink-0 mt-0.5 text-gold-theme" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed font-body text-ink-muted">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Bank details -- */}
      <section className="py-20 lg:py-28 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-4 text-gold-theme">
              {isDE ? 'Bankverbindung' : 'Bank Details'}
            </p>
            <h2
              className="font-heading font-bold"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
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
            <div className="flex items-center gap-3 p-4 mb-6 rounded-lg border border-gold-theme/20 bg-gold-theme/5">
              <Sprout className="w-4 h-4 text-gold-theme shrink-0" />
              <p className="text-sm text-ink-muted">
                {isDE
                  ? 'Die Bankverbindung wird nach Eröffnung des Vereinskontos hier veröffentlicht. Bei Fragen wende dich an info@blattwerk.dev.'
                  : 'Bank details will be published here after the club account is opened. For questions, contact info@blattwerk.dev.'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -- Thank you note -- */}
      <section className="py-20 lg:py-28 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65 }}
          >
            <blockquote
              className="font-heading font-bold leading-snug"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              {isDE
                ? '"Jede Spende fließt direkt in unsere Gemeinschaft – kein Gewinn, nur Zweck."'
                : '"Every donation flows directly into our community – no profit, only purpose."'}
            </blockquote>
            <p className="text-xs font-bold uppercase tracking-[0.25em] font-body mt-8 text-gold-theme">
              BlattWerk e.V.
            </p>
            <p className="text-xs font-mono mt-2 text-ink-faint">
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
