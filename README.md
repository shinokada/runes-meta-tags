# Runes Meta Tags

<p align="center">
  <img src="https://open-graph-vercel.vercel.app/api/runes-meta-tags" alt="Runes Meta Tags" />
</p>

<p align="center">
  <strong>Powerful and type-safe meta tag management for SvelteKit applications</strong>
</p>

<p align="center">
  <a href="https://runes-meta-tags.codewithshin.com/">Documentation</a> •
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#examples">Examples</a>
</p>

---

## Overview

Runes Meta Tags is a comprehensive meta tag management library for SvelteKit that makes it easy to configure SEO, Open Graph, Twitter Cards, and other meta tags. With built-in TypeScript support and deep merging capabilities, you can define default meta tags at the layout level and override them on specific pages.

## Features

- ✨ **Easy-to-use API** with full TypeScript support
- 🔄 **Deep merge support** for inheriting and overriding meta tags
- 🌐 **Full Open Graph protocol** support (Facebook, LinkedIn, etc.)
- 🐦 **Twitter Card** meta tags with all card types
- 🤖 **Robots meta tag** configuration (noindex, nofollow, etc.)
- 📱 **Responsive social media** images and previews
- 🎯 **Article, video, and product** content type support
- 🔗 **Canonical URL** support for duplicate content
- 🧪 **Helper functions** for consistent meta tag generation
- ⚡ **Optimized for Svelte 5** runes ($derived, $props)

## Installation

```bash
pnpm i -D runes-meta-tags
# or
npm i -D runes-meta-tags
# or  
yarn add -D runes-meta-tags
# or
bun add -D runes-meta-tags
```

## Quick Start

### 1. Configure Layout Meta Tags

Create `src/routes/+layout.server.ts`:

```typescript
import type { MetaProps } from 'runes-meta-tags';

export const load = ({ url }) => {
  const layoutMetaTags: MetaProps = {
    title: 'My Awesome Site',
    description: 'Welcome to my site built with SvelteKit',
    keywords: 'svelte, sveltekit, web development',
    og: {
      type: 'website',
      title: 'My Awesome Site',
      description: 'Welcome to my site built with SvelteKit',
      url: url.href,
      image: 'https://example.com/og-image.jpg',
      siteName: 'My Awesome Site'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'My Awesome Site',
      description: 'Welcome to my site built with SvelteKit'
    }
  };

  return { layoutMetaTags };
};
```

### 2. Setup Layout Component

Create `src/routes/+layout.svelte`:

```svelte
<script lang="ts">
  import { MetaTags, deepMerge } from 'runes-meta-tags';
  import { page } from '$app/stores';
  
  let { children, data } = $props();

  let metaTags = $derived(
    $page.data.pageMetaTags
      ? deepMerge(data.layoutMetaTags, $page.data.pageMetaTags)
      : data.layoutMetaTags
  );
</script>

<MetaTags {...metaTags} />
{@render children()}
```

### 3. Override Meta Tags on Specific Pages

Create `src/routes/about/+page.ts`:

```typescript
import type { MetaProps } from 'runes-meta-tags';

export const load = ({ url }) => {
  const pageMetaTags: MetaProps = {
    title: 'About Us - My Awesome Site',
    description: 'Learn more about our team',
    og: {
      title: 'About Us',
      url: url.href
    }
  };

  return { pageMetaTags };
};
```

That's it! The page will inherit all layout meta tags except those you explicitly override.

## Examples

### Blog Article with Article Meta Tags

```typescript
import type { MetaProps } from 'runes-meta-tags';

export const load = ({ url }) => {
  const pageMetaTags: MetaProps = {
    title: 'Understanding Svelte 5 Runes',
    og: {
      type: 'article',
      url: url.href,
      article: {
        publishedTime: '2024-01-15T09:00:00.000Z',
        author: ['John Doe'],
        section: 'Web Development',
        tag: ['Svelte', 'Tutorial', 'JavaScript']
      }
    }
  };
  return { pageMetaTags };
};
```

### Video Content

```typescript
const pageMetaTags: MetaProps = {
  og: {
    type: 'video',
    video: {
      url: 'https://example.com/video.mp4',
      secureUrl: 'https://example.com/video.mp4',
      type: 'video/mp4',
      width: 1280,
      height: 720
    }
  },
  twitter: {
    card: 'player',
    playerUrl: 'https://example.com/player'
  }
};
```

### Robots Configuration

```typescript
// Block search engines from indexing
const pageMetaTags: MetaProps = {
  robots: false
};

// Advanced robots configuration
const pageMetaTags: MetaProps = {
  robots: {
    index: true,
    follow: false,
    nocache: true,
    googleBot: 'nosnippet'
  }
};
```

### Helper Functions

```typescript
import { metaTitle, metaDescription, metaImg, splitAndCapitalize } from 'runes-meta-tags';

const title = metaTitle('/blog/svelte-5', 'My Site');
// Result: "Blog Svelte 5 - My Site"

const description = metaDescription('/blog/svelte-5', 'Learn about');
// Result: "Blog Svelte 5 - Learn about"

const image = metaImg('/blog/svelte-5', 'mysite.com');
// Result: "https://open-graph-vercel.vercel.app/api/mysite.com?title=Blog%20Svelte%205"
```

## API Reference

### MetaProps Interface

```typescript
interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  author?: string;
  canonical?: string;
  robots?: boolean | {
    index?: boolean;
    follow?: boolean;
    nocache?: boolean;
    googleBot?: string;
  };
  og?: {
    type?: 'website' | 'article' | 'product' | 'book' | 'profile' | 'music' | 'video';
    title?: string;
    description?: string;
    url?: string;
    image?: string;
    imageAlt?: string;
    siteName?: string;
    locale?: string;
    article?: ArticleType;
    video?: VideoType;
    // ... more properties
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    title?: string;
    description?: string;
    image?: string;
    site?: string;
    creator?: string;
    // ... more properties
  };
}
```

See [full API documentation](https://runes-meta-tags.codewithshin.com/) for complete details.

## Deep Merge Behavior

The `deepMerge` function intelligently combines layout and page-specific meta tags:

```typescript
// Layout
const layoutMetaTags = {
  title: 'My Site',
  keywords: 'svelte, web',
  og: {
    title: 'My Site',
    image: 'default.jpg',
    siteName: 'My Site'
  }
};

// Page
const pageMetaTags = {
  title: 'About',
  og: {
    title: 'About',
    url: 'https://example.com/about'
  }
};

// Result after deepMerge
{
  title: 'About',              // ← overridden
  keywords: 'svelte, web',     // ← inherited
  og: {
    title: 'About',            // ← overridden
    url: 'https://...',        // ← added
    image: 'default.jpg',      // ← inherited
    siteName: 'My Site'        // ← inherited
  }
}
```

## Testing

Example Playwright test:

```typescript
import { expect, test } from '@playwright/test';

test('about page has correct meta tags', async ({ page }) => {
  await page.goto('/about');
  
  await expect(page).toHaveTitle('About Us - My Site');
  
  const metaDescription = page.locator('meta[name="description"]');
  await expect(metaDescription).toHaveAttribute('content', 'Learn about us');
  
  const metaOgUrl = page.locator('meta[property="og:url"]');
  await expect(metaOgUrl).toHaveAttribute('content', 'http://localhost:4173/about');
});
```

## Migration from v0.4.x

**Component Rename**: As of v0.5.0, use `MetaTags` instead of `RunesMetaTags`:

```diff
- import { RunesMetaTags } from 'runes-meta-tags';
+ import { MetaTags } from 'runes-meta-tags';

- <RunesMetaTags {...metaTags} />
+ <MetaTags {...metaTags} />
```

The old `RunesMetaTags` export is deprecated and will be removed in v1.0.0.

## Best Practices

✅ **DO:**
- Define common meta tags in `+layout.server.ts`
- Use `deepMerge` to inherit layout meta tags
- Always include `og:url` using `url.href` in page-specific meta tags
- Test your meta tags with Playwright
- Use helper functions for consistency

❌ **DON'T:**
- Duplicate entire meta tag structures on every page
- Hardcode URLs - use `url.href`
- Forget to add `url` parameter to load functions
- Skip testing meta tags

## Documentation

Full documentation with interactive examples: [runes-meta-tags.codewithshin.com](https://runes-meta-tags.codewithshin.com/)

## License

MIT

## Author

Created by [Shinichi Okada](https://github.com/shinokada)

---

<p align="center">
  <a href="https://ko-fi.com/Z8Z2CHALG">
    <img src="https://storage.ko-fi.com/cdn/kofi3.png?v=3" height="40" alt="Buy Me a Coffee">
  </a>
</p>
