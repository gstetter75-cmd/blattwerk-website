import { MetadataRoute } from 'next';
import { allArticles, allCategories } from '@/data/knowledge';
import { strains as allStrains } from '@/data/strains';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://blattwerk-ev.de';
const locales = ['de', 'en'] as const;

function urls(path: string, priority: number, changeFreq: MetadataRoute.Sitemap[0]['changeFrequency']) {
  return locales.map((locale) => ({
    url: `${BASE_URL}/${locale}${path}`,
    lastModified: new Date(),
    changeFrequency: changeFreq,
    priority,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    ...urls('', 1.0, 'weekly'),
    ...urls('/ueber-uns', 0.8, 'monthly'),
    ...urls('/mitgliedschaft', 0.9, 'monthly'),
    ...urls('/sortendatenbank', 0.8, 'weekly'),
    ...urls('/wissensdatenbank', 0.8, 'weekly'),
    ...urls('/events', 0.7, 'weekly'),
    ...urls('/spenden', 0.6, 'monthly'),
    ...urls('/raeumlichkeiten', 0.6, 'monthly'),
    ...urls('/suchtpraevention', 0.7, 'monthly'),
    ...urls('/kontakt', 0.6, 'monthly'),
  ];

  const strainPages = allStrains.flatMap((strain) =>
    urls(`/sortendatenbank/${strain.slug}`, 0.6, 'monthly')
  );

  const knowledgeCategories = allCategories.flatMap((cat) =>
    urls(`/wissensdatenbank/${cat.key}`, 0.7, 'monthly')
  );

  const knowledgeArticles = allArticles.flatMap((article) =>
    urls(`/wissensdatenbank/${article.category}/${article.slug}`, 0.6, 'monthly')
  );

  return [...staticPages, ...strainPages, ...knowledgeCategories, ...knowledgeArticles];
}
