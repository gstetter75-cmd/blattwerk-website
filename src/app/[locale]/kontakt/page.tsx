import { setRequestLocale } from 'next-intl/server';
import {
  Mail,
  MapPin,
  Clock,
  Send,
  Phone,
} from 'lucide-react';

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isDE = locale === 'de';

  const openingHours = [
    {
      day: isDE ? 'Montag – Freitag' : 'Monday – Friday',
      time: isDE ? 'wird noch bekanntgegeben' : 'to be announced',
    },
    {
      day: isDE ? 'Samstag' : 'Saturday',
      time: isDE ? 'wird noch bekanntgegeben' : 'to be announced',
    },
    {
      day: isDE ? 'Sonntag & Feiertage' : 'Sunday & Holidays',
      time: isDE ? 'Geschlossen' : 'Closed',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-deep-forest text-warm-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl mb-4">
            {isDE ? 'Kontakt' : 'Contact'}
          </h1>
          <p className="text-warm-white/70 text-lg max-w-2xl mx-auto">
            {isDE
              ? 'Du hast Fragen? Schreib uns eine Nachricht oder komm vorbei.'
              : 'Have questions? Send us a message or visit us.'}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-2xl text-deep-forest mb-6">
                {isDE ? 'Nachricht senden' : 'Send Message'}
              </h2>
              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-charcoal mb-1.5"
                  >
                    {isDE ? 'Name' : 'Name'} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-warm-white border border-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent text-charcoal placeholder-sage/50"
                    placeholder={isDE ? 'Dein Name' : 'Your name'}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-charcoal mb-1.5"
                  >
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-warm-white border border-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent text-charcoal placeholder-sage/50"
                    placeholder={isDE ? 'deine@email.de' : 'your@email.com'}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-charcoal mb-1.5"
                  >
                    {isDE ? 'Betreff' : 'Subject'} *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-warm-white border border-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent text-charcoal placeholder-sage/50"
                    placeholder={
                      isDE ? 'Worum geht es?' : 'What is it about?'
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-charcoal mb-1.5"
                  >
                    {isDE ? 'Nachricht' : 'Message'} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-warm-white border border-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent text-charcoal placeholder-sage/50 resize-y"
                    placeholder={
                      isDE ? 'Deine Nachricht...' : 'Your message...'
                    }
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="mt-1 w-4 h-4 rounded border-sand text-amber focus:ring-amber"
                  />
                  <label
                    htmlFor="privacy"
                    className="text-sm text-charcoal/70"
                  >
                    {isDE
                      ? 'Ich habe die Datenschutzerklärung gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage einverstanden. *'
                      : 'I have read the privacy policy and agree to the processing of my data to handle my inquiry. *'}
                  </label>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-deep-forest text-warm-white rounded-lg hover:bg-deep-forest/90 transition-colors font-medium w-full sm:w-auto"
                >
                  <Send className="w-4 h-4" />
                  {isDE ? 'Nachricht senden' : 'Send Message'}
                </button>

                <p className="text-xs text-sage">
                  {isDE
                    ? '* Pflichtfelder. Das Formular ist derzeit noch nicht aktiv. Bitte nutze alternativ die E-Mail-Adresse.'
                    : '* Required fields. The form is not yet active. Please use the email address as an alternative.'}
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Email */}
              <div>
                <h2 className="font-heading text-2xl text-deep-forest mb-6">
                  {isDE ? 'Kontaktdaten' : 'Contact Details'}
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-warm-white p-5 rounded-xl border border-sand/50 shadow-sm">
                    <Mail className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-charcoal mb-1">
                        E-Mail
                      </h3>
                      <p className="text-charcoal/70">
                        kontakt@blattwerk-ev.de
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-warm-white p-5 rounded-xl border border-sand/50 shadow-sm">
                    <Phone className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-charcoal mb-1">
                        {isDE ? 'Telefon' : 'Phone'}
                      </h3>
                      <p className="text-charcoal/70">
                        {isDE
                          ? 'wird noch bekanntgegeben'
                          : 'to be announced'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-warm-white p-5 rounded-xl border border-sand/50 shadow-sm">
                    <MapPin className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-charcoal mb-1">
                        {isDE ? 'Adresse' : 'Address'}
                      </h3>
                      <p className="text-charcoal/70">
                        BlattWerk e.V.
                        <br />
                        {isDE
                          ? 'Musterstraße 1'
                          : 'Sample Street 1'}
                        <br />
                        12345{' '}
                        {isDE ? 'Musterstadt' : 'Sample City'}
                        <br />
                        {isDE ? 'Deutschland' : 'Germany'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div>
                <h3 className="font-heading text-xl text-deep-forest mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber" />
                  {isDE ? 'Öffnungszeiten' : 'Opening Hours'}
                </h3>
                <div className="bg-warm-white rounded-xl border border-sand/50 shadow-sm overflow-hidden">
                  {openingHours.map(({ day, time }, i) => (
                    <div
                      key={i}
                      className={`flex justify-between px-5 py-3 ${
                        i < openingHours.length - 1
                          ? 'border-b border-sand/50'
                          : ''
                      }`}
                    >
                      <span className="text-charcoal/80 text-sm">{day}</span>
                      <span className="text-charcoal/60 text-sm">{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div>
                <h3 className="font-heading text-xl text-deep-forest mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber" />
                  {isDE ? 'Standort' : 'Location'}
                </h3>
                <div className="aspect-[4/3] bg-sand/30 rounded-xl border border-sand/50 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-sage/40 mx-auto mb-2" />
                    <p className="text-sm text-sage/60">
                      {isDE
                        ? 'Karte wird nach Vereinsgründung eingebettet'
                        : 'Map will be embedded after association founding'}
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
