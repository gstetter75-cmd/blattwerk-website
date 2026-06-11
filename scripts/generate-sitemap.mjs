/**
 * Generates a static sitemap.xml from the built output.
 * Includes xhtml:link hreflang alternates for multilingual SEO.
 * Uses real lastmod dates from knowledge articles and blog posts.
 * Run after `next build`: node scripts/generate-sitemap.mjs
 */

import { readdirSync, readFileSync, statSync, writeFileSync } from 'fs';
import { join } from 'path';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://blattwerk.dev';
const OUT_DIR = 'out';
const NOW = new Date().toISOString().split('T')[0];

// ── Parse real lastmod dates from source data ──────────────────────────

function parseKnowledgeLastmods() {
  const map = new Map();
  const dir = 'src/data/knowledge';
  for (const file of readdirSync(dir)) {
    if (!file.endsWith('.ts')) continue;
    const content = readFileSync(join(dir, file), 'utf-8');
    const slugs = [...content.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
    const dates = [...content.matchAll(/last_updated:\s*'(\d{4}-\d{2}-\d{2})'/g)].map((m) => m[1]);
    slugs.forEach((slug, i) => { if (dates[i]) map.set(slug, dates[i]); });
  }
  return map;
}

function parseBlogLastmods() {
  const map = new Map();
  const content = readFileSync('src/data/blog.ts', 'utf-8');
  const slugs = [...content.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
  const dates = [...content.matchAll(/\bdate:\s*'(\d{4}-\d{2}-\d{2})'/g)].map((m) => m[1]);
  slugs.forEach((slug, i) => { if (dates[i]) map.set(slug, dates[i]); });
  return map;
}

const knowledgeLastmods = parseKnowledgeLastmods();
const blogLastmods = parseBlogLastmods();

function getLastmod(path) {
  const wissenMatch = path.match(/\/wissensdatenbank\/[^/]+\/([^/]+)\//);
  if (wissenMatch) return knowledgeLastmods.get(wissenMatch[1]) ?? NOW;
  const blogMatch = path.match(/\/blog\/([^/]+)\//);
  if (blogMatch) return blogLastmods.get(blogMatch[1]) ?? NOW;
  return NOW;
}

// ── Priority by page type ──────────────────────────────────────────────

const HIGH_PRIORITY_SEGMENTS = ['/mitgliedschaft/', '/events/', '/kontakt/'];
const LOW_PRIORITY_SEGMENTS = ['/sortendatenbank/', '/wissensdatenbank/'];

function getPriority(path) {
  if (path === '/de/' || path === '/en/') return '1.0';
  if (HIGH_PRIORITY_SEGMENTS.some((s) => path.includes(s))) return '0.9';
  if (LOW_PRIORITY_SEGMENTS.some((s) => {
    const rest = path.replace(/^\/(de|en)\/wissensdatenbank\/[^/]+\/[^/]+\/$/, 'article');
    return rest === 'article' || path.match(/\/sortendatenbank\/[^/]+\/[^/]+\//);
  })) return '0.7';
  return '0.8';
}

// ── Collect HTML paths from built output ───────────────────────────────

function collectHtmlPaths(dir, base = '') {
  const paths = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const rel = base ? `${base}/${entry}` : entry;
    if (statSync(full).isDirectory()) {
      paths.push(...collectHtmlPaths(full, rel));
    } else if (entry === 'index.html') {
      paths.push(`/${base}/`);
    }
  }
  return paths;
}

const NO_INDEX_SEGMENTS = ['/datenschutz/', '/impressum/'];

const allPaths = collectHtmlPaths(OUT_DIR)
  .filter((p) => p.startsWith('/de/') || p.startsWith('/en/'))
  .filter((p) => !p.includes('/_') && !p.includes('/404/'))
  .filter((p) => !NO_INDEX_SEGMENTS.some((seg) => p.includes(seg)))
  .sort();

const dePathsSet = new Set(allPaths.filter((p) => p.startsWith('/de/')));
const enPathsSet = new Set(allPaths.filter((p) => p.startsWith('/en/')));

function getAlternatePath(path) {
  const suffix = path.replace(/^\/(de|en)/, '');
  const otherLocale = path.startsWith('/de/') ? 'en' : 'de';
  const candidate = `/${otherLocale}${suffix}`;
  const otherSet = path.startsWith('/de/') ? enPathsSet : dePathsSet;
  return otherSet.has(candidate) ? candidate : null;
}

// ── Build sitemap entries ──────────────────────────────────────────────

const urls = allPaths.map((path) => {
  const isHome = path === '/de/' || path === '/en/';
  const priority = getPriority(path);
  const changefreq = isHome ? 'weekly' : 'monthly';
  const lastmod = getLastmod(path);

  const locale = path.startsWith('/de/') ? 'de' : 'en';
  const alternate = getAlternatePath(path);
  const altLocale = locale === 'de' ? 'en' : 'de';
  const defaultPath = locale === 'de' ? path : alternate || path;
  const hreflangEntries = [
    { lang: locale, p: path },
    ...(alternate ? [{ lang: altLocale, p: alternate }] : []),
    { lang: 'x-default', p: defaultPath },
  ];
  const hreflangLinks = hreflangEntries
    .map(({ lang, p }) => `\n    <xhtml:link rel="alternate" hreflang="${lang}" href="${BASE_URL}${p}" />`)
    .join('');

  return `  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>${hreflangLinks}
  </url>`;
}).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

writeFileSync(join(OUT_DIR, 'sitemap.xml'), sitemap);
console.log(`Sitemap generated with ${allPaths.length} URLs (real lastmod dates, with hreflang alternates)`);
