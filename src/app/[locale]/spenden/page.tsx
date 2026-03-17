import { setRequestLocale } from 'next-intl/server';
import {
  Heart,
  Sprout,
  BookOpen,
  Shield,
  Wrench,
  HandHeart,
} from 'lucide-react';

export default async function DonationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isDE = locale === 'de';

  const usages = [
    {
      icon: Sprout,
      title: isDE ? 'Anbauinfrastruktur' : 'Growing Infrastructure',
      text: isDE
        ? 'Investition in Anbauequipment, Beleuchtung und Qualitätssicherung.'
        : 'Investment in growing equipment, lighting and quality assurance.',
    },
    {
      icon: BookOpen,
      title: isDE ? 'Aufklärung & Prävention' : 'Education & Prevention',
      text: isDE
        ? 'Finanzierung von Informationsmaterialien, Workshops und Präventionsarbeit.'
        : 'Funding of information materials, workshops and prevention work.',
    },
    {
      icon: Shield,
      title: isDE ? 'Jugendschutz' : 'Youth Protection',
      text: isDE
        ? 'Umsetzung und Weiterentwicklung unserer Jugendschutzmaßnahmen.'
        : 'Implementation and development of our youth protection measures.',
    },
    {
      icon: Wrench,
      title: isDE ? 'Vereinsräume' : 'Club Premises',
      text: isDE
        ? 'Ausstattung und Instandhaltung unserer Vereinsräumlichkeiten.'
        : 'Equipment and maintenance of our club premises.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-deep-forest text-warm-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl mb-4">
            {isDE ? 'Spenden' : 'Donations'}
          </h1>
          <p className="text-warm-white/70 text-lg max-w-2xl mx-auto">
            {isDE
              ? 'Unterstütze unsere Arbeit und hilf uns, einen verantwortungsvollen Umgang mit Cannabis zu fördern.'
              : 'Support our work and help us promote responsible cannabis use.'}
          </p>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HandHeart className="w-10 h-10 text-amber mx-auto mb-4" />
            <h2 className="font-heading text-3xl text-deep-forest mb-4">
              {isDE ? 'Warum spenden?' : 'Why Donate?'}
            </h2>
            <p className="text-charcoal/70 leading-relaxed max-w-2xl mx-auto">
              {isDE
                ? 'Als gemeinnütziger Verein finanzieren wir uns über Mitgliedsbeiträge und Spenden. Jede Spende hilft uns, unsere Infrastruktur aufzubauen, Aufklärungsarbeit zu leisten und ein sicheres Umfeld für unsere Mitglieder zu schaffen. Deine Unterstützung macht einen Unterschied.'
                : 'As a non-profit association, we finance ourselves through membership fees and donations. Every donation helps us build our infrastructure, carry out educational work and create a safe environment for our members. Your support makes a difference.'}
            </p>
          </div>
        </div>
      </section>

      {/* Bank Details */}
      <section className="bg-sand/30 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Heart className="w-10 h-10 text-amber mx-auto mb-4" />
            <h2 className="font-heading text-3xl text-deep-forest mb-2">
              {isDE ? 'Bankverbindung' : 'Bank Details'}
            </h2>
          </div>

          <div className="bg-warm-white rounded-xl p-8 shadow-sm border border-sand/50 max-w-lg mx-auto">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-sand/50 pb-3">
                <span className="text-sage text-sm">
                  {isDE ? 'Kontoinhaber' : 'Account Holder'}
                </span>
                <span className="text-charcoal font-medium">BlattWerk e.V.</span>
              </div>
              <div className="flex justify-between items-center border-b border-sand/50 pb-3">
                <span className="text-sage text-sm">IBAN</span>
                <span className="text-charcoal font-medium font-mono text-sm">
                  DE00 0000 0000 0000 0000 00
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-sand/50 pb-3">
                <span className="text-sage text-sm">BIC</span>
                <span className="text-charcoal font-medium font-mono text-sm">
                  XXXXXXXX
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-sand/50 pb-3">
                <span className="text-sage text-sm">
                  {isDE ? 'Bank' : 'Bank'}
                </span>
                <span className="text-charcoal font-medium">
                  {isDE ? 'wird noch bekanntgegeben' : 'to be announced'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sage text-sm">
                  {isDE ? 'Verwendungszweck' : 'Reference'}
                </span>
                <span className="text-charcoal font-medium">
                  {isDE ? 'Spende BlattWerk' : 'Donation BlattWerk'}
                </span>
              </div>
            </div>
          </div>

          <p className="text-sm text-sage text-center mt-6 max-w-lg mx-auto">
            {isDE
              ? 'Hinweis: Die Bankverbindung wird nach der Vereinsgründung und Kontoeröffnung hier aktualisiert.'
              : 'Note: Bank details will be updated here after the association is founded and the account is opened.'}
          </p>
        </div>
      </section>

      {/* What donations are used for */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-deep-forest text-center mb-10">
            {isDE ? 'Wofür wir Spenden verwenden' : 'What We Use Donations For'}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {usages.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-warm-white rounded-xl p-6 shadow-sm border border-sand/50 text-center"
              >
                <Icon className="w-8 h-8 text-amber mx-auto mb-4" />
                <h3 className="font-heading text-lg text-deep-forest mb-2">
                  {title}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-sand/30 rounded-lg p-6">
            <p className="text-sm text-sage">
              {isDE
                ? 'Transparenz ist uns wichtig. Über die Verwendung der Spendengelder legen wir auf der jährlichen Mitgliederversammlung Rechenschaft ab. Als nicht-gewinnorientierter Verein fließen alle Mittel direkt in den Vereinszweck.'
                : 'Transparency is important to us. We account for the use of donations at the annual general assembly. As a non-profit association, all funds go directly to the association\'s purpose.'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
