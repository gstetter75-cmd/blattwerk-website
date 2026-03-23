import { setRequestLocale } from 'next-intl/server';
import { Mail, MapPin, Clock, Phone } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { ContactForm } from '@/components/contact/ContactForm';

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isDE = locale === 'de';

  const openingHours = [
    { day: isDE ? 'Montag – Freitag' : 'Monday – Friday', time: isDE ? 'wird noch bekanntgegeben' : 'to be announced' },
    { day: isDE ? 'Samstag' : 'Saturday',                 time: isDE ? 'wird noch bekanntgegeben' : 'to be announced' },
    { day: isDE ? 'Sonntag & Feiertage' : 'Sunday & Holidays', time: isDE ? 'Geschlossen' : 'Closed' },
  ];

  const glassCard = 'rounded-xl border border-[var(--border)] p-5';
  const glassStyle = { background: 'var(--glass)', backdropFilter: 'blur(12px)' } as const;

  return (
    <>
      {/* Hidden form for Netlify Forms detection during build */}
      <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input name="form-name" />
        <input name="bot-field" />
        <input name="name" />
        <input name="email" />
        <input name="subject" />
        <textarea name="message" />
        <input name="privacy" type="checkbox" />
      </form>

      <PageHero
        title={isDE ? 'Kontakt' : 'Contact'}
        subtitle={isDE ? 'Du hast Fragen? Schreib uns eine Nachricht oder komm vorbei.' : 'Have questions? Send us a message or visit us.'}
      />

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div>
              <h2 className="font-heading italic text-2xl text-ink mb-6">
                {isDE ? 'Nachricht senden' : 'Send Message'}
              </h2>
              <ContactForm isDE={isDE} />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading italic text-2xl text-ink mb-6">
                  {isDE ? 'Kontaktdaten' : 'Contact Details'}
                </h2>
                <div className="space-y-3">
                  {[
                    { icon: Mail,   label: 'E-Mail',                     value: 'info@blattwerk.dev' },
                    { icon: Phone,  label: isDE ? 'Telefon' : 'Phone',   value: isDE ? 'wird noch bekanntgegeben' : 'to be announced' },
                    { icon: MapPin, label: isDE ? 'Adresse' : 'Address', value: `BlattWerk e.V.\nWetzellplatz 2\n31137 Hildesheim\n${isDE ? 'Deutschland' : 'Germany'}` },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className={`flex items-start gap-4 ${glassCard}`} style={glassStyle}>
                      <Icon className="w-4 h-4 text-gold-theme shrink-0 mt-0.5 opacity-80" />
                      <div>
                        <h3 className="text-xs font-semibold text-ink-muted uppercase tracking-wider mb-1">{label}</h3>
                        <p className="text-ink-muted text-sm whitespace-pre-line">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Opening Hours */}
              <div>
                <h3 className="font-heading italic text-xl text-ink mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gold-theme opacity-80" />
                  {isDE ? 'Öffnungszeiten' : 'Opening Hours'}
                </h3>
                <div className={`${glassCard} divide-y divide-[var(--border)]`} style={glassStyle}>
                  {openingHours.map(({ day, time }, i) => (
                    <div key={i} className="flex justify-between py-3 first:pt-0 last:pb-0">
                      <span className="text-ink-muted text-sm">{day}</span>
                      <span className="text-ink-faint text-sm">{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div>
                <h3 className="font-heading italic text-xl text-ink mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold-theme opacity-80" />
                  {isDE ? 'Standort' : 'Location'}
                </h3>
                <div className="aspect-[4/3] rounded-xl border border-[var(--border)] flex items-center justify-center bg-bg-elevated">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-ink-faint mx-auto mb-2" />
                    <p className="text-sm text-ink-faint">
                      {isDE ? 'Karte wird nach Vereinsgründung eingebettet' : 'Map will be embedded after association founding'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
