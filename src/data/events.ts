/**
 * Event data for BlattWerk e.V.
 * Used by both the EventsClient component and EventSchema (JSON-LD).
 *
 * IMPORTANT: Never list events related to cannabis consumption
 * (no tastings, no consumption events, nothing consumption-related).
 */

export interface BlattWerkEvent {
  readonly date: string;
  readonly time?: string;
  readonly location_de?: string;
  readonly location_en?: string;
  readonly title_de: string;
  readonly title_en: string;
  readonly description_de: string;
  readonly description_en: string;
  readonly type_de: string;
  readonly type_en: string;
}

export const upcomingEvents: readonly BlattWerkEvent[] = [
  {
    date: '2026-04-12',
    time: '15:00',
    title_de: 'Vorstandsversammlung',
    title_en: 'Board Meeting',
    description_de:
      'Interne Vorstandsversammlung zur Planung und Abstimmung aktueller Vereinsthemen.',
    description_en:
      'Internal board meeting for planning and coordination of current club topics.',
    location_de: 'Salzhemmendorf',
    location_en: 'Salzhemmendorf',
    type_de: 'Versammlung',
    type_en: 'Assembly',
  },
];

export const pastEvents: readonly BlattWerkEvent[] = [
  {
    date: '2026-03-15',
    title_de: 'Anbaugenehmigung erteilt',
    title_en: 'Cultivation License Granted',
    description_de:
      'BlattWerk e.V. hat die offizielle Anbaugenehmigung erhalten. Der gemeinschaftliche Anbau kann beginnen!',
    description_en:
      'BlattWerk e.V. has received the official cultivation license. Community growing can begin!',
    type_de: 'Meilenstein',
    type_en: 'Milestone',
  },
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
];
