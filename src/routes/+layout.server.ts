import type { MetaProps } from '$lib'
import { ANALYTICS_ID } from '$env/static/private';

export const load = ({ url }) => {
  const layoutMetaTags: MetaProps = {
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
  }
  return {
    layoutMetaTags,
    ANALYTICS_ID
  };
}