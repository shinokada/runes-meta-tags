import type { MetaProps } from '$lib'

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Custom icons',
    description: 'Custom Icons for Runes.',
    og: {
      title: 'CustomRunes icons',
      description: 'Custom Icons for Runes.',
    },
    twitter: {
      title: 'Custom Runes icons',
      description: 'Custom Icons for Runes.',
    },
  }) satisfies MetaProps;
  return { pageMetaTags };
}