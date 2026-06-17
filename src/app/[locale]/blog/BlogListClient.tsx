'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { Clock, ArrowRight, Tag } from 'lucide-react';
import Image from 'next/image';
import type { BlogPost, BlogCategory } from '@/data/blog';

const CATEGORIES: {
  key: BlogCategory | 'all';
  label_de: string;
  label_en: string;
}[] = [
  { key: 'all', label_de: 'Alle', label_en: 'All' },
  { key: 'vereinsnews', label_de: 'Vereinsnews', label_en: 'Club News' },
  { key: 'anbau', label_de: 'Anbau', label_en: 'Cultivation' },
  { key: 'recht', label_de: 'Recht', label_en: 'Legal' },
  { key: 'wissen', label_de: 'Wissen', label_en: 'Knowledge' },
];

interface BlogListClientProps {
  readonly posts: readonly BlogPost[];
  readonly isDE: boolean;
}

export function BlogListClient({ posts, isDE }: BlogListClientProps) {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'all'>('all');

  const filtered =
    activeCategory === 'all' ? posts : posts.filter((p) => p.category === activeCategory);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map(({ key, label_de, label_en }) => {
          const count =
            key === 'all' ? posts.length : posts.filter((p) => p.category === key).length;
          const isActive = activeCategory === key;
          return (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                isActive
                  ? 'bg-accent text-white'
                  : 'bg-accent/10 text-accent hover:bg-accent/20'
              }`}
            >
              {isDE ? label_de : label_en}
              <span className={`text-xs tabular-nums ${isActive ? 'opacity-70' : 'text-ink-faint'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="text-ink-muted py-16 text-center">
          {isDE ? 'Keine Beiträge in dieser Kategorie.' : 'No posts in this category.'}
        </p>
      ) : (
        <div className="space-y-6">
          {filtered.map((post) => {
            const title = isDE ? post.title_de : post.title_en;
            const summary = isDE ? post.summary_de : post.summary_en;
            const date = new Date(post.date + 'T00:00:00');
            const formattedDate = date.toLocaleDateString(isDE ? 'de-DE' : 'en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });

            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                data-testid="blog-post-card"
                className="group flex gap-0 rounded-xl border border-[var(--border)] bg-bg-elevated hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
              >
                {post.image && (
                  <div className="hidden sm:block shrink-0 w-40 relative">
                    <Image
                      src={post.image}
                      alt={title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex-1 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <time dateTime={post.date} className="text-xs font-mono text-ink-faint">
                      <Clock className="w-3 h-3 inline mr-1" />
                      {formattedDate}
                    </time>
                    <span className="text-xs text-ink-faint">·</span>
                    <span className="text-xs text-ink-faint">{post.author}</span>
                  </div>
                  <h2 className="font-heading font-semibold text-xl mb-2 group-hover:text-accent transition-colors">
                    {title}
                  </h2>
                  <p className="text-sm text-ink-muted leading-relaxed mb-4">{summary}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-2 py-0.5 bg-accent/10 text-xs text-accent rounded-full"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowRight className="w-4 h-4 text-ink-faint group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
