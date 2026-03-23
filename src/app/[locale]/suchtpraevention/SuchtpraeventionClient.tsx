'use client';

import { motion } from 'framer-motion';
import { WQFPageHero } from '@/components/layout/WQFPageHero';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
};

interface Props {
  isDE: boolean;
}

export function SuchtpraeventionClient({ isDE }: Props) {
  const conceptItems = [
    {
      num: '01',
      title: isDE ? 'Aufklärung statt Verharmlosung' : 'Education Instead of Trivialization',
      text: isDE
        ? 'Cannabis ist kein harmloses Genussmittel. Unser Präventionskonzept basiert auf evidenzbasierter Aufklärung über Wirkungen, Risiken und Nebenwirkungen. Wir informieren sachlich, ohne zu verharmlosen oder zu dramatisieren.'
        : 'Cannabis is not a harmless recreational substance. Our prevention concept is based on evidence-based education about effects, risks and side effects. We inform objectively, without trivializing or dramatizing.',
    },
    {
      num: '02',
      title: isDE ? 'Früherkennung & Intervention' : 'Early Detection & Intervention',
      text: isDE
        ? 'Unsere geschulten Suchtpräventionsbeauftragten beobachten aufmerksam und sprechen Mitglieder an, wenn sie Anzeichen für problematischen Konsum bemerken. Frühzeitige Intervention kann einer Abhängigkeitsentwicklung vorbeugen.'
        : 'Our trained addiction prevention officers observe attentively and approach members when they notice signs of problematic consumption. Early intervention can prevent the development of addiction.',
    },
    {
      num: '03',
      title: isDE ? 'Beratung & Vermittlung' : 'Counseling & Referral',
      text: isDE
        ? 'Mitglieder mit problematischem Konsum erhalten vertrauliche Beratung und werden bei Bedarf an professionelle Suchtberatungsstellen vermittelt. Die Inanspruchnahme ist freiwillig und vertraulich.'
        : 'Members with problematic consumption receive confidential counseling and are referred to professional addiction counseling services when needed. Usage is voluntary and confidential.',
    },
    {
      num: '04',
      title: isDE ? 'Mindestalter 21 Jahre' : 'Minimum Age 21 Years',
      text: isDE
        ? 'Eine Mitgliedschaft bei BlattWerk e.V. ist erst ab 21 Jahren möglich. Dies geht über die gesetzlichen Mindestanforderungen hinaus und dient dem besonderen Schutz junger Menschen. Der Konsum in der Phase der Gehirnreife birgt erhöhte Gesundheitsrisiken.'
        : 'Membership at BlattWerk e.V. is only possible from the age of 21. This goes beyond the legal minimum requirements and serves the special protection of young people. Consumption during brain development carries increased health risks.',
    },
  ];

  const warningSigns = isDE
    ? [
        'Erhöhte Toleranz – du brauchst mehr für die gleiche Wirkung.',
        'Kontrollverlust – Konsum ist häufiger oder mehr als geplant.',
        'Sozialer Rückzug – Isolation von Familie und Freunden.',
        'Vernachlässigung von Hobbys und früheren Interessen.',
        'Stimmungsschwankungen – Reizbarkeit oder Niedergeschlagenheit.',
        'Craving – starkes Verlangen nach Cannabis.',
        'Konsum trotz negativer Konsequenzen.',
        'Vernachlässigung beruflicher oder schulischer Pflichten.',
      ]
    : [
        'Increased tolerance – you need more for the same effect.',
        'Loss of control – consumption is more frequent or heavier than planned.',
        'Social withdrawal – isolation from family and friends.',
        'Neglecting hobbies and former interests.',
        'Mood changes – irritability or low mood.',
        'Craving – strong desire for cannabis.',
        'Continued use despite negative consequences.',
        'Neglecting professional or academic responsibilities.',
      ];

  const helpResources = [
    {
      name: isDE
        ? 'BZgA – Bundeszentrale für gesundheitliche Aufklärung'
        : 'BZgA – Federal Centre for Health Education',
      contact: '0221 89 20 31',
      url: 'https://www.bzga.de',
    },
    {
      name: isDE ? 'Drogen-Hotline' : 'Drug Hotline',
      contact: '01806 313031',
      url: null,
    },
    {
      name: 'Telefonseelsorge',
      contact: '0800 111 0 111',
      url: 'https://www.telefonseelsorge.de',
    },
    {
      name: 'Drugcom.de (BZgA)',
      contact: 'drugcom.de',
      url: 'https://www.drugcom.de',
    },
    {
      name: 'Quit the Shit (BZgA)',
      contact: 'quit-the-shit.net',
      url: 'https://www.quit-the-shit.net',
    },
  ];

  const contacts = [
    {
      name: 'Jennifer Trebbin',
      role: isDE ? 'Suchtpräventionsbeauftragte' : 'Addiction Prevention Officer',
    },
    {
      name: 'N.N.',
      role: isDE ? 'Stellvertretung' : 'Deputy Officer',
    },
  ];

  return (
    <>
      <WQFPageHero
        label={isDE ? 'Suchtprävention' : 'Addiction Prevention'}
        title={isDE ? 'Prävention & Hilfe' : 'Prevention & Help'}
        subtitle={isDE
          ? 'Verantwortungsvoller Umgang beginnt mit Aufklärung.'
          : 'Responsible handling begins with education.'}
        accentColor="gold"
      />

      {/* Age warning strip */}
      <div
        className="py-3"
        style={{
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(239,68,68,0.06)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center gap-4">
          <span
            className="shrink-0 text-xs font-bold uppercase tracking-[0.2em] font-body"
            style={{ color: '#ef4444' }}
          >
            {isDE ? 'Hinweis' : 'Notice'}
          </span>
          <p className="text-xs leading-relaxed" style={{ color: 'rgba(239,68,68,0.75)' }}>
            {isDE
              ? 'Cannabis ist ausschließlich für Erwachsene ab 21 Jahren. Der Konsum durch jüngere Personen ist gesetzlich verboten und gesundheitlich besonders riskant.'
              : 'Cannabis is exclusively for adults aged 21 and over. Consumption by younger persons is prohibited by law and particularly risky for health.'}
          </p>
        </div>
      </div>

      {/* Concept — 2×2 border grid */}
      <section
        className="py-20 lg:py-28"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-12"
            style={{ color: 'var(--gold)' }}
          >
            {isDE ? 'Unser Konzept' : 'Our Concept'}
          </motion.p>

          <div
            className="grid md:grid-cols-2"
            style={{ border: '1px solid rgba(255,255,255,0.06)' }}
          >
            {conceptItems.map(({ num, title, text }, i) => {
              const col = i % 2;
              const row = Math.floor(i / 2);
              return (
                <motion.div
                  key={num}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="p-8 lg:p-10"
                  style={{
                    borderRight: col === 0 ? '1px solid rgba(255,255,255,0.06)' : undefined,
                    borderBottom: row === 0 ? '1px solid rgba(255,255,255,0.06)' : undefined,
                  }}
                >
                  <p
                    className="font-heading italic font-bold mb-5 leading-none"
                    style={{
                      fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                      color: 'rgba(255,255,255,0.06)',
                    }}
                  >
                    {num}
                  </p>
                  <h3
                    className="font-heading italic font-bold mb-3"
                    style={{
                      fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                      color: 'var(--text)',
                    }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Warning signs — 2-col numbered list */}
      <section
        className="py-20 lg:py-28"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: sticky heading */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.55 }}
              className="lg:sticky lg:top-32 self-start"
            >
              <p
                className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-6"
                style={{ color: 'var(--gold)' }}
              >
                {isDE ? 'Risikosignale' : 'Risk Signals'}
              </p>
              <h2
                className="font-heading italic font-bold leading-none"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--text)' }}
              >
                {isDE ? 'Warnsignale' : 'Warning\nSigns'}
              </h2>
              <p className="mt-6 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {isDE
                  ? 'Problematischer Konsum entwickelt sich oft schleichend. Erkennst du mehrere dieser Zeichen, wende dich an unsere Suchtprävention oder an eine externe Beratungsstelle.'
                  : 'Problematic consumption often develops gradually. If you recognize several of these signs, contact our addiction prevention team or an external counseling service.'}
              </p>
            </motion.div>

            {/* Right: 2-col list */}
            <div className="grid sm:grid-cols-2">
              {warningSigns.map((sign, i) => {
                const num = String(i + 1).padStart(2, '0');
                return (
                  <motion.div
                    key={i}
                    {...fadeUp}
                    transition={{ duration: 0.45, delay: i * 0.05 }}
                    className="py-5 pr-4"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <span
                      className="block font-heading italic font-bold mb-2 leading-none"
                      style={{ fontSize: '1.5rem', color: 'var(--text-faint)' }}
                    >
                      {num}
                    </span>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {sign}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Help resources — row list with dividers */}
      <section
        className="py-20 lg:py-28"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-4"
            style={{ color: 'var(--gold)' }}
          >
            {isDE ? 'Hilfsangebote' : 'Help Resources'}
          </motion.p>
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-heading italic font-bold mb-14 leading-none"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--text)' }}
          >
            {isDE ? 'Anlaufstellen' : 'Contact Points'}
          </motion.h2>

          <div>
            {helpResources.map((resource, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-6"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                <p
                  className="font-heading italic font-bold"
                  style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', color: 'var(--text)' }}
                >
                  {resource.name}
                </p>
                <div className="flex items-center gap-6 shrink-0">
                  <span
                    className="text-sm font-bold tabular-nums"
                    style={{ color: 'var(--gold)' }}
                  >
                    {resource.contact}
                  </span>
                  {resource.url && (
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-[0.2em] font-body transition-opacity hover:opacity-60"
                      style={{ color: 'var(--text-faint)' }}
                    >
                      ↗
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />
          </div>
        </div>
      </section>

      {/* Club contacts — simple rows */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-14"
            style={{ color: 'var(--gold)' }}
          >
            {isDE ? 'Vereinskontakte' : 'Club Contacts'}
          </motion.p>

          <div>
            {contacts.map(({ name, role }, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-6"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                <p
                  className="font-heading italic font-bold"
                  style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', color: 'var(--text)' }}
                >
                  {name}
                </p>
                <p
                  className="text-xs font-bold uppercase tracking-[0.2em] font-body"
                  style={{ color: 'var(--text-faint)' }}
                >
                  {role}
                </p>
              </motion.div>
            ))}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />
          </div>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 text-xs leading-relaxed max-w-2xl"
            style={{ color: 'var(--text-faint)' }}
          >
            {isDE
              ? 'Das Suchtpräventionskonzept des BlattWerk e.V. erfüllt die Anforderungen des KCanG (§ 6 Abs. 3). Bei akuten Notfällen: Notruf 112.'
              : 'The addiction prevention concept of BlattWerk e.V. meets the requirements of the KCanG (§ 6 Abs. 3). In acute emergencies: call 112.'}
          </motion.p>
        </div>
      </section>
    </>
  );
}
