/**
 * Event data for BlattWerk e.V.
 * Used by both the EventsClient component and EventSchema (JSON-LD).
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
    time: '18:00',
    title_de: 'Mitgliederversammlung Q2',
    title_en: 'Q2 General Assembly',
    description_de:
      'Ordentliche Mitgliederversammlung mit Bericht des Vorstands, Finanzbericht und Abstimmungen.',
    description_en:
      'Regular general assembly with board report, financial report and votes.',
    location_de: 'Vereinsräume',
    location_en: 'Club premises',
    type_de: 'Versammlung',
    type_en: 'Assembly',
  },
  {
    date: '2026-04-26',
    time: '15:00',
    title_de: 'Safer-Use Workshop',
    title_en: 'Safer Use Workshop',
    description_de:
      'Interaktiver Workshop zu risikominimierendem Konsum, Dosierung und Konsumformen. Offen für alle Mitglieder.',
    description_en:
      'Interactive workshop on risk-minimizing consumption, dosing and consumption methods. Open to all members.',
    location_de: 'Vereinsräume',
    location_en: 'Club premises',
    type_de: 'Workshop',
    type_en: 'Workshop',
  },
  {
    date: '2026-05-10',
    time: '14:00',
    title_de: 'Grow-Einführung für Einsteiger',
    title_en: 'Growing Introduction for Beginners',
    description_de:
      'Grundlagen des Eigenanbaus: Erde, Licht, Wasser und die ersten Schritte mit deinen drei Pflanzen.',
    description_en:
      'Basics of home growing: soil, light, water and the first steps with your three plants.',
    location_de: 'Vereinsräume',
    location_en: 'Club premises',
    type_de: 'Workshop',
    type_en: 'Workshop',
  },
];

export const pastEvents: readonly BlattWerkEvent[] = [
  {
    date: '2026-02-15',
    title_de: 'Gründungsversammlung',
    title_en: 'Founding Assembly',
    description_de:
      'Offizielle Gründung des BlattWerk e.V. mit Wahl des Vorstands und Verabschiedung der Satzung.',
    description_en:
      'Official founding of BlattWerk e.V. with election of the board and adoption of the statutes.',
    type_de: 'Versammlung',
    type_en: 'Assembly',
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
    date: '2026-03-08',
    title_de: 'Terpene-Tasting',
    title_en: 'Terpene Tasting',
    description_de:
      'Sensorische Verkostung verschiedener Terpenprofile – Aromen erkennen und verstehen lernen.',
    description_en:
      'Sensory tasting of different terpene profiles – learning to recognize and understand aromas.',
    type_de: 'Workshop',
    type_en: 'Workshop',
  },
];
