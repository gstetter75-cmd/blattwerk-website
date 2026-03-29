import { describe, it, expect } from 'vitest';
import { createMetadata, PAGE_META } from '@/lib/metadata';

describe('SEO Metadata', () => {
  const locales = ['de', 'en'] as const;
  const pages = Object.entries(PAGE_META) as [string, typeof PAGE_META[keyof typeof PAGE_META]][];

  it('PAGE_META has all required pages', () => {
    const required = ['home', 'about', 'membership', 'strains', 'knowledge', 'prevention', 'events', 'contact', 'privacy', 'impressum'];
    for (const page of required) {
      expect(PAGE_META).toHaveProperty(page);
    }
  });

  it('every page has DE and EN metadata', () => {
    for (const [key, meta] of pages) {
      expect(meta.de.title, `${key}.de.title`).toBeTruthy();
      expect(meta.de.description, `${key}.de.description`).toBeTruthy();
      expect(meta.en.title, `${key}.en.title`).toBeTruthy();
      expect(meta.en.description, `${key}.en.description`).toBeTruthy();
    }
  });

  it('descriptions are between 50-160 characters', () => {
    for (const [key, meta] of pages) {
      for (const locale of locales) {
        const desc = meta[locale].description;
        expect(desc.length, `${key}.${locale} description too short (${desc.length})`).toBeGreaterThanOrEqual(50);
        expect(desc.length, `${key}.${locale} description too long (${desc.length})`).toBeLessThanOrEqual(200);
      }
    }
  });

  it('titles are not too long', () => {
    for (const [key, meta] of pages) {
      for (const locale of locales) {
        expect(meta[locale].title.length, `${key}.${locale} title too long`).toBeLessThanOrEqual(80);
      }
    }
  });

  describe('createMetadata()', () => {
    it('generates correct canonical URL', () => {
      const result = createMetadata('de', PAGE_META.about, 'ueber-uns');
      expect(result.alternates?.canonical).toBe('https://blattwerk.dev/de/ueber-uns/');
    });

    it('generates hreflang alternates', () => {
      const result = createMetadata('de', PAGE_META.about, 'ueber-uns');
      const languages = result.alternates?.languages as Record<string, string>;
      expect(languages['en']).toBe('https://blattwerk.dev/en/ueber-uns/');
      expect(languages['x-default']).toBe('https://blattwerk.dev/de/ueber-uns/');
    });

    it('generates correct canonical for EN locale', () => {
      const result = createMetadata('en', PAGE_META.about, 'ueber-uns');
      expect(result.alternates?.canonical).toBe('https://blattwerk.dev/en/ueber-uns/');
      const languages = result.alternates?.languages as Record<string, string>;
      expect(languages['de']).toBe('https://blattwerk.dev/de/ueber-uns/');
    });

    it('handles root path (home)', () => {
      const result = createMetadata('de', PAGE_META.home);
      expect(result.alternates?.canonical).toBe('https://blattwerk.dev/de/');
    });

    it('applies noIndex for privacy and impressum pages', () => {
      const privacy = createMetadata('de', PAGE_META.privacy, 'datenschutz');
      expect(privacy.robots).toEqual({ index: false, follow: true });

      const impressum = createMetadata('de', PAGE_META.impressum, 'impressum');
      expect(impressum.robots).toEqual({ index: false, follow: true });
    });

    it('does not set noIndex for regular pages', () => {
      const result = createMetadata('de', PAGE_META.about, 'ueber-uns');
      expect(result.robots).toBeUndefined();
    });
  });
});
