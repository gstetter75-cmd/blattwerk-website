import { test, expect } from '@playwright/test';

test.describe('Blog Category Filter', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/de/blog');
  });

  test('shows all 14 posts by default', async ({ page }) => {
    const posts = page.locator('[data-testid="blog-post-card"]');
    await expect(posts).toHaveCount(14);
  });

  test('filter buttons are visible with correct counts', async ({ page }) => {
    await expect(page.getByRole('button', { name: /Alle.*14/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /Vereinsnews.*6/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /Anbau.*4/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /Recht.*3/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /Wissen.*1/ })).toBeVisible();
  });

  test('Anbau filter shows 4 posts', async ({ page }) => {
    await page.getByRole('button', { name: /Anbau/ }).click();
    const posts = page.locator('[data-testid="blog-post-card"]');
    await expect(posts).toHaveCount(4);
  });

  test('Recht filter shows 3 posts', async ({ page }) => {
    await page.getByRole('button', { name: /Recht/ }).click();
    const posts = page.locator('[data-testid="blog-post-card"]');
    await expect(posts).toHaveCount(3);
  });

  test('Vereinsnews filter shows 6 posts', async ({ page }) => {
    await page.getByRole('button', { name: /Vereinsnews/ }).click();
    const posts = page.locator('[data-testid="blog-post-card"]');
    await expect(posts).toHaveCount(6);
  });

  test('Wissen filter shows 1 post', async ({ page }) => {
    await page.getByRole('button', { name: /Wissen/ }).click();
    const posts = page.locator('[data-testid="blog-post-card"]');
    await expect(posts).toHaveCount(1);
  });

  test('switching back to Alle restores all posts', async ({ page }) => {
    await page.getByRole('button', { name: /Anbau/ }).click();
    await expect(page.locator('[data-testid="blog-post-card"]')).toHaveCount(4);
    await page.getByRole('button', { name: /Alle/ }).click();
    await expect(page.locator('[data-testid="blog-post-card"]')).toHaveCount(14);
  });
});
