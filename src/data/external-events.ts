/**
 * Events by other organisations in the region that are relevant for members
 * (prevention, education, professional networking). Shown on the events page
 * as pointers with a link to the organiser; BlattWerk does not run them.
 *
 * IMPORTANT: Only list events from prevention, health, education or public
 * bodies. Never list consumption-related events. Every entry needs a source URL
 * that was checked; dates are copied exactly from that page.
 */

export interface ExternalEvent {
  /** Calendar date in YYYY-MM-DD */
  readonly date: string;
  /** Local time as shown by the organiser, e.g. "18:00" or "10:00–13:00" */
  readonly time?: string;
  readonly title_de: string;
  readonly title_en: string;
  readonly organizer: string;
  readonly place_de: string;
  readonly place_en: string;
  /** Audience, cost and registration in one short line */
  readonly audience_de: string;
  readonly audience_en: string;
  readonly url: string;
}

/** Checked on 2026-10-09 against the organisers' pages. Chronological. */
export const externalEvents: readonly ExternalEvent[] = [
  {
    date: '2026-11-02',
    time: '10:00–16:00',
    title_de: 'Niedersächsische Suchtkonferenz: „Mix and Match – Polytoxikomanie im Fokus der Suchthilfe“',
    title_en: 'Lower Saxony Addiction Conference: “Mix and Match – polysubstance use”',
    organizer: 'LVG & AFS Niedersachsen Bremen e. V.',
    place_de: 'Ärztekammer Niedersachsen, Berliner Allee 20, Hannover',
    place_en: 'Ärztekammer Niedersachsen, Berliner Allee 20, Hanover',
    audience_de: 'Fachkräfte und fachlich Interessierte, 60 €, Anmeldung bis 7 Tage vorher',
    audience_en: 'Professionals and interested people, €60, register at least 7 days ahead',
    url: 'https://www.gesundheit-nds-hb.de/veranstaltungen/xxxvi-niedersaechsische-suchtkonferenz/',
  },
  {
    date: '2026-11-06',
    time: '10:00–13:00',
    title_de: 'Netzwerktreffen „Pack es an – neue Bausteine für die Cannabisprävention“',
    title_en: 'Network meeting “Pack es an – new building blocks for cannabis prevention”',
    organizer: 'prisma gGmbH – Fachstelle für Sucht und Suchtprävention',
    place_de: 'FZH Linden, Hannover',
    place_en: 'FZH Linden, Hanover',
    audience_de: 'Fachkräfte und Interessierte, kostenlos mit Anmeldung',
    audience_en: 'Professionals and interested people, free with registration',
    url: 'https://www.prismahannover.de/seminare/pack-es-an-netzwerktreffen-2/',
  },
  {
    date: '2026-11-18',
    time: '18:00',
    title_de: 'Digitaler Elternabend: Cannabis-Methodenpaket „Pack es an“',
    title_en: 'Online parents’ evening: cannabis toolkit “Pack es an”',
    organizer: 'prisma gGmbH mit der Landeshauptstadt Hannover',
    place_de: 'online (Zoom)',
    place_en: 'online (Zoom)',
    audience_de: 'Eltern und Erziehungsberechtigte, kostenlos und anonym',
    audience_en: 'Parents and guardians, free and anonymous',
    url: 'https://www.prismahannover.de/elternabendcannabis/',
  },
  {
    date: '2026-12-15',
    time: '18:00',
    title_de: 'Infoabend für Menschen, die Cannabis konsumieren',
    title_en: 'Information evening for people who use cannabis',
    organizer: 'prisma gGmbH – Fachstelle für Sucht und Suchtprävention',
    place_de: 'online (Zoom)',
    place_en: 'online (Zoom)',
    audience_de: 'Alle Interessierten, kostenlos und anonym',
    audience_en: 'Anyone interested, free and anonymous',
    url: 'https://www.prismahannover.de/infoabendcannabis/',
  },
];

/** External events on or after `today` (YYYY-MM-DD), soonest first. Does not mutate the input. */
export function getUpcomingExternalEvents(
  list: readonly ExternalEvent[],
  today: string,
): readonly ExternalEvent[] {
  return list.filter((e) => e.date >= today).sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
}
