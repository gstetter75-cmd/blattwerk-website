import { describe, it, expect } from 'vitest';
import { externalEvents, getUpcomingExternalEvents, type ExternalEvent } from '@/data/external-events';

const ev = (date: string): ExternalEvent => ({
  date,
  title_de: 't',
  title_en: 't',
  organizer: 'o',
  place_de: 'p',
  place_en: 'p',
  audience_de: 'a',
  audience_en: 'a',
  url: 'https://example.org',
});

describe('getUpcomingExternalEvents', () => {
  it('keeps events on and after today, soonest first', () => {
    const list = [ev('2026-12-01'), ev('2026-10-01'), ev('2026-11-01')];
    expect(getUpcomingExternalEvents(list, '2026-11-01').map((e) => e.date)).toEqual(['2026-11-01', '2026-12-01']);
  });

  it('does not mutate the input', () => {
    const list = [ev('2026-12-01'), ev('2026-11-01')];
    getUpcomingExternalEvents(list, '2026-01-01');
    expect(list.map((e) => e.date)).toEqual(['2026-12-01', '2026-11-01']);
  });
});

describe('externalEvents data', () => {
  it('has valid dates, https links and both languages', () => {
    for (const e of externalEvents) {
      expect(e.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(e.url).toMatch(/^https:\/\//);
      expect(e.title_de.length).toBeGreaterThan(0);
      expect(e.title_en.length).toBeGreaterThan(0);
    }
  });

  it('never lists consumption events', () => {
    const banned = /verkostung|tasting|smoke|4\/20|lounge|cup\b|party/i;
    for (const e of externalEvents) {
      expect(`${e.title_de} ${e.title_en}`).not.toMatch(banned);
    }
  });
});
