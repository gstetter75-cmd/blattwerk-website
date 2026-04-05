export interface ArticleImage {
  src: string;
  alt_de: string;
  alt_en: string;
}

export interface KnowledgeArticle {
  slug: string;
  category: string;
  title_de: string;
  title_en: string;
  summary_de: string;
  summary_en: string;
  content_de: string;
  content_en: string;
  tags: string[];
  reading_time: number;
  last_updated: string;
  related_slugs: string[];
  images?: ArticleImage[];
}

export interface KnowledgeCategory {
  key: string;
  label_de: string;
  label_en: string;
  description_de: string;
  description_en: string;
  icon: string;
  intro_de?: string;
  intro_en?: string;
}
