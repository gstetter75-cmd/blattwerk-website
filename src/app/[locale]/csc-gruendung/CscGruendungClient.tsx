'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { MessageCircle, Lightbulb, BookOpen, Users, ArrowRight, Mail, ShieldCheck, AlertTriangle } from 'lucide-react';
import { WQFPageHero } from '@/components/layout/WQFPageHero';
import { HeroImage } from '@/components/decorative/HeroImage';

interface Props {
  isDE: boolean;
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55 },
} as const;

export function CscGruendungClient({ isDE }: Props) {
  const offerings = [
    {
      icon: MessageCircle,
      title: isDE ? 'Erfahrungsaustausch' : 'Experience Sharing',
      text: isDE
        ? 'Wir teilen unsere Erfahrungen aus dem gesamten Gründungsprozess – von der Satzung über die Behördenkommunikation bis zur Anbaugenehmigung. Ehrlich, ungeschönt und praxisnah.'
        : 'We share our experiences from the entire founding process – from statutes to authority communication to the cultivation license. Honest, unfiltered and practical.',
    },
    {
      icon: BookOpen,
      title: isDE ? 'Orientierung im Regelwerk' : 'Navigating Regulations',
      text: isDE
        ? 'Das KCanG ist komplex, die Landesgesetze variieren. Wir helfen dir, die relevanten Paragraphen zu verstehen und auf deine Situation anzuwenden – ohne juristische Beratung zu ersetzen.'
        : 'The KCanG is complex, state laws vary. We help you understand the relevant paragraphs and apply them to your situation – without replacing legal counsel.',
    },
    {
      icon: Lightbulb,
      title: isDE ? 'Praktische Tipps' : 'Practical Tips',
      text: isDE
        ? 'Welche Fehler haben wir gemacht? Was würden wir anders machen? Welche Tools und Strukturen haben sich bewährt? Wir geben Einblicke, die kein Leitfaden abdeckt.'
        : 'What mistakes did we make? What would we do differently? Which tools and structures have proven useful? We share insights no guide covers.',
    },
    {
      icon: Users,
      title: isDE ? 'Netzwerk & Austausch' : 'Network & Exchange',
      text: isDE
        ? 'Wir vernetzen euch gerne mit anderen Gründungsinitiativen in der Region und teilen Kontakte zu Dienstleistern, die mit CSCs Erfahrung haben.'
        : 'We\'re happy to connect you with other founding initiatives in the region and share contacts with service providers experienced with CSCs.',
    },
  ];

  const principles = [
    {
      num: '01',
      title: isDE ? 'Hilfe zur Selbsthilfe' : 'Help for Self-Help',
      text: isDE
        ? 'Wir übernehmen nicht euer Denken und nicht eure Arbeit. Einen CSC zu gründen erfordert Eigeninitiative, Durchhaltevermögen und die Bereitschaft, sich intensiv mit Gesetzen, Vereinsrecht und Anbau auseinanderzusetzen. Wir können Türen zeigen – durchgehen müsst ihr selbst.'
        : 'We don\'t do your thinking or your work. Founding a CSC requires initiative, perseverance and the willingness to engage intensively with laws, association law and cultivation. We can show doors – you have to walk through them.',
    },
    {
      num: '02',
      title: isDE ? 'Ehrliche Einschätzungen' : 'Honest Assessments',
      text: isDE
        ? 'Wenn wir denken, dass ein Konzept Schwächen hat, sagen wir das. Nicht um zu entmutigen, sondern weil ein solides Fundament der Schlüssel zum Erfolg ist. Beschönigung hilft niemandem.'
        : 'If we think a concept has weaknesses, we\'ll say so. Not to discourage, but because a solid foundation is the key to success. Sugarcoating helps no one.',
    },
    {
      num: '03',
      title: isDE ? 'Keine Rechtsberatung' : 'No Legal Advice',
      text: isDE
        ? 'Wir sind keine Anwälte. Unsere Tipps basieren auf Erfahrung, nicht auf juristischer Expertise. Für rechtlich verbindliche Fragen empfehlen wir immer einen spezialisierten Rechtsanwalt.'
        : 'We are not lawyers. Our tips are based on experience, not legal expertise. For legally binding questions, we always recommend a specialized attorney.',
    },
  ];

  const faqs = [
    {
      q: isDE ? 'Was kostet es, einen CSC zu gründen?' : 'What does it cost to found a CSC?',
      a: isDE
        ? 'Die Kosten variieren je nach Bundesland, Standort und Konzept erheblich. Rechnet mit Notarkosten, Vereinsregister-Gebühren, Mietkaution, technischer Ausstattung und Rechtsberatung. Realistisch sollte man mit einem fünfstelligen Betrag planen.'
        : 'Costs vary significantly depending on the state, location and concept. Expect notary fees, association register fees, rent deposit, technical equipment and legal advice. Realistically, plan for a five-figure sum.',
    },
    {
      q: isDE ? 'Wie lange dauert der Genehmigungsprozess?' : 'How long does the approval process take?',
      a: isDE
        ? 'Das hängt stark vom Bundesland und der zuständigen Behörde ab. Rechnet mit mehreren Monaten – von der Vereinsgründung bis zur Anbaugenehmigung kann ein halbes Jahr oder mehr vergehen.'
        : 'This depends heavily on the state and responsible authority. Expect several months – from founding the association to receiving the cultivation license can take six months or more.',
    },
    {
      q: isDE ? 'Brauche ich Cannabis-Erfahrung?' : 'Do I need cannabis experience?',
      a: isDE
        ? 'Anbau-Erfahrung ist ein großer Vorteil, aber keine zwingende Voraussetzung. Entscheidend sind organisatorisches Talent, Vereinserfahrung, Durchhaltevermögen und die Bereitschaft, sich schnell in komplexe Themen einzuarbeiten.'
        : 'Growing experience is a big advantage but not a strict requirement. What matters is organizational talent, association experience, perseverance and the willingness to quickly learn complex topics.',
    },
    {
      q: isDE ? 'Könnt ihr uns bei der Satzung helfen?' : 'Can you help with the statutes?',
      a: isDE
        ? 'Wir können euch zeigen, was in unserer Satzung steht und warum – als Orientierung. Eure Satzung müsst ihr aber selbst erarbeiten, idealerweise mit anwaltlicher Prüfung. Jeder CSC hat andere Voraussetzungen.'
        : 'We can show you what\'s in our statutes and why – as orientation. But you need to develop your own, ideally with legal review. Every CSC has different conditions.',
    },
  ];

  return (
    <>
      <WQFPageHero
        label={isDE ? 'Für Gründungsinteressierte' : 'For Aspiring Founders'}
        title={isDE ? 'Einen CSC gründen?' : 'Starting a CSC?'}
        subtitle={
          isDE
            ? 'Du spielst mit dem Gedanken, einen Cannabis Social Club zu gründen? Wir waren an dem gleichen Punkt – und stehen dir bei Fragen gerne zur Seite.'
            : 'Thinking about founding a Cannabis Social Club? We\'ve been at the same point – and we\'re happy to help with your questions.'
        }
        accentColor="green"
      />

      <HeroImage
        src="/images/cannabis-indoor.jpg"
        alt={isDE ? 'Cannabis Indoor-Anbau' : 'Cannabis indoor growing'}
        height="260px"
      />

      {/* -- Was wir bieten -- */}
      <section className="py-20 lg:py-28 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-4 text-accent">
              {isDE ? 'Unser Angebot' : 'What We Offer'}
            </p>
            <h2 className="font-heading font-bold" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              {isDE ? 'Wie wir helfen können' : 'How we can help'}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-px border border-[var(--border)]">
            {offerings.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="p-8 lg:p-10 bg-bg"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-accent" />
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

      {/* -- Wichtiger Hinweis -- */}
      <section className="py-16 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <div className="flex gap-4 p-6 rounded-xl border border-gold-theme/20 bg-gold-theme/5">
              <AlertTriangle className="w-5 h-5 text-gold-theme shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading text-lg mb-2">
                  {isDE ? 'Klare Erwartungen' : 'Clear Expectations'}
                </h3>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {isDE
                    ? 'Einen Cannabis Social Club zu gründen ist kein Wochenendprojekt. Es erfordert monatelange Vorbereitung, fundiertes Wissen über das KCanG und die jeweiligen Landesgesetze, einen festen Kern an engagierten Mitstreitern und erhebliche finanzielle Vorleistungen. Wir können euch Erfahrungen teilen und Orientierung geben – aber die Arbeit, die Recherche und die Entscheidungen liegen bei euch.'
                    : 'Founding a Cannabis Social Club is not a weekend project. It requires months of preparation, solid knowledge of the KCanG and respective state laws, a core group of committed partners and significant financial upfront investment. We can share experiences and provide orientation – but the work, research and decisions are yours.'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -- Unsere Grundsätze -- */}
      <section className="py-20 lg:py-28 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-4 text-accent">
              {isDE ? 'Unser Ansatz' : 'Our Approach'}
            </p>
            <h2 className="font-heading font-bold" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              {isDE ? 'Hilfe zur Selbsthilfe' : 'Help for Self-Help'}
            </h2>
          </motion.div>

          {principles.map(({ num, title, text }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className={`flex items-start gap-6 py-6 ${i > 0 ? 'border-t border-[var(--border)]' : ''}`}
            >
              <span className="font-mono text-xs shrink-0 mt-1 w-6 text-right text-ink-faint">
                {num}
              </span>
              <div className="pl-4 border-l border-accent/25">
                <h3 className="font-heading font-bold text-lg mb-2">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed font-body text-ink-muted">
                  {text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* -- FAQ -- */}
      <section className="py-20 lg:py-28 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-4 text-accent">
              FAQ
            </p>
            <h2 className="font-heading font-bold" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              {isDE ? 'Häufige Fragen' : 'Common Questions'}
            </h2>
          </motion.div>

          {faqs.map(({ q, a }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={`py-6 ${i > 0 ? 'border-t border-[var(--border)]' : ''}`}
            >
              <h3 className="font-heading font-bold text-base mb-3">
                {q}
              </h3>
              <p className="text-sm leading-relaxed font-body text-ink-muted">
                {a}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* -- CTA -- */}
      <section className="py-20 lg:py-28 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-6 text-accent">
              {isDE ? 'Kontakt aufnehmen' : 'Get in Touch'}
            </p>
            <h2 className="font-heading font-bold mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              {isDE ? 'Schreib uns einfach' : 'Just reach out'}
            </h2>
            <p className="text-base leading-relaxed font-body mb-10 max-w-xl text-ink-muted">
              {isDE
                ? 'Egal ob du ganz am Anfang stehst oder schon mittendrin bist – schreib uns eine Nachricht. Wir antworten, wenn wir können, und sind ehrlich, wenn wir etwas nicht wissen.'
                : 'Whether you\'re just starting out or already in the middle of it – send us a message. We\'ll respond when we can, and we\'re honest when we don\'t know something.'}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.12em] font-body transition-all duration-200 hover:-translate-y-0.5 bg-accent text-white"
              >
                {isDE ? 'Kontaktformular' : 'Contact Form'} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="mailto:info@blattwerk.dev?subject=CSC%20Gr%C3%BCndung%20%E2%80%93%20Fragen"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.12em] font-body transition-colors duration-200 text-ink-muted border border-[var(--border)]"
              >
                <Mail className="w-3.5 h-3.5" />
                {isDE ? 'Direkt per E-Mail' : 'Direct Email'}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
