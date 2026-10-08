'use client';

import { useMemo } from 'react';
import { ArrowRight, CalendarClock, Clock, Lock, MapPin, Sprout, Users } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import {
  formatEventDate,
  getInternalEventNote,
  groupEventsByYear,
  isInternalEvent,
  partitionByAudience,
  splitEventsByDate,
  type BlattWerkEvent,
} from '@/data/events';
import { useToday } from '@/hooks/useToday';
import { ExternalEventsSection } from './ExternalEventsSection';

interface Props {
  readonly isDE: boolean;
  /** All events, any order */
  readonly events: readonly BlattWerkEvent[];
  /** Date (YYYY-MM-DD) the static HTML was generated with */
  readonly buildDate: string;
}

interface EventItemProps {
  readonly event: BlattWerkEvent;
  readonly isDE: boolean;
  readonly isFirst: boolean;
}

function SectionHeading({
  eyebrow,
  title,
  eyebrowClassName,
}: {
  readonly eyebrow: string;
  readonly title: string;
  readonly eyebrowClassName: string;
}) {
  return (
    <div className="mb-12 lg:mb-16 animate-fade-up">
      <p className={`text-xs font-bold uppercase tracking-[0.25em] font-body mb-4 ${eyebrowClassName}`}>
        {eyebrow}
      </p>
      <h2 className="font-heading font-bold" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
        {title}
      </h2>
    </div>
  );
}

function EventTypeLabel({
  event,
  isDE,
  className,
  colorClassName,
}: {
  readonly event: BlattWerkEvent;
  readonly isDE: boolean;
  readonly className: string;
  /** Text color for regular events; milestones always use the accent color */
  readonly colorClassName: string;
}) {
  const isMilestone = event.kind === 'milestone';
  return (
    <span className={`inline-flex items-center gap-1.5 shrink-0 ${isMilestone ? 'text-accent' : colorClassName} ${className}`}>
      {isMilestone && <Sprout className="w-3.5 h-3.5" aria-hidden="true" />}
      {isDE ? event.type_de : event.type_en}
    </span>
  );
}

/* ─── Upcoming ─── */

function PublicEventItem({ event, isDE, isFirst, index }: EventItemProps & { readonly index: number }) {
  const title = isDE ? event.title_de : event.title_en;
  const description = isDE ? event.description_de : event.description_en;
  const location = isDE ? (event.location_de ?? 'Vereinsräume') : (event.location_en ?? 'Club premises');
  const { month, day, year, full } = formatEventDate(event.date, isDE);

  return (
    <li
      className={`flex gap-5 sm:gap-8 py-8 animate-fade-up stagger-${Math.min(index + 1, 4)} ${isFirst ? '' : 'border-t border-[var(--border)]'}`}
    >
      <time dateTime={event.date} className="w-14 sm:w-16 shrink-0 flex flex-col items-center gap-0.5 pt-1">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold-theme">{month}</span>
        <span className="font-heading font-bold leading-none" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}>
          {day}
        </span>
        <span className="font-mono text-[11px] mt-1 text-ink-faint">{year}</span>
      </time>

      <div className="flex-1 min-w-0 border-l border-gold-theme/20 pl-5 sm:pl-8">
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1 mb-2">
          <h3 className="font-heading font-bold text-xl leading-snug">{title}</h3>
          <EventTypeLabel
            event={event}
            isDE={isDE}
            className="text-xs font-bold uppercase tracking-[0.15em] font-body mt-1"
            colorClassName="text-gold-theme"
          />
        </div>
        <p className="text-sm leading-relaxed font-body mb-4 text-ink-muted">{description}</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-mono text-ink-faint">
          {event.time && (
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              {event.time}
              {isDE ? ' Uhr' : ''}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            {location}
          </span>
          <span>{full}</span>
        </div>
      </div>
    </li>
  );
}

function NoPublicEventsNotice({ isDE }: { readonly isDE: boolean }) {
  return (
    <div className="animate-fade-up stagger-1 rounded-xl border border-[var(--border)] bg-bg-surface p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5">
      <span
        className="w-11 h-11 shrink-0 rounded-full bg-accent/10 text-accent flex items-center justify-center"
        aria-hidden="true"
      >
        <CalendarClock className="w-5 h-5" />
      </span>
      <div className="flex-1 min-w-0">
        <p className="font-heading font-bold text-xl leading-snug mb-1">
          {isDE ? 'Neue Termine folgen.' : 'New dates will follow.'}
        </p>
        <p className="text-sm leading-relaxed font-body text-ink-muted">
          {isDE
            ? 'Fragen? Komm in unsere Sprechstunde (mittwochs 18–20 Uhr, Wetzellplatz 2) oder schreib uns.'
            : 'Questions? Visit our office hour (Wednesdays 6–8 pm, Wetzellplatz 2) or write to us.'}
        </p>
      </div>
      <Link
        href="/kontakt"
        className="self-start sm:self-center inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-md border border-[var(--border)] bg-bg-elevated text-accent hover:border-accent transition-colors"
      >
        {isDE ? 'Kontakt aufnehmen' : 'Contact us'}
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </Link>
    </div>
  );
}

function InternalEventsList({ events, isDE }: { readonly events: readonly BlattWerkEvent[]; readonly isDE: boolean }) {
  return (
    <div className="mt-10 animate-fade-up stagger-2">
      <div className="mb-3">
        {/* Inner span: the global h1–h6 rule would override a font utility on the heading itself */}
        <h3 className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-ink-muted">
          <Lock className="w-3.5 h-3.5" aria-hidden="true" />
          <span className="font-body">{isDE ? 'Interne Termine' : 'Internal dates'}</span>
        </h3>
        <p className="mt-1 text-xs font-body text-ink-faint">
          {isDE
            ? 'Vorstandssitzungen und organisatorische Termine — nicht öffentlich.'
            : 'Board meetings and organisational appointments — not public.'}
        </p>
      </div>
      <ul className="rounded-xl border border-[var(--border)] bg-bg-surface divide-y divide-[var(--border)]">
        {events.map((event) => {
          const location = isDE ? event.location_de : event.location_en;
          const note = getInternalEventNote(event, isDE);
          return (
            <li
              key={`${event.date}-${event.title_de}`}
              className="flex flex-wrap items-baseline gap-x-4 gap-y-1 px-4 sm:px-5 py-3"
            >
              <time dateTime={event.date} className="w-full sm:w-36 shrink-0 font-mono text-xs text-ink-muted">
                {formatEventDate(event.date, isDE).compact}
              </time>
              <span className="flex-1 min-w-[7rem] text-sm font-body text-ink">
                {isDE ? event.title_de : event.title_en}
              </span>
              <span className="inline-flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-ink-faint">
                {event.time && (
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    {event.time}
                    {isDE ? ' Uhr' : ''}
                  </span>
                )}
                {location && (
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    {location}
                  </span>
                )}
              </span>
              {note && <p className="w-full sm:pl-40 text-xs leading-relaxed font-body text-ink-faint">{note}</p>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ─── Archive ─── */

function ArchiveEventItem({ event, isDE, isFirst }: EventItemProps) {
  const isMilestone = event.kind === 'milestone';
  const { month, day, year } = formatEventDate(event.date, isDE);

  return (
    <li className={`flex gap-5 sm:gap-6 py-6 ${isFirst ? '' : 'border-t border-[var(--border)]'}`}>
      <time dateTime={event.date} className="w-12 shrink-0 flex flex-col items-center gap-0.5 pt-0.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-faint">{month}</span>
        <span className="font-heading font-bold text-xl leading-none text-ink-muted">{day}</span>
        <span className="sr-only">{year}</span>
      </time>

      <div className="flex-1 min-w-0 border-l border-[var(--border)] pl-5 sm:pl-6">
        <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1 mb-1">
          <h4 className={`font-heading text-base leading-snug ${isMilestone ? 'font-semibold text-ink' : 'text-ink-muted'}`}>
            {isDE ? event.title_de : event.title_en}
          </h4>
          <EventTypeLabel event={event} isDE={isDE} className="text-xs font-mono" colorClassName="text-ink-faint" />
        </div>
        <p className="text-sm leading-relaxed font-body text-ink-faint">
          {isDE ? event.description_de : event.description_en}
        </p>
      </div>
    </li>
  );
}

function ArchiveInternalItem({ event, isDE, isFirst }: EventItemProps) {
  const { month, day, year } = formatEventDate(event.date, isDE);
  const location = isDE ? event.location_de : event.location_en;
  const note = getInternalEventNote(event, isDE);

  return (
    <li className={`flex items-center gap-5 sm:gap-6 py-2.5 ${isFirst ? '' : 'border-t border-[var(--border)]'}`}>
      <time
        dateTime={event.date}
        className="w-12 shrink-0 text-center font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint"
      >
        {isDE ? `${day} ${month}` : `${month} ${day}`}
        <span className="sr-only"> {year}</span>
      </time>
      <div className="flex-1 min-w-0 border-l border-[var(--border)] pl-5 sm:pl-6 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
        <p className="text-sm font-body text-ink-muted">
          {isDE ? event.title_de : event.title_en}
          {location && <span className="hidden sm:inline text-ink-faint"> · {location}</span>}
        </p>
        {/* Icon-only on narrow screens so the row stays on one line */}
        <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-[0.15em] text-ink-faint">
          <Lock className="w-3 h-3 shrink-0" aria-hidden="true" />
          <span className="sr-only sm:hidden">{isDE ? 'intern' : 'internal'}</span>
          <span className="hidden sm:inline">{isDE ? 'intern' : 'internal'}</span>
        </span>
        {note && <p className="w-full text-xs leading-relaxed font-body text-ink-faint">{note}</p>}
      </div>
    </li>
  );
}

export function EventsClient({ isDE, events, buildDate }: Props) {
  const today = useToday(buildDate);
  const { upcoming, past } = useMemo(() => splitEventsByDate(events, today), [events, today]);
  const { publicEvents, internalEvents } = useMemo(() => partitionByAudience(upcoming), [upcoming]);
  const archiveYears = useMemo(() => groupEventsByYear(past), [past]);

  return (
    <>
      {/* -- Upcoming events -- */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow={isDE ? 'Kommende Veranstaltungen' : 'Upcoming Events'}
            title={isDE ? 'Termine' : 'Schedule'}
            eyebrowClassName="text-gold-theme"
          />

          {publicEvents.length > 0 ? (
            <ol>
              {publicEvents.map((event, i) => (
                <PublicEventItem
                  key={`${event.date}-${event.title_de}`}
                  event={event}
                  isDE={isDE}
                  isFirst={i === 0}
                  index={i}
                />
              ))}
            </ol>
          ) : (
            <NoPublicEventsNotice isDE={isDE} />
          )}

          {internalEvents.length > 0 && <InternalEventsList events={internalEvents} isDE={isDE} />}
        </div>
      </section>

      {/* -- Pointers to events by other organisations -- */}
      <ExternalEventsSection isDE={isDE} today={today} />

      {/* -- Past events archive, grouped by year -- */}
      {archiveYears.length > 0 && (
        <section className="py-20 lg:py-28 border-t border-[var(--border)]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <SectionHeading
              eyebrow={isDE ? 'Archiv' : 'Archive'}
              title={isDE ? 'Vergangene Termine' : 'Past Events'}
              eyebrowClassName="text-ink-faint"
            />

            <div className="space-y-12">
              {archiveYears.map((group) => (
                <div key={group.year} className="animate-fade-up">
                  <h3 className="flex items-center gap-4 mb-2 text-xs tracking-[0.25em] text-ink-faint">
                    <span className="font-mono">{group.year}</span>
                    <span className="flex-1 h-px bg-[var(--border)]" aria-hidden="true" />
                  </h3>
                  <ol>
                    {group.events.map((event, i) =>
                      isInternalEvent(event) ? (
                        <ArchiveInternalItem key={`${event.date}-${event.title_de}`} event={event} isDE={isDE} isFirst={i === 0} />
                      ) : (
                        <ArchiveEventItem key={`${event.date}-${event.title_de}`} event={event} isDE={isDE} isFirst={i === 0} />
                      ),
                    )}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* -- Members only note -- */}
      <section className="py-10 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-start gap-4 py-6">
            <Users className="w-4 h-4 shrink-0 mt-0.5 text-ink-faint" aria-hidden="true" />
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
