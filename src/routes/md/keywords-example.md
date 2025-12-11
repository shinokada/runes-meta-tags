import type { MetaProps } from 'runes-meta-tags';

// In +layout.server.ts - keywords as string
const layoutMetaTags: MetaProps = {
  keywords: 'svelte, sveltekit, typescript, web development'
};

// Alternative: keywords as array
const layoutMetaTagsArray: MetaProps = {
  keywords: ['svelte', 'sveltekit', 'typescript', 'web development']
};

// Pages automatically inherit keywords from layout
// No need to repeat them in +page.ts unless overriding

// Override keywords for specific page
export const load = ({ url }) => {
  const pageMetaTags: MetaProps = {
    title: 'Blog Post',
    keywords: 'blog, tutorial, svelte 5, runes' // ← overrides layout keywords
  };
  return { pageMetaTags };
};