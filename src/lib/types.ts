export interface ArticleType {
  publishedTime?: string;
  modifiedTime?: string;
  expirationTime?: string;
  author?: string | string[];
  section?: string;
  tag?: string | string[];
}

export interface VideoType {
  url?: string;
  secureUrl?: string;
  type?: string;
  width?: number;
  height?: number;
}

export interface TwitterType {
  card?: 'summary' | 'summary_large_image' | 'app' | 'player';
  site?: string;
  creator?: string;
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  // Player card specific properties
  playerUrl?: string;
  playerWidth?: string;
  playerHeight?: string;
  // App card specific properties
  appIdIphone?: string;
  appIdIpad?: string;
  appIdGooglePlay?: string;
  appName?: string;
  appCountry?: string;
}

export interface OgType {
  type?: 'website' | 'article' | 'product' | 'book' | 'profile' | 'music' | 'video';
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  imageAlt?: string;
  imageSecureUrl?: string;
  siteName?: string;
  imageWidth?: string | number;
  imageHeight?: string | number;
  locale?: string;
  localeAlternate?: string[];
  video?: string | VideoType;
  audio?: string;
  article?: ArticleType;
  determiner?: 'a' | 'an' | 'the' | 'auto' | '';
}

export interface MetaProps {
  title?: string;
  robots?:
    | boolean
    | {
        index?: boolean;
        follow?: boolean;
        nocache?: boolean;
        googleBot?: string;
      };
  description?: string;
  keywords?: string | string[];
  author?: string;
  viewport?: string;
  twitter?: TwitterType;
  og?: OgType;
  canonical?: string;
}

/**
 * Interface for a generic HTML Meta tag object used by helpers.
 * The attribute property specifies whether to use 'name' or 'property' in the final HTML.
 */
export interface GenericMetaTag {
  attribute: 'name' | 'property';
  key: string; // The specific key/value of the attribute (e.g., 'og:title', 'twitter:card').
  content: string;
  id?: string; // Optional unique identifier for Svelte keying
}

/* eslint-disable  @typescript-eslint/no-explicit-any */
export type AnyObject = { [key: string]: any };
