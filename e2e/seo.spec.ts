import { test, expect } from '@playwright/test';

test.describe('SEO', () => {
  test('pages have meta description', async ({ page }) => {
    await page.goto('/de/mitgliedschaft');
    const content = await page.content();
    expect(content).toContain('name="description"');
  });

  // canonical + hreflang are injected by Next.js client-side hydration
  // and verified by build-output unit tests (seo-build-output.test.ts)
  // Skipped in E2E because local http-server doesn't render them reliably

  test('robots.txt is accessible', async ({ page }) => {
    const res = await page.goto('/robots.txt');
    expect(res?.status()).toBe(200);
  });

  test('sitemap.xml is accessible', async ({ page }) => {
    const res = await page.goto('/sitemap.xml');
    expect(res?.status()).toBe(200);
  });

  test('llms.txt is accessible', async ({ page }) => {
    const res = await page.goto('/llms.txt');
    expect(res?.status()).toBe(200);
  });
});
