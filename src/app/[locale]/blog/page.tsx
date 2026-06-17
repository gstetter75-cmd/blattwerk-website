import { createMetadata } from '@/lib/metadata';
import { setRequestLocale } from 'next-intl/server';
import { blogPosts } from '@/data/blog';
import { HeroImage } from '@/components/decorative/HeroImage';
import { BreadcrumbSchema } from '@/lib/schema';
import { BlogListClient } from './BlogListClient';

const PAGE_META = {
  de: {
    title: 'Blog & Neuigkeiten – Cannabis Social Club Hildesheim',
    description: 'Aktuelle Neuigkeiten von BlattWerk e.V.: Anbaulizenz, Vereinsgründung, Anbau-Updates und Meilensteine aus dem Cannabis Social Club Hildesheim.',
  },
  en: {
    title: 'Blog & News – Cannabis Social Club Hildesheim',
    description: 'Latest news from BlattWerk e.V.: cultivation license, founding, growing updates and milestones from Cannabis Social Club Hildesheim.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return createMetadata(locale, PAGE_META, 'blog');
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isDE = locale === 'de';

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'Home', href: '' },
          { name: 'Blog', href: '/blog' },
        ]}
      />

      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-medium text-accent mb-4">Blog</p>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl leading-tight mb-4">
            {isDE ? 'Blog — Cannabis Social Club Hildesheim' : 'Blog — Cannabis Social Club Hildesheim'}
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed max-w-2xl">
            {isDE
              ? 'Aktuelle Meilensteine, Einblicke und Updates aus unserem Verein.'
              : 'Latest milestones, insights and updates from our association.'}
          </p>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <BlogListClient posts={[...blogPosts].sort((a, b) => b.date.localeCompare(a.date))} isDE={isDE} />
        </div>
      </section>

      <HeroImage
        src="/images/cannabis-leaf-dark.jpg"
        alt={isDE ? 'Cannabis-Blatt im Dunkeln' : 'Cannabis leaf in the dark'}
        height="200px"
        gradient="top"
      />
    </>
  );
}
