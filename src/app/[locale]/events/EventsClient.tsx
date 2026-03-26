'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin, Users } from 'lucide-react';

interface Props {
  isDE: boolean;
}

const sectionBorder = { borderTop: '1px solid rgba(255,255,255,0.06)' } as const;
const rowDivider = { borderTop: '1px solid rgba(255,255,255,0.06)' } as const;

function getMonthDay(dateStr: string, isDE: boolean) {
  const date = new Date(dateStr + 'T00:00:00');
  return {
    month: date.toLocaleDateString(isDE ? 'de-DE' : 'en-US', { month: 'short' }).toUpperCase(),
    day: date.getDate().toString().padStart(2, '0'),
    full: date.toLocaleDateString(isDE ? 'de-DE' : 'en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  };
}

export function EventsClient({ isDE }: Props) {
  const upcomingEvents = [
    {
      date: '2026-04-12',
      time: '18:00',
      title: isDE ? 'Mitgliederversammlung Q2' : 'Q2 General Assembly',
      description: isDE
        ? 'Ordentliche Mitgliederversammlung mit Bericht des Vorstands, Finanzbericht und Abstimmungen.'
        : 'Regular general assembly with board report, financial report and votes.',
      location: isDE ? 'Vereinsräume' : 'Club premises',
      type: isDE ? 'Versammlung' : 'Assembly',
    },
    {
      date: '2026-04-26',
      time: '15:00',
      title: isDE ? 'Safer-Use Workshop' : 'Safer Use Workshop',
      description: isDE
        ? 'Interaktiver Workshop zu risikominimierendem Konsum, Dosierung und Konsumformen. Offen für alle Mitglieder.'
        : 'Interactive workshop on risk-minimizing consumption, dosing and consumption methods. Open to all members.',
      location: isDE ? 'Vereinsräume' : 'Club premises',
      type: 'Workshop',
    },
    {
      date: '2026-05-10',
      time: '14:00',
      title: isDE ? 'Grow-Einführung für Einsteiger' : 'Growing Introduction for Beginners',
      description: isDE
        ? 'Grundlagen des Eigenanbaus: Erde, Licht, Wasser und die ersten Schritte mit deinen drei Pflanzen.'
        : 'Basics of home growing: soil, light, water and the first steps with your three plants.',
      location: isDE ? 'Vereinsräume' : 'Club premises',
      type: 'Workshop',
    },
  ];

  const pastEvents = [
    {
      date: '2026-02-15',
      title: isDE ? 'Gründungsversammlung' : 'Founding Assembly',
      description: isDE
        ? 'Offizielle Gründung des BlattWerk e.V. mit Wahl des Vorstands und Verabschiedung der Satzung.'
        : 'Official founding of BlattWerk e.V. with election of the board and adoption of the statutes.',
      type: isDE ? 'Versammlung' : 'Assembly',
    },
    {
      date: '2026-03-01',
      title: isDE ? 'Informationsabend: Das KCanG' : 'Information Evening: The KCanG',
      description: isDE
        ? 'Vortrag und Diskussion zur aktuellen Rechtslage rund um Cannabis in Deutschland.'
        : 'Presentation and discussion on the current legal situation around cannabis in Germany.',
      type: isDE ? 'Vortrag' : 'Lecture',
    },
    {
      date: '2026-03-15',
      title: isDE ? 'Anbaugenehmigung erteilt' : 'Cultivation License Granted',
      description: isDE
        ? 'BlattWerk e.V. hat die offizielle Anbaugenehmigung erhalten. Der gemeinschaftliche Anbau kann beginnen!'
        : 'BlattWerk e.V. has received the official cultivation license. Community growing can begin!',
      type: isDE ? 'Meilenstein' : 'Milestone',
    },
    {
      date: '2026-03-08',
      title: isDE ? 'Terpene-Tasting' : 'Terpene Tasting',
      description: isDE
        ? 'Sensorische Verkostung verschiedener Terpenprofile – Aromen erkennen und verstehen lernen.'
        : 'Sensory tasting of different terpene profiles – learning to recognize and understand aromas.',
      type: 'Workshop',
    },
  ];

  return (
    <>
      {/* ── Upcoming events ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-4"
              style={{ color: 'var(--gold)' }}
            >
              {isDE ? 'Kommende Veranstaltungen' : 'Upcoming Events'}
            </p>
            <h2
              className="font-heading italic font-bold"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--text)' }}
            >
              {isDE ? 'Termine' : 'Schedule'}
            </h2>
          </motion.div>

          <div>
            {upcomingEvents.map((event, i) => {
              const { month, day, full } = getMonthDay(event.date, isDE);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="flex gap-8 py-8"
                  style={i > 0 ? rowDivider : undefined}
                >
                  {/* Date column */}
                  <div className="w-16 shrink-0 flex flex-col items-center gap-0.5 pt-1">
                    <span
                      className="font-mono text-[10px] uppercase tracking-[0.2em]"
                      style={{ color: 'var(--gold)' }}
                    >
                      {month}
                    </span>
                    <span
                      className="font-heading italic font-bold leading-none"
                      style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: 'var(--text)' }}
                    >
                      {day}
                    </span>
                    <span
                      className="font-mono text-xs mt-1"
                      style={{ color: 'var(--text-faint)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content column */}
                  <div className="flex-1 min-w-0" style={{ borderLeft: '1px solid rgba(245,158,11,0.2)', paddingLeft: '2rem' }}>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3
                        className="font-heading italic font-bold text-xl leading-snug"
                        style={{ color: 'var(--text)' }}
                      >
                        {event.title}
                      </h3>
                      <span
                        className="text-xs font-bold uppercase tracking-[0.15em] font-body shrink-0 mt-1"
                        style={{ color: 'var(--gold)' }}
                      >
                        {event.type}
                      </span>
                    </div>
                    <p
                      className="text-sm leading-relaxed font-body mb-4"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {event.description}
                    </p>
                    <div
                      className="flex flex-wrap gap-5 text-xs font-mono"
                      style={{ color: 'var(--text-faint)' }}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {event.time}{isDE ? ' Uhr' : ''}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {event.location}
                      </span>
                      <span style={{ color: 'var(--text-faint)', opacity: 0.6 }}>
                        {full}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Past events archive ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={sectionBorder}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-4"
              style={{ color: 'var(--text-faint)' }}
            >
              {isDE ? 'Archiv' : 'Archive'}
            </p>
            <h2
              className="font-heading italic font-bold"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--text)' }}
            >
              {isDE ? 'Vergangene Termine' : 'Past Events'}
            </h2>
          </motion.div>

          <div style={{ opacity: 0.6 }}>
            {pastEvents.map((event, i) => {
              const { month, day } = getMonthDay(event.date, isDE);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="flex gap-6 py-6"
                  style={i > 0 ? rowDivider : undefined}
                >
                  {/* Date column */}
                  <div className="w-12 shrink-0 flex flex-col items-center gap-0.5 pt-0.5">
                    <span
                      className="font-mono text-[9px] uppercase tracking-[0.15em]"
                      style={{ color: 'var(--text-faint)' }}
                    >
                      {month}
                    </span>
                    <span
                      className="font-heading italic font-bold text-xl leading-none"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {day}
                    </span>
                  </div>

                  {/* Content column */}
                  <div
                    className="flex-1 min-w-0"
                    style={{ borderLeft: '1px solid rgba(255,255,255,0.06)', paddingLeft: '1.5rem' }}
                  >
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3
                        className="font-heading italic text-base leading-snug"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {event.title}
                      </h3>
                      <span
                        className="text-xs font-mono shrink-0"
                        style={{ color: 'var(--text-faint)' }}
                      >
                        {event.type}
                      </span>
                    </div>
                    <p
                      className="text-sm leading-relaxed font-body"
                      style={{ color: 'var(--text-faint)' }}
                    >
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Members only note ───────────────────────────────────────────── */}
      <section className="py-10" style={sectionBorder}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-start gap-4 py-6">
            <Users
              className="w-4 h-4 shrink-0 mt-0.5"
              style={{ color: 'var(--text-faint)' }}
            />
            <p
              className="text-xs leading-relaxed font-body"
              style={{ color: 'var(--text-faint)' }}
            >
              {isDE
                ? 'Die meisten Veranstaltungen sind nur für Mitglieder zugänglich. Informationsabende sind teilweise auch für Nicht-Mitglieder geöffnet.'
                : 'Most events are only accessible to members. Information evenings are partially open to non-members.'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
