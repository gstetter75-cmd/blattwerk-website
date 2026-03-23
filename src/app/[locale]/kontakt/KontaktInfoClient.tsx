'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
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

export function KontaktInfoClient({ isDE }: Props) {
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
                    ? 'Karte wird nach Vereinsgründung eingebettet'
                    : 'Map will be embedded after association founding'}
                </p>
              </div>
            </div>

            {/* Map placeholder */}
            <div
              className="w-full mt-4"
              style={{
                aspectRatio: '16/5',
                border: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(255,255,255,0.02)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div className="text-center">
                <MapPin className="w-6 h-6 mx-auto mb-3" style={{ color: 'var(--text-faint)' }} />
                <p
                  className="text-xs font-mono uppercase tracking-[0.2em]"
                  style={{ color: 'var(--text-faint)' }}
                >
                  {isDE ? 'Kartenvorschau folgt' : 'Map preview coming soon'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
