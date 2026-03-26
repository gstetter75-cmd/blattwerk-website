import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { allCategories, getArticlesByCategory } from '@/data/knowledge';
import { WissensdatenbankClient } from './WissensdatenbankClient';
import { BreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Wissensdatenbank',
  description:
    'Umfassende Wissensdatenbank zu Cannabis: Recht, Medizin, Safer Use, Prävention, Anbau und mehr. 40+ fundierte Artikel von BlattWerk e.V.',
};

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

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'Home', href: '' },
          { name: isDE ? 'Wissensdatenbank' : 'Knowledge Base', href: '/wissensdatenbank' },
        ]}
      />
      <WissensdatenbankClient isDE={isDE} categories={categoriesWithCount} />
    </>
  );
}
