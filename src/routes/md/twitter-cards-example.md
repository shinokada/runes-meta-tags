import type { MetaProps } from 'runes-meta-tags';

// Summary card (default, for text content)
const summaryCard: MetaProps = {
  twitter: {
    card: 'summary',
    title: 'Check out this article',
    description: 'Learn about Svelte 5 runes',
    image: 'https://example.com/square-image.jpg',
    imageAlt: 'Svelte 5 logo'
  }
};

// Summary card with large image (for visual content)
const summaryLargeImage: MetaProps = {
  twitter: {
    card: 'summary_large_image',
    site: '@mysite',
    creator: '@johndoe',
    title: 'Amazing Photo Gallery',
    description: 'Beautiful landscape photography',
    image: 'https://example.com/landscape.jpg',
    imageAlt: 'Stunning mountain landscape'
  }
};

// Player card (for audio/video)
const playerCard: MetaProps = {
  twitter: {
    card: 'player',
    title: 'Watch: Svelte 5 Tutorial',
    description: 'Full course on Svelte 5',
    playerUrl: 'https://example.com/player/video-123',
    playerWidth: '1280',
    playerHeight: '720',
    image: 'https://example.com/video-thumbnail.jpg'
  }
};

// App card (for mobile apps)
const appCard: MetaProps = {
  twitter: {
    card: 'app',
    title: 'Download Our App',
    description: 'Available on iOS and Android',
    appName: 'My Awesome App',
    appIdIphone: '123456789',
    appIdIpad: '123456789',
    appIdGooglePlay: 'com.example.app',
    appCountry: 'US',
    image: 'https://example.com/app-icon.jpg'
  }
};