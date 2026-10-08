import { describe, it, expect, vi } from 'vitest';
import type { ReactNode } from 'react';
import { renderToString } from 'react-dom/server';
import { events, type BlattWerkEvent } from '@/data/events';

vi.mock('@/i18n/navigation', () => ({
  Link: ({ href, children, ...rest }: { href: string; children: ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

const { EventsClient } = await import('@/app/[locale]/events/EventsClient');

/** Splits the rendered HTML into the upcoming part and the archive part. */
function renderSections(list: readonly BlattWerkEvent[], buildDate: string, isDE = true) {
  const html = renderToString(<EventsClient isDE={isDE} events={list} buildDate={buildDate} />);
  const archiveStart = html.indexOf(isDE ? 'Vergangene Termine' : 'Past Events');
  return {
    html,
    upcoming: archiveStart === -1 ? html : html.slice(0, archiveStart),
    archive: archiveStart === -1 ? '' : html.slice(archiveStart),
  };
}

describe('EventsClient (static render with build date)', () => {
  it('does not show events from June to September 2026 as upcoming on 2026-10-08', () => {
    const { upcoming, archive } = renderSections(events, '2026-10-08');
    for (const date of ['2026-06-11', '2026-07-11', '2026-08-08', '2026-09-12']) {
      expect(upcoming, date).not.toContain(`dateTime="${date}"`);
      expect(archive, date).toContain(`dateTime="${date}"`);
    }
    expect(upcoming).toContain('dateTime="2026-10-10"');
  });

  it('shows the empty-state notice with a contact link when only internal meetings are upcoming', () => {
    const { upcoming } = renderSections(events, '2026-10-08');
    expect(upcoming).toContain('Neue Termine folgen.');
    expect(upcoming).toContain('mittwochs 18–20 Uhr, Wetzellplatz 2');
    expect(upcoming).toContain('href="/kontakt"');
    expect(upcoming).toContain('Interne Termine');
  });

  it('renders the English empty state', () => {
    const { upcoming } = renderSections(events, '2026-10-08', false);
    expect(upcoming).toContain('New dates will follow.');
    expect(upcoming).toContain('Wednesdays 6–8 pm, Wetzellplatz 2');
  });

  it('lists public upcoming events prominently instead of the notice', () => {
    const { upcoming } = renderSections(events, '2026-06-01');
    expect(upcoming).toContain('Mary Jane Berlin 2026');
    expect(upcoming).not.toContain('Neue Termine folgen.');
  });

  it('groups the archive by year and shows the corrected license date', () => {
    const { archive } = renderSections(events, '2026-10-08');
    expect(archive).toContain('2026');
    expect(archive).toContain('2025');
    expect(archive).toContain('dateTime="2026-03-18"');
    expect(archive).not.toContain('dateTime="2026-03-15"');
  });

  it('shows the description of internal appointments except the generic board meeting text', () => {
    const { archive } = renderSections(events, '2026-10-08');
    expect(archive).toContain('Abstimmung Vermieter');
    expect(archive).toContain('Abstimmungsgespräch mit dem Vermieter');
    expect(archive).not.toContain('Interne Vorstandssitzung zur Planung');
  });

  it('omits the archive when there are no past events', () => {
    const { archive } = renderSections(events, '2020-01-01');
    expect(archive).toBe('');
  });
});
