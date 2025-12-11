export interface MetaProps {
  // Page title (appears in browser tab and search results)
  title?: string;
  
  // Page description for SEO
  description?: string;
  
  // Keywords for SEO (string or array)
  keywords?: string | string[];
  
  // Page author
  author?: string;
  
  // Viewport configuration (defaults handled automatically)
  viewport?: string;
  
  // Canonical URL (for duplicate content)
  canonical?: string;
  
  // Robots meta tag configuration
  robots?:
    | boolean  // true = "index,follow", false = "noindex,nofollow"
    | {
        index?: boolean;      // Allow/disallow indexing
        follow?: boolean;     // Allow/disallow following links
        nocache?: boolean;    // Disable caching
        googleBot?: string;   // Custom Google bot rules
      };
  
  // Open Graph (Facebook, LinkedIn, etc.)
  og?: {
    type?: 'website' | 'article' | 'product' | 'book' | 'profile' | 'music' | 'video';
    title?: string;
    description?: string;
    url?: string;              // Page URL (use url.href)
    image?: string;            // Image URL for social sharing
    imageAlt?: string;         // Image alt text
    imageSecureUrl?: string;   // HTTPS image URL
    imageWidth?: string | number;
    imageHeight?: string | number;
    siteName?: string;         // Your site name
    locale?: string;           // Page locale (e.g., 'en_US')
    localeAlternate?: string[];// Alternate locales
    video?: string | VideoType;
    audio?: string;
    article?: ArticleType;     // For blog posts/articles
    determiner?: 'a' | 'an' | 'the' | 'auto' | '';
  };
  
  // Twitter Card
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    site?: string;      // @username of website
    creator?: string;   // @username of content creator
    title?: string;
    description?: string;
    image?: string;
    imageAlt?: string;
    // Player card properties
    playerUrl?: string;
    playerWidth?: string;
    playerHeight?: string;
    // App card properties
    appIdIphone?: string;
    appIdIpad?: string;
    appIdGooglePlay?: string;
    appName?: string;
    appCountry?: string;
  };
}