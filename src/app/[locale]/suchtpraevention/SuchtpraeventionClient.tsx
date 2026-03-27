'use client';

import { motion } from 'framer-motion';

interface Props {
  isDE: boolean;
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
};

export function SuchtpraeventionClient({ isDE }: Props) {
  const conceptItems = [
    {
      title: isDE ? 'Aufklärung statt Verharmlosung' : 'Education Instead of Trivialization',
      text: isDE
        ? 'Evidenzbasierte Aufklärung über Wirkungen, Risiken und Nebenwirkungen — sachlich, ohne zu verharmlosen oder zu dramatisieren.'
        : 'Evidence-based education about effects, risks and side effects — objective, without trivializing or dramatizing.',
    },
    {
      title: isDE ? 'Früherkennung & Intervention' : 'Early Detection & Intervention',
      text: isDE
        ? 'Geschulte Beauftragte beobachten aufmerksam und sprechen Mitglieder bei Anzeichen problematischen Konsums an.'
        : 'Trained officers observe attentively and approach members showing signs of problematic consumption.',
    },
    {
      title: isDE ? 'Beratung & Vermittlung' : 'Counseling & Referral',
      text: isDE
        ? 'Vertrauliche Beratung und bei Bedarf Vermittlung an professionelle Suchtberatungsstellen.'
        : 'Confidential counseling and referral to professional addiction counseling services when needed.',
    },
    {
      title: isDE ? 'Mitgliedschaft ab 21 Jahren' : 'Membership from Age 21',
      text: isDE
        ? 'Wir nehmen ausschließlich Mitglieder ab 21 Jahren auf — eine bewusste Entscheidung zum Schutz junger Menschen.'
        : 'We only accept members aged 21 and over — a deliberate decision to protect young people.',
    },
  ];

  const localResources = [
    { name: isDE ? 'DROBS – Drogenhilfe Hildesheim' : 'DROBS – Drug Counseling Hildesheim', contact: '05121 69605-0', url: 'https://drobs-hi.de' },
    { name: isDE ? 'Caritas Suchthilfe Hildesheim' : 'Caritas Addiction Services Hildesheim', contact: '05121 1677-230', url: 'https://www.caritas-hildesheim.de/suchthilfe' },
    { name: isDE ? 'Ökumenische Suchthilfe (Diakonie/Caritas)' : 'Ecumenical Addiction Services (Diakonie/Caritas)', contact: '05121 1677-230', url: 'https://www.diakonie-hildesheim.de/beratung' },
  ];

  const helpResources = [
    { name: isDE ? 'BZgA – Bundeszentrale für gesundheitliche Aufklärung' : 'BZgA – Federal Centre for Health Education', contact: '0221 89 20 31', url: 'https://www.bzga.de' },
    { name: isDE ? 'Drogen-Hotline' : 'Drug Hotline', contact: '01806 313031', url: null },
    { name: 'Telefonseelsorge', contact: '0800 111 0 111', url: 'https://www.telefonseelsorge.de' },
    { name: 'Drugcom.de (BZgA)', contact: 'drugcom.de', url: 'https://www.drugcom.de' },
    { name: 'Quit the Shit (BZgA)', contact: 'quit-the-shit.net', url: 'https://www.quit-the-shit.net' },
  ];

  return (
    <>
      {/* -- Hero -- */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <p className="text-sm font-medium text-gold-theme mb-4">
              {isDE ? 'Suchtprävention' : 'Addiction Prevention'}
            </p>
            <h1 className="font-heading font-bold text-4xl lg:text-5xl leading-tight mb-6 max-w-3xl">
              {isDE ? 'Prävention & Hilfe' : 'Prevention & Help'}
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed max-w-2xl">
              {isDE
                ? 'Verantwortungsvoller Umgang beginnt mit Aufklärung.'
                : 'Responsible handling begins with education.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Age warning strip */}
      <div className="py-3 border-b border-[var(--border)]" style={{ background: 'rgba(239,68,68,0.06)' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center gap-4">
          <span className="shrink-0 text-sm font-medium" style={{ color: '#ef4444' }}>
            {isDE ? 'Hinweis' : 'Notice'}
          </span>
          <p className="text-xs leading-relaxed" style={{ color: 'rgba(239,68,68,0.75)' }}>
            {isDE
              ? 'Bei BlattWerk e.V. ist die Mitgliedschaft erst ab 21 Jahren möglich. Wir setzen bewusst auf ein höheres Mindestalter, um junge Menschen zu schützen.'
              : 'At BlattWerk e.V., membership is available from age 21 only. We deliberately set a higher minimum age to protect young people.'}
          </p>
        </div>
      </div>

      {/* -- Concept -- */}
      <HomeSection>
        <section className="py-16 lg:py-24 bg-bg-surface">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-10">
              {isDE ? 'Unser Konzept' : 'Our Concept'}
            </h2>

            <div className="grid sm:grid-cols-2 gap-5">
              {conceptItems.map(({ title, text }) => (
                <div key={title} className="p-5 rounded-xl border border-[var(--border)] bg-bg-elevated">
                  <h3 className="font-heading font-semibold text-base mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </HomeSection>

      {/* -- Beauftragte -- */}
      <HomeSection>
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Ansprechpersonen' : 'Contact Persons'}
            </h2>
            <p className="text-ink-muted mb-10 max-w-xl">
              {isDE
                ? 'Bei Fragen zur Suchtprävention oder bei Bedarf an Beratung.'
                : 'For questions about addiction prevention or counseling needs.'}
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="p-6 rounded-xl border border-[var(--border)] bg-bg-elevated">
                <p className="text-xs font-medium text-gold-theme mb-3">
                  {isDE ? 'Suchtpräventionsbeauftragte' : 'Addiction Prevention Officer'}
                </p>
                <h3 className="font-heading font-semibold text-lg">Jennifer Trebbin</h3>
              </div>
              <div className="p-6 rounded-xl border border-[var(--border)] bg-bg-elevated">
                <p className="text-xs font-medium text-gold-theme mb-3">
                  {isDE ? 'Stellvertretung' : 'Deputy Officer'}
                </p>
                <h3 className="font-heading font-semibold text-lg">Angela Stetter</h3>
              </div>
            </div>
          </div>
        </section>
      </HomeSection>

      {/* -- Local resources (Hildesheim) -- */}
      <HomeSection>
        <section className="py-16 lg:py-24 bg-bg-surface">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Anlaufstellen in Hildesheim' : 'Local Resources in Hildesheim'}
            </h2>
            <p className="text-ink-muted mb-10 max-w-xl">
              {isDE
                ? 'Kostenlose und auf Wunsch anonyme Beratung — für Betroffene und Angehörige.'
                : 'Free and optionally anonymous counseling — for those affected and their relatives.'}
            </p>

            {localResources.map((resource, i) => (
              <div
                key={i}
                className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-5 ${i > 0 ? 'border-t border-[var(--border)]' : ''}`}
              >
                <p className="font-heading font-semibold text-base">{resource.name}</p>
                <div className="flex items-center gap-6 shrink-0">
                  <span className="text-sm font-bold tabular-nums text-gold-theme">{resource.contact}</span>
                  {resource.url && (
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ink-faint transition-opacity hover:opacity-60"
                    >
                      &#8599;
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </HomeSection>

      {/* -- Help resources -- */}
      <HomeSection>
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-10">
              {isDE ? 'Überregionale Hilfsangebote' : 'National Help Resources'}
            </h2>

            {helpResources.map((resource, i) => (
              <div
                key={i}
                className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-5 ${i > 0 ? 'border-t border-[var(--border)]' : ''}`}
              >
                <p className="font-heading font-semibold text-base">{resource.name}</p>
                <div className="flex items-center gap-6 shrink-0">
                  <span className="text-sm font-bold tabular-nums text-gold-theme">{resource.contact}</span>
                  {resource.url && (
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ink-faint transition-opacity hover:opacity-60"
                    >
                      &#8599;
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </HomeSection>

      <div className="py-10 max-w-6xl mx-auto px-6 lg:px-8">
        <p className="text-xs leading-relaxed max-w-2xl text-ink-faint">
          {isDE
            ? 'Das Suchtpräventionskonzept des BlattWerk e.V. erfüllt die Anforderungen des KCanG (§ 6 Abs. 3). Bei akuten Notfällen: Notruf 112.'
            : 'The addiction prevention concept of BlattWerk e.V. meets the requirements of the KCanG (§ 6 Abs. 3). In acute emergencies: call 112.'}
        </p>
      </div>
    </>
  );
}

function HomeSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
