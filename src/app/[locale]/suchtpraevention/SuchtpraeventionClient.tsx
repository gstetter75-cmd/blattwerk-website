'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HomeSection } from '@/components/shared/HomeSection';
import { SelfAssessment } from '@/components/prevention/SelfAssessment';

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

  const riskTopics = [
    {
      title: isDE ? 'Gehirnentwicklung' : 'Brain Development',
      text: isDE
        ? 'Das Gehirn entwickelt sich bis etwa zum 25. Lebensjahr. Regelmäßiger Cannabiskonsum in dieser Phase kann kognitive Fähigkeiten, Gedächtnis und Lernfähigkeit nachhaltig beeinträchtigen. Je jünger der Einstieg, desto höher das Risiko.'
        : 'The brain continues developing until around age 25. Regular cannabis use during this phase can permanently affect cognitive abilities, memory and learning capacity. The younger the onset, the higher the risk.',
    },
    {
      title: isDE ? 'Psychische Gesundheit' : 'Mental Health',
      text: isDE
        ? 'Cannabis kann bei veranlagten Personen Angststörungen, Depressionen oder in seltenen Fällen Psychosen auslösen oder verstärken. Besonders THC-reiche Sorten und hohe Dosierungen erhöhen dieses Risiko. Wer familiär vorbelastet ist, sollte besonders vorsichtig sein.'
        : 'Cannabis can trigger or worsen anxiety disorders, depression or, in rare cases, psychosis in predisposed individuals. THC-rich strains and high doses increase this risk. Those with a family history should be particularly cautious.',
    },
    {
      title: isDE ? 'Abhängigkeitspotenzial' : 'Addiction Potential',
      text: isDE
        ? 'Etwa 9% aller Cannabiskonsumenten entwickeln im Laufe ihres Lebens eine Abhängigkeit. Bei täglichem Konsum steigt das Risiko auf etwa 25–50%. Typische Anzeichen: Toleranzentwicklung, Entzugssymptome (Schlafstörungen, Reizbarkeit), erfolglose Reduktionsversuche.'
        : 'About 9% of all cannabis users develop a dependence over their lifetime. With daily use, the risk rises to about 25–50%. Typical signs: tolerance development, withdrawal symptoms (sleep disturbances, irritability), unsuccessful attempts to reduce.',
    },
    {
      title: isDE ? 'Mischkonsum' : 'Poly-Drug Use',
      text: isDE
        ? 'Die Kombination von Cannabis mit Alkohol, Medikamenten oder anderen Substanzen kann unvorhersehbare und gefährliche Wechselwirkungen verursachen. Besonders die Mischung mit Alkohol verstärkt die Wirkung beider Substanzen erheblich.'
        : 'Combining cannabis with alcohol, medications or other substances can cause unpredictable and dangerous interactions. The combination with alcohol in particular significantly amplifies the effects of both substances.',
    },
    {
      title: isDE ? 'Schwangerschaft & Stillzeit' : 'Pregnancy & Breastfeeding',
      text: isDE
        ? 'Cannabiskonsum während der Schwangerschaft kann die Entwicklung des Kindes beeinträchtigen. THC geht in die Muttermilch über. Während Schwangerschaft und Stillzeit sollte vollständig auf Cannabis verzichtet werden.'
        : 'Cannabis use during pregnancy can affect child development. THC passes into breast milk. Cannabis should be completely avoided during pregnancy and breastfeeding.',
    },
  ];

  const warningSignsDE = [
    'Du konsumierst häufiger oder mehr als du eigentlich vorhast.',
    'Du hast versucht, weniger zu konsumieren — aber es klappt nicht.',
    'Dein Alltag, deine Arbeit oder deine Beziehungen leiden unter dem Konsum.',
    'Du brauchst immer mehr für die gleiche Wirkung.',
    'Du fühlst dich gereizt, unruhig oder schlaflos, wenn du nicht konsumierst.',
    'Du ziehst dich von Freunden oder Aktivitäten zurück.',
    'Du konsumierst, um mit Stress, Angst oder Traurigkeit umzugehen.',
  ];
  const warningSignsEN = [
    'You use more frequently or more than you intended.',
    'You have tried to cut down — but can\'t.',
    'Your daily life, work or relationships suffer because of your use.',
    'You need increasing amounts for the same effect.',
    'You feel irritable, restless or sleepless when not using.',
    'You withdraw from friends or activities.',
    'You use cannabis to cope with stress, anxiety or sadness.',
  ];

  const localResources = [
    { name: isDE ? 'DROBS – Drogenhilfe Hildesheim' : 'DROBS – Drug Counseling Hildesheim', contact: '05121 69605-0', tel: '+495121696050', url: 'https://drobs-hi.de' },
    { name: isDE ? 'Caritas Suchthilfe Hildesheim' : 'Caritas Addiction Services Hildesheim', contact: '05121 1677-230', tel: '+49512116772300', url: 'https://www.caritas-hildesheim.de/suchthilfe' },
    { name: isDE ? 'Ökumenische Suchthilfe (Diakonie/Caritas)' : 'Ecumenical Addiction Services (Diakonie/Caritas)', contact: '05121 1677-230', tel: '+49512116772300', url: 'https://www.diakonie-hildesheim.de/beratung' },
  ];

  const helpResources = [
    { name: isDE ? 'BZgA – Bundeszentrale für gesundheitliche Aufklärung' : 'BZgA – Federal Centre for Health Education', contact: '0221 89 20 31', tel: '+492218920310', url: 'https://www.bzga.de' },
    { name: isDE ? 'Drogen-Hotline' : 'Drug Hotline', contact: '01806 313031', tel: '+4918063130310', url: null },
    { name: 'Telefonseelsorge', contact: '0800 111 0 111', tel: '+498001110111', url: 'https://www.telefonseelsorge.de' },
    { name: 'Drugcom.de (BZgA)', contact: 'drugcom.de', tel: null, url: 'https://www.drugcom.de' },
    { name: 'Quit the Shit (BZgA)', contact: 'quit-the-shit.net', tel: null, url: 'https://www.quit-the-shit.net' },
  ];

  const knowledgeLinks = [
    { slug: 'health', label: isDE ? 'Gesundheit & Safer Use' : 'Health & Safer Use' },
    { slug: 'prevention', label: isDE ? 'Prävention & Jugendschutz' : 'Prevention & Youth Protection' },
    { slug: 'legal', label: isDE ? 'Rechtliche Lage' : 'Legal Situation' },
  ];

  const warningSigns = isDE ? warningSignsDE : warningSignsEN;

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
            <p className="text-lg leading-relaxed max-w-2xl mb-4">
              {isDE
                ? 'Cannabis kann Freude bereiten — und es kann Probleme machen. Wir reden offen darüber. Ohne erhobenen Zeigefinger, aber ehrlich.'
                : 'Cannabis can bring joy — and it can cause problems. We talk about it openly. Without lecturing, but honestly.'}
            </p>
            <p className="text-base text-ink-muted leading-relaxed max-w-2xl">
              {isDE
                ? 'Wenn du Fragen hast, dir Sorgen machst oder einfach reden willst — wir sind für dich da. Vertraulich und ohne Vorurteile.'
                : 'If you have questions, are worried or just want to talk — we\'re here for you. Confidential and without judgment.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Age notice strip */}
      <div className="py-3 border-b border-[var(--border)]" style={{ background: 'var(--warning-bg)' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center gap-4">
          <span className="shrink-0 text-sm font-medium" style={{ color: 'var(--warning)' }}>
            {isDE ? 'Hinweis' : 'Notice'}
          </span>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--warning-text)' }}>
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

      {/* -- Risks -- */}
      <HomeSection>
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Risiken ehrlich benennen' : 'Naming Risks Honestly'}
            </h2>
            <p className="text-ink-muted mb-10 max-w-2xl">
              {isDE
                ? 'Verantwortungsvoller Umgang beginnt damit, die Risiken zu kennen. Hier die wichtigsten Fakten — evidenzbasiert und ohne Panikmache.'
                : 'Responsible use starts with knowing the risks. Here are the key facts — evidence-based and without scaremongering.'}
            </p>

            <RiskAccordion topics={riskTopics} />
          </div>
        </section>
      </HomeSection>

      {/* -- Warning Signs -- */}
      <HomeSection>
        <section className="py-16 lg:py-24 bg-bg-surface">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Wie erkenne ich problematischen Konsum?' : 'How Do I Recognize Problematic Use?'}
            </h2>
            <p className="text-ink-muted mb-10 max-w-2xl">
              {isDE
                ? 'Nicht jeder Konsum ist problematisch. Aber wenn du dich in mehreren dieser Punkte wiedererkennst, lohnt es sich, genauer hinzuschauen.'
                : 'Not all use is problematic. But if you recognize yourself in several of these points, it\'s worth taking a closer look.'}
            </p>

            <div className="space-y-3">
              {warningSigns.map((sign, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-[var(--border)] bg-bg-elevated">
                  <span className="shrink-0 w-6 h-6 rounded-full border-2 border-[var(--border)] mt-0.5" />
                  <p className="text-sm leading-relaxed">{sign}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-ink-muted leading-relaxed max-w-2xl">
              {isDE
                ? 'Einen oder zwei Punkte wiederzuerkennen heißt nicht automatisch, dass du ein Problem hast. Aber es ist ein guter Anlass, ehrlich mit dir selbst zu sein — oder mit jemandem zu sprechen.'
                : 'Recognizing one or two points doesn\'t automatically mean you have a problem. But it\'s a good reason to be honest with yourself — or to talk to someone.'}
            </p>
          </div>
        </section>
      </HomeSection>

      {/* -- Self Assessment (CUDIT-R) -- */}
      <HomeSection>
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Selbsteinschätzung' : 'Self-Assessment'}
            </h2>
            <p className="text-ink-muted mb-10 max-w-2xl">
              {isDE
                ? 'Dieser kurze Test hilft dir, deinen Konsum besser einzuordnen. 8 Fragen, anonym, keine Daten werden gespeichert.'
                : 'This short test helps you better assess your use. 8 questions, anonymous, no data is stored.'}
            </p>

            <SelfAssessment isDE={isDE} />
          </div>
        </section>
      </HomeSection>

      {/* -- Beauftragte -- */}
      <HomeSection>
        <section className="py-16 lg:py-24 bg-bg-surface">
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
                <p className="text-sm text-ink-muted mt-2 italic">
                  {isDE
                    ? '„Ihr könnt mich jederzeit ansprechen — vertraulich und ohne Vorwürfe."'
                    : '"You can reach out to me anytime — confidential and without judgment."'}
                </p>
              </div>
              <div className="p-6 rounded-xl border border-[var(--border)] bg-bg-elevated">
                <p className="text-xs font-medium text-gold-theme mb-3">
                  {isDE ? 'Stellvertretung' : 'Deputy Officer'}
                </p>
                <h3 className="font-heading font-semibold text-lg">Angela Stetter</h3>
                <p className="text-sm text-ink-muted mt-2 italic">
                  {isDE
                    ? '„Kein Thema ist zu klein — meldet euch gerne."'
                    : '"No topic is too small — feel free to reach out."'}
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-sm text-ink-muted">{isDE ? 'Kontakt:' : 'Contact:'}</span>
              <a
                href="mailto:praevention@blattwerk.dev"
                className="text-sm font-medium text-gold-theme transition-opacity hover:opacity-70"
              >
                praevention@blattwerk.dev
              </a>
            </div>

            <div className="mt-6 p-4 rounded-xl border border-[var(--border)] bg-bg-elevated">
              <h4 className="text-xs font-medium text-gold-theme mb-2">
                {isDE ? 'Was passiert, wenn ich mich melde?' : 'What happens when I reach out?'}
              </h4>
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-ink-muted">
                <div className="flex items-start gap-2">
                  <span className="shrink-0 font-heading font-bold text-accent">1.</span>
                  <span>{isDE ? 'Vertrauliches Gespräch — in deinem Tempo' : 'Confidential conversation — at your pace'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="shrink-0 font-heading font-bold text-accent">2.</span>
                  <span>{isDE ? 'Gemeinsam Optionen besprechen' : 'Discuss options together'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="shrink-0 font-heading font-bold text-accent">3.</span>
                  <span>{isDE ? 'Bei Bedarf Vermittlung an Fachstelle' : 'Referral to specialists if needed'}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </HomeSection>

      {/* -- Local resources (Hildesheim) -- */}
      <HomeSection>
        <section className="py-16 lg:py-24">
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
              <ResourceRow key={i} resource={resource} isFirst={i === 0} />
            ))}
          </div>
        </section>
      </HomeSection>

      {/* -- National help resources -- */}
      <HomeSection>
        <section className="py-16 lg:py-24 bg-bg-surface">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-10">
              {isDE ? 'Überregionale Hilfsangebote' : 'National Help Resources'}
            </h2>

            {helpResources.map((resource, i) => (
              <ResourceRow key={i} resource={resource} isFirst={i === 0} />
            ))}
          </div>
        </section>
      </HomeSection>

      {/* -- Knowledge base links -- */}
      <HomeSection>
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Weiterlesen' : 'Further Reading'}
            </h2>
            <p className="text-ink-muted mb-8 max-w-xl">
              {isDE
                ? 'In unserer Wissensdatenbank findest du ausführliche Artikel zu diesen Themen.'
                : 'In our knowledge base you\'ll find detailed articles on these topics.'}
            </p>

            <div className="flex flex-wrap gap-3">
              {knowledgeLinks.map(({ slug, label }) => (
                <a
                  key={slug}
                  href={`/${isDE ? 'de' : 'en'}/wissensdatenbank/${slug}`}
                  className="px-5 py-3 rounded-xl border border-[var(--border)] bg-bg-elevated text-sm font-medium transition-all hover:border-accent hover:text-accent"
                >
                  {label} &#8599;
                </a>
              ))}
            </div>
          </div>
        </section>
      </HomeSection>

      {/* -- KCanG footer note -- */}
      <div className="py-10 max-w-6xl mx-auto px-6 lg:px-8">
        <p className="text-xs leading-relaxed max-w-3xl text-ink-faint">
          {isDE
            ? 'Das Suchtpräventionskonzept des BlattWerk e.V. erfüllt die Anforderungen des KCanG (§ 6 Abs. 3). Dieses Gesetz verpflichtet Anbauvereinigungen, ein Gesundheits- und Jugendschutzkonzept vorzuhalten, Präventionsbeauftragte zu benennen und Mitglieder über Risiken aufzuklären. Bei akuten Notfällen: Notruf 112.'
            : 'The addiction prevention concept of BlattWerk e.V. meets the requirements of the KCanG (§ 6 para. 3). This law requires cultivation associations to maintain a health and youth protection concept, appoint prevention officers and inform members about risks. In acute emergencies: call 112.'}
        </p>
      </div>

      {/* -- Emergency sticky bar -- */}
      <StickyEmergencyBar isDE={isDE} />
    </>
  );
}

/* ─── Risk Accordion ─── */

function RiskAccordion({ topics }: { topics: { title: string; text: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {topics.map((topic, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="rounded-xl border border-[var(--border)] bg-bg-elevated overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-bg-surface"
              aria-expanded={isOpen}
            >
              <span className="font-heading font-semibold text-base">{topic.title}</span>
              <span
                className="shrink-0 ml-4 text-ink-faint transition-transform"
                style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                ▾
              </span>
            </button>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.25 }}
                className="px-5 pb-5"
              >
                <p className="text-sm leading-relaxed text-ink-muted">{topic.text}</p>
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ─── Resource Row (with clickable phone) ─── */

function ResourceRow({
  resource,
  isFirst,
}: {
  resource: { name: string; contact: string; tel?: string | null; url: string | null };
  isFirst: boolean;
}) {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-5 ${!isFirst ? 'border-t border-[var(--border)]' : ''}`}
    >
      <p className="font-heading font-semibold text-base">{resource.name}</p>
      <div className="flex items-center gap-6 shrink-0">
        {resource.tel ? (
          <a href={`tel:${resource.tel}`} className="text-sm font-bold tabular-nums text-gold-theme transition-opacity hover:opacity-70">
            {resource.contact}
          </a>
        ) : (
          <span className="text-sm font-bold tabular-nums text-gold-theme">{resource.contact}</span>
        )}
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
  );
}

/* ─── Sticky Emergency Bar ─── */

function StickyEmergencyBar({ isDE }: { isDE: boolean }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--border)] bg-bg-elevated/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        <p className="text-xs text-ink-muted hidden sm:block">
          {isDE ? 'Brauchst du Hilfe?' : 'Need help?'}
        </p>
        <div className="flex items-center gap-3 ml-auto">
          <a
            href="tel:112"
            className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#b91c1c', color: '#fff' }}
          >
            {isDE ? 'Notruf 112' : 'Emergency 112'}
          </a>
          <a
            href="tel:+498001110111"
            className="px-3 py-1.5 rounded-lg text-xs font-medium border border-[var(--border)] text-ink-muted transition-opacity hover:opacity-70"
          >
            Telefonseelsorge
          </a>
          <a
            href="mailto:praevention@blattwerk.dev"
            className="px-3 py-1.5 rounded-lg text-xs font-medium border border-accent text-accent transition-opacity hover:opacity-70"
          >
            {isDE ? 'Uns schreiben' : 'Write to us'}
          </a>
        </div>
      </div>
    </div>
  );
}
