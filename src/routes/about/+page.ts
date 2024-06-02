import type { MetaProps } from '$lib/types.ts';

const title = 'About - Runes Meta Tags';
const description = 'Meta tag for Svelte Runes';
const image = 'https://open-graph-vercel.vercel.app/api/runes-meta-tags';


export const load = () => {
  const pageMetaTags: MetaProps = {
    title,
    description,
    og: {
      title,
      description,
      image
    },
    twitter: {
      title,
      description,
      image
    }
  };
  return { pageMetaTags };
};
