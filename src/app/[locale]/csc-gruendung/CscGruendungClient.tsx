'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { MessageCircle, Lightbulb, BookOpen, Users, ArrowRight, Mail, AlertTriangle } from 'lucide-react';
import { HeroImage } from '@/components/decorative/HeroImage';

interface Props {
  isDE: boolean;
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
};

export function CscGruendungClient({ isDE }: Props) {
  const offerings = [
    {
      icon: MessageCircle,
      title: isDE ? 'Erfahrungsaustausch' : 'Experience Sharing',
      text: isDE
        ? 'Wir teilen unsere Erfahrungen aus dem gesamten Gründungsprozess – von der Satzung über die Behördenkommunikation bis zur Anbaugenehmigung.'
        : 'We share our experiences from the entire founding process – from statutes to authority communication to the cultivation license.',
    },
    {
      icon: BookOpen,
      title: isDE ? 'Orientierung im Regelwerk' : 'Navigating Regulations',
      text: isDE
        ? 'Das KCanG ist komplex, die Landesgesetze variieren. Wir helfen dir, die relevanten Paragraphen zu verstehen und auf deine Situation anzuwenden.'
        : 'The KCanG is complex, state laws vary. We help you understand the relevant paragraphs and apply them to your situation.',
    },
    {
      icon: Lightbulb,
      title: isDE ? 'Praktische Tipps' : 'Practical Tips',
      text: isDE
        ? 'Welche Fehler haben wir gemacht? Was würden wir anders machen? Welche Tools und Strukturen haben sich bewährt?'
        : 'What mistakes did we make? What would we do differently? Which tools and structures have proven useful?',
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
      title: isDE ? 'Hilfe zur Selbsthilfe' : 'Help for Self-Help',
      text: isDE
        ? 'Wir übernehmen nicht euer Denken und nicht eure Arbeit. Einen CSC zu gründen erfordert Eigeninitiative, Durchhaltevermögen und die Bereitschaft, sich intensiv mit Gesetzen, Vereinsrecht und Anbau auseinanderzusetzen.'
        : 'We don\'t do your thinking or your work. Founding a CSC requires initiative, perseverance and the willingness to engage intensively with laws, association law and cultivation.',
    },
    {
      title: isDE ? 'Ehrliche Einschätzungen' : 'Honest Assessments',
      text: isDE
        ? 'Wenn wir denken, dass ein Konzept Schwächen hat, sagen wir das. Nicht um zu entmutigen, sondern weil ein solides Fundament der Schlüssel zum Erfolg ist.'
        : 'If we think a concept has weaknesses, we\'ll say so. Not to discourage, but because a solid foundation is the key to success.',
    },
    {
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
        ? 'Anbau-Erfahrung ist ein großer Vorteil, aber keine zwingende Voraussetzung. Entscheidend sind organisatorisches Talent, Vereinserfahrung und die Bereitschaft, sich schnell in komplexe Themen einzuarbeiten.'
        : 'Growing experience is a big advantage but not a strict requirement. What matters is organizational talent, association experience and the willingness to quickly learn complex topics.',
    },
    {
      q: isDE ? 'Könnt ihr uns bei der Satzung helfen?' : 'Can you help with the statutes?',
      a: isDE
        ? 'Wir können euch zeigen, was in unserer Satzung steht und warum – als Orientierung. Eure Satzung müsst ihr aber selbst erarbeiten, idealerweise mit anwaltlicher Prüfung.'
        : 'We can show you what\'s in our statutes and why – as orientation. But you need to develop your own, ideally with legal review.',
    },
  ];

  return (
    <>
      {/* -- Hero -- */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <p className="text-sm font-medium text-accent mb-4">
              {isDE ? 'Für Gründungsinteressierte' : 'For Aspiring Founders'}
            </p>
            <h1 className="font-heading font-bold text-4xl lg:text-5xl leading-tight mb-6 max-w-3xl">
              {isDE ? 'Einen CSC gründen?' : 'Starting a CSC?'}
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed max-w-2xl">
              {isDE
                ? 'Du spielst mit dem Gedanken, einen Cannabis Social Club zu gründen? Wir waren an dem gleichen Punkt – und stehen dir bei Fragen gerne zur Seite.'
                : 'Thinking about founding a Cannabis Social Club? We\'ve been at the same point – and we\'re happy to help with your questions.'}
            </p>
          </motion.div>
        </div>
      </section>

      <HeroImage
        src="/images/cannabis-indoor.jpg"
        alt={isDE ? 'Cannabis Indoor-Anbau' : 'Cannabis indoor growing'}
        height="260px"
      />

      {/* -- What we offer -- */}
      <HomeSection>
        <section className="py-16 lg:py-24 bg-bg-surface">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Wie wir helfen können' : 'How we can help'}
            </h2>
            <p className="text-ink-muted mb-10 max-w-xl">
              {isDE ? 'Unser Angebot für Gründungsinitiativen' : 'What we offer founding initiatives'}
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {offerings.map(({ icon: Icon, title, text }) => (
                <div key={title} className="p-6 rounded-xl border border-[var(--border)] bg-bg-elevated">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </HomeSection>

      {/* -- Important notice -- */}
      <HomeSection>
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="flex gap-4 p-6 rounded-xl border border-gold-theme/20 bg-gold-theme/5">
              <AlertTriangle className="w-5 h-5 text-gold-theme shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {isDE ? 'Klare Erwartungen' : 'Clear Expectations'}
                </h3>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {isDE
                    ? 'Einen Cannabis Social Club zu gründen ist kein Wochenendprojekt. Es erfordert monatelange Vorbereitung, fundiertes Wissen über das KCanG und die jeweiligen Landesgesetze, einen festen Kern an engagierten Mitstreitern und erhebliche finanzielle Vorleistungen.'
                    : 'Founding a Cannabis Social Club is not a weekend project. It requires months of preparation, solid knowledge of the KCanG and respective state laws, a core group of committed partners and significant financial upfront investment.'}
                </p>
              </div>
            </div>
          </div>
        </section>
      </HomeSection>

      {/* -- Principles -- */}
      <HomeSection>
        <section className="py-16 lg:py-24 bg-bg-surface">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-10">
              {isDE ? 'Unsere Grundsätze' : 'Our Principles'}
            </h2>

            <div className="grid md:grid-cols-3 gap-5">
              {principles.map(({ title, text }) => (
                <div key={title} className="p-6 rounded-xl border border-[var(--border)] bg-bg-elevated">
                  <h3 className="font-heading font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{text}</p>
                </div>
              ))}
            </div>
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

            {faqs.map(({ q, a }, i) => (
              <div
                key={i}
                className={`py-6 ${i > 0 ? 'border-t border-[var(--border)]' : ''}`}
              >
                <h3 className="font-heading font-bold text-base mb-3">{q}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{a}</p>
              </div>
            ))}
          </div>
        </section>
      </HomeSection>

      {/* -- CTA -- */}
      <HomeSection>
        <section className="py-16 lg:py-24 bg-bg-surface">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Schreib uns einfach' : 'Just reach out'}
            </h2>
            <p className="text-ink-muted mb-8 max-w-xl">
              {isDE
                ? 'Egal ob du ganz am Anfang stehst oder schon mittendrin bist – schreib uns eine Nachricht. Wir antworten, wenn wir können, und sind ehrlich, wenn wir etwas nicht wissen.'
                : 'Whether you\'re just starting out or already in the middle of it – send us a message. We\'ll respond when we can, and we\'re honest when we don\'t know something.'}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-md transition-all duration-200 hover:-translate-y-0.5 bg-accent text-white"
              >
                {isDE ? 'Kontaktformular' : 'Contact Form'} <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:info@blattwerk.dev?subject=CSC%20Gr%C3%BCndung%20%E2%80%93%20Fragen"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-md transition-colors duration-200 text-ink-muted border border-[var(--border)]"
              >
                <Mail className="w-4 h-4" />
                {isDE ? 'Direkt per E-Mail' : 'Direct Email'}
              </a>
            </div>
          </div>
        </section>
      </HomeSection>
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
