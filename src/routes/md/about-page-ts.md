import type { MetaProps } from 'runes-meta-tag'

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
