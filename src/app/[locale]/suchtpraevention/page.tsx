import { setRequestLocale } from 'next-intl/server';
import { ShieldAlert, Phone, UserCircle, AlertTriangle, Heart, BookOpen, ExternalLink } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';

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
      name: isDE ? 'BZgA-Beratungstelefon zur Suchtvorbeugung' : 'BZgA Addiction Prevention Hotline',
      phone: '0221 89 20 31',
      description: isDE ? 'Beratung der Bundeszentrale für gesundheitliche Aufklärung zu allen Fragen rund um Sucht und Prävention.' : 'Counseling from the Federal Center for Health Education on all questions about addiction and prevention.',
      url: 'https://www.bzga.de',
    },
    {
      name: isDE ? 'Sucht & Drogen Hotline' : 'Addiction & Drugs Hotline',
      phone: '01805 31 30 31',
      description: isDE ? 'Bundesweite Telefonhotline für Fragen zu Sucht und Drogen. 24 Stunden erreichbar.' : 'Nationwide telephone hotline for questions about addiction and drugs. Available 24 hours.',
      url: null,
    },
    {
      name: 'Telefonseelsorge',
      phone: '0800 111 0 111 / 0800 111 0 222',
      description: isDE ? 'Kostenlose und anonyme Beratung rund um die Uhr bei Sorgen, Problemen und Krisen.' : 'Free and anonymous counseling around the clock for worries, problems and crises.',
      url: 'https://www.telefonseelsorge.de',
    },
    {
      name: 'Drugcom.de (BZgA)',
      phone: null,
      description: isDE ? 'Online-Informationsportal der BZgA zu allen Drogen und Suchtmitteln mit Selbsttest und Online-Beratung.' : 'Online information portal of the BZgA on all drugs and addictive substances with self-test and online counseling.',
      url: 'https://www.drugcom.de',
    },
    {
      name: 'Quit the Shit (BZgA)',
      phone: null,
      description: isDE ? 'Kostenloses Online-Beratungsprogramm speziell für Cannabiskonsumenten, die ihren Konsum reduzieren oder einstellen möchten.' : 'Free online counseling program specifically for cannabis users who want to reduce or stop their consumption.',
      url: 'https://www.quit-the-shit.net',
    },
  ];

  const conceptItems = [
    {
      title: isDE ? 'Aufklärung statt Verharmlosung' : 'Education Instead of Trivialization',
      text: isDE ? 'Cannabis ist kein harmloses Genussmittel. Unser Präventionskonzept basiert auf evidenzbasierter Aufklärung über Wirkungen, Risiken und Nebenwirkungen. Wir informieren sachlich, ohne zu verharmlosen oder zu dramatisieren.' : 'Cannabis is not a harmless recreational substance. Our prevention concept is based on evidence-based education about effects, risks and side effects. We inform objectively, without trivializing or dramatizing.',
    },
    {
      title: isDE ? 'Früherkennung und Intervention' : 'Early Detection and Intervention',
      text: isDE ? 'Unsere geschulten Suchtpräventionsbeauftragten beobachten aufmerksam und sprechen Mitglieder an, wenn sie Anzeichen für problematischen Konsum bemerken. Frühzeitige Intervention kann einer Abhängigkeitsentwicklung vorbeugen.' : 'Our trained addiction prevention officers observe attentively and approach members when they notice signs of problematic consumption. Early intervention can prevent the development of addiction.',
    },
    {
      title: isDE ? 'Beratung und Vermittlung' : 'Counseling and Referral',
      text: isDE ? 'Mitglieder mit problematischem Konsum erhalten vertrauliche Beratung und werden bei Bedarf an professionelle Suchtberatungsstellen vermittelt. Die Inanspruchnahme ist freiwillig und vertraulich.' : 'Members with problematic consumption receive confidential counseling and are referred to professional addiction counseling services when needed. Usage is voluntary and confidential.',
    },
    {
      title: isDE ? 'Mindestalter 21 Jahre' : 'Minimum Age 21 Years',
      text: isDE ? 'Eine Mitgliedschaft bei BlattWerk e.V. ist erst ab 21 Jahren möglich. Dies geht über die gesetzlichen Mindestanforderungen hinaus und dient dem besonderen Schutz junger Menschen. Der Konsum in der Phase der Gehirnreife birgt erhöhte Gesundheitsrisiken.' : 'Membership at BlattWerk e.V. is only possible from the age of 21. This goes beyond the legal minimum requirements and serves the special protection of young people. Consumption during brain development carries increased health risks.',
    },
  ];

  const warningSigns = isDE
    ? ['Du konsumierst häufiger oder mehr als geplant.', 'Du brauchst immer größere Mengen für die gleiche Wirkung (Toleranzentwicklung).', 'Du vernachlässigst Hobbys, soziale Kontakte oder berufliche Pflichten.', 'Du konsumierst, obwohl du negative Konsequenzen erlebst.', 'Du hast erfolglose Versuche unternommen, den Konsum zu reduzieren.', 'Du erlebst Entzugserscheinungen wie Reizbarkeit, Schlafstörungen oder Appetitlosigkeit.', 'Du nutzt Cannabis als primäres Mittel zur Stressbewältigung.', 'Nahestehende Personen äußern Sorgen über deinen Konsum.']
    : ['You consume more frequently or more than planned.', 'You need increasingly larger amounts for the same effect (tolerance development).', 'You neglect hobbies, social contacts or professional duties.', 'You consume despite experiencing negative consequences.', 'You have made unsuccessful attempts to reduce consumption.', 'You experience withdrawal symptoms such as irritability, sleep disorders or loss of appetite.', 'You use cannabis as your primary means of stress management.', 'People close to you express concerns about your consumption.'];

  const glassCard = 'rounded-xl border border-[var(--border)]';
  const glassStyle = { background: 'var(--glass)', backdropFilter: 'blur(12px)' } as const;

  return (
    <>
      <PageHero
        title={isDE ? 'Suchtprävention' : 'Addiction Prevention'}
        subtitle={isDE ? 'Verantwortungsvoller Umgang beginnt mit Aufklärung. Hier findest du unser Präventionskonzept, Anlaufstellen und Hilfsangebote.' : 'Responsible handling begins with education. Here you will find our prevention concept, contact points and support services.'}
      />

      {/* Age Warning Banner */}
      <div className="border-b border-[var(--border)]" style={{ background: 'rgba(239,68,68,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-center gap-3">
          <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
          <p className="text-sm text-red-400">
            {isDE
              ? 'Cannabis ist ausschließlich für Erwachsene ab 21 Jahren. Der Konsum durch jüngere Personen ist gesetzlich verboten und gesundheitlich besonders riskant.'
              : 'Cannabis is exclusively for adults aged 21 and over. Consumption by younger persons is prohibited by law and particularly risky for health.'}
          </p>
        </div>
      </div>

      {/* Prevention Concept */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Heart className="w-8 h-8 text-accent mx-auto mb-4 opacity-70" />
            <h2 className="font-heading italic text-3xl text-ink mb-2">
              {isDE ? 'Unser Präventionskonzept' : 'Our Prevention Concept'}
            </h2>
          </div>
          <div className="space-y-4">
            {conceptItems.map(({ title, text }) => (
              <div key={title} className={`${glassCard} p-6`} style={glassStyle}>
                <h3 className="font-heading italic text-lg text-ink mb-2">{title}</h3>
                <p className="text-ink-muted leading-relaxed text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Persons */}
      <section className="py-16 lg:py-20 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <UserCircle className="w-8 h-8 text-accent mx-auto mb-4 opacity-70" />
            <h2 className="font-heading italic text-3xl text-ink mb-2">
              {isDE ? 'Ansprechpersonen' : 'Contact Persons'}
            </h2>
            <p className="text-ink-muted">
              {isDE ? 'Unsere Suchtpräventionsbeauftragten sind für dich da' : 'Our addiction prevention officers are here for you'}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { name: 'Jennifer Trebbin', role: isDE ? 'Suchtpräventionsbeauftragte' : 'Addiction Prevention Officer', note: isDE ? 'Geschult gemäß den Anforderungen des KCanG. Vertrauliche Beratung und Vermittlung.' : 'Trained according to KCanG requirements. Confidential counseling and referral.' },
              { name: 'N.N.', role: isDE ? 'Stellvertretung Suchtprävention' : 'Deputy Prevention Officer', note: isDE ? 'Vertretung und Unterstützung der Präventionsarbeit im Verein.' : 'Representation and support of prevention work in the association.' },
            ].map(({ name, role, note }) => (
              <div key={role} className={`${glassCard} p-6 text-center`} style={glassStyle}>
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <UserCircle className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading italic text-lg text-ink mb-1">{name}</h3>
                <p className="text-accent text-sm font-medium mb-2">{role}</p>
                <p className="text-xs text-ink-muted leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 lg:py-20 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <AlertTriangle className="w-8 h-8 text-gold-theme mx-auto mb-4 opacity-70" />
            <h2 className="font-heading italic text-3xl text-ink mb-2">
              {isDE ? 'Warnzeichen erkennen' : 'Recognizing Warning Signs'}
            </h2>
            <p className="text-ink-muted max-w-xl mx-auto">
              {isDE ? 'Problematischer Konsum entwickelt sich oft schleichend. Achte auf folgende Anzeichen:' : 'Problematic consumption often develops gradually. Watch for the following signs:'}
            </p>
          </div>
          <div className={`${glassCard} p-8`} style={glassStyle}>
            <ul className="space-y-4">
              {warningSigns.map((sign, i) => (
                <li key={i} className="flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-gold-theme shrink-0 mt-0.5 opacity-70" />
                  <span className="text-ink-muted leading-relaxed text-sm">{sign}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-[var(--border)]">
              <p className="text-sm text-ink-muted">
                {isDE
                  ? 'Wenn du eines oder mehrere dieser Zeichen bei dir erkennst, sprich mit unserer Suchtprävention oder wende dich an eine der unten genannten Beratungsstellen.'
                  : 'If you recognize one or more of these signs in yourself, speak with our addiction prevention team or contact one of the counseling services listed below.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Help Resources */}
      <section className="py-16 lg:py-20 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Phone className="w-8 h-8 text-accent mx-auto mb-4 opacity-70" />
            <h2 className="font-heading italic text-3xl text-ink mb-2">
              {isDE ? 'Hilfsangebote' : 'Help Resources'}
            </h2>
            <p className="text-ink-muted">
              {isDE ? 'Professionelle Anlaufstellen für Beratung und Unterstützung' : 'Professional contact points for counseling and support'}
            </p>
          </div>
          <div className="space-y-4">
            {helpResources.map((resource, i) => (
              <div key={i} className={`${glassCard} p-6`} style={glassStyle}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-heading italic text-lg text-ink mb-1">{resource.name}</h3>
                    {resource.phone && (
                      <p className="text-accent font-medium text-sm mb-2 flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5" />
                        {resource.phone}
                      </p>
                    )}
                    <p className="text-sm text-ink-muted leading-relaxed">{resource.description}</p>
                  </div>
                  {resource.url && (
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-accent transition-colors shrink-0"
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

      {/* Legal Notice */}
      <section className="py-10 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 p-4 bg-bg-elevated rounded-lg border border-[var(--border)]">
            <BookOpen className="w-4 h-4 text-ink-muted shrink-0 mt-0.5" />
            <p className="text-xs text-ink-muted leading-relaxed">
              {isDE
                ? 'Das Suchtpräventionskonzept des BlattWerk e.V. erfüllt die Anforderungen des KCanG (§ 6 Abs. 3). Unsere Suchtpräventionsbeauftragten sind gemäß den gesetzlichen Vorgaben geschult und zertifiziert. Bei akuten Notfällen wähle bitte den Notruf 112.'
                : 'The addiction prevention concept of BlattWerk e.V. meets the requirements of the KCanG (§ 6 Abs. 3). Our addiction prevention officers are trained and certified according to legal requirements. In acute emergencies, please call the emergency number 112.'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
