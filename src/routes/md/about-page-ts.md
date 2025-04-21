import type { MetaProps } from 'runes-meta-tags';
import { metaTitle, metaDescription, metaImg, splitAndCapitalize } from 'runes-meta-tags';

// Vite define variable (set in vite.config.ts: define: { NAME: JSON.stringify('Runes') })
declare const NAME: string;

export const load = ({ url }) => {
  const title = metaTitle(url.pathname, NAME);
  const basicDesc = splitAndCapitalize(NAME);
  const description = metaDescription(url.pathname, basicDesc);
  const image = metaImg(url.pathname, NAME);

  const pageMetaTags: MetaProps = {
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
