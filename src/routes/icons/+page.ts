import type { MetaProps } from '$lib'

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Runes icons',
    description: 'Icons for Runes.',
    og: {
      title: 'Runes icons',
      description: 'Icons for Runes.',
    },
    twitter: {
      title: 'Runes icons',
      description: 'Icons for Runes.',
    },
  }) satisfies MetaProps;
  return { pageMetaTags };
}