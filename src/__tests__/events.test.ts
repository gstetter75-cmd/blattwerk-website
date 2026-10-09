import { describe, it, expect } from 'vitest';
import {
  events,
  splitEventsByDate,
  partitionByAudience,
  groupEventsByYear,
  toIsoDateInTimeZone,
  formatEventDate,
  isInternalEvent,
  getBerlinUtcOffset,
  getInternalEventNote,
  type BlattWerkEvent,
} from '@/data/events';

function makeEvent(date: string, overrides: Partial<BlattWerkEvent> = {}): BlattWerkEvent {
  return {
    date,
    title_de: `Termin ${date}`,
    title_en: `Event ${date}`,
    description_de: 'Beschreibung',
    description_en: 'Description',
    type_de: 'Termin',
    type_en: 'Appointment',
    ...overrides,
  };
}

describe('splitEventsByDate', () => {
  const list = [
    makeEvent('2026-10-10'),
    makeEvent('2026-06-11'),
    makeEvent('2026-10-08', { time: '18:00' }),
    makeEvent('2025-09-13'),
    makeEvent('2026-12-12'),
    makeEvent('2026-10-07'),
  ];

  it('treats an event as upcoming through the end of its day', () => {
    const { upcoming, past } = splitEventsByDate(list, '2026-10-08');
    expect(upcoming.map((e) => e.date)).toContain('2026-10-08');
    expect(past.map((e) => e.date)).not.toContain('2026-10-08');
  });

  it('moves an event to the past on the following day', () => {
    const { upcoming, past } = splitEventsByDate(list, '2026-10-09');
    expect(upcoming.map((e) => e.date)).not.toContain('2026-10-08');
    expect(past[0].date).toBe('2026-10-08');
  });

  it('sorts upcoming ascending and past descending', () => {
    const { upcoming, past } = splitEventsByDate(list, '2026-10-08');
    expect(upcoming.map((e) => e.date)).toEqual(['2026-10-08', '2026-10-10', '2026-12-12']);
    expect(past.map((e) => e.date)).toEqual(['2026-10-07', '2026-06-11', '2025-09-13']);
  });

  it('orders events on the same day by time', () => {
    const sameDay = [
      makeEvent('2026-10-10', { time: '18:00', title_de: 'Spät' }),
      makeEvent('2026-10-10', { time: '10:00', title_de: 'Früh' }),
    ];
    const { upcoming } = splitEventsByDate(sameDay, '2026-10-01');
    expect(upcoming.map((e) => e.title_de)).toEqual(['Früh', 'Spät']);
  });

  it('does not mutate the input list', () => {
    const copy = [...list];
    splitEventsByDate(list, '2026-10-08');
    expect(list).toEqual(copy);
  });

  it('returns an empty upcoming list when every event is in the past', () => {
    const { upcoming, past } = splitEventsByDate(list, '2030-01-01');
    expect(upcoming).toHaveLength(0);
    expect(past).toHaveLength(list.length);
  });

  it('never classifies a past real event as upcoming (live data, 2026-10-08)', () => {
    const { upcoming } = splitEventsByDate(events, '2026-10-08');
    for (const event of upcoming) {
      expect(event.date >= '2026-10-08', `${event.title_de} on ${event.date}`).toBe(true);
    }
    expect(upcoming.map((e) => e.date)).not.toContain('2026-08-08');
    expect(upcoming.map((e) => e.date)).not.toContain('2026-09-12');
  });
});

describe('partitionByAudience', () => {
  it('separates internal meetings from public events and keeps order', () => {
    const list = [
      makeEvent('2026-01-01', { kind: 'internal' }),
      makeEvent('2026-02-01'),
      makeEvent('2026-03-01', { kind: 'milestone' }),
      makeEvent('2026-04-01', { kind: 'internal' }),
    ];
    const { publicEvents, internalEvents } = partitionByAudience(list);
    expect(publicEvents.map((e) => e.date)).toEqual(['2026-02-01', '2026-03-01']);
    expect(internalEvents.map((e) => e.date)).toEqual(['2026-01-01', '2026-04-01']);
  });

  it('marks all board meetings as internal', () => {
    const boardMeetings = events.filter((e) => e.title_de === 'Vorstandssitzung');
    expect(boardMeetings.length).toBeGreaterThan(0);
    for (const meeting of boardMeetings) {
      expect(isInternalEvent(meeting), meeting.date).toBe(true);
    }
  });
});

describe('getInternalEventNote', () => {
  it('hides the generic board meeting description, which repeats the section intro', () => {
    const meeting = events.find((e) => e.title_de === 'Vorstandssitzung');
    expect(meeting).toBeDefined();
    expect(getInternalEventNote(meeting!, true)).toBeUndefined();
    expect(getInternalEventNote(meeting!, false)).toBeUndefined();
  });

  it('keeps the description of other internal appointments', () => {
    const landlord = events.find((e) => e.title_en === 'Landlord Meeting');
    expect(landlord).toBeDefined();
    expect(getInternalEventNote(landlord!, true)).toBe(landlord!.description_de);
    expect(getInternalEventNote(landlord!, false)).toBe(landlord!.description_en);
  });
});

describe('getBerlinUtcOffset', () => {
  it('uses CET (+01:00) in winter and CEST (+02:00) in summer', () => {
    expect(getBerlinUtcOffset('2026-01-10', '15:00')).toBe('+01:00');
    expect(getBerlinUtcOffset('2026-06-11', '10:00')).toBe('+02:00');
    expect(getBerlinUtcOffset('2026-10-10', '15:00')).toBe('+02:00');
    expect(getBerlinUtcOffset('2026-11-14', '15:00')).toBe('+01:00');
    expect(getBerlinUtcOffset('2026-12-12', '15:00')).toBe('+01:00');
  });

  it('switches to summer time at 02:00 on the last Sunday of March', () => {
    expect(getBerlinUtcOffset('2026-03-28', '15:00')).toBe('+01:00');
    expect(getBerlinUtcOffset('2026-03-29', '01:30')).toBe('+01:00');
    expect(getBerlinUtcOffset('2026-03-29', '03:00')).toBe('+02:00');
  });

  it('switches back to winter time at 03:00 on the last Sunday of October', () => {
    expect(getBerlinUtcOffset('2026-10-25', '02:30')).toBe('+02:00');
    expect(getBerlinUtcOffset('2026-10-25', '03:00')).toBe('+01:00');
    expect(getBerlinUtcOffset('2026-10-26', '00:30')).toBe('+01:00');
  });

  it('assumes midday when no time is given', () => {
    expect(getBerlinUtcOffset('2026-03-29')).toBe('+02:00');
    expect(getBerlinUtcOffset('2026-10-25')).toBe('+01:00');
  });
});

describe('groupEventsByYear', () => {
  it('groups consecutive events by year and preserves order', () => {
    const list = [makeEvent('2026-03-18'), makeEvent('2026-01-10'), makeEvent('2025-12-13')];
    const groups = groupEventsByYear(list);
    expect(groups.map((g) => g.year)).toEqual(['2026', '2025']);
    expect(groups[0].events.map((e) => e.date)).toEqual(['2026-03-18', '2026-01-10']);
    expect(groups[1].events.map((e) => e.date)).toEqual(['2025-12-13']);
  });

  it('returns no groups for an empty list', () => {
    expect(groupEventsByYear([])).toEqual([]);
  });
});

describe('toIsoDateInTimeZone', () => {
  it('returns the Berlin calendar date', () => {
    // 22:30 UTC on 8 Oct is already 9 Oct in Berlin (CEST, UTC+2)
    expect(toIsoDateInTimeZone(new Date('2026-10-08T22:30:00Z'), 'Europe/Berlin')).toBe('2026-10-09');
    expect(toIsoDateInTimeZone(new Date('2026-10-08T21:30:00Z'), 'Europe/Berlin')).toBe('2026-10-08');
  });

  it('handles winter time (CET, UTC+1)', () => {
    expect(toIsoDateInTimeZone(new Date('2026-12-12T23:30:00Z'), 'Europe/Berlin')).toBe('2026-12-13');
    expect(toIsoDateInTimeZone(new Date('2026-12-12T22:30:00Z'), 'Europe/Berlin')).toBe('2026-12-12');
  });

  it('falls back to a valid date for an unknown time zone', () => {
    expect(toIsoDateInTimeZone(new Date('2026-10-08T12:00:00Z'), 'Not/AZone')).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});

describe('formatEventDate', () => {
  it('formats German dates deterministically', () => {
    expect(formatEventDate('2026-03-18', true)).toEqual({
      day: '18',
      month: 'MÄR',
      year: '2026',
      full: 'Mittwoch, 18. März 2026',
      compact: 'Mi., 18.03.2026',
    });
  });

  it('formats English dates deterministically', () => {
    expect(formatEventDate('2026-10-10', false)).toEqual({
      day: '10',
      month: 'OCT',
      year: '2026',
      full: 'Saturday, October 10, 2026',
      compact: 'Sat, Oct 10, 2026',
    });
  });

  it('pads single-digit days', () => {
    expect(formatEventDate('2026-01-03', true).day).toBe('03');
  });
});
