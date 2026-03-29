import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('Mitgliedschaft page loads', async ({ page }) => {
    await page.goto('/de/mitgliedschaft');
    const content = await page.content();
    expect(content).toContain('Mitglied werden');
  });

  test('Über uns page loads', async ({ page }) => {
    await page.goto('/de/ueber-uns');
    await expect(page).toHaveTitle(/BlattWerk/);
  });

  test('Sortendatenbank page loads', async ({ page }) => {
    await page.goto('/de/sortendatenbank');
    await expect(page).toHaveTitle(/BlattWerk/);
  });

  test('Wissensdatenbank page loads', async ({ page }) => {
    await page.goto('/de/wissensdatenbank');
    await expect(page).toHaveTitle(/BlattWerk/);
  });

  test('Events page loads', async ({ page }) => {
    await page.goto('/de/events');
    await expect(page).toHaveTitle(/BlattWerk/);
  });

  test('Kontakt page loads', async ({ page }) => {
    await page.goto('/de/kontakt');
    await expect(page).toHaveTitle(/BlattWerk/);
  });

  test('EN Mitgliedschaft page loads', async ({ page }) => {
    await page.goto('/en/mitgliedschaft');
    const content = await page.content();
    expect(content).toContain('lang="en"');
  });
});
