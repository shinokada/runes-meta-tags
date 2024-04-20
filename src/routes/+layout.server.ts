import type { MetaProps } from '$lib';
import { ANALYTICS_ID } from '$env/static/private';
import { metaTitle, metaDescription, metaImg } from '$lib';

export const load = ({ url }) => {
  const title = metaTitle(url.pathname, __NAME__)
  const basicDesc = 'Meta tags for Runes.'
  const description = metaDescription(url.pathname, basicDesc)
  const image = metaImg(url.pathname, __NAME__)

  const layoutMetaTags: MetaProps = {
    title,
    description,
    keywords: 'runes, meta, tags',
    twitter: {
      card: 'summary_large_image',
      site: '@shinokada',
      handle: '@shinokada',
      title,
      description,
      image,
      imageAlt: title,
    },
    og: {
      type: 'website',
      title,
      description,
      url: url.href,
      image,
      imageAlt: title,
      siteName: 'Runes meta',
      imageWidth: '1200',
      imageHeight: '630'
    }
  };
  return {
    layoutMetaTags,
    ANALYTICS_ID
  };
};
