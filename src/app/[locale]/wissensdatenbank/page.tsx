import { setRequestLocale } from 'next-intl/server';
import { allCategories, getArticlesByCategory } from '@/data/knowledge';
import { WissensdatenbankClient } from './WissensdatenbankClient';

export default async function KnowledgeBasePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isDE = locale === 'de';

  const categoriesWithCount = allCategories.map((category) => ({
    ...category,
    articleCount: getArticlesByCategory(category.key).length,
  }));

  return <WissensdatenbankClient isDE={isDE} categories={categoriesWithCount} />;
}
