import { describe, it, expect } from 'vitest';
import { allArticles, allCategories, getArticlesByCategory } from '@/data/knowledge';
import { strains } from '@/data/strains';
import { upcomingEvents, pastEvents } from '@/data/events';

describe('Content Integrity', () => {
  describe('Knowledge Base Coverage', () => {
    it('every category has at least 3 articles', () => {
      for (const cat of allCategories) {
        const articles = getArticlesByCategory(cat.key);
        expect(articles.length, `Category "${cat.key}" has too few articles`).toBeGreaterThanOrEqual(3);
      }
    });

    it('all article slugs are unique', () => {
      const slugs = allArticles.map(a => a.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    });

    it('all related_slugs reference existing articles', () => {
      const slugSet = new Set(allArticles.map(a => a.slug));
      for (const article of allArticles) {
        for (const related of article.related_slugs) {
          expect(slugSet.has(related), `Article "${article.slug}" references non-existent related article "${related}"`).toBe(true);
        }
      }
    });

    it('articles have tags', () => {
      for (const article of allArticles) {
        expect(article.tags.length, `Article "${article.slug}" has no tags`).toBeGreaterThan(0);
      }
    });

    it('articles have reasonable reading times', () => {
      for (const article of allArticles) {
        expect(article.reading_time, `Article "${article.slug}" reading time too short`).toBeGreaterThanOrEqual(1);
        expect(article.reading_time, `Article "${article.slug}" reading time too long`).toBeLessThanOrEqual(60);
      }
    });
  });

  describe('Strain Database Coverage', () => {
    it('has all three strain types', () => {
      const types = new Set(strains.map(s => s.type));
      expect(types).toContain('indica');
      expect(types).toContain('sativa');
      expect(types).toContain('hybrid');
    });

    it('strains have terpene profiles', () => {
      for (const strain of strains) {
        const terpeneCount = Object.keys(strain.terpenes).length;
        expect(terpeneCount, `Strain "${strain.slug}" has no terpenes`).toBeGreaterThan(0);
      }
    });

    it('THC/CBD values are realistic', () => {
      for (const strain of strains) {
        expect(strain.cannabinoids.thc, `Strain "${strain.slug}" THC unrealistic`).toBeLessThanOrEqual(35);
        expect(strain.cannabinoids.cbd, `Strain "${strain.slug}" CBD unrealistic`).toBeLessThanOrEqual(25);
      }
    });
  });

  describe('Events Data', () => {
    it('upcoming events have all required fields', () => {
      for (const event of upcomingEvents) {
        expect(event.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
        expect(event.time).toBeTruthy();
        expect(event.title_de).toBeTruthy();
        expect(event.title_en).toBeTruthy();
        expect(event.description_de).toBeTruthy();
        expect(event.description_en).toBeTruthy();
      }
    });

    it('past events have dates before upcoming events', () => {
      const earliestUpcoming = Math.min(...upcomingEvents.map(e => new Date(e.date).getTime()));
      for (const event of pastEvents) {
        expect(
          new Date(event.date).getTime(),
          `Past event "${event.title_de}" date is after upcoming events`
        ).toBeLessThan(earliestUpcoming);
      }
    });
  });

  describe('Bilingual Content Parity', () => {
    it('all categories have DE and EN labels', () => {
      for (const cat of allCategories) {
        expect(cat.label_de, `Category "${cat.key}" missing DE label`).toBeTruthy();
        expect(cat.label_en, `Category "${cat.key}" missing EN label`).toBeTruthy();
        expect(cat.description_de, `Category "${cat.key}" missing DE description`).toBeTruthy();
        expect(cat.description_en, `Category "${cat.key}" missing EN description`).toBeTruthy();
      }
    });

    it('all strains have DE and EN descriptions', () => {
      for (const strain of strains) {
        expect(strain.description_de, `Strain "${strain.slug}" missing DE description`).toBeTruthy();
        expect(strain.description_en, `Strain "${strain.slug}" missing EN description`).toBeTruthy();
      }
    });

    it('all events have DE and EN content', () => {
      const allEvents = [...upcomingEvents, ...pastEvents];
      for (const event of allEvents) {
        expect(event.title_de, `Event missing DE title`).toBeTruthy();
        expect(event.title_en, `Event missing EN title`).toBeTruthy();
        expect(event.description_de, `Event missing DE description`).toBeTruthy();
        expect(event.description_en, `Event missing EN description`).toBeTruthy();
      }
    });
  });
});
