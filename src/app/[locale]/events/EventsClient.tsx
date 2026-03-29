'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin, Users } from 'lucide-react';
import type { BlattWerkEvent } from '@/data/events';

interface Props {
  readonly isDE: boolean;
  readonly upcomingEvents: readonly BlattWerkEvent[];
  readonly pastEvents: readonly BlattWerkEvent[];
}

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

export function EventsClient({ isDE, upcomingEvents, pastEvents }: Props) {
  return (
    <>
      {/* -- Upcoming events -- */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-4 text-gold-theme">
              {isDE ? 'Kommende Veranstaltungen' : 'Upcoming Events'}
            </p>
            <h2
              className="font-heading font-bold"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              {isDE ? 'Termine' : 'Schedule'}
            </h2>
          </motion.div>

          <div>
            {upcomingEvents.map((event, i) => {
              const title = isDE ? event.title_de : event.title_en;
              const description = isDE ? event.description_de : event.description_en;
              const location = isDE ? (event.location_de ?? 'Vereinsräume') : (event.location_en ?? 'Club premises');
              const type = isDE ? event.type_de : event.type_en;
              const { month, day, full } = getMonthDay(event.date, isDE);
              return (
                <motion.div
                  key={`${event.date}-${event.title_de}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={`flex gap-8 py-8 ${i > 0 ? 'border-t border-[var(--border)]' : ''}`}
                >
                  {/* Date column */}
                  <div className="w-16 shrink-0 flex flex-col items-center gap-0.5 pt-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-theme">
                      {month}
                    </span>
                    <span
                      className="font-heading font-bold leading-none"
                      style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}
                    >
                      {day}
                    </span>
                    <span className="font-mono text-xs mt-1 text-ink-faint">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content column */}
                  <div className="flex-1 min-w-0 border-l border-gold-theme/20 pl-8">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-heading font-bold text-xl leading-snug">
                        {title}
                      </h3>
                      <span className="text-xs font-bold uppercase tracking-[0.15em] font-body shrink-0 mt-1 text-gold-theme">
                        {type}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed font-body mb-4 text-ink-muted">
                      {description}
                    </p>
                    <div className="flex flex-wrap gap-5 text-xs font-mono text-ink-faint">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {event.time}{isDE ? ' Uhr' : ''}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {location}
                      </span>
                      <span className="text-ink-faint opacity-60">
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

      {/* -- Past events archive -- */}
      <section className="py-20 lg:py-28 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-4 text-ink-faint">
              {isDE ? 'Archiv' : 'Archive'}
            </p>
            <h2
              className="font-heading font-bold"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              {isDE ? 'Vergangene Termine' : 'Past Events'}
            </h2>
          </motion.div>

          <div style={{ opacity: 0.6 }}>
            {pastEvents.map((event, i) => {
              const title = isDE ? event.title_de : event.title_en;
              const description = isDE ? event.description_de : event.description_en;
              const type = isDE ? event.type_de : event.type_en;
              const { month, day } = getMonthDay(event.date, isDE);
              return (
                <motion.div
                  key={`${event.date}-${event.title_de}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className={`flex gap-6 py-6 ${i > 0 ? 'border-t border-[var(--border)]' : ''}`}
                >
                  {/* Date column */}
                  <div className="w-12 shrink-0 flex flex-col items-center gap-0.5 pt-0.5">
                    <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-ink-faint">
                      {month}
                    </span>
                    <span className="font-heading font-bold text-xl leading-none text-ink-muted">
                      {day}
                    </span>
                  </div>

                  {/* Content column */}
                  <div className="flex-1 min-w-0 border-l border-[var(--border)] pl-6">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="font-heading text-base leading-snug text-ink-muted">
                        {title}
                      </h3>
                      <span className="text-xs font-mono shrink-0 text-ink-faint">
                        {type}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed font-body text-ink-faint">
                      {description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Members only note -- */}
      <section className="py-10 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-start gap-4 py-6">
            <Users className="w-4 h-4 shrink-0 mt-0.5 text-ink-faint" />
            <p className="text-xs leading-relaxed font-body text-ink-faint">
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
