import { setRequestLocale } from 'next-intl/server';
import { Heart, Sprout, BookOpen, Shield, Wrench, HandHeart } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';

export default async function DonationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isDE = locale === 'de';

  const usages = [
    { icon: Sprout,   title: isDE ? 'Anbauinfrastruktur' : 'Growing Infrastructure', text: isDE ? 'Investition in Anbauequipment, Beleuchtung und Qualitätssicherung.' : 'Investment in growing equipment, lighting and quality assurance.' },
    { icon: BookOpen, title: isDE ? 'Aufklärung & Prävention' : 'Education & Prevention', text: isDE ? 'Finanzierung von Informationsmaterialien, Workshops und Präventionsarbeit.' : 'Funding of information materials, workshops and prevention work.' },
    { icon: Shield,   title: isDE ? 'Jugendschutz' : 'Youth Protection', text: isDE ? 'Umsetzung und Weiterentwicklung unserer Jugendschutzmaßnahmen.' : 'Implementation and development of our youth protection measures.' },
    { icon: Wrench,   title: isDE ? 'Vereinsräume' : 'Club Premises', text: isDE ? 'Ausstattung und Instandhaltung unserer Vereinsräumlichkeiten.' : 'Equipment and maintenance of our club premises.' },
  ];

  const bankDetails = [
    [isDE ? 'Kontoinhaber' : 'Account Holder', 'BlattWerk e.V.', false],
    ['IBAN', 'DE00 0000 0000 0000 0000 00', true],
    ['BIC', 'XXXXXXXX', true],
    [isDE ? 'Bank' : 'Bank', isDE ? 'wird noch bekanntgegeben' : 'to be announced', false],
    [isDE ? 'Verwendungszweck' : 'Reference', isDE ? 'Spende BlattWerk' : 'Donation BlattWerk', false],
  ] as [string, string, boolean][];

  const glassCard = 'rounded-xl border border-[var(--border)]';
  const glassStyle = { background: 'var(--glass)', backdropFilter: 'blur(12px)' } as const;

  return (
    <>
      <PageHero
        title={isDE ? 'Spenden' : 'Donations'}
        subtitle={isDE ? 'Unterstütze unsere Arbeit und hilf uns, einen verantwortungsvollen Umgang mit Cannabis zu fördern.' : 'Support our work and help us promote responsible cannabis use.'}
      />

      {/* Why Donate */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HandHeart className="w-8 h-8 text-accent mx-auto mb-5 opacity-70" />
          <h2 className="font-heading italic text-3xl text-ink mb-5">
            {isDE ? 'Warum spenden?' : 'Why Donate?'}
          </h2>
          <p className="text-ink-muted leading-relaxed max-w-2xl mx-auto">
            {isDE
              ? 'Als gemeinnütziger Verein finanzieren wir uns über Mitgliedsbeiträge und Spenden. Jede Spende hilft uns, unsere Infrastruktur aufzubauen, Aufklärungsarbeit zu leisten und ein sicheres Umfeld für unsere Mitglieder zu schaffen. Deine Unterstützung macht einen Unterschied.'
              : 'As a non-profit association, we finance ourselves through membership fees and donations. Every donation helps us build our infrastructure, carry out educational work and create a safe environment for our members. Your support makes a difference.'}
          </p>
        </div>
      </section>

      {/* Bank Details */}
      <section className="py-16 lg:py-20 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Heart className="w-8 h-8 text-accent mx-auto mb-4 opacity-70" />
            <h2 className="font-heading italic text-3xl text-ink mb-2">
              {isDE ? 'Bankverbindung' : 'Bank Details'}
            </h2>
          </div>
          <div className={`${glassCard} p-8 max-w-lg mx-auto`} style={glassStyle}>
            <div className="space-y-4">
              {bankDetails.map(([label, value, mono], i) => (
                <div key={i} className={`flex justify-between items-center ${i < bankDetails.length - 1 ? 'border-b border-[var(--border)] pb-4' : ''}`}>
                  <span className="text-ink-muted text-sm">{label}</span>
                  <span className={`text-ink font-medium ${mono ? 'font-mono text-sm' : ''}`}>{value}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-ink-muted text-center mt-5 max-w-lg mx-auto">
            {isDE ? 'Hinweis: Die Bankverbindung wird nach der Vereinsgründung und Kontoeröffnung hier aktualisiert.' : 'Note: Bank details will be updated here after the association is founded and the account is opened.'}
          </p>
        </div>
      </section>

      {/* What donations are used for */}
      <section className="py-16 lg:py-20 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading italic text-3xl text-ink text-center mb-10">
            {isDE ? 'Wofür wir Spenden verwenden' : 'What We Use Donations For'}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {usages.map(({ icon: Icon, title, text }) => (
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

      {/* Transparency */}
      <section className="py-10 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 p-4 bg-bg-elevated rounded-lg border border-[var(--border)]">
            <Heart className="w-4 h-4 text-ink-muted shrink-0 mt-0.5" />
            <p className="text-xs text-ink-muted leading-relaxed">
              {isDE
                ? 'Transparenz ist uns wichtig. Über die Verwendung der Spendengelder legen wir auf der jährlichen Mitgliederversammlung Rechenschaft ab. Als nicht-gewinnorientierter Verein fließen alle Mittel direkt in den Vereinszweck.'
                : "Transparency is important to us. We account for the use of donations at the annual general assembly. As a non-profit association, all funds go directly to the association's purpose."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
