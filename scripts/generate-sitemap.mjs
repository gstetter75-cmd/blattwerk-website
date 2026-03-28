/**
 * Generates a static sitemap.xml from the built output.
 * Includes xhtml:link hreflang alternates for multilingual SEO.
 * Run after `next build`: node scripts/generate-sitemap.mjs
 */

import { readdirSync, statSync, writeFileSync } from 'fs';
import { join } from 'path';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://blattwerk.dev';
const OUT_DIR = 'out';
const NOW = new Date().toISOString().split('T')[0];

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

// Pages marked with noIndex in metadata — exclude from sitemap
const NO_INDEX_SEGMENTS = ['/datenschutz/', '/impressum/'];

const allPaths = collectHtmlPaths(OUT_DIR)
  .filter((p) => p.startsWith('/de/') || p.startsWith('/en/'))
  .filter((p) => !p.includes('/_') && !p.includes('/404/'))
  .filter((p) => !NO_INDEX_SEGMENTS.some((seg) => p.includes(seg)))
  .sort();

// Group DE/EN pairs by their path suffix (e.g. /mitgliedschaft/)
const dePaths = allPaths.filter((p) => p.startsWith('/de/'));
const enPaths = new Set(allPaths.filter((p) => p.startsWith('/en/')));

function getAlternatePath(path) {
  const suffix = path.replace(/^\/(de|en)/, '');
  const otherLocale = path.startsWith('/de/') ? 'en' : 'de';
  const candidate = `/${otherLocale}${suffix}`;
  const otherSet = path.startsWith('/de/') ? enPaths : new Set(dePaths);
  return otherSet.has(candidate) ? candidate : null;
}

const urls = allPaths.map((path) => {
  const isHome = path === '/de/' || path === '/en/';
  const priority = isHome ? '1.0' : path.includes('/sortendatenbank/') || path.includes('/wissensdatenbank/') ? '0.7' : '0.8';
  const changefreq = isHome ? 'weekly' : 'monthly';

  const locale = path.startsWith('/de/') ? 'de' : 'en';
  const alternate = getAlternatePath(path);

  let hreflangLinks = `
    <xhtml:link rel="alternate" hreflang="${locale}" href="${BASE_URL}${path}" />`;
  if (alternate) {
    const altLocale = locale === 'de' ? 'en' : 'de';
    hreflangLinks += `
    <xhtml:link rel="alternate" hreflang="${altLocale}" href="${BASE_URL}${alternate}" />`;
  }
  // x-default points to DE version
  const defaultPath = locale === 'de' ? path : alternate || path;
  hreflangLinks += `
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${defaultPath}" />`;

  return `  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${NOW}</lastmod>
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
console.log(`Sitemap generated with ${allPaths.length} URLs (with hreflang alternates)`);
