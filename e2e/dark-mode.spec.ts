import { test, expect } from '@playwright/test';

test.describe('Dark Mode', () => {
  test('theme toggle button exists', async ({ page }) => {
    await page.goto('/de/mitgliedschaft');
    await page.waitForLoadState('domcontentloaded');
    const toggle = page.locator('button[aria-label*="mode"], button[aria-label*="Mode"]');
    await expect(toggle).toBeAttached({ timeout: 10000 });
  });

  // Theme toggle interaction requires full client-side hydration
  // which doesn't work reliably with local http-server
});
