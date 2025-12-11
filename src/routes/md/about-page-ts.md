import type { MetaProps } from 'runes-meta-tags';

export const load = ({ url }) => {
  const pageMetaTags: MetaProps = {
    title: 'About Us - My Awesome Site',
    description: 'Learn more about our team and mission',
    og: {
      title: 'About Us - My Awesome Site',
      description: 'Learn more about our team and mission',
      url: url.href,
      image: 'https://example.com/about-og.jpg'
    },
    twitter: {
      title: 'About Us - My Awesome Site',
      description: 'Learn more about our team and mission',
      image: 'https://example.com/about-og.jpg'
    }
  };

  return { pageMetaTags };
};

// Note: With deepMerge, this page will:
// ✓ Override: title, description, og.title, og.description, og.url, og.image
// ✓ Inherit: keywords, author, og.siteName, og.imageWidth, twitter.card, etc.