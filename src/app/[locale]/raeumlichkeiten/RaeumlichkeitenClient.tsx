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

export function RaeumlichkeitenClient({ isDE }: Props) {
  const areas = [
    {
      num: '01',
      title: isDE ? 'Gemeinschaftsraum' : 'Community Room',
      text: isDE
        ? 'Ein einladender Raum zum Verweilen, Austausch und für Vereinsveranstaltungen. Hier finden Workshops, Vorträge und Mitgliederversammlungen statt.'
        : 'An inviting space for socializing, exchange and club events. Workshops, lectures and general assemblies take place here.',
    },
    {
      num: '02',
      title: isDE ? 'Abgabebereich' : 'Distribution Area',
      text: isDE
        ? 'Der Bereich für die kontrollierte Abgabe von Cannabis an Mitglieder. Hier erfolgt die Dokumentation und Beratung in geschützter Atmosphäre.'
        : 'The area for the controlled distribution of cannabis to members. Documentation and counseling take place here in a protected atmosphere.',
    },
    {
      num: '03',
      title: isDE ? 'Informationsecke' : 'Information Corner',
      text: isDE
        ? 'Infomaterialien zu Safer Use, Suchtprävention und rechtlichen Fragen stehen hier frei zur Verfügung.'
        : 'Information materials on safer use, addiction prevention and legal questions are freely available here.',
    },
  ];

  const rules = isDE
    ? [
        'Der Zutritt ist nur für Mitglieder mit gültigem Ausweis gestattet.',
        'Minderjährige haben keinen Zutritt – Mindestalter 21 Jahre.',
        'Cannabis darf nur in den dafür ausgewiesenen Bereichen konsumiert werden.',
        'Die Räumlichkeiten sind rauchfrei. Konsum erfolgt ausschließlich per Vaporizer.',
        'Alkohol und andere Rauschmittel sind in den Vereinsräumen nicht gestattet.',
        'Fotografieren und Filmen ist nur mit ausdrücklicher Genehmigung erlaubt.',
        'Auf Sauberkeit und Ordnung ist zu achten. Jeder räumt seinen Platz auf.',
        'Respektvoller Umgang ist selbstverständlich. Belästigung wird nicht toleriert.',
        'Bei Notfällen ist unverzüglich der Vorstand oder die Aufsichtsperson zu informieren.',
      ]
    : [
        'Access is only permitted for members with a valid ID.',
        'Minors are not permitted – minimum age 21 years.',
        'Cannabis may only be consumed in the designated areas.',
        'The premises are smoke-free. Consumption is exclusively via vaporizer.',
        'Alcohol and other intoxicants are not permitted on the premises.',
        'Photography and filming are only allowed with express permission.',
        'Cleanliness and order must be maintained. Everyone cleans up their space.',
        'Respectful behavior is a given. Harassment will not be tolerated.',
        'In emergencies, the board or supervisor must be informed immediately.',
      ];

  return (
    <>
      <WQFPageHero
        label={isDE ? 'Räumlichkeiten' : 'Facilities'}
        title={isDE ? 'Unsere Räume' : 'Our Spaces'}
        subtitle={isDE
          ? 'Ein sicherer Ort für Gemeinschaft, Aufklärung und verantwortungsvollen Umgang.'
          : 'A safe place for community, education and responsible handling.'}
      />

      {/* Areas — thin border grid */}
      <section
        className="py-20 lg:py-28"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-12"
            style={{ color: 'var(--accent)' }}
          >
            {isDE ? 'Bereiche' : 'Areas'}
          </motion.p>

          <div
            className="grid lg:grid-cols-3"
            style={{ border: '1px solid rgba(255,255,255,0.06)' }}
          >
            {areas.map(({ num, title, text }, i) => (
              <motion.div
                key={num}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-8 lg:p-10"
                style={{
                  borderRight: i < areas.length - 1
                    ? '1px solid rgba(255,255,255,0.06)'
                    : undefined,
                }}
              >
                <p
                  className="font-heading italic font-bold mb-6 leading-none"
                  style={{
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                    color: 'rgba(255,255,255,0.06)',
                  }}
                >
                  {num}
                </p>
                <h3
                  className="font-heading italic font-bold mb-4"
                  style={{
                    fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                    color: 'var(--text)',
                  }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules — numbered list with large faint numbers */}
      <section
        className="py-20 lg:py-28"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-6"
              style={{ color: 'var(--accent)' }}
            >
              {isDE ? 'Nutzungsregeln' : 'Usage Rules'}
            </motion.p>

            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="font-heading italic font-bold mb-16 leading-none"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--text)' }}
            >
              {isDE ? 'Hausordnung' : 'House Rules'}
            </motion.h2>

            <div>
              {rules.map((rule, i) => {
                const num = String(i + 1).padStart(2, '0');
                return (
                  <motion.div
                    key={i}
                    {...fadeUp}
                    transition={{ duration: 0.45, delay: i * 0.05 }}
                    className="flex items-start gap-8 py-6"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <span
                      className="font-heading italic font-bold shrink-0 leading-none"
                      style={{
                        fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                        color: 'var(--text-faint)',
                      }}
                    >
                      {num}
                    </span>
                    <p
                      className="text-sm leading-relaxed pt-1"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {rule}
                    </p>
                  </motion.div>
                );
              })}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Coming soon — address note */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-start gap-6"
          >
            <div
              className="shrink-0 w-10 h-10 flex items-center justify-center"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <span style={{ color: 'var(--accent)', fontSize: '1rem' }}>→</span>
            </div>
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-2"
                style={{ color: 'var(--accent)' }}
              >
                {isDE ? 'Adresse' : 'Address'}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {isDE
                  ? 'Die genaue Adresse unserer Vereinsräume wird nach erfolgreicher Mitgliedsaufnahme mitgeteilt. Die Räumlichkeiten befinden sich derzeit in Planung.'
                  : 'The exact address of our club premises will be communicated after successful membership admission. The premises are currently in the planning phase.'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
