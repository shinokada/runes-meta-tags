import type { MetaProps } from '$lib'

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'About | Runes Meta Tag',
    description: 'About page for Runes Meta Tag.',
    og: {
      title: 'About | Runes Meta Tag',
      description: 'About page for Runes Meta Tag.',
    },
    twitter: {
      title: 'About | Runes Meta Tag',
      description: 'About page for Runes Meta Tag.',
    },
  }) satisfies MetaProps;
  return { pageMetaTags };
}