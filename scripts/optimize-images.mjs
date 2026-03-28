/**
 * Image optimization script using Sharp.
 * Generates WebP versions and responsive variants for all images.
 * Run before `next build`: node scripts/optimize-images.mjs
 *
 * Output structure:
 *   public/images/optimized/<name>-640w.webp
 *   public/images/optimized/<name>-1024w.webp
 *   public/images/optimized/<name>.webp  (original size)
 */

import { readdirSync, statSync, mkdirSync, existsSync } from 'fs';
import { join, basename, extname } from 'path';
import sharp from 'sharp';

const IMAGE_DIR = 'public/images';
const OUTPUT_DIR = 'public/images/optimized';
const WIDTHS = [640, 1024];
const WEBP_QUALITY = 80;
const SKIP_DIRS = ['optimized'];
const SKIP_FILES = ['icon-192.png', 'icon-512.png', 'favicon.ico', 'favicon.svg'];

async function collectImages(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.includes(entry)) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files.push(...(await collectImages(full)));
    } else if (/\.(jpg|jpeg|png)$/i.test(entry) && !SKIP_FILES.includes(entry)) {
      files.push(full);
    }
  }
  return files;
}

function getOutputName(filePath) {
  // Preserve subdirectory structure: knowledge/foo.jpg → knowledge-foo
  const relative = filePath.replace(IMAGE_DIR + '/', '');
  const withoutExt = relative.replace(extname(relative), '');
  return withoutExt.replace(/\//g, '-');
}

async function optimizeImage(filePath) {
  const name = getOutputName(filePath);
  const image = sharp(filePath);
  const metadata = await image.metadata();
  const origWidth = metadata.width || 1200;

  const results = [];

  // Full-size WebP
  const fullOut = join(OUTPUT_DIR, `${name}.webp`);
  if (!existsSync(fullOut)) {
    await sharp(filePath)
      .webp({ quality: WEBP_QUALITY })
      .toFile(fullOut);
    results.push(fullOut);
  }

  // Responsive variants
  for (const width of WIDTHS) {
    if (width >= origWidth) continue;
    const out = join(OUTPUT_DIR, `${name}-${width}w.webp`);
    if (!existsSync(out)) {
      await sharp(filePath)
        .resize(width, null, { withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toFile(out);
      results.push(out);
    }
  }

  return results;
}

async function main() {
  mkdirSync(OUTPUT_DIR, { recursive: true });

  const images = await collectImages(IMAGE_DIR);
  console.log(`Found ${images.length} images to optimize...`);

  let totalCreated = 0;
  let totalSaved = 0;

  for (const img of images) {
    const origSize = statSync(img).size;
    const created = await optimizeImage(img);
    totalCreated += created.length;

    if (created.length > 0) {
      const newSizes = created.map((f) => statSync(f).size);
      const savings = origSize - Math.min(...newSizes);
      totalSaved += savings > 0 ? savings : 0;
      const pct = ((savings / origSize) * 100).toFixed(0);
      console.log(`  ${basename(img)} → ${created.length} variants (${pct}% smaller)`);
    }
  }

  console.log(`\nDone: ${totalCreated} files created, ~${(totalSaved / 1024).toFixed(0)}KB saved`);
}

main().catch(console.error);
