import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const OUT_DIR = join(__dirname, '../../out');

// Skip these tests if out/ doesn't exist (not built yet)
const outExists = existsSync(OUT_DIR);

describe.skipIf(!outExists)('Build Output — SEO Verification', () => {
  describe('Static Files', () => {
    it('robots.txt exists and allows all crawlers', () => {
      const content = readFileSync(join(OUT_DIR, 'robots.txt'), 'utf-8');
      expect(content).toContain('User-agent: *');
      expect(content).toContain('Allow: /');
      expect(content).toContain('Sitemap: https://blattwerk.dev/sitemap.xml');
    });

    it('robots.txt allows AI crawlers', () => {
      const content = readFileSync(join(OUT_DIR, 'robots.txt'), 'utf-8');
      const aiBots = ['GPTBot', 'PerplexityBot', 'anthropic-ai', 'Claude-Web', 'Google-Extended'];
      for (const bot of aiBots) {
        expect(content, `Missing AI bot: ${bot}`).toContain(bot);
      }
    });

    it('sitemap.xml exists and has URLs', () => {
      const content = readFileSync(join(OUT_DIR, 'sitemap.xml'), 'utf-8');
      expect(content).toContain('<?xml version="1.0"');
      expect(content).toContain('https://blattwerk.dev/de/');
      expect(content).toContain('https://blattwerk.dev/en/');
    });

    it('sitemap.xml has hreflang alternates', () => {
      const content = readFileSync(join(OUT_DIR, 'sitemap.xml'), 'utf-8');
      expect(content).toContain('xmlns:xhtml="http://www.w3.org/1999/xhtml"');
      expect(content).toContain('hreflang="de"');
      expect(content).toContain('hreflang="en"');
      expect(content).toContain('hreflang="x-default"');
    });

    it('sitemap.xml does NOT include noIndex pages', () => {
      const content = readFileSync(join(OUT_DIR, 'sitemap.xml'), 'utf-8');
      expect(content).not.toContain('/datenschutz/');
      expect(content).not.toContain('/impressum/');
    });

    it('llms.txt exists with site overview', () => {
      const content = readFileSync(join(OUT_DIR, 'llms.txt'), 'utf-8');
      expect(content).toContain('BlattWerk e.V.');
      expect(content).toContain('Cannabis Social Club');
      expect(content).toContain('Hildesheim');
      expect(content).toContain('Knowledge Base');
      expect(content).toContain('Strain Database');
    });

    it('_redirects file exists', () => {
      expect(existsSync(join(OUT_DIR, '_redirects'))).toBe(true);
      const content = readFileSync(join(OUT_DIR, '_redirects'), 'utf-8');
      expect(content).toContain('301');
    });

    it('manifest.json exists', () => {
      expect(existsSync(join(OUT_DIR, 'manifest.json'))).toBe(true);
    });

    it('favicon files exist', () => {
      expect(existsSync(join(OUT_DIR, 'favicon.ico'))).toBe(true);
      expect(existsSync(join(OUT_DIR, 'favicon.svg'))).toBe(true);
      expect(existsSync(join(OUT_DIR, 'apple-touch-icon.png'))).toBe(true);
    });
  });

  describe('HTML Pages — German', () => {
    const pages = [
      { path: 'de/index.html', name: 'Home DE' },
      { path: 'de/ueber-uns/index.html', name: 'About DE' },
      { path: 'de/mitgliedschaft/index.html', name: 'Membership DE' },
      { path: 'de/sortendatenbank/index.html', name: 'Strains DE' },
      { path: 'de/wissensdatenbank/index.html', name: 'Knowledge DE' },
      { path: 'de/events/index.html', name: 'Events DE' },
      { path: 'de/kontakt/index.html', name: 'Contact DE' },
      { path: 'de/suchtpraevention/index.html', name: 'Prevention DE' },
      { path: 'de/csc-gruendung/index.html', name: 'CSC Guide DE' },
    ];

    for (const page of pages) {
      describe(page.name, () => {
        let html: string;
        beforeAll(() => {
          html = readFileSync(join(OUT_DIR, page.path), 'utf-8');
        });

        it('has lang="de" attribute', () => {
          expect(html).toContain('lang="de"');
        });

        it('has a <title> tag', () => {
          expect(html).toMatch(/<title>[^<]+<\/title>/);
        });

        it('has meta description', () => {
          expect(html).toMatch(/name="description" content="[^"]+"/);
        });

        it('has canonical URL', () => {
          expect(html).toMatch(/rel="canonical" href="https:\/\/blattwerk\.dev\/de\//);
        });

        it('has hreflang alternates', () => {
          expect(html).toContain('hrefLang="en"');
          expect(html).toContain('hrefLang="x-default"');
        });
      });
    }
  });

  describe('HTML Pages — English', () => {
    const pages = [
      { path: 'en/index.html', name: 'Home EN' },
      { path: 'en/ueber-uns/index.html', name: 'About EN' },
      { path: 'en/mitgliedschaft/index.html', name: 'Membership EN' },
    ];

    for (const page of pages) {
      describe(page.name, () => {
        let html: string;
        beforeAll(() => {
          html = readFileSync(join(OUT_DIR, page.path), 'utf-8');
        });

        it('has lang="en" attribute', () => {
          expect(html).toContain('lang="en"');
        });

        it('has canonical URL pointing to EN', () => {
          expect(html).toMatch(/rel="canonical" href="https:\/\/blattwerk\.dev\/en\//);
        });

        it('has hreflang pointing back to DE', () => {
          expect(html).toContain('hrefLang="de"');
        });
      });
    }
  });

  describe('Structured Data in HTML', () => {
    it('homepage has Organization + WebSite schemas', () => {
      const html = readFileSync(join(OUT_DIR, 'de/index.html'), 'utf-8');
      expect(html).toContain('"@type":"Organization"');
      expect(html).toContain('"@type":"WebSite"');
      expect(html).toContain('SearchAction');
    });

    it('homepage has GeoCoordinates', () => {
      const html = readFileSync(join(OUT_DIR, 'de/index.html'), 'utf-8');
      expect(html).toContain('"@type":"GeoCoordinates"');
      expect(html).toContain('52.1535');
    });

    it('events page has Event schemas', () => {
      const html = readFileSync(join(OUT_DIR, 'de/events/index.html'), 'utf-8');
      expect(html).toContain('"@type":"Event"');
      expect(html).toContain('EventScheduled');
    });

    it('membership page has FAQ schema', () => {
      const html = readFileSync(join(OUT_DIR, 'de/mitgliedschaft/index.html'), 'utf-8');
      expect(html).toContain('"@type":"FAQPage"');
    });

    it('pages with BreadcrumbSchema render it', () => {
      const pagesWithBreadcrumbs = [
        'de/ueber-uns/index.html',
        'de/sortendatenbank/index.html',
        'de/wissensdatenbank/index.html',
        'de/events/index.html',
        'de/kontakt/index.html',
        'de/suchtpraevention/index.html',
        'de/mitgliedschaft/index.html',
      ];
      for (const p of pagesWithBreadcrumbs) {
        const html = readFileSync(join(OUT_DIR, p), 'utf-8');
        expect(html, `BreadcrumbList missing in ${p}`).toContain('"@type":"BreadcrumbList"');
      }
    });
  });

  describe('Geo Meta Tags', () => {
    it('homepage has geo meta tags', () => {
      const html = readFileSync(join(OUT_DIR, 'de/index.html'), 'utf-8');
      expect(html).toContain('geo.region');
      expect(html).toContain('DE-NI');
      expect(html).toContain('geo.placename');
      expect(html).toContain('Hildesheim');
      expect(html).toContain('ICBM');
    });
  });

  describe('Optimized Images', () => {
    it('WebP optimized directory exists', () => {
      expect(existsSync(join(OUT_DIR, 'images/optimized'))).toBe(true);
    });

    it('homepage uses WebP srcSet', () => {
      const html = readFileSync(join(OUT_DIR, 'de/index.html'), 'utf-8');
      expect(html).toContain('image/webp');
      expect(html).toContain('.webp');
    });
  });
});
