'use client';

import { motion } from 'framer-motion';
import { WQFPageHero } from '@/components/layout/WQFPageHero';

interface Props {
  isDE: boolean;
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55 },
};

const sectionBorder = { borderTop: '1px solid rgba(255,255,255,0.06)' } as const;
const divider = { borderTop: '1px solid rgba(255,255,255,0.06)' } as const;

export function UeberUnsClient({ isDE }: Props) {
  const values = [
    {
      num: '01',
      title: isDE ? 'Verantwortung' : 'Responsibility',
      text: isDE
        ? 'Wir setzen auf verantwortungsvollen Umgang mit Cannabis und stellen den Jugendschutz in den Mittelpunkt unseres Handelns.'
        : 'We advocate for responsible cannabis use and place youth protection at the center of our actions.',
    },
    {
      num: '02',
      title: isDE ? 'Aufklärung' : 'Education',
      text: isDE
        ? 'Fundierte, evidenzbasierte Informationen sind die Grundlage unserer Arbeit. Wir klären sachlich und ohne Verharmlosung auf.'
        : 'Well-founded, evidence-based information is the foundation of our work. We educate objectively and without trivialization.',
    },
    {
      num: '03',
      title: isDE ? 'Gemeinschaft' : 'Community',
      text: isDE
        ? 'Als Verein leben wir von unserer Gemeinschaft. Jedes Mitglied trägt aktiv zu unserem gemeinsamen Ziel bei.'
        : 'As an association, we thrive on our community. Every member actively contributes to our shared goal.',
    },
    {
      num: '04',
      title: isDE ? 'Transparenz' : 'Transparency',
      text: isDE
        ? 'Offene Kommunikation, nachvollziehbare Entscheidungen und transparente Finanzen sind für uns selbstverständlich.'
        : 'Open communication, traceable decisions and transparent finances are a matter of course for us.',
    },
  ];

  const boardMembers = [
    {
      role: isDE ? '1. Vorsitzender' : 'Chairperson',
      name: 'Gero Stetter',
      description: isDE
        ? 'Vertretung des Vereins, Koordination der Vereinsarbeit'
        : 'Representation of the association, coordination of activities',
    },
    {
      role: isDE ? 'Stell. Vorsitzender' : 'Vice Chairperson',
      name: 'Salvatore Runza',
      description: isDE
        ? 'Strategische Ausrichtung, Mitgliederbetreuung'
        : 'Strategic direction, member support',
    },
    {
      role: isDE ? 'Kassenwart' : 'Treasurer',
      name: 'Thomas Andreas',
      description: isDE
        ? 'Finanzverwaltung, Buchführung, Beitragswesen'
        : 'Financial management, bookkeeping, membership fees',
    },
  ];

  const growingCouncil = [
    {
      role: isDE ? 'Anbauleitung' : 'Head of Cultivation',
      name: 'Florian Klatt',
      description: isDE
        ? 'Planung und Überwachung des gemeinschaftlichen Anbaus'
        : 'Planning and supervision of communal cultivation',
    },
    {
      role: isDE ? 'Qualitätssicherung' : 'Quality Assurance',
      name: 'Jonas Müller',
      description: isDE
        ? 'Kontrolle der Anbaubedingungen und Produktqualität'
        : 'Monitoring growing conditions and product quality',
    },
    {
      role: isDE ? 'Suchtprävention' : 'Addiction Prevention',
      name: 'Jennifer Trebbin',
      description: isDE
        ? 'Beratung, Prävention und Vermittlung an Hilfsangebote'
        : 'Counseling, prevention and referral to support services',
    },
  ];

  const vereinsregeln = isDE
    ? [
        'Der Konsum von Cannabis ist ausschließlich Mitgliedern ab 21 Jahren gestattet.',
        'Cannabis darf nur in den dafür vorgesehenen Bereichen der Vereinsräume konsumiert werden.',
        'Die Weitergabe von Cannabis an Nicht-Mitglieder oder Minderjährige ist strengstens untersagt.',
        'Jedes Mitglied ist verpflichtet, sich an die geltenden Abgabemengen (max. 25g/Tag, 50g/Monat) zu halten.',
        'Respektvoller Umgang miteinander und gegenseitige Rücksichtnahme sind Grundvoraussetzung.',
        'Bei Anzeichen von problematischem Konsum ist die Suchtpräventionsbeauftragte/der Suchtpräventionsbeauftragte zu kontaktieren. Alternativ kann auch der Vorstand informiert werden.',
        'Das Mitbringen und der Konsum anderer Rauschmittel in den Vereinsräumen ist streng verboten. Blattwerk e.V. lehnt Mischkonsum ausdrücklich ab.',
        'Verstöße gegen die Vereinsregeln können zum Ausschluss aus dem Verein führen.',
      ]
    : [
        'Cannabis consumption is only permitted for members aged 21 and over.',
        'Cannabis may only be consumed in the designated areas of the club premises.',
        'Passing cannabis to non-members or minors is strictly prohibited.',
        'Every member is obliged to comply with the applicable distribution limits (max. 25g/day, 50g/month).',
        'Respectful interaction and mutual consideration are basic prerequisites.',
        'If signs of problematic consumption appear, the addiction prevention officer must be contacted. The board may also be informed.',
        'Bringing and consuming other intoxicants on the club premises is strictly forbidden. BlattWerk e.V. explicitly opposes polysubstance use.',
        'Violations of the club rules may lead to exclusion from the association.',
      ];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <WQFPageHero
        label={isDE ? 'Über den Verein' : 'About the Club'}
        title="BlattWerk e.V."
        subtitle={
          isDE
            ? 'BlattWerk e.V. ist eine Anbauvereinigung (Cannabis Social Club) mit Sitz in Deutschland. Wir stehen für verantwortungsvollen, aufgeklärten und gemeinschaftlichen Umgang mit Cannabis.'
            : 'BlattWerk e.V. is a cultivation association (Cannabis Social Club) based in Germany. We stand for responsible, informed and communal cannabis use.'
        }
        accentColor="green"
      />

      {/* ── Values ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={sectionBorder}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section header */}
          <motion.div {...fadeUp} className="mb-16">
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-4"
              style={{ color: 'var(--accent)' }}
            >
              {isDE ? 'Unsere Werte' : 'Our Values'}
            </p>
            <h2
              className="font-heading italic font-bold"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--text)' }}
            >
              {isDE ? 'Was uns leitet' : 'What guides us'}
            </h2>
          </motion.div>

          {/* 2×2 grid */}
          <div className="grid sm:grid-cols-2 gap-px" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
            {values.map(({ num, title, text }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="p-8 lg:p-10"
                style={{ background: 'var(--bg)' }}
              >
                <p
                  className="font-mono text-xs mb-6"
                  style={{ color: 'var(--text-faint)' }}
                >
                  {num}
                </p>
                <h3
                  className="font-heading italic font-bold text-2xl mb-4"
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

      {/* ── Board ────────────────────────────────────────────────────────── */}
      <section id="vorstand" className="py-20 lg:py-28 scroll-mt-20" style={sectionBorder}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-16">
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-4"
              style={{ color: 'var(--accent)' }}
            >
              {isDE ? 'Vereinsführung' : 'Leadership'}
            </p>
            <h2
              className="font-heading italic font-bold"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--text)' }}
            >
              {isDE ? 'Vorstand' : 'Board'}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-px" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
            {boardMembers.map(({ role, name, description }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="p-8"
                style={{ background: 'var(--bg)' }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-4"
                  style={{ color: 'var(--accent)' }}
                >
                  {role}
                </p>
                <h3
                  className="font-heading italic font-bold text-xl mb-3"
                  style={{ color: 'var(--text)' }}
                >
                  {name}
                </h3>
                <p
                  className="text-sm leading-relaxed font-body"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Growing Council ──────────────────────────────────────────────── */}
      <section id="anbaurat" className="py-20 lg:py-28 scroll-mt-20" style={sectionBorder}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-16">
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-4"
              style={{ color: 'var(--accent)' }}
            >
              {isDE ? 'Fachgremium' : 'Expert Committee'}
            </p>
            <h2
              className="font-heading italic font-bold"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--text)' }}
            >
              {isDE ? 'Anbaurat' : 'Growing Council'}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-px" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
            {growingCouncil.map(({ role, name, description }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="p-8"
                style={{ background: 'var(--bg)' }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-4"
                  style={{ color: 'var(--accent)' }}
                >
                  {role}
                </p>
                <h3
                  className="font-heading italic font-bold text-xl mb-3"
                  style={{ color: 'var(--text)' }}
                >
                  {name}
                </h3>
                <p
                  className="text-sm leading-relaxed font-body"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vereinsregeln ────────────────────────────────────────────────── */}
      <section id="regeln" className="py-20 lg:py-28 scroll-mt-20" style={sectionBorder}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-16">
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-4"
              style={{ color: 'var(--accent)' }}
            >
              {isDE ? 'Verbindlich für alle' : 'Binding for all'}
            </p>
            <h2
              className="font-heading italic font-bold"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--text)' }}
            >
              {isDE ? 'Vereinsregeln' : 'Club Rules'}
            </h2>
          </motion.div>

          <ul className="space-y-0">
            {vereinsregeln.map((rule, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="flex items-start gap-6 py-5"
                style={i > 0 ? divider : undefined}
              >
                <span
                  className="font-mono text-xs shrink-0 mt-0.5 w-6 text-right"
                  style={{ color: 'var(--text-faint)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className="pl-4 text-sm leading-relaxed font-body"
                  style={{
                    color: 'var(--text-muted)',
                    borderLeft: '1px solid rgba(34,197,94,0.25)',
                  }}
                >
                  {rule}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
