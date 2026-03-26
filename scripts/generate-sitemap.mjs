/**
 * Generates a static sitemap.xml from the built output.
 * Run after `next build`: node scripts/generate-sitemap.mjs
 */

import { readdirSync, statSync, writeFileSync } from 'fs';
import { join } from 'path';

const BASE_URL = 'https://gstetter75-cmd.github.io/blattwerk-website';
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

const paths = collectHtmlPaths(OUT_DIR)
  .filter((p) => p.startsWith('/de/') || p.startsWith('/en/'))
  .filter((p) => !p.includes('/_') && !p.includes('/404/'))
  .sort();

const urls = paths.map((path) => {
  const isHome = path === '/de/' || path === '/en/';
  const priority = isHome ? '1.0' : path.includes('/sortendatenbank/') || path.includes('/wissensdatenbank/') ? '0.7' : '0.8';
  const changefreq = isHome ? 'weekly' : 'monthly';
  return `  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${NOW}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(join(OUT_DIR, 'sitemap.xml'), sitemap);
console.log(`Sitemap generated with ${paths.length} URLs`);
