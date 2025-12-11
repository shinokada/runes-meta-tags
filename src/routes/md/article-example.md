import type { MetaProps } from 'runes-meta-tags';

export const load = ({ url }) => {
  const pageMetaTags: MetaProps = {
    title: 'Understanding Svelte 5 Runes - My Tech Blog',
    description: 'A comprehensive guide to using runes in Svelte 5',
    keywords: 'svelte 5, runes, reactivity, state management',
    og: {
      type: 'article',
      title: 'Understanding Svelte 5 Runes',
      description: 'A comprehensive guide to using runes in Svelte 5',
      url: url.href,
      image: 'https://example.com/og-images/svelte-5-runes.jpg',
      article: {
        publishedTime: '2024-01-15T09:00:00.000Z',
        modifiedTime: '2024-01-20T14:30:00.000Z',
        author: ['John Doe', 'Jane Smith'],
        section: 'Web Development',
        tag: ['Svelte', 'JavaScript', 'Tutorial', 'Frontend']
      }
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Understanding Svelte 5 Runes',
      description: 'A comprehensive guide to using runes in Svelte 5',
      image: 'https://example.com/og-images/svelte-5-runes.jpg'
    }
  };
  return { pageMetaTags };
};