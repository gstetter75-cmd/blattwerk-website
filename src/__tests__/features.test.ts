import { describe, it, expect } from 'vitest';
import { isStrainDatabaseHref, STRAIN_DATABASE_ENABLED, visibleNavItems } from '@/lib/features';
import { renderMarkdown } from '@/lib/markdown';

describe('isStrainDatabaseHref', () => {
  it('matches the database and its sub pages only', () => {
    expect(isStrainDatabaseHref('/sortendatenbank')).toBe(true);
    expect(isStrainDatabaseHref('/sortendatenbank/ak-47')).toBe(true);
    expect(isStrainDatabaseHref('/sortendatenbankx')).toBe(false);
    expect(isStrainDatabaseHref('/wissensdatenbank')).toBe(false);
  });
});

describe.runIf(!STRAIN_DATABASE_ENABLED)('strain database hidden', () => {
  it('removes database entries from navigation without mutating the input', () => {
    const items = [{ href: '/ueber-uns' }, { href: '/sortendatenbank' }] as const;
    expect(visibleNavItems(items).map((i) => i.href)).toEqual(['/ueber-uns']);
    expect(items).toHaveLength(2);
  });

  it('renders markdown links into the database as plain text', () => {
    const html = renderMarkdown('Siehe [Sortendatenbank](/sortendatenbank) und [Wissen](/wissensdatenbank).');
    expect(html).not.toContain('href="/sortendatenbank"');
    expect(html).toContain('Sortendatenbank');
    expect(html).toContain('href="/wissensdatenbank"');
  });
});
