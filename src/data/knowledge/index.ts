import { KnowledgeArticle, KnowledgeCategory } from './types';
import { categories } from './categories';
import { articles } from './articles';
import { preventionArticles } from './articles-prevention';

export type { KnowledgeArticle, KnowledgeCategory };

export const allCategories: readonly KnowledgeCategory[] = categories;

const combinedArticles: readonly KnowledgeArticle[] = [...articles, ...preventionArticles];

export const allArticles: readonly KnowledgeArticle[] = combinedArticles;

export function getArticleBySlug(slug: string): KnowledgeArticle | undefined {
  return combinedArticles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categoryKey: string): readonly KnowledgeArticle[] {
  return combinedArticles.filter((a) => a.category === categoryKey);
}

export function getCategoryByKey(key: string): KnowledgeCategory | undefined {
  return categories.find((c) => c.key === key);
}

export function searchArticles(
  query: string,
  locale: string = 'de'
): readonly KnowledgeArticle[] {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return [];

  return combinedArticles.filter((article) => {
    const title = locale === 'de' ? article.title_de : article.title_en;
    const summary = locale === 'de' ? article.summary_de : article.summary_en;
    const content = locale === 'de' ? article.content_de : article.content_en;
    const tags = article.tags.join(' ');

    const searchable = `${title} ${summary} ${content} ${tags}`.toLowerCase();
    return lowerQuery.split(' ').every((word) => searchable.includes(word));
  });
}
