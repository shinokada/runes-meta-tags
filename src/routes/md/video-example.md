import type { MetaProps } from 'runes-meta-tags';

export const load = ({ url }) => {
  const pageMetaTags: MetaProps = {
    title: 'Svelte 5 Tutorial - Video Course',
    og: {
      type: 'video',
      title: 'Learn Svelte 5 from Scratch',
      url: url.href,
      video: {
        url: 'https://example.com/videos/svelte-5-tutorial.mp4',
        secureUrl: 'https://example.com/videos/svelte-5-tutorial.mp4',
        type: 'video/mp4',
        width: 1280,
        height: 720
      },
      image: 'https://example.com/thumbnails/svelte-5-tutorial.jpg'
    },
    twitter: {
      card: 'player',
      title: 'Learn Svelte 5 from Scratch',
      playerUrl: 'https://example.com/player/svelte-5-tutorial',
      playerWidth: '1280',
      playerHeight: '720',
      image: 'https://example.com/thumbnails/svelte-5-tutorial.jpg'
    }
  };
  return { pageMetaTags };
};