import { describe, it, expect } from 'vitest';
import {
  allArticles,
  allCategories,
  getArticleBySlug,
  getArticlesByCategory,
  getCategoryByKey,
  searchArticles,
} from '@/data/knowledge';

describe('Knowledge Base', () => {
  it('has articles', () => {
    expect(allArticles.length).toBeGreaterThan(30);
  });

  it('has categories', () => {
    expect(allCategories.length).toBeGreaterThanOrEqual(7);
  });

  it('finds article by slug', () => {
    const article = getArticleBySlug('kcang-ueberblick');
    expect(article).toBeDefined();
    expect(article?.category).toBe('legal');
  });

  it('returns undefined for unknown slug', () => {
    expect(getArticleBySlug('does-not-exist')).toBeUndefined();
  });

  it('filters articles by category', () => {
    const legal = getArticlesByCategory('legal');
    expect(legal.length).toBeGreaterThan(0);
    legal.forEach((a) => expect(a.category).toBe('legal'));
  });

  it('finds category by key', () => {
    const cat = getCategoryByKey('health');
    expect(cat).toBeDefined();
    expect(cat?.label_de).toContain('Gesundheit');
  });

  it('searches articles in German', () => {
    const results = searchArticles('KCanG', 'de');
    expect(results.length).toBeGreaterThan(0);
  });

  it('searches articles in English', () => {
    const results = searchArticles('Cannabis Act', 'en');
    expect(results.length).toBeGreaterThan(0);
  });

  it('returns empty for empty query', () => {
    expect(searchArticles('', 'de')).toHaveLength(0);
    expect(searchArticles('   ', 'de')).toHaveLength(0);
  });

  it('every article has required fields', () => {
    for (const article of allArticles) {
      expect(article.slug).toBeTruthy();
      expect(article.category).toBeTruthy();
      expect(article.title_de).toBeTruthy();
      expect(article.title_en).toBeTruthy();
      expect(article.content_de.length).toBeGreaterThan(50);
      expect(article.content_en.length).toBeGreaterThan(50);
      expect(article.reading_time).toBeGreaterThan(0);
    }
  });

  it('every article category exists in categories list', () => {
    const categoryKeys = new Set(allCategories.map((c) => c.key));
    for (const article of allArticles) {
      expect(categoryKeys.has(article.category)).toBe(true);
    }
  });
});
