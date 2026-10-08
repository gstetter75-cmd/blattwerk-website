'use client';

import { useMemo } from 'react';
import { ArrowUpRight, Clock, MapPin } from 'lucide-react';
import { formatEventDate } from '@/data/events';
import { externalEvents, getUpcomingExternalEvents, type ExternalEvent } from '@/data/external-events';

interface Props {
  readonly isDE: boolean;
  /** Current date (YYYY-MM-DD), shared with the club events above */
  readonly today: string;
}

function ExternalEventItem({ event, isDE, isFirst }: { readonly event: ExternalEvent; readonly isDE: boolean; readonly isFirst: boolean }) {
  const { month, day, year, full } = formatEventDate(event.date, isDE);
  const title = isDE ? event.title_de : event.title_en;

  return (
    <li className={`flex gap-5 sm:gap-8 py-6 ${isFirst ? '' : 'border-t border-[var(--border)]'}`}>
      <time dateTime={event.date} className="w-14 sm:w-16 shrink-0 flex flex-col items-center gap-0.5 pt-1">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">{month}</span>
        <span className="font-heading font-bold leading-none text-2xl">{day}</span>
        <span className="font-mono text-[11px] mt-1 text-ink-faint">{year}</span>
      </time>

      <div className="flex-1 min-w-0">
        <h3 className="font-heading font-bold text-lg leading-snug mb-1">{title}</h3>
        <p className="text-sm text-ink-muted mb-3">{event.organizer}</p>
        <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-ink-muted mb-2">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span className="sr-only">{full}, </span>
            {event.time ? `${event.time} ${isDE ? 'Uhr' : ''}`.trim() : full}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            {isDE ? event.place_de : event.place_en}
          </span>
        </div>
        <p className="text-sm text-ink-faint mb-3">{isDE ? event.audience_de : event.audience_en}</p>
        <a
          href={event.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
        >
          {isDE ? 'Details und Anmeldung beim Veranstalter' : 'Details and registration with the organiser'}
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          <span className="sr-only">{isDE ? '(öffnet in neuem Tab)' : '(opens in a new tab)'}</span>
        </a>
      </div>
    </li>
  );
}

/** Pointers to prevention and education events by other organisations in the region. */
export function ExternalEventsSection({ isDE, today }: Props) {
  const upcoming = useMemo(() => getUpcomingExternalEvents(externalEvents, today), [today]);
  if (upcoming.length === 0) return null;

  return (
    <section className="py-16 lg:py-20 border-t border-[var(--border)] bg-bg-surface">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] font-body mb-4 text-gold-theme">
          {isDE ? 'In der Region' : 'In the region'}
        </p>
        <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
          {isDE ? 'Termine anderer Veranstalter' : 'Events by other organisers'}
        </h2>
        <p className="text-ink-muted max-w-2xl mb-8">
          {isDE
            ? 'Angebote von Fachstellen für Suchtprävention und anderen Trägern, die wir für hilfreich halten. Veranstalter ist jeweils die genannte Stelle, nicht BlattWerk e.V.'
            : 'Offers by addiction prevention services and other organisations that we find helpful. Each event is run by the organisation named, not by BlattWerk e.V.'}
        </p>
        <ol>
          {upcoming.map((event, i) => (
            <ExternalEventItem key={`${event.date}-${event.url}`} event={event} isDE={isDE} isFirst={i === 0} />
          ))}
        </ol>
      </div>
    </section>
  );
}
