import { deepMerge } from 'runes-meta-tags';
import type { MetaProps } from 'runes-meta-tags';

// Layout meta tags (defaults)
const layoutMetaTags: MetaProps = {
  title: 'My Site',
  description: 'Welcome to my site',
  keywords: 'svelte, runes, web',
  og: {
    title: 'My Site',
    image: 'https://example.com/default.jpg',
    siteName: 'My Site'
  }
};

// Page-specific meta tags (overrides)
const pageMetaTags: MetaProps = {
  title: 'About - My Site',
  og: {
    title: 'About - My Site',
    url: 'https://example.com/about'
  }
};

// Deep merge combines them intelligently
const merged = deepMerge(layoutMetaTags, pageMetaTags);

// Result:
// {
//   title: 'About - My Site',          // ← overridden
//   description: 'Welcome to my site',  // ← inherited
//   keywords: 'svelte, runes, web',     // ← inherited
//   og: {
//     title: 'About - My Site',         // ← overridden
//     url: 'https://example.com/about', // ← added
//     image: 'https://example.com/default.jpg', // ← inherited
//     siteName: 'My Site'               // ← inherited
//   }
// }