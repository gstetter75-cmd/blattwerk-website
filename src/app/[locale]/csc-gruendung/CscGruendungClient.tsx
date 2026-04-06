'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { MessageCircle, Lightbulb, BookOpen, Users, ArrowRight, Mail, AlertTriangle, CheckCircle, Clock, FileText, Building, Scale, Sprout, Shield } from 'lucide-react';
import { HeroImage } from '@/components/decorative/HeroImage';
import { HomeSection } from '@/components/shared/HomeSection';

interface Props {
  isDE: boolean;
}

export function CscGruendungClient({ isDE }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const timelineSteps = [
    {
      icon: Users,
      phase: isDE ? 'Phase 1' : 'Phase 1',
      title: isDE ? 'Gründungsteam aufbauen' : 'Build Founding Team',
      duration: isDE ? '1–2 Monate' : '1–2 months',
      text: isDE
        ? 'Mindestens 5 Personen, die bereit sind, langfristig Verantwortung zu übernehmen. Ihr braucht einen Vorstand (mindestens Vorsitz, Stellvertretung, Schatzmeister), idealerweise Leute mit Vereinserfahrung, Buchhaltungskenntnissen und — wenn möglich — Anbau-Know-how. Unser Tipp: Unterschätzt den organisatorischen Aufwand nicht. Ein CSC ist kein Hobbyprojekt, sondern ein Vollzeit-Engagement für die ersten Monate.'
        : 'At least 5 people willing to take long-term responsibility. You need a board (at least chair, deputy, treasurer), ideally people with association experience, accounting skills and — if possible — growing know-how. Our tip: Don\'t underestimate the organizational effort. A CSC is not a hobby project, it\'s a full-time commitment for the first months.',
    },
    {
      icon: FileText,
      phase: isDE ? 'Phase 2' : 'Phase 2',
      title: isDE ? 'Satzung & Vereinsgründung' : 'Statutes & Association Founding',
      duration: isDE ? '2–4 Wochen' : '2–4 weeks',
      text: isDE
        ? 'Die Satzung muss KCanG-konform sein und alle gesetzlichen Anforderungen an Anbauvereinigungen abdecken: Nicht-Gewinnorientierung, Suchtpräventionskonzept, Jugendschutz, Dokumentationspflichten, Abgaberegelungen. Dann die Gründungsversammlung abhalten, notariell beurkunden lassen und im Vereinsregister eintragen. Wichtig: Lasst die Satzung von einem spezialisierten Anwalt prüfen — Fehler hier verzögern den Lizenzantrag um Monate.'
        : 'The statutes must be KCanG-compliant and cover all legal requirements for cultivation associations: non-profit status, addiction prevention concept, youth protection, documentation obligations, distribution rules. Then hold the founding assembly, have it notarized and register in the association register. Important: Have the statutes reviewed by a specialized lawyer — mistakes here delay the license application by months.',
    },
    {
      icon: Shield,
      phase: isDE ? 'Phase 3' : 'Phase 3',
      title: isDE ? 'Suchtpräventionskonzept erstellen' : 'Create Prevention Concept',
      duration: isDE ? '2–4 Wochen' : '2–4 weeks',
      text: isDE
        ? 'Das KCanG verpflichtet jede Anbauvereinigung zu einem schriftlichen Suchtpräventionskonzept. Es muss konkret und umsetzbar sein — keine Copy-Paste-Vorlage aus dem Internet. Inhalte: Risikofaktoren, Warnsignale für problematischen Konsum, Selbsteinschätzungstools, lokale Beratungsstellen, interne Ansprechpersonen, Schulungsplan für Mitglieder. Unser Konzept hat den Genehmigungsprozess beschleunigt, weil die Behörde gesehen hat, dass wir es ernst meinen.'
        : 'The KCanG requires every cultivation association to have a written addiction prevention concept. It must be concrete and implementable — no copy-paste template from the internet. Contents: risk factors, warning signs for problematic use, self-assessment tools, local counseling centers, internal contacts, training plan for members. Our concept accelerated the approval process because the authority saw we take it seriously.',
    },
    {
      icon: Building,
      phase: isDE ? 'Phase 4' : 'Phase 4',
      title: isDE ? 'Räumlichkeiten & Infrastruktur' : 'Premises & Infrastructure',
      duration: isDE ? '1–3 Monate' : '1–3 months',
      text: isDE
        ? 'Der schwierigste und teuerste Schritt. Ihr braucht Räumlichkeiten, die den gesetzlichen Anforderungen entsprechen: Zugangskontrollen, keine Einsehbarkeit von außen, Sicherheitskonzept, Lüftungssystem, Geruchsfilter. Dazu kommen Mietkaution, Umbaukosten und die technische Ausstattung für den Anbau (Beleuchtung, Bewässerung, Klimatisierung). Plant hier den größten Posten eures Budgets ein. Nicht jeder Vermieter vermietet an einen CSC — rechnet mit Absagen.'
        : 'The most difficult and expensive step. You need premises that meet legal requirements: access controls, no visibility from outside, security concept, ventilation system, odor filters. Add deposit, renovation costs and technical equipment for growing (lighting, irrigation, climate control). Plan the largest portion of your budget here. Not every landlord rents to a CSC — expect rejections.',
    },
    {
      icon: Scale,
      phase: isDE ? 'Phase 5' : 'Phase 5',
      title: isDE ? 'Lizenzantrag stellen' : 'Submit License Application',
      duration: isDE ? '1–2 Monate Vorbereitung' : '1–2 months preparation',
      text: isDE
        ? 'Der Antrag bei der zuständigen Landesbehörde muss wasserdicht sein. Erforderliche Unterlagen: Vereinsregisterauszug, Satzung, Suchtpräventionskonzept, Sicherheitskonzept, Grundrisse der Anbaufläche, Nachweis der Qualifikation des Anbauleiters, Führungszeugnisse aller Vorstandsmitglieder. Ein unvollständiger Antrag wird zurückgewiesen und kostet euch Wochen. Unser Tipp: Erstellt eine Checkliste und arbeitet sie systematisch ab.'
        : 'The application to the responsible state authority must be watertight. Required documents: association register extract, statutes, prevention concept, security concept, floor plans of the growing area, proof of the growing manager\'s qualifications, criminal record checks of all board members. An incomplete application gets rejected and costs you weeks. Our tip: Create a checklist and work through it systematically.',
    },
    {
      icon: Clock,
      phase: isDE ? 'Phase 6' : 'Phase 6',
      title: isDE ? 'Wartezeit & Behördenkommunikation' : 'Waiting Period & Authority Communication',
      duration: isDE ? '3–12 Monate' : '3–12 months',
      text: isDE
        ? 'Die Bearbeitungszeit variiert enorm — je nach Bundesland und Behörde zwischen 3 und 12 Monaten. In dieser Zeit kommen Rückfragen, Nachforderungen und manchmal Ortstermine. Bleibt erreichbar, reagiert schnell und professionell auf jede Anfrage. Bei uns dauerte es von der Vereinsgründung (Mai 2025) bis zur Anbaulizenz (März 2026) etwa 6 Monate — das ist eher am schnelleren Ende.'
        : 'Processing time varies enormously — between 3 and 12 months depending on state and authority. During this time there are follow-up questions, additional requests and sometimes site visits. Stay reachable, respond quickly and professionally to every inquiry. For us it took about 6 months from founding (May 2025) to cultivation license (March 2026) — that\'s on the faster end.',
    },
    {
      icon: Sprout,
      phase: isDE ? 'Phase 7' : 'Phase 7',
      title: isDE ? 'Anbau starten' : 'Start Growing',
      duration: isDE ? 'Ab Lizenzerteilung' : 'From license approval',
      text: isDE
        ? 'Mit der Anbaulizenz in der Hand könnt ihr loslegen. Aber auch hier braucht ihr Geduld: Infrastruktur aufbauen, erste Pflanzen setzen, Wachstumsphase abwarten, Ernte, Qualitätsprüfung. Von der Lizenz bis zur ersten Abgabe an Mitglieder vergehen nochmal 3–6 Monate. Plant diesen Zeitraum in eurer Kommunikation ein.'
        : 'With the cultivation license in hand, you can start. But even here you need patience: build infrastructure, plant first crops, wait for growth phase, harvest, quality testing. From license to first distribution to members takes another 3–6 months. Factor this into your communication.',
    },
  ];

  const costItems = [
    { label: isDE ? 'Notar & Vereinsregister' : 'Notary & Register', value: '500–1.000 €' },
    { label: isDE ? 'Rechtsberatung (Satzung, Lizenzantrag)' : 'Legal advice (statutes, license)', value: '2.000–5.000 €' },
    { label: isDE ? 'Mietkaution & erste Mieten' : 'Deposit & first rents', value: '3.000–10.000 €' },
    { label: isDE ? 'Umbau & Sicherheitstechnik' : 'Renovation & security', value: '10.000–40.000 €' },
    { label: isDE ? 'Anbauausstattung (Licht, Klima, Bewässerung)' : 'Growing equipment (light, climate, irrigation)', value: '15.000–40.000 €' },
    { label: isDE ? 'Samen, Substrate, Nährstoffe' : 'Seeds, substrates, nutrients', value: '1.000–3.000 €' },
    { label: isDE ? 'Versicherungen' : 'Insurance', value: '500–2.000 €/Jahr' },
    { label: isDE ? 'Laufende Betriebskosten (Strom, Miete, Material)' : 'Ongoing costs (electricity, rent, materials)', value: '2.000–5.000 €/Monat' },
  ];

  const mistakesToAvoid = [
    {
      title: isDE ? 'Unterschätzte Kosten' : 'Underestimated Costs',
      text: isDE
        ? 'Die meisten Gründungsinitiativen scheitern nicht am Willen, sondern am Geld. Plant mit einem fünfstelligen Startbudget und einer finanziellen Reserve für die ersten 6 Monate ohne Einnahmen.'
        : 'Most founding initiatives fail not due to willpower but money. Plan with a five-figure starting budget and a financial reserve for the first 6 months without income.',
    },
    {
      title: isDE ? 'Satzung ohne Anwalt' : 'Statutes Without Lawyer',
      text: isDE
        ? 'Eine fehlerhafte Satzung ist der häufigste Grund für abgelehnte oder verzögerte Lizenzanträge. Die 2.000–3.000 € für eine anwaltliche Prüfung sind die beste Investition im gesamten Gründungsprozess.'
        : 'A faulty statute is the most common reason for rejected or delayed license applications. The €2,000–3,000 for a legal review is the best investment in the entire founding process.',
    },
    {
      title: isDE ? 'Zu wenige Gründungsmitglieder' : 'Too Few Founding Members',
      text: isDE
        ? 'Ein CSC lässt sich nicht zu zweit stemmen. Ihr braucht ein Team, das die Arbeit auf mehrere Schultern verteilt — Verwaltung, Anbau, Finanzen, Prävention, Öffentlichkeitsarbeit. Mindestens 5–7 engagierte Leute zum Start.'
        : 'A CSC cannot be managed by two people. You need a team that distributes the work — administration, growing, finances, prevention, public relations. At least 5–7 committed people to start.',
    },
    {
      title: isDE ? 'Räumlichkeiten zu spät suchen' : 'Finding Premises Too Late',
      text: isDE
        ? 'Fängt früh an zu suchen. Die Suche nach geeigneten, bezahlbaren Räumlichkeiten, deren Vermieter auch an einen CSC vermieten, dauert länger als gedacht. Bei uns hat die Raumsuche den gesamten Prozess am meisten verlangsamt.'
        : 'Start looking early. Finding suitable, affordable premises whose landlord is willing to rent to a CSC takes longer than expected. For us, the premises search was the biggest bottleneck.',
    },
    {
      title: isDE ? 'Prävention als Pflichtübung behandeln' : 'Treating Prevention as Box-Ticking',
      text: isDE
        ? 'Behörden erkennen sofort, ob ein Suchtpräventionskonzept ernst gemeint oder nur kopiert ist. Investiert hier Zeit und zeigt, dass euch das Thema wichtig ist. Es macht den Unterschied bei der Genehmigung.'
        : 'Authorities immediately recognize whether a prevention concept is genuine or just copied. Invest time here and show that the topic matters to you. It makes the difference in approval.',
    },
  ];

  const offerings = [
    {
      icon: MessageCircle,
      title: isDE ? 'Erfahrungsaustausch' : 'Experience Sharing',
      text: isDE
        ? 'Wir teilen unsere Erfahrungen aus dem gesamten Gründungsprozess — von der Satzung über die Behördenkommunikation bis zur Anbaugenehmigung. Offen, ehrlich und mit den Fehlern, die wir gemacht haben.'
        : 'We share our experiences from the entire founding process — from statutes to authority communication to the cultivation license. Openly, honestly, including the mistakes we made.',
    },
    {
      icon: BookOpen,
      title: isDE ? 'Orientierung im Regelwerk' : 'Navigating Regulations',
      text: isDE
        ? 'Das KCanG ist komplex, die Landesgesetze variieren. Wir helfen dir, die relevanten Paragraphen zu verstehen und auf deine Situation anzuwenden. Unsere Wissensdatenbank deckt die wichtigsten Rechtsthemen ab.'
        : 'The KCanG is complex, state laws vary. We help you understand the relevant paragraphs and apply them to your situation. Our knowledge base covers the most important legal topics.',
    },
    {
      icon: Lightbulb,
      title: isDE ? 'Praktische Tipps & Fehler vermeiden' : 'Practical Tips & Avoiding Mistakes',
      text: isDE
        ? 'Welche Fehler haben wir gemacht? Was würden wir anders machen? Welche Tools, Strukturen und Dienstleister haben sich bewährt? Wir geben euch die Informationen, die wir gerne vorher gehabt hätten.'
        : 'What mistakes did we make? What would we do differently? Which tools, structures and service providers have proven useful? We give you the information we wish we had.',
    },
    {
      icon: Users,
      title: isDE ? 'Netzwerk & Kontakte' : 'Network & Contacts',
      text: isDE
        ? 'Wir vernetzen euch gerne mit anderen Gründungsinitiativen in Niedersachsen und teilen Kontakte zu Anwälten, Buchhaltern und Dienstleistern, die mit CSCs Erfahrung haben.'
        : 'We\'re happy to connect you with other founding initiatives in Lower Saxony and share contacts with lawyers, accountants and service providers experienced with CSCs.',
    },
  ];

  const faqs = [
    {
      q: isDE ? 'Was kostet es insgesamt, einen CSC zu gründen?' : 'What does it cost in total to found a CSC?',
      a: isDE
        ? 'Rechnet realistisch mit einem sechsstelligen Startkapital, je nach Bundesland, Standort und Größe des geplanten Anbaus. Die größten Posten sind Räumlichkeiten (Miete, Kaution, Umbau), Anbauausstattung und Rechtsberatung. Dazu kommen laufende Kosten von 2.000–5.000 €/Monat, bevor überhaupt die erste Ernte stattfindet. Ohne finanzielle Reserve für 6–12 Monate wird es eng.'
        : 'Realistically plan with a six-figure starting capital, depending on state, location and planned grow size. The biggest items are premises (rent, deposit, renovation), growing equipment and legal advice. Add ongoing costs of €2,000–5,000/month before the first harvest even happens. Without a financial reserve for 6–12 months, it gets tight.',
    },
    {
      q: isDE ? 'Wie lange dauert es von der Idee bis zur Anbaulizenz?' : 'How long from idea to cultivation license?',
      a: isDE
        ? 'Im besten Fall 6–9 Monate, realistischer sind 9–18 Monate. Bei uns dauerte es von der Vereinsgründung (Mai 2025) bis zur Anbaulizenz (März 2026) etwa 6 Monate — aber wir hatten Monate an Vorbereitung davor. Die Behörden-Bearbeitungszeit allein liegt je nach Bundesland bei 3–12 Monaten.'
        : 'Best case 6–9 months, more realistically 9–18 months. For us it took about 6 months from founding (May 2025) to cultivation license (March 2026) — but we had months of preparation before that. Authority processing time alone is 3–12 months depending on the state.',
    },
    {
      q: isDE ? 'Brauche ich Cannabis-Erfahrung oder Anbau-Know-how?' : 'Do I need cannabis experience or growing know-how?',
      a: isDE
        ? 'Anbau-Erfahrung im Team ist ein enormer Vorteil und beschleunigt den Prozess deutlich. Aber der Flaschenhals ist meistens nicht der Anbau, sondern die Organisation: Vereinsrecht, Buchhaltung, Behördenkommunikation, Personalplanung. Ein guter Vereinsmanager ist wertvoller als ein guter Grower — Grower kann man einstellen.'
        : 'Growing experience in the team is a huge advantage and significantly speeds up the process. But the bottleneck is usually not growing, it\'s organization: association law, accounting, authority communication, staffing. A good club manager is more valuable than a good grower — you can hire growers.',
    },
    {
      q: isDE ? 'Könnt ihr uns bei der Satzung helfen?' : 'Can you help with the statutes?',
      a: isDE
        ? 'Wir können euch zeigen, was in unserer Satzung steht und warum — als Orientierung und Diskussionsgrundlage. Eure Satzung müsst ihr aber selbst erarbeiten und zwingend von einem spezialisierten Anwalt prüfen lassen. Eine fehlerhafte Satzung ist der häufigste Grund für abgelehnte Lizenzanträge.'
        : 'We can show you what\'s in our statutes and why — as orientation and basis for discussion. But you must develop your own and absolutely have it reviewed by a specialized lawyer. A faulty statute is the most common reason for rejected license applications.',
    },
    {
      q: isDE ? 'Welche Rechtsform brauche ich?' : 'What legal form do I need?',
      a: isDE
        ? 'Das KCanG schreibt die Form der „eingetragenen nicht-wirtschaftlichen Vereinigung" vor — also ein e.V. Andere Rechtsformen (GmbH, Genossenschaft) sind nicht zulässig. Der Verein darf keinen Gewinn erzielen und muss ausschließlich dem gemeinschaftlichen Anbau dienen.'
        : 'The KCanG requires the form of a "registered non-commercial association" — i.e. an e.V. (eingetragener Verein). Other legal forms (GmbH, cooperative) are not permitted. The association must be non-profit and serve exclusively for communal cultivation.',
    },
    {
      q: isDE ? 'Wie viele Mitglieder brauche ich mindestens?' : 'How many members do I need at minimum?',
      a: isDE
        ? 'Für die Vereinsgründung reichen gesetzlich 7 Mitglieder. Für den Betrieb eines CSC braucht ihr aber deutlich mehr — sowohl zur Finanzierung (die laufenden Kosten sind hoch) als auch für die Arbeitsverteilung. Wir empfehlen, mit mindestens 20–30 Mitgliedern in den Antragsprozess zu gehen.'
        : 'Legally, 7 members are enough for founding the association. But for running a CSC you need significantly more — both for financing (ongoing costs are high) and work distribution. We recommend starting the application process with at least 20–30 members.',
    },
    {
      q: isDE ? 'Was ist der häufigste Fehler bei der CSC-Gründung?' : 'What is the most common mistake when founding a CSC?',
      a: isDE
        ? 'Die Kosten unterschätzen und die Räumlichkeiten zu spät suchen. Viele Gründungsinitiativen planen mit einem fünfstelligen Budget und scheitern, sobald die ersten Mietkautionen und Anwaltsrechnungen kommen. Der zweithäufigste Fehler: Eine fehlerhafte Satzung einreichen und den Lizenzantrag dadurch um Monate verzögern.'
        : 'Underestimating costs and searching for premises too late. Many founding initiatives plan with a five-figure budget and fail when the first deposits and lawyer bills arrive. Second most common mistake: submitting faulty statutes and delaying the license application by months.',
    },
    {
      q: isDE ? 'Welches Bundesland ist am gründungsfreundlichsten?' : 'Which state is most founder-friendly?',
      a: isDE
        ? 'Die Erfahrungen variieren stark. Tendenziell sind Bundesländer mit eigenen Cannabis-Behörden (statt nur Gesundheitsämtern) effizienter in der Bearbeitung. Niedersachsen, wo wir sitzen, hat einen klar definierten Prozess. Erkundigt euch bei der zuständigen Behörde in eurem Bundesland nach dem konkreten Ablauf — bevor ihr den Antrag stellt.'
        : 'Experiences vary significantly. States with dedicated cannabis authorities (rather than just health offices) tend to be more efficient. Lower Saxony, where we are based, has a clearly defined process. Check with the responsible authority in your state about the specific procedure — before submitting your application.',
    },
  ];

  return (
    <>
      {/* -- Hero -- */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="animate-fade-up">
            <p className="text-sm font-medium text-accent mb-4">
              {isDE ? 'Praxis-Guide aus Erfahrung' : 'Practical Guide from Experience'}
            </p>
            <h1 className="font-heading font-bold text-4xl lg:text-5xl leading-tight mb-6 max-w-3xl">
              {isDE ? 'Cannabis Social Club gründen — der ehrliche Guide' : 'Starting a Cannabis Social Club — the Honest Guide'}
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-4">
              {isDE
                ? 'BlattWerk e.V. hat den gesamten Weg selbst durchlaufen: Vereinsgründung im Mai 2025, Anbaulizenz im März 2026. Dieser Guide basiert nicht auf Theorie, sondern auf dem, was wir dabei gelernt haben — inklusive der Fehler.'
                : 'BlattWerk e.V. went through the entire process ourselves: association founding in May 2025, cultivation license in March 2026. This guide is not based on theory, but on what we learned — including the mistakes.'}
            </p>
            <p className="text-base text-ink-muted leading-relaxed max-w-2xl">
              {isDE
                ? 'Keine Rechtsberatung, keine Garantie, aber die Informationen, die wir gerne gehabt hätten, bevor wir angefangen haben.'
                : 'Not legal advice, no guarantees, but the information we wish we had before we started.'}
            </p>
          </div>
        </div>
      </section>

      <HeroImage
        src="/images/cannabis-indoor.jpg"
        alt={isDE ? 'Cannabis Indoor-Anbau' : 'Cannabis indoor growing'}
        height="260px"
      />

      {/* -- Timeline: Der Weg zur Anbaulizenz -- */}
      <HomeSection>
        <section className="py-16 lg:py-24 bg-bg-surface">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Der Weg zur Anbaulizenz — 7 Phasen' : 'The Path to a Cultivation License — 7 Phases'}
            </h2>
            <p className="text-ink-muted mb-10 max-w-xl">
              {isDE
                ? 'So sieht der realistische Ablauf aus — basierend auf unserer eigenen Erfahrung.'
                : 'This is what the realistic process looks like — based on our own experience.'}
            </p>

            <div className="space-y-6">
              {timelineSteps.map(({ icon: Icon, phase, title, duration, text }, i) => (
                <div key={i} className="flex gap-5">
                  <div className="shrink-0 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    {i < timelineSteps.length - 1 && (
                      <div className="w-px flex-1 bg-[var(--border)] mt-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-accent">{phase}</span>
                      <span className="text-xs text-ink-faint">~{duration}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{title}</h3>
                    <p className="text-sm text-ink-muted leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </HomeSection>

      {/* -- Realistic Costs -- */}
      <HomeSection>
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Realistische Kosten einer CSC-Gründung' : 'Realistic Costs of Founding a CSC'}
            </h2>
            <p className="text-ink-muted mb-10 max-w-xl">
              {isDE
                ? 'Keine Schönfärberei. Das sind die Größenordnungen, mit denen ihr rechnen müsst.'
                : 'No sugarcoating. These are the ranges you need to plan for.'}
            </p>

            {costItems.map(({ label, value }, i) => (
              <div
                key={i}
                className={`flex items-center justify-between py-4 ${i > 0 ? 'border-t border-[var(--border)]' : ''}`}
              >
                <span className="text-sm text-ink-muted">{label}</span>
                <span className="font-mono text-sm font-bold shrink-0 ml-4">{value}</span>
              </div>
            ))}

            <div className="mt-8 p-5 rounded-xl border border-accent/20 bg-accent/5">
              <p className="text-sm text-ink-muted leading-relaxed">
                <strong className="text-ink">{isDE ? 'Unser Fazit:' : 'Our takeaway:'}</strong>{' '}
                {isDE
                  ? 'Plant mit einem sechsstelligen Startbudget und einer finanziellen Reserve für 6–12 Monate laufende Kosten ohne Einnahmen. Die Mitgliedsbeiträge allein reichen in der Anfangsphase nicht aus.'
                  : 'Plan with a six-figure starting budget and a financial reserve for 6–12 months of ongoing costs without income. Membership fees alone are not sufficient in the initial phase.'}
              </p>
            </div>
          </div>
        </section>
      </HomeSection>

      {/* -- Mistakes to Avoid -- */}
      <HomeSection>
        <section className="py-16 lg:py-24 bg-bg-surface">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? '5 Fehler, die wir anderen ersparen wollen' : '5 Mistakes We Want to Help Others Avoid'}
            </h2>
            <p className="text-ink-muted mb-10 max-w-xl">
              {isDE
                ? 'Diese Fehler haben wir bei uns oder bei anderen Initiativen gesehen.'
                : 'These mistakes we\'ve seen with ourselves or other initiatives.'}
            </p>

            <div className="space-y-4">
              {mistakesToAvoid.map(({ title, text }, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl border border-[var(--border)] bg-bg-elevated">
                  <AlertTriangle className="w-5 h-5 text-gold-theme shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-semibold text-base mb-1">{title}</h3>
                    <p className="text-sm text-ink-muted leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </HomeSection>

      {/* -- What we offer -- */}
      <HomeSection>
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Wie BlattWerk helfen kann' : 'How BlattWerk Can Help'}
            </h2>
            <p className="text-ink-muted mb-10 max-w-xl">
              {isDE ? 'Unser Angebot für Gründungsinitiativen — kostenlos und unverbindlich.' : 'What we offer founding initiatives — free and non-binding.'}
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

      {/* -- Important Disclaimer -- */}
      <HomeSection>
        <section className="py-8 lg:py-12">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="flex gap-4 p-6 rounded-xl border border-gold-theme/20 bg-gold-theme/5">
              <AlertTriangle className="w-5 h-5 text-gold-theme shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading font-semibold text-base mb-2">
                  {isDE ? 'Wichtiger Hinweis' : 'Important Notice'}
                </h3>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {isDE
                    ? 'Dieser Guide basiert auf unserer Erfahrung in Niedersachsen und ersetzt keine Rechtsberatung. Das KCanG und die jeweiligen Landesgesetze können sich ändern. Für rechtlich verbindliche Fragen empfehlen wir ausdrücklich einen auf Cannabisrecht spezialisierten Anwalt. Wir übernehmen keine Haftung für die Richtigkeit oder Vollständigkeit der Angaben.'
                    : 'This guide is based on our experience in Lower Saxony and does not replace legal advice. The KCanG and respective state laws may change. For legally binding questions, we explicitly recommend a lawyer specializing in cannabis law. We accept no liability for the accuracy or completeness of the information.'}
                </p>
              </div>
            </div>
          </div>
        </section>
      </HomeSection>

      {/* -- Useful links -- */}
      <HomeSection>
        <section className="py-16 lg:py-24 bg-bg-surface">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8">
              {isDE ? 'Weiterführende Artikel' : 'Related Articles'}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: '/wissensdatenbank/legal/kcang-ueberblick', label: isDE ? 'KCanG im Überblick' : 'KCanG Overview' },
                { href: '/wissensdatenbank/legal/anbauvereinigungen-kcang', label: isDE ? 'Anbauvereinigungen nach KCanG' : 'Cultivation Associations under KCanG' },
                { href: '/wissensdatenbank/legal/cannabis-social-clubs', label: isDE ? 'Cannabis Social Clubs — Regeln & Pflichten' : 'Cannabis Social Clubs — Rules & Obligations' },
                { href: '/wissensdatenbank/growing/indoor-anbau-grundlagen', label: isDE ? 'Indoor-Anbau Grundlagen' : 'Indoor Growing Basics' },
                { href: '/suchtpraevention', label: isDE ? 'Unser Suchtpräventionskonzept' : 'Our Prevention Concept' },
                { href: '/wissensdatenbank/legal/eigenanbau-regeln', label: isDE ? 'Eigenanbau-Regeln' : 'Private Growing Rules' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-3 p-4 rounded-xl border border-[var(--border)] bg-bg-elevated hover:border-accent/30 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-sm font-medium">{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </HomeSection>

      {/* -- FAQ -- */}
      <HomeSection>
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Häufige Fragen zur CSC-Gründung' : 'CSC Founding FAQ'}
            </h2>
            <p className="text-ink-muted mb-10 max-w-xl">
              {isDE
                ? 'Die Fragen, die uns am häufigsten gestellt werden — mit ehrlichen Antworten.'
                : 'The questions we get asked most often — with honest answers.'}
            </p>

            <ul className="space-y-0">
              {faqs.map(({ q, a }, i) => {
                const isOpen = openFaq === i;
                return (
                  <li key={i} className={i > 0 ? 'border-t border-[var(--border)]' : ''}>
                    <button
                      type="button"
                      className="w-full text-left flex items-start justify-between gap-4 py-6"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span className="font-heading font-bold text-base leading-snug">{q}</span>
                      <span
                        className="font-mono text-lg shrink-0 mt-0.5 transition-transform duration-300 text-accent"
                        style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                      >
                        +
                      </span>
                    </button>
                    <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                      <div>
                        <p className="pb-6 text-sm leading-relaxed text-ink-muted">{a}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </HomeSection>

      {/* -- CTA -- */}
      <HomeSection>
        <section className="py-16 lg:py-24 bg-bg-surface">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              {isDE ? 'Fragen? Schreib uns.' : 'Questions? Reach out.'}
            </h2>
            <p className="text-ink-muted mb-8 max-w-xl">
              {isDE
                ? 'Egal ob du ganz am Anfang stehst oder schon mittendrin bist — schreib uns eine Nachricht. Wir antworten, wenn wir können, und sind ehrlich, wenn wir etwas nicht wissen.'
                : 'Whether you\'re just starting out or already in the middle of it — send us a message. We\'ll respond when we can, and we\'re honest when we don\'t know something.'}
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
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-md transition-colors duration-200 text-ink-muted border border-[var(--border)] hover:bg-bg-elevated"
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
