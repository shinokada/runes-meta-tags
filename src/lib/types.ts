export interface TwitterType {
  card?: 'summary' | 'summary_large_image' | 'app' | 'player';
  site?: string;
  handle?: string;
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}
export interface OgType {
  type?: string;
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  imageAlt?: string;
  siteName?: string;
  imageWidth?: string;
  imageHeight?: string;
}
export interface MetaProps {
  title?: string;
  robots?: boolean;
  description?: string;
  keywords?: string;
  twitter?: TwitterType;
  og?: OgType;
}

export type AnyObject = { [key: string]: any };
