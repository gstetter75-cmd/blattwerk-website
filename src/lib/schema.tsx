/**
 * Schema.org JSON-LD structured data components.
 * Provides Organization, BreadcrumbList, Article, and FAQPage schemas.
 */

import type { ReactNode } from 'react';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://blattwerk.dev';

/* ── Helpers ──────────────────────────────────────────────────────────── */

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ── Organization (Homepage) ──────────────────────────────────────────── */

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'BlattWerk e.V.',
        legalName: 'BlattWerk e.V.',
        url: BASE_URL,
        logo: `${BASE_URL}/images/logo.png`,
        description:
          'Cannabis Social Club in Hildesheim. Gemeinschaft, Aufklärung und verantwortungsvoller Umgang mit Cannabis.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Wetzellplatz 2',
          addressLocality: 'Hildesheim',
          postalCode: '31137',
          addressCountry: 'DE',
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            email: 'info@blattwerk.dev',
            telephone: '+4915233539841',
            contactType: 'customer service',
            availableLanguage: ['German', 'English'],
          },
        ],
        sameAs: [
          'https://www.instagram.com/blattwerk_ev',
        ],
      }}
    />
  );
}

/* ── WebSite (Homepage — enables Sitelinks Searchbox) ────────────────── */

export function WebSiteSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'BlattWerk e.V.',
        url: BASE_URL,
        inLanguage: ['de-DE', 'en-US'],
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${BASE_URL}/de/?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      }}
    />
  );
}

/* ── BreadcrumbList ───────────────────────────────────────────────────── */

interface BreadcrumbItem {
  readonly name: string;
  readonly href: string;
}

export function BreadcrumbSchema({
  items,
  locale = 'de',
}: {
  items: readonly BreadcrumbItem[];
  locale?: string;
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.name,
          item: `${BASE_URL}/${locale}${item.href}`,
        })),
      }}
    />
  );
}

/* ── Article ──────────────────────────────────────────────────────────── */

interface ArticleSchemaProps {
  readonly title: string;
  readonly description: string;
  readonly slug: string;
  readonly category: string;
  readonly locale?: string;
  readonly datePublished?: string;
  readonly dateModified?: string;
  readonly readingTime?: number;
}

export function ArticleSchema({
  title,
  description,
  slug,
  category,
  locale = 'de',
  datePublished,
  dateModified,
  readingTime,
}: ArticleSchemaProps) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        url: `${BASE_URL}/${locale}/wissensdatenbank/${category}/${slug}`,
        author: {
          '@type': 'Organization',
          name: 'BlattWerk e.V.',
        },
        publisher: {
          '@type': 'Organization',
          name: 'BlattWerk e.V.',
          logo: {
            '@type': 'ImageObject',
            url: `${BASE_URL}/images/logo.png`,
          },
        },
        ...(datePublished ? { datePublished } : {}),
        ...(dateModified ? { dateModified } : {}),
        ...(readingTime
          ? { timeRequired: `PT${readingTime}M` }
          : {}),
        inLanguage: locale === 'de' ? 'de-DE' : 'en-US',
      }}
    />
  );
}

/* ── FAQPage ──────────────────────────────────────────────────────────── */

interface FAQItem {
  readonly question: string;
  readonly answer: string;
}

export function FAQSchema({ items }: { items: readonly FAQItem[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }}
    />
  );
}
