import type { MetaProps } from 'runes-meta-tags';
import { metaTitle, metaDescription, metaImg, splitAndCapitalize } from 'runes-meta-tags';
// define __NAME__ in your vite.config.ts
export const load = ({ url }) => {
  const title = metaTitle(url.pathname, __NAME__);
  const basicDesc = splitAndCapitalize(__NAME__);
  const description = metaDescription(url.pathname, basicDesc);
  const image = metaImg(url.pathname, __NAME__);

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
  };
  return { pageMetaTags };
};
