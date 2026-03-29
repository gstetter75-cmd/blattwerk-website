import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';

const REDIRECTS_PATH = join(__dirname, '../../public/_redirects');

describe('Netlify Redirects', () => {
  let content: string;

  beforeAll(() => {
    content = readFileSync(REDIRECTS_PATH, 'utf-8');
  });

  const expectedRedirects = [
    // Old blog/news pages
    { from: '/cannabis-anbau-anleitung', to: '/de/wissensdatenbank/growing/' },
    { from: '/neuigkeiten/thc-und-fahrtuchtigkeit', to: '/de/wissensdatenbank/legal/fuehrerschein-cannabis/' },
    { from: '/neuigkeiten/wirkstoffe', to: '/de/wissensdatenbank/cannabinoids/' },
    { from: '/neuigkeiten', to: '/de/events/' },
    // Old about/contact pages
    { from: '/uber-uns/raumlichkeiten', to: '/de/ueber-uns/' },
    { from: '/uber-uns', to: '/de/ueber-uns/' },
    { from: '/kontakt/impressum', to: '/de/impressum/' },
    { from: '/kontakt/der-anbaurat', to: '/de/ueber-uns/' },
    { from: '/kontakt/der-vorstand', to: '/de/ueber-uns/' },
    { from: '/kontakt', to: '/de/kontakt/' },
  ];

  for (const redirect of expectedRedirects) {
    it(`redirects ${redirect.from} → ${redirect.to}`, () => {
      // Check that a line exists with the from path redirecting to the to path
      const lines = content.split('\n').filter(l => !l.startsWith('#') && l.trim());
      const matching = lines.filter(l => l.includes(redirect.from) && l.includes(redirect.to));
      expect(matching.length, `Missing redirect: ${redirect.from} → ${redirect.to}`).toBeGreaterThan(0);
    });
  }

  it('all redirects use 301 (permanent)', () => {
    const lines = content.split('\n').filter(l => !l.startsWith('#') && l.trim() && !l.startsWith('https://'));
    for (const line of lines) {
      expect(line, `Non-301 redirect: ${line}`).toContain('301');
    }
  });

  it('has www → non-www redirect', () => {
    expect(content).toContain('https://www.blattwerk.dev/*');
    expect(content).toContain('https://blattwerk.dev/:splat');
  });
});
