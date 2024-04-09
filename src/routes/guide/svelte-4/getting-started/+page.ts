import type { MetaProps } from '$lib'

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Getting started with svelte 4',
    description: 'How to get started with Svelte 4/5.',
    og: {
      title: 'Getting started with svelte 4',
      description: 'How to get started with Svelte 4/5.',
    },
    twitter: {
      title: 'Getting started with svelte 4',
      description: 'How to get started with Svelte 4/5.',
    },
  }) satisfies MetaProps;
  return { pageMetaTags };
}