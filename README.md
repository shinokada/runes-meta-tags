# Runes Meta Tags

Runes Meta Tags manages the meta tags for a web page. It allows you to easily configure various meta tags including basic SEO (Search Engine Optimization) information, robots meta tag, and social media specific meta tags for Twitter and Open Graph.

[Docs](https://runes-meta-tags.codewithshin.com/)

## Installation

```sh
pnpm i -D runes-meta-tags
```

## Usage

Please see [Docs](https://runes-meta-tags.codewithshin.com/)

## Important: Component Rename

**As of version 0.5.0**, the main component has been renamed from `RunesMetaTags` to `MetaTags` for better developer experience and shorter imports.

- ✅ **Use**: `MetaTags` (recommended)
- ⚠️ **Deprecated**: `RunesMetaTags` (will be removed in v1.0.0)

Both components are currently exported and functionally identical, but please migrate to `MetaTags` for future compatibility.

```svelte
<!-- Old (deprecated) -->
import { RunesMetaTags } from 'runes-meta-tags';

<!-- New (recommended) -->
import { MetaTags } from 'runes-meta-tags';
```
