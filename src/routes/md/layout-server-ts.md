import type { MetaProps } from 'runes-meta-tags';

export const load = ({ url }) => {
  const layoutMetaTags: MetaProps = {
    title: 'My Awesome Site',
    description: 'Welcome to my site - we build amazing things with Svelte',
    keywords: 'svelte, sveltekit, web development, javascript',
    author: 'John Doe',
    og: {
      type: 'website',
      title: 'My Awesome Site',
      description: 'Welcome to my site - we build amazing things with Svelte',
      url: url.href,
      image: 'https://example.com/og-default.jpg',
      imageAlt: 'My Awesome Site logo',
      siteName: 'My Awesome Site',
      imageWidth: '1200',
      imageHeight: '630'
    },
    twitter: {
      card: 'summary_large_image',
      site: '@mysite',
      creator: '@johndoe',
      title: 'My Awesome Site',
      description: 'Welcome to my site - we build amazing things with Svelte',
      image: 'https://example.com/og-default.jpg',
      imageAlt: 'My Awesome Site logo'
    }
  };

  return {
    layoutMetaTags
  };
};