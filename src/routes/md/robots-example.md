import type { MetaProps } from 'runes-meta-tags';

// Simple boolean robots configuration
const allowIndexing: MetaProps = {
  robots: true  // Generates: <meta name="robots" content="index,follow">
};

const blockIndexing: MetaProps = {
  robots: false  // Generates: <meta name="robots" content="noindex,nofollow">
};

// Advanced robots configuration
const customRobots: MetaProps = {
  robots: {
    index: true,      // Allow indexing
    follow: false,    // Don't follow links
    nocache: true,    // Don't cache this page
    googleBot: 'nosnippet,notranslate'  // Custom rules for Google
  }
  // Generates:
  // <meta name="robots" content="index,nofollow,nocache">
  // <meta name="googlebot" content="nosnippet,notranslate">
};

// Example: Admin page (no indexing)
export const load = () => {
  const pageMetaTags: MetaProps = {
    title: 'Admin Dashboard',
    robots: false  // Keep admin pages out of search results
  };
  return { pageMetaTags };
};

// Example: Draft blog post (no indexing, but follow links)
export const load = () => {
  const pageMetaTags: MetaProps = {
    title: 'Draft: Upcoming Features',
    robots: {
      index: false,
      follow: true
    }
  };
  return { pageMetaTags };
};