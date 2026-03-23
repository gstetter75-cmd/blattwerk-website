import { setRequestLocale } from 'next-intl/server';
import { Home, ShieldCheck, Leaf, Coffee, BookOpen, Users, CheckCircle } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { ArtPlaceholder } from '@/components/decorative/ArtPlaceholder';

export default async function FacilitiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isDE = locale === 'de';

  const areas = [
    { icon: Coffee,   title: isDE ? 'Gemeinschaftsraum' : 'Community Room',     text: isDE ? 'Ein einladender Raum zum Verweilen, Austausch und für Vereinsveranstaltungen. Hier finden Workshops, Vorträge und Mitgliederversammlungen statt.' : 'An inviting space for socializing, exchange and club events. Workshops, lectures and general assemblies take place here.' },
    { icon: Leaf,     title: isDE ? 'Abgabebereich' : 'Distribution Area',      text: isDE ? 'Der Bereich für die kontrollierte Abgabe von Cannabis an Mitglieder. Hier erfolgt die Dokumentation und Beratung.' : 'The area for the controlled distribution of cannabis to members. Documentation and counseling take place here.' },
    { icon: BookOpen, title: isDE ? 'Informationsecke' : 'Information Corner',  text: isDE ? 'Infomaterialien zu Safer Use, Suchtprävention und rechtlichen Fragen stehen hier frei zur Verfügung.' : 'Information materials on safer use, addiction prevention and legal questions are freely available here.' },
  ];

  const rules = isDE
    ? ['Der Zutritt ist nur für Mitglieder mit gültigem Ausweis gestattet.', 'Minderjährige haben keinen Zutritt zu den Vereinsräumen.', 'Cannabis darf nur in den dafür ausgewiesenen Bereichen konsumiert werden.', 'Die Räumlichkeiten sind rauchfrei. Konsum erfolgt ausschließlich per Vaporizer.', 'Alkohol und andere Rauschmittel sind in den Vereinsräumen nicht gestattet.', 'Fotografieren und Filmen ist nur mit ausdrücklicher Genehmigung erlaubt.', 'Auf Sauberkeit und Ordnung ist zu achten. Jeder räumt seinen Platz auf.', 'Respektvoller Umgang ist selbstverständlich. Belästigung wird nicht toleriert.', 'Bei Notfällen ist unverzüglich der Vorstand oder die Aufsichtsperson zu informieren.']
    : ['Access is only permitted for members with a valid ID.', 'Minors are not permitted in the club premises.', 'Cannabis may only be consumed in the designated areas.', 'The premises are smoke-free. Consumption is exclusively via vaporizer.', 'Alcohol and other intoxicants are not permitted on the premises.', 'Photography and filming are only allowed with express permission.', 'Cleanliness and order must be maintained. Everyone cleans up their space.', 'Respectful behavior is a given. Harassment will not be tolerated.', 'In emergencies, the board or supervisor must be informed immediately.'];

  const glassCard = 'rounded-xl border border-[var(--border)]';
  const glassStyle = { background: 'var(--glass)', backdropFilter: 'blur(12px)' } as const;

  return (
    <>
      <PageHero
        title={isDE ? 'Räumlichkeiten' : 'Facilities'}
        subtitle={isDE ? 'Unsere Vereinsräume – ein sicherer Ort für Gemeinschaft, Aufklärung und verantwortungsvollen Umgang.' : 'Our club premises – a safe place for community, education and responsible handling.'}
      />

      {/* Description */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Home className="w-8 h-8 text-accent mx-auto mb-5 opacity-70" />
            <h2 className="font-heading italic text-3xl text-ink mb-5">
              {isDE ? 'Unser Vereinsheim' : 'Our Club House'}
            </h2>
            <p className="text-ink-muted leading-relaxed max-w-2xl mx-auto">
              {isDE
                ? 'Die Räumlichkeiten des BlattWerk e.V. bieten einen geschützten Rahmen für unsere Vereinsaktivitäten. Hier treffen sich Mitglieder zum Austausch, nehmen an Workshops teil und können Cannabis in einer kontrollierten Umgebung beziehen.'
                : 'The premises of BlattWerk e.V. provide a protected framework for our club activities. Here members meet for exchange, participate in workshops and can obtain cannabis in a controlled environment.'}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {areas.map(({ icon: Icon, title, text }) => (
              <div key={title} className={`${glassCard} p-6 text-center`} style={glassStyle}>
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading italic text-lg text-ink mb-2">{title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="py-16 lg:py-20 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <ShieldCheck className="w-8 h-8 text-accent mx-auto mb-4 opacity-70" />
            <h2 className="font-heading italic text-3xl text-ink mb-2">
              {isDE ? 'Nutzungsregeln' : 'Usage Rules'}
            </h2>
            <p className="text-ink-muted">{isDE ? 'Für ein sicheres und angenehmes Miteinander' : 'For a safe and pleasant coexistence'}</p>
          </div>
          <div className={`${glassCard} p-8`} style={glassStyle}>
            <ul className="space-y-4">
              {rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-ink-muted leading-relaxed text-sm">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16 lg:py-20 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Leaf className="w-8 h-8 text-accent mx-auto mb-4 opacity-70" />
            <h2 className="font-heading italic text-3xl text-ink mb-2">
              {isDE ? 'Impressionen' : 'Impressions'}
            </h2>
            <p className="text-xs text-ink-faint">{isDE ? 'Fotos folgen nach Vereinsgründung' : 'Photos coming after association founding'}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[0,1,2,3,4,5].map((i) => (
              <ArtPlaceholder
                key={i}
                seed={i}
                className="aspect-[4/3] rounded-xl border border-[var(--border)]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Members only */}
      <section className="py-8 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 p-4 bg-bg-elevated rounded-lg border border-[var(--border)]">
            <Users className="w-4 h-4 text-ink-muted shrink-0" />
            <p className="text-sm text-ink-muted">
              {isDE ? 'Die Vereinsräume sind ausschließlich für Mitglieder zugänglich. Die genaue Adresse wird nach der Mitgliedsaufnahme mitgeteilt.' : 'The club premises are exclusively accessible to members. The exact address will be communicated after membership admission.'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
