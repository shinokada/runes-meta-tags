import type { MetaProps } from '$lib';
import { metaTitle, metaDescription, metaImg, splitAndCapitalize } from '$lib';

export const load = ({ url }) => {
  
  const title = metaTitle(url.pathname, __NAME__)
  const basicDesc = splitAndCapitalize(__NAME__)
  const description = metaDescription(url.pathname, basicDesc)
  const image = metaImg(url.pathname, __NAME__)

  const pageMetaTags = {
    title,
    description,
    og: {
      title,
      description
    },
    twitter: {
      title,
      description
    }
  }
  return { pageMetaTags };
};
