import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/de/kontakt');
  });

  test('form is visible', async ({ page }) => {
    await expect(page.locator('form').last()).toBeVisible();
  });

  test('shows validation errors on empty submit', async ({ page }) => {
    await page.locator('form').last().locator('button[type="submit"]').click();
    await expect(page.locator('[role="alert"]').first()).toBeVisible();
  });

  test('has all required fields', async ({ page }) => {
    const form = page.locator('form').last();
    await expect(form.locator('input[name="name"]')).toBeVisible();
    await expect(form.locator('input[name="email"]')).toBeVisible();
    await expect(form.locator('input[name="subject"]')).toBeVisible();
    await expect(form.locator('textarea[name="message"]')).toBeVisible();
  });

  test('has honeypot field hidden', async ({ page }) => {
    const honeypot = page.locator('input[name="_gotcha"]');
    if (await honeypot.count() > 0) {
      await expect(honeypot).toBeHidden();
    }
  });
});
