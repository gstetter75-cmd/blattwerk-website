'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MapPinned } from 'lucide-react';
import { ContactForm } from '@/components/contact/ContactForm';

interface Props {
  isDE: boolean;
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6 },
} as const;

const sectionBorder = { borderTop: '1px solid rgba(255,255,255,0.06)' } as const;
const rowDivider = { borderTop: '1px solid rgba(255,255,255,0.06)' } as const;

function GoogleMapsEmbed({ isDE }: { isDE: boolean }) {
  const [consented, setConsented] = useState(false);

  if (!consented) {
    return (
      <div
        className="w-full mt-4 rounded-xl overflow-hidden border border-[var(--border)] flex flex-col items-center justify-center gap-4 p-8"
        style={{ aspectRatio: '16/7', background: 'var(--bg-elevated)' }}
      >
        <MapPinned className="w-8 h-8 text-ink-faint" />
        <p className="text-sm text-ink-muted text-center max-w-md">
          {isDE
            ? 'Beim Laden der Karte werden Daten an Google LLC übermittelt. Mehr dazu in unserer Datenschutzerklärung.'
            : 'Loading the map transmits data to Google LLC. See our privacy policy for details.'}
        </p>
        <button
          type="button"
          onClick={() => setConsented(true)}
          className="px-5 py-2.5 text-sm font-semibold text-void rounded-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #22c55e, #86efac)',
            boxShadow: '0 0 12px rgba(34,197,94,0.2)',
          }}
        >
          {isDE ? 'Karte laden' : 'Load map'}
        </button>
      </div>
    );
  }

  return (
    <div className="w-full mt-4 rounded-xl overflow-hidden border border-[var(--border)]" style={{ aspectRatio: '16/7' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.5!2d9.9515!3d52.1535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sWetzellplatz+2%2C+31137+Hildesheim!5e0!3m2!1sde!2sde!4v1"
        width="100%"
        height="100%"
        style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) contrast(0.9)' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={isDE ? 'Standort BlattWerk e.V.' : 'Location BlattWerk e.V.'}
      />
    </div>
  );
}

export function KontaktInfoClient({ isDE }: Props) {
  const openingHours = [
    {
      day: isDE ? 'Montag – Freitag' : 'Monday – Friday',
      time: isDE ? 'nach Vereinbarung' : 'by appointment',
    },
    {
      day: isDE ? 'Samstag' : 'Saturday',
      time: isDE ? 'nach Vereinbarung' : 'by appointment',
    },
    {
      day: isDE ? 'Sonntag & Feiertage' : 'Sunday & Holidays',
      time: isDE ? 'Geschlossen' : 'Closed',
    },
  ];

  const contactItems = [
    {
      icon: Mail,
      label: 'E-Mail',
      value: 'info@blattwerk.dev',
    },
    {
      icon: Phone,
      label: isDE ? 'Telefon' : 'Phone',
      value: '+49 15233539841',
    },
    {
      icon: MapPin,
      label: isDE ? 'Adresse' : 'Address',
      value: `BlattWerk e.V.\nWetzellplatz 2\n31137 Hildesheim\n${isDE ? 'Deutschland' : 'Germany'}`,
    },
  ];

  return (
    <>
      {/* ── Form + Info two-column ─────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left: Contact Form */}
            <motion.div {...fadeUp}>
              <p
                className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-4"
                style={{ color: 'var(--accent)' }}
              >
                {isDE ? 'Nachricht senden' : 'Send Message'}
              </p>
              <h2
                className="font-heading italic font-bold mb-10"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text)' }}
              >
                {isDE ? 'Schreib uns' : 'Write to us'}
              </h2>
              <ContactForm isDE={isDE} />
            </motion.div>

            {/* Right: Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p
                className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-4"
                style={{ color: 'var(--accent)' }}
              >
                {isDE ? 'Kontaktdaten' : 'Contact Details'}
              </p>
              <h2
                className="font-heading italic font-bold mb-10"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text)' }}
              >
                {isDE ? 'Wo wir sind' : 'Where we are'}
              </h2>

              {/* Contact items */}
              <div className="mb-12">
                {contactItems.map(({ icon: Icon, label, value }, i) => (
                  <div
                    key={label}
                    className="flex items-start gap-5 py-5"
                    style={i > 0 ? rowDivider : undefined}
                  >
                    <Icon
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: 'var(--accent)' }}
                    />
                    <div>
                      <p
                        className="text-xs font-bold uppercase tracking-[0.2em] font-body mb-1.5"
                        style={{ color: 'var(--text-faint)' }}
                      >
                        {label}
                      </p>
                      <p
                        className="text-sm leading-relaxed font-body whitespace-pre-line"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Opening hours */}
              <div style={rowDivider} className="pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-4 h-4" style={{ color: 'var(--gold)' }} />
                  <p
                    className="text-xs font-bold uppercase tracking-[0.25em] font-body"
                    style={{ color: 'var(--gold)' }}
                  >
                    {isDE ? 'Öffnungszeiten' : 'Opening Hours'}
                  </p>
                </div>
                <div>
                  {openingHours.map(({ day, time }, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-4"
                      style={i > 0 ? rowDivider : undefined}
                    >
                      <span
                        className="text-sm font-body"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {day}
                      </span>
                      <span
                        className="text-sm font-mono"
                        style={{ color: 'var(--text-faint)' }}
                      >
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Location section ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={sectionBorder}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-4"
              style={{ color: 'var(--accent)' }}
            >
              {isDE ? 'Standort' : 'Location'}
            </p>
            <h2
              className="font-heading italic font-bold"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--text)' }}
            >
              {isDE ? 'Wetzellplatz 2' : 'Wetzellplatz 2'}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="flex items-center gap-6 py-8"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              <MapPin className="w-5 h-5 shrink-0" style={{ color: 'var(--text-faint)' }} />
              <div>
                <p
                  className="text-base font-body"
                  style={{ color: 'var(--text-muted)' }}
                >
                  BlattWerk e.V. — Wetzellplatz 2, 31137 Hildesheim
                </p>
                <p
                  className="text-xs font-mono mt-1"
                  style={{ color: 'var(--text-faint)' }}
                >
                  {isDE
                    ? 'Besuche uns am Wetzellplatz in Hildesheim'
                    : 'Visit us at Wetzellplatz in Hildesheim'}
                </p>
              </div>
            </div>

            {/* Map embed — consent-gated for GDPR */}
            <GoogleMapsEmbed isDE={isDE} />
          </motion.div>
        </div>
      </section>
    </>
  );
}
