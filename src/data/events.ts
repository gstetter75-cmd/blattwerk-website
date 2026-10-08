/**
 * Event data for BlattWerk e.V.
 * Used by both the EventsClient component and EventSchema (JSON-LD).
 *
 * Keep ONE chronological list (oldest first). Whether an event is upcoming
 * or past is derived from its date via `splitEventsByDate` — never maintain
 * separate "upcoming" and "past" lists by hand.
 *
 * IMPORTANT: Never list events related to cannabis consumption
 * (no tastings, no consumption events, nothing consumption-related).
 */

/**
 * - `public`: open club event (default)
 * - `internal`: board meetings and other non-public appointments, shown compactly
 * - `milestone`: club milestone such as a permit or license
 */
export type EventKind = 'public' | 'internal' | 'milestone';

export interface BlattWerkEvent {
  /** Calendar date in YYYY-MM-DD */
  readonly date: string;
  /** Local start time in HH:MM */
  readonly time?: string;
  readonly location_de?: string;
  readonly location_en?: string;
  readonly title_de: string;
  readonly title_en: string;
  readonly description_de: string;
  readonly description_en: string;
  readonly type_de: string;
  readonly type_en: string;
  /** Defaults to `public` when omitted */
  readonly kind?: EventKind;
}

const VORSTAND_DE = 'Interne Vorstandssitzung zur Planung und Abstimmung aktueller Vereinsthemen.';
const VORSTAND_EN = 'Internal board meeting for planning and coordination of current club topics.';

function boardMeeting(date: string): BlattWerkEvent {
  return {
    date,
    time: '15:00',
    location_de: 'Salzhemmendorf',
    location_en: 'Salzhemmendorf',
    title_de: 'Vorstandssitzung',
    title_en: 'Board Meeting',
    description_de: VORSTAND_DE,
    description_en: VORSTAND_EN,
    type_de: 'Versammlung',
    type_en: 'Assembly',
    kind: 'internal',
  };
}

/** All events in chronological order (oldest first). */
export const events: readonly BlattWerkEvent[] = [
  boardMeeting('2025-09-13'),
  boardMeeting('2025-10-11'),
  boardMeeting('2025-11-08'),
  boardMeeting('2025-12-13'),
  boardMeeting('2026-01-10'),
  boardMeeting('2026-02-14'),
  {
    date: '2026-03-01',
    title_de: 'Informationsabend: Das KCanG',
    title_en: 'Information Evening: The KCanG',
    description_de:
      'Vortrag und Diskussion zur aktuellen Rechtslage rund um Cannabis in Deutschland.',
    description_en:
      'Presentation and discussion on the current legal situation around cannabis in Germany.',
    type_de: 'Vortrag',
    type_en: 'Lecture',
  },
  boardMeeting('2026-03-14'),
  {
    date: '2026-03-18',
    title_de: 'Anbaulizenz erteilt',
    title_en: 'Cultivation License Granted',
    description_de:
      'BlattWerk e.V. hat die offizielle Anbaulizenz erhalten. Die Vorbereitungen für den Anbaustart beginnen.',
    description_en:
      'BlattWerk e.V. has received the official cultivation license. Preparations for the growing start begin.',
    type_de: 'Meilenstein',
    type_en: 'Milestone',
    kind: 'milestone',
  },
  boardMeeting('2026-04-11'),
  boardMeeting('2026-05-09'),
  {
    date: '2026-06-02',
    time: '14:00',
    title_de: 'Abstimmung Vermieter',
    title_en: 'Landlord Meeting',
    description_de: 'Abstimmungsgespräch mit dem Vermieter zu aktuellen organisatorischen Fragen rund um die Vereinsräumlichkeiten.',
    description_en: 'Coordination meeting with the landlord on current organisational matters regarding the club premises.',
    type_de: 'Termin',
    type_en: 'Appointment',
    kind: 'internal',
  },
  {
    date: '2026-06-11',
    time: '10:00',
    location_de: 'Station Berlin, Luckenwalder Str. 4–6, 10963 Berlin',
    location_en: 'Station Berlin, Luckenwalder Str. 4–6, 10963 Berlin',
    title_de: 'Mary Jane Berlin 2026',
    title_en: 'Mary Jane Berlin 2026',
    description_de:
      'BlattWerk e.V. hat die Mary Jane besucht — Europas führende Cannabis-Fachmesse. Wir waren als Verein vor Ort, um Kontakte zu knüpfen, uns zu informieren und mit anderen CSCs auszutauschen.',
    description_en:
      "BlattWerk e.V. visited Mary Jane — Europe's leading cannabis trade fair. We attended as a club to network, learn and exchange experiences with other CSCs.",
    type_de: 'Messe',
    type_en: 'Trade Fair',
  },
  boardMeeting('2026-06-13'),
  boardMeeting('2026-07-11'),
  boardMeeting('2026-08-08'),
  boardMeeting('2026-09-12'),
  boardMeeting('2026-10-10'),
  boardMeeting('2026-11-14'),
  boardMeeting('2026-12-12'),
];

/* ─── Helpers ─── */

/** Time zone the club's event dates refer to. */
export const EVENT_TIME_ZONE = 'Europe/Berlin';

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

function pad2(value: number): string {
  return String(value).padStart(2, '0');
}

function toLocalIsoDate(now: Date): string {
  return `${now.getFullYear()}-${pad2(now.getMonth() + 1)}-${pad2(now.getDate())}`;
}

/** Calendar date (YYYY-MM-DD) of `now` in the given IANA time zone. */
export function toIsoDateInTimeZone(now: Date, timeZone: string = EVENT_TIME_ZONE): string {
  try {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).formatToParts(now);
    const part = (type: Intl.DateTimeFormatPartTypes) =>
      parts.find((p) => p.type === type)?.value ?? '';
    const iso = `${part('year')}-${part('month')}-${part('day')}`;
    if (ISO_DATE.test(iso)) return iso;
  } catch {
    // Unsupported time zone in this runtime: use the device's local date below.
  }
  return toLocalIsoDate(now);
}

/** Today's date (YYYY-MM-DD) in the club's time zone. */
export function getTodayIsoDate(): string {
  return toIsoDateInTimeZone(new Date());
}

function compareChronologically(a: BlattWerkEvent, b: BlattWerkEvent): number {
  if (a.date !== b.date) return a.date < b.date ? -1 : 1;
  const timeA = a.time ?? '';
  const timeB = b.time ?? '';
  if (timeA === timeB) return 0;
  return timeA < timeB ? -1 : 1;
}

export interface EventSplit {
  /** Today and later, soonest first */
  readonly upcoming: readonly BlattWerkEvent[];
  /** Before today, most recent first */
  readonly past: readonly BlattWerkEvent[];
}

/**
 * Splits events relative to `today` (YYYY-MM-DD). An event stays upcoming
 * through the end of its day. Does not mutate the input.
 */
export function splitEventsByDate(list: readonly BlattWerkEvent[], today: string): EventSplit {
  const upcoming = list.filter((e) => e.date >= today).sort(compareChronologically);
  const past = list.filter((e) => e.date < today).sort((a, b) => compareChronologically(b, a));
  return { upcoming, past };
}

export function isInternalEvent(event: BlattWerkEvent): boolean {
  return event.kind === 'internal';
}

export function partitionByAudience(list: readonly BlattWerkEvent[]): {
  readonly publicEvents: readonly BlattWerkEvent[];
  readonly internalEvents: readonly BlattWerkEvent[];
} {
  return {
    publicEvents: list.filter((e) => !isInternalEvent(e)),
    internalEvents: list.filter(isInternalEvent),
  };
}

/**
 * Description shown for an internal appointment in the compact list. Board
 * meetings all share the same generic text, which the list intro already
 * covers, so they show none; other appointments keep their description.
 */
export function getInternalEventNote(event: BlattWerkEvent, isDE: boolean): string | undefined {
  const isGenericBoardMeeting = event.description_de === VORSTAND_DE;
  if (isGenericBoardMeeting) return undefined;
  return isDE ? event.description_de : event.description_en;
}

export interface EventYearGroup {
  readonly year: string;
  readonly events: readonly BlattWerkEvent[];
}

/** Groups an already sorted list into consecutive year buckets. */
export function groupEventsByYear(list: readonly BlattWerkEvent[]): readonly EventYearGroup[] {
  return list.reduce<readonly EventYearGroup[]>((groups, event) => {
    const year = event.date.slice(0, 4);
    const last = groups[groups.length - 1];
    if (last && last.year === year) {
      return [...groups.slice(0, -1), { year, events: [...last.events, event] }];
    }
    return [...groups, { year, events: [event] }];
  }, []);
}

/* ─── Deterministic date formatting (identical on server and client) ─── */

const MONTHS_SHORT = {
  de: ['JAN', 'FEB', 'MÄR', 'APR', 'MAI', 'JUN', 'JUL', 'AUG', 'SEP', 'OKT', 'NOV', 'DEZ'],
  en: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
} as const;

const MONTHS_LONG = {
  de: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
} as const;

const WEEKDAYS_LONG = {
  de: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
} as const;

const WEEKDAYS_SHORT = {
  de: ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'],
  en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
} as const;

export interface FormattedEventDate {
  /** Two-digit day, e.g. "08" */
  readonly day: string;
  /** Upper-case short month, e.g. "MÄR" */
  readonly month: string;
  readonly year: string;
  /** e.g. "Samstag, 10. Oktober 2026" / "Saturday, October 10, 2026" */
  readonly full: string;
  /** e.g. "Sa., 10.10.2026" / "Sat, Oct 10, 2026" */
  readonly compact: string;
}

/** Formats a YYYY-MM-DD date without relying on the runtime's locale data. */
export function formatEventDate(dateStr: string, isDE: boolean): FormattedEventDate {
  const [year, month, day] = dateStr.split('-').map(Number);
  const weekday = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  const lang = isDE ? 'de' : 'en';
  const monthIndex = month - 1;
  const dd = pad2(day);

  return {
    day: dd,
    month: MONTHS_SHORT[lang][monthIndex],
    year: String(year),
    full: isDE
      ? `${WEEKDAYS_LONG.de[weekday]}, ${day}. ${MONTHS_LONG.de[monthIndex]} ${year}`
      : `${WEEKDAYS_LONG.en[weekday]}, ${MONTHS_LONG.en[monthIndex]} ${day}, ${year}`,
    compact: isDE
      ? `${WEEKDAYS_SHORT.de[weekday]}, ${dd}.${pad2(month)}.${year}`
      : `${WEEKDAYS_SHORT.en[weekday]}, ${MONTHS_LONG.en[monthIndex].slice(0, 3)} ${day}, ${year}`,
  };
}

/* ─── Time zone offset for structured data ─── */

type BerlinUtcOffset = '+01:00' | '+02:00';

/** Day of the month of the last Sunday in the given month (0-based month index). */
function lastSundayOfMonth(year: number, monthIndex: number): number {
  const lastDay = new Date(Date.UTC(year, monthIndex + 1, 0));
  return lastDay.getUTCDate() - lastDay.getUTCDay();
}

/**
 * UTC offset of Europe/Berlin for a local date (YYYY-MM-DD) and time (HH:MM),
 * following the EU summer time rule: CEST from 02:00 on the last Sunday of
 * March until 03:00 on the last Sunday of October, CET otherwise. Pure and
 * deterministic, so it does not depend on the build machine's time zone data.
 */
export function getBerlinUtcOffset(date: string, time: string = '12:00'): BerlinUtcOffset {
  const [year, month, day] = date.split('-').map(Number);
  const hour = Number(time.split(':')[0]);
  const startDay = lastSundayOfMonth(year, 2);
  const endDay = lastSundayOfMonth(year, 9);

  const afterStart = month > 3 || (month === 3 && (day > startDay || (day === startDay && hour >= 2)));
  const beforeEnd = month < 10 || (month === 10 && (day < endDay || (day === endDay && hour < 3)));
  return afterStart && beforeEnd ? '+02:00' : '+01:00';
}
