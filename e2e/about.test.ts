import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	console.log(`Running ${test.info().title}`);
	await page.goto('/about');
});

test('about page has expected h1, meta title', async ({ page }) => {
	await expect(page.getByRole('heading', { name: 'About' })).toBeVisible();
});

test('about page has expected meta title', async ({ page }) => {
	await expect(page).toHaveTitle('About - Runes Meta Tags');
});

test('about page has expected meta description', async ({ page }) => {
	const metaDescription = page.locator('meta[name="description"]');
	await expect(metaDescription).toHaveAttribute('content', 'About page: Meta tag for Svelte Runes');
});

test('about page has expected meta og', async ({ page }) => {
	const metaOgTitle = page.locator('meta[property="og:title"]');
	await expect(metaOgTitle).toHaveAttribute('content', 'About - Runes Meta Tags');
	const metaOgDescription = page.locator('meta[property="og:description"]');
	await expect(metaOgDescription).toHaveAttribute(
		'content',
		'About page: Meta tag for Svelte Runes'
	);
	const metaOgUrl = page.locator('meta[property="og:url"]');
	await expect(metaOgUrl).toHaveAttribute('content', 'http://localhost:4173/about');
	const metaOgImage = page.locator('meta[property="og:image"]');
	await expect(metaOgImage).toHaveAttribute(
		'content',
		'https://open-graph-vercel.vercel.app/api/runes-meta-tags'
	);
});

test('about page has expected meta twitter', async ({ page }) => {
	const metaTwitterTitle = page.locator('meta[name="twitter:title"]');
	await expect(metaTwitterTitle).toHaveAttribute('content', 'About - Runes Meta Tags');
	const metaTwitterDescription = page.locator('meta[name="twitter:description"]');
	await expect(metaTwitterDescription).toHaveAttribute(
		'content',
		'About page: Meta tag for Svelte Runes'
	);
	const metaTwitterImage = page.locator('meta[name="twitter:image"]');
	await expect(metaTwitterImage).toHaveAttribute(
		'content',
		'https://open-graph-vercel.vercel.app/api/runes-meta-tags'
	);
});
