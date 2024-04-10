import { expect, test } from '@playwright/test';

test('index page has expected h1, meta title', async ({ page }) => {
await page.goto('/');
await expect(page.getByRole('heading', { name: 'Runes Meta Tags' })).toBeVisible();
await expect(page).toHaveTitle('Runes Meta Tags');
const metaDescription = page.locator('meta[name="description"]');
await expect(metaDescription).toHaveAttribute('content', 'Meta tags for Runes.');
const metaKeywords = page.locator('meta[name="keywords"]');
await expect(metaKeywords).toHaveAttribute('content', 'runes, meta, tags');
const metaOgTitle = page.locator('meta[property="og:title"]');
await expect(metaOgTitle).toHaveAttribute('content', 'Runes meta');
const metaOgDescription = page.locator('meta[property="og:description"]');
await expect(metaOgDescription).toHaveAttribute('content', 'Meta tags for Runes.');
const metaOgUrl = page.locator('meta[property="og:url"]');
await expect(metaOgUrl).toHaveAttribute('content', 'http://localhost:4173/');
const metaOgImage = page.locator('meta[property="og:image"]');
await expect(metaOgImage).toHaveAttribute(
'content',
'https://open-graph-vercel.vercel.app/api/runes-meta'
);
const metaTwitterTitle = page.locator('meta[name="twitter:title"]');
await expect(metaTwitterTitle).toHaveAttribute('content', 'Runes meta');
const metaTwitterDescription = page.locator('meta[name="twitter:description"]');
await expect(metaTwitterDescription).toHaveAttribute('content', 'Meta tags for Runes.');
});

test('about page has expected h1, meta title', async ({ page }) => {
await page.goto('/about');
await expect(page.getByRole('heading', { name: 'About' })).toBeVisible();
await expect(page).toHaveTitle('About | Runes Meta Tag');
const metaDescription = page.locator('meta[name="description"]');
await expect(metaDescription).toHaveAttribute('content', 'About page for Runes Meta Tag.');
const metaOgTitle = page.locator('meta[property="og:title"]');
await expect(metaOgTitle).toHaveAttribute('content', 'About | Runes Meta Tag');
const metaOgDescription = page.locator('meta[property="og:description"]');
await expect(metaOgDescription).toHaveAttribute('content', 'About page for Runes Meta Tag.');
const metaTwitterTitle = page.locator('meta[name="twitter:title"]');
await expect(metaTwitterTitle).toHaveAttribute('content', 'About | Runes Meta Tag');
const metaTwitterDescription = page.locator('meta[name="twitter:description"]');
await expect(metaTwitterDescription).toHaveAttribute('content', 'About page for Runes Meta Tag.');
});
