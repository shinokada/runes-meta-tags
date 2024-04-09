import type { MetaProps } from '$lib'
import { ANALYTICS_ID } from '$env/static/private';


// export interface TwitterType {
//   card?: 'summary' | 'summary_large_image' | 'app' | 'player';
//   site?: string;
//   handle?: string;
//   title?: string;
//   description?: string;
//   image?: string;
//   imageAlt?: string;
// }
// export interface OgType{
//   type?: string;
//   title?: string;
//   description?: string;
//   url?: string;
//   image?: string;
//   imageAlt?: string;
//   siteName?: string;
//   imageWidth?: string;
//   imageHeight?: string;
// }
// export interface MetaProps {
//   title?: string;
//   robots?: boolean;
//   description?: string;
//   keywords?: string;
//   twitter?: TwitterType;
//   og?: OgType;
//   url?: string;
//   imageWidth?: string;
//   imageHeight?: string;
// }
export const load = ({ url }) => {
  const layoutMetaTags = Object.freeze({
    title: 'Runes meta',
    description: 'Meta tags for Runes.',
    keywords: 'runes, meta, tags',

    twitter: {
      card: 'summary_large_image',
      site: '@shinokada',
      handle: '@shinokada',
      title: 'Runes meta',
      description: 'Meta tags for Runes.',
      image: 'https://open-graph-vercel.vercel.app/api/runes-meta',
      imageAlt: 'Runes meta',
    },

    og: {
      type: 'website',
      title: 'Runes meta',
      description: 'Meta tags for Runes.',
      url: url.href,
      image: 'https://open-graph-vercel.vercel.app/api/runes-meta',
      imageAlt: 'Runes meta',
      siteName: 'Runes meta',
      imageWidth: '1200',
      imageHeight: '630',
    }, 


  }) satisfies MetaProps;

  return {
    layoutMetaTags,
    ANALYTICS_ID
  };
}