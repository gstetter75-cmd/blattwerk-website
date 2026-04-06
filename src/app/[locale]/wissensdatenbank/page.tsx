import { createMetadata, PAGE_META } from '@/lib/metadata';
import { setRequestLocale } from 'next-intl/server';
import { allCategories, getArticlesByCategory } from '@/data/knowledge';
import { WissensdatenbankClient } from './WissensdatenbankClient';
import { BreadcrumbSchema } from '@/lib/schema';
import { HeroImage } from '@/components/decorative/HeroImage';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return createMetadata(locale, PAGE_META.knowledge, 'wissensdatenbank');
}

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
      <HeroImage
        src="/images/knowledge/terpenes-herbs.jpg"
        alt={locale === 'de' ? 'Kräuter und Terpene' : 'Herbs and terpenes'}
        height="200px"
        gradient="top"
      />
    </>
  );
}
