import { setRequestLocale } from 'next-intl/server';
import {
  ShieldAlert,
  Phone,
  UserCircle,
  AlertTriangle,
  Heart,
  BookOpen,
  ExternalLink,
} from 'lucide-react';

export default async function PreventionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isDE = locale === 'de';

  const helpResources = [
    {
      name: isDE
        ? 'BZgA-Beratungstelefon zur Suchtvorbeugung'
        : 'BZgA Addiction Prevention Hotline',
      phone: '0221 89 20 31',
      description: isDE
        ? 'Beratung der Bundeszentrale für gesundheitliche Aufklärung zu allen Fragen rund um Sucht und Prävention.'
        : 'Counseling from the Federal Center for Health Education on all questions about addiction and prevention.',
      url: 'https://www.bzga.de',
    },
    {
      name: isDE
        ? 'Sucht & Drogen Hotline'
        : 'Addiction & Drugs Hotline',
      phone: '01805 31 30 31',
      description: isDE
        ? 'Bundesweite Telefonhotline für Fragen zu Sucht und Drogen. 24 Stunden erreichbar.'
        : 'Nationwide telephone hotline for questions about addiction and drugs. Available 24 hours.',
      url: null,
    },
    {
      name: 'Telefonseelsorge',
      phone: '0800 111 0 111 / 0800 111 0 222',
      description: isDE
        ? 'Kostenlose und anonyme Beratung rund um die Uhr bei Sorgen, Problemen und Krisen.'
        : 'Free and anonymous counseling around the clock for worries, problems and crises.',
      url: 'https://www.telefonseelsorge.de',
    },
    {
      name: isDE ? 'Drugcom.de (BZgA)' : 'Drugcom.de (BZgA)',
      phone: null,
      description: isDE
        ? 'Online-Informationsportal der BZgA zu allen Drogen und Suchtmitteln mit Selbsttest und Online-Beratung.'
        : 'Online information portal of the BZgA on all drugs and addictive substances with self-test and online counseling.',
      url: 'https://www.drugcom.de',
    },
    {
      name: isDE
        ? 'Quit the Shit (BZgA)'
        : 'Quit the Shit (BZgA)',
      phone: null,
      description: isDE
        ? 'Kostenloses Online-Beratungsprogramm speziell für Cannabiskonsumenten, die ihren Konsum reduzieren oder einstellen möchten.'
        : 'Free online counseling program specifically for cannabis users who want to reduce or stop their consumption.',
      url: 'https://www.quit-the-shit.net',
    },
  ];

  const warningSignsDE = [
    'Du konsumierst häufiger oder mehr als geplant.',
    'Du brauchst immer größere Mengen für die gleiche Wirkung (Toleranzentwicklung).',
    'Du vernachlässigst Hobbys, soziale Kontakte oder berufliche Pflichten.',
    'Du konsumierst, obwohl du negative Konsequenzen erlebst.',
    'Du hast erfolglose Versuche unternommen, den Konsum zu reduzieren.',
    'Du erlebst Entzugserscheinungen wie Reizbarkeit, Schlafstörungen oder Appetitlosigkeit.',
    'Du nutzt Cannabis als primäres Mittel zur Stressbewältigung.',
    'Nahestehende Personen äußern Sorgen über deinen Konsum.',
  ];

  const warningSignsEN = [
    'You consume more frequently or more than planned.',
    'You need increasingly larger amounts for the same effect (tolerance development).',
    'You neglect hobbies, social contacts or professional duties.',
    'You consume despite experiencing negative consequences.',
    'You have made unsuccessful attempts to reduce consumption.',
    'You experience withdrawal symptoms such as irritability, sleep disorders or loss of appetite.',
    'You use cannabis as your primary means of stress management.',
    'People close to you express concerns about your consumption.',
  ];

  const warningSigns = isDE ? warningSignsDE : warningSignsEN;

  return (
    <>
      {/* Hero */}
      <section className="bg-deep-forest text-warm-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl mb-4">
            {isDE ? 'Suchtprävention' : 'Addiction Prevention'}
          </h1>
          <p className="text-warm-white/70 text-lg max-w-2xl mx-auto">
            {isDE
              ? 'Verantwortungsvoller Umgang beginnt mit Aufklärung. Hier findest du unser Präventionskonzept, Anlaufstellen und Hilfsangebote.'
              : 'Responsible handling begins with education. Here you will find our prevention concept, contact points and support services.'}
          </p>
        </div>
      </section>

      {/* Age Notice */}
      <div className="bg-terracotta text-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-center gap-3">
          <ShieldAlert className="w-5 h-5 shrink-0" />
          <p className="text-sm font-medium">
            {isDE
              ? 'Cannabis ist ausschließlich für Erwachsene ab 18 Jahren. Der Konsum durch Minderjährige ist gesetzlich verboten und gesundheitlich besonders riskant.'
              : 'Cannabis is exclusively for adults aged 18 and over. Consumption by minors is prohibited by law and particularly risky for health.'}
          </p>
        </div>
      </div>

      {/* Prevention Concept */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Heart className="w-10 h-10 text-amber mx-auto mb-4" />
            <h2 className="font-heading text-3xl text-deep-forest mb-4">
              {isDE ? 'Unser Präventionskonzept' : 'Our Prevention Concept'}
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-warm-white rounded-xl p-6 shadow-sm border border-sand/50">
              <h3 className="font-heading text-xl text-deep-forest mb-3">
                {isDE ? 'Aufklärung statt Verharmlosung' : 'Education Instead of Trivialization'}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                {isDE
                  ? 'Cannabis ist kein harmloses Genussmittel. Unser Präventionskonzept basiert auf evidenzbasierter Aufklärung über Wirkungen, Risiken und Nebenwirkungen. Wir informieren sachlich, ohne zu verharmlosen oder zu dramatisieren.'
                  : 'Cannabis is not a harmless recreational substance. Our prevention concept is based on evidence-based education about effects, risks and side effects. We inform objectively, without trivializing or dramatizing.'}
              </p>
            </div>

            <div className="bg-warm-white rounded-xl p-6 shadow-sm border border-sand/50">
              <h3 className="font-heading text-xl text-deep-forest mb-3">
                {isDE ? 'Früherkennung und Intervention' : 'Early Detection and Intervention'}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                {isDE
                  ? 'Unsere geschulten Suchtpräventionsbeauftragten beobachten aufmerksam und sprechen Mitglieder an, wenn sie Anzeichen für problematischen Konsum bemerken. Frühzeitige Intervention kann einer Abhängigkeitsentwicklung vorbeugen.'
                  : 'Our trained addiction prevention officers observe attentively and approach members when they notice signs of problematic consumption. Early intervention can prevent the development of addiction.'}
              </p>
            </div>

            <div className="bg-warm-white rounded-xl p-6 shadow-sm border border-sand/50">
              <h3 className="font-heading text-xl text-deep-forest mb-3">
                {isDE ? 'Beratung und Vermittlung' : 'Counseling and Referral'}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                {isDE
                  ? 'Mitglieder mit problematischem Konsum erhalten vertrauliche Beratung und werden bei Bedarf an professionelle Suchtberatungsstellen vermittelt. Die Inanspruchnahme ist freiwillig und vertraulich.'
                  : 'Members with problematic consumption receive confidential counseling and are referred to professional addiction counseling services when needed. Usage is voluntary and confidential.'}
              </p>
            </div>

            <div className="bg-warm-white rounded-xl p-6 shadow-sm border border-sand/50">
              <h3 className="font-heading text-xl text-deep-forest mb-3">
                {isDE ? 'Besonderer Schutz für 18–21-Jährige' : 'Special Protection for 18–21 Year Olds'}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                {isDE
                  ? 'Für junge Erwachsene zwischen 18 und 21 gelten besondere Schutzmaßnahmen: reduzierte Abgabemengen (max. 30g/Monat), THC-Obergrenze von 10% und regelmäßige Beratungsgespräche durch die Suchtprävention.'
                  : 'Special protective measures apply for young adults between 18 and 21: reduced distribution quantities (max. 30g/month), THC limit of 10% and regular counseling sessions with addiction prevention.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Persons */}
      <section className="bg-sand/30 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <UserCircle className="w-10 h-10 text-amber mx-auto mb-4" />
            <h2 className="font-heading text-3xl text-deep-forest mb-2">
              {isDE ? 'Ansprechpersonen' : 'Contact Persons'}
            </h2>
            <p className="text-sage">
              {isDE
                ? 'Unsere Suchtpräventionsbeauftragten sind für dich da'
                : 'Our addiction prevention officers are here for you'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-warm-white rounded-xl p-6 shadow-sm border border-sand/50 text-center">
              <div className="w-16 h-16 bg-sand/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <UserCircle className="w-8 h-8 text-sage" />
              </div>
              <h3 className="font-heading text-lg text-deep-forest mb-1">N.N.</h3>
              <p className="text-amber text-sm font-medium mb-2">
                {isDE
                  ? 'Suchtpräventionsbeauftragte/r'
                  : 'Addiction Prevention Officer'}
              </p>
              <p className="text-xs text-charcoal/60">
                {isDE
                  ? 'Geschult gemäß den Anforderungen des KCanG. Vertrauliche Beratung und Vermittlung.'
                  : 'Trained according to KCanG requirements. Confidential counseling and referral.'}
              </p>
            </div>

            <div className="bg-warm-white rounded-xl p-6 shadow-sm border border-sand/50 text-center">
              <div className="w-16 h-16 bg-sand/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <UserCircle className="w-8 h-8 text-sage" />
              </div>
              <h3 className="font-heading text-lg text-deep-forest mb-1">N.N.</h3>
              <p className="text-amber text-sm font-medium mb-2">
                {isDE
                  ? 'Stellvertretung Suchtprävention'
                  : 'Deputy Prevention Officer'}
              </p>
              <p className="text-xs text-charcoal/60">
                {isDE
                  ? 'Vertretung und Unterstützung der Präventionsarbeit im Verein.'
                  : 'Representation and support of prevention work in the association.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <AlertTriangle className="w-10 h-10 text-terracotta mx-auto mb-4" />
            <h2 className="font-heading text-3xl text-deep-forest mb-2">
              {isDE ? 'Warnzeichen erkennen' : 'Recognizing Warning Signs'}
            </h2>
            <p className="text-sage max-w-xl mx-auto">
              {isDE
                ? 'Problematischer Konsum entwickelt sich oft schleichend. Achte auf folgende Anzeichen:'
                : 'Problematic consumption often develops gradually. Watch for the following signs:'}
            </p>
          </div>

          <div className="bg-warm-white rounded-xl p-8 shadow-sm border border-terracotta/20">
            <ul className="space-y-4">
              {warningSigns.map((sign, i) => (
                <li key={i} className="flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-terracotta shrink-0 mt-1" />
                  <span className="text-charcoal/70 leading-relaxed">{sign}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-sand/50">
              <p className="text-sm text-charcoal/80 font-medium">
                {isDE
                  ? 'Wenn du eines oder mehrere dieser Zeichen bei dir erkennst, sprich mit unserer Suchtprävention oder wende dich an eine der unten genannten Beratungsstellen.'
                  : 'If you recognize one or more of these signs in yourself, speak with our addiction prevention team or contact one of the counseling services listed below.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Help Resources */}
      <section className="bg-sand/30 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Phone className="w-10 h-10 text-amber mx-auto mb-4" />
            <h2 className="font-heading text-3xl text-deep-forest mb-2">
              {isDE ? 'Hilfsangebote' : 'Help Resources'}
            </h2>
            <p className="text-sage">
              {isDE
                ? 'Professionelle Anlaufstellen für Beratung und Unterstützung'
                : 'Professional contact points for counseling and support'}
            </p>
          </div>

          <div className="space-y-4">
            {helpResources.map((resource, i) => (
              <div
                key={i}
                className="bg-warm-white rounded-xl p-6 shadow-sm border border-sand/50"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-heading text-lg text-deep-forest mb-1">
                      {resource.name}
                    </h3>
                    {resource.phone && (
                      <p className="text-amber font-medium text-sm mb-2 flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        {resource.phone}
                      </p>
                    )}
                    <p className="text-sm text-charcoal/70 leading-relaxed">
                      {resource.description}
                    </p>
                  </div>
                  {resource.url && (
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-amber hover:text-amber/80 transition-colors shrink-0"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Website
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber/10 border border-amber/30 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-amber shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {isDE
                    ? 'Das Suchtpräventionskonzept des BlattWerk e.V. erfüllt die Anforderungen des KCanG (§ 6 Abs. 3). Unsere Suchtpräventionsbeauftragten sind gemäß den gesetzlichen Vorgaben geschult und zertifiziert. Bei akuten Notfällen wähle bitte den Notruf 112.'
                    : 'The addiction prevention concept of BlattWerk e.V. meets the requirements of the KCanG (§ 6 Abs. 3). Our addiction prevention officers are trained and certified according to legal requirements. In acute emergencies, please call the emergency number 112.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
