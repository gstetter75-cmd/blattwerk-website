import { test, expect } from '@playwright/test';

test.describe('Accessibility', () => {
  // Skip link and main content are verified in build-output unit tests.
  // Local http-server doesn't fully hydrate Next.js client components.

  test('heading hierarchy has h1', async ({ page }) => {
    await page.goto('/de/ueber-uns');
    const content = await page.content();
    expect(content).toContain('<h1');
  });

  test('language attribute DE', async ({ page }) => {
    await page.goto('/de/kontakt');
    const content = await page.content();
    expect(content).toContain('lang="de"');
  });

  test('language attribute EN', async ({ page }) => {
    await page.goto('/en/mitgliedschaft');
    const content = await page.content();
    expect(content).toContain('lang="en"');
  });
});
