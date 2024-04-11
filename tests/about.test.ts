import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('/about');
});

test('about page has expected h1, meta title', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'About' })).toBeVisible();
});

test('about page has expected meta title', async ({ page }) => {
  await expect(page).toHaveTitle('About | Runes Meta Tag');
});

test('about page has expected meta description', async ({ page }) => {
  const metaDescription = page.locator('meta[name="description"]');
  await expect(metaDescription).toHaveAttribute('content', 'About page for Runes Meta Tag.');
});

test('about page has expected meta og', async ({ page }) => {
  const metaOgTitle = page.locator('meta[property="og:title"]');
  await expect(metaOgTitle).toHaveAttribute('content', 'About | Runes Meta Tag');
  const metaOgDescription = page.locator('meta[property="og:description"]');
  await expect(metaOgDescription).toHaveAttribute('content', 'About page for Runes Meta Tag.');
});

test('about page has expected meta twitter', async ({ page }) => {
  const metaTwitterTitle = page.locator('meta[name="twitter:title"]');
  await expect(metaTwitterTitle).toHaveAttribute('content', 'About | Runes Meta Tag');
  const metaTwitterDescription = page.locator('meta[name="twitter:description"]');
  await expect(metaTwitterDescription).toHaveAttribute('content', 'About page for Runes Meta Tag.');
});
