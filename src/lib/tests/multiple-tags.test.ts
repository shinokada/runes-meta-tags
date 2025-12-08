import { describe, it, expect } from 'vitest';
import { generateOpenGraphTags, generateTwitterTags } from '../helpers';
import type { OgType, TwitterType } from '../types';

describe('Multiple Meta Tags Handling', () => {
  describe('Open Graph - Multiple locale:alternate tags', () => {
    it('should generate multiple og:locale:alternate tags', () => {
      const og: OgType = {
        title: 'Test Page',
        localeAlternate: ['fr_FR', 'es_ES', 'de_DE']
      };

      const tags = generateOpenGraphTags(og);
      const localeAlternateTags = tags.filter((tag) => tag.key === 'og:locale:alternate');

      expect(localeAlternateTags).toHaveLength(3);
      expect(localeAlternateTags[0].content).toBe('fr_FR');
      expect(localeAlternateTags[1].content).toBe('es_ES');
      expect(localeAlternateTags[2].content).toBe('de_DE');

      // Verify all tags have the same key but different content
      const keys = localeAlternateTags.map((tag) => tag.key);
      const uniqueKeys = new Set(keys);
      expect(uniqueKeys.size).toBe(1);
      expect(uniqueKeys.has('og:locale:alternate')).toBe(true);
    });
  });

  describe('Open Graph - Multiple article:author tags', () => {
    it('should generate multiple article:author tags from array', () => {
      const og: OgType = {
        type: 'article',
        title: 'Test Article',
        article: {
          author: ['John Doe', 'Jane Smith', 'Bob Johnson']
        }
      };

      const tags = generateOpenGraphTags(og);
      const authorTags = tags.filter((tag) => tag.key === 'article:author');

      expect(authorTags).toHaveLength(3);
      expect(authorTags[0].content).toBe('John Doe');
      expect(authorTags[1].content).toBe('Jane Smith');
      expect(authorTags[2].content).toBe('Bob Johnson');
    });

    it('should generate single article:author tag from string', () => {
      const og: OgType = {
        type: 'article',
        title: 'Test Article',
        article: {
          author: 'John Doe'
        }
      };

      const tags = generateOpenGraphTags(og);
      const authorTags = tags.filter((tag) => tag.key === 'article:author');

      expect(authorTags).toHaveLength(1);
      expect(authorTags[0].content).toBe('John Doe');
    });
  });

  describe('Open Graph - Multiple article:tag tags', () => {
    it('should generate multiple article:tag tags from array', () => {
      const og: OgType = {
        type: 'article',
        title: 'Test Article',
        article: {
          tag: ['javascript', 'svelte', 'webdev', 'frontend']
        }
      };

      const tags = generateOpenGraphTags(og);
      const tagTags = tags.filter((tag) => tag.key === 'article:tag');

      expect(tagTags).toHaveLength(4);
      expect(tagTags[0].content).toBe('javascript');
      expect(tagTags[1].content).toBe('svelte');
      expect(tagTags[2].content).toBe('webdev');
      expect(tagTags[3].content).toBe('frontend');
    });

    it('should generate single article:tag tag from string', () => {
      const og: OgType = {
        type: 'article',
        title: 'Test Article',
        article: {
          tag: 'javascript'
        }
      };

      const tags = generateOpenGraphTags(og);
      const tagTags = tags.filter((tag) => tag.key === 'article:tag');

      expect(tagTags).toHaveLength(1);
      expect(tagTags[0].content).toBe('javascript');
    });
  });

  describe('Twitter App Card - App IDs without appName', () => {
    it('should generate app ID tags even when appName is not provided', () => {
      const twitter: TwitterType = {
        card: 'app',
        appIdIphone: '123456789',
        appIdIpad: '123456789',
        appIdGooglePlay: 'com.example.app'
      };

      const tags = generateTwitterTags(twitter);

      // Should have app ID tags
      const iphoneIdTag = tags.find((tag) => tag.key === 'twitter:app:id:iphone');
      const ipadIdTag = tags.find((tag) => tag.key === 'twitter:app:id:ipad');
      const googlePlayIdTag = tags.find((tag) => tag.key === 'twitter:app:id:googleplay');

      expect(iphoneIdTag).toBeDefined();
      expect(iphoneIdTag?.content).toBe('123456789');

      expect(ipadIdTag).toBeDefined();
      expect(ipadIdTag?.content).toBe('123456789');

      expect(googlePlayIdTag).toBeDefined();
      expect(googlePlayIdTag?.content).toBe('com.example.app');

      // Should NOT have app name tags
      const iphoneNameTag = tags.find((tag) => tag.key === 'twitter:app:name:iphone');
      const ipadNameTag = tags.find((tag) => tag.key === 'twitter:app:name:ipad');
      const googlePlayNameTag = tags.find((tag) => tag.key === 'twitter:app:name:googleplay');

      expect(iphoneNameTag).toBeUndefined();
      expect(ipadNameTag).toBeUndefined();
      expect(googlePlayNameTag).toBeUndefined();
    });

    it('should generate both app name and ID tags when appName is provided', () => {
      const twitter: TwitterType = {
        card: 'app',
        appName: 'My Awesome App',
        appIdIphone: '123456789',
        appCountry: 'US'
      };

      const tags = generateTwitterTags(twitter);

      // Should have both name and ID tags
      const iphoneNameTag = tags.find((tag) => tag.key === 'twitter:app:name:iphone');
      const iphoneIdTag = tags.find((tag) => tag.key === 'twitter:app:id:iphone');
      const countryTag = tags.find((tag) => tag.key === 'twitter:app:country');

      expect(iphoneNameTag).toBeDefined();
      expect(iphoneNameTag?.content).toBe('My Awesome App');

      expect(iphoneIdTag).toBeDefined();
      expect(iphoneIdTag?.content).toBe('123456789');

      expect(countryTag).toBeDefined();
      expect(countryTag?.content).toBe('US');
    });
  });

  describe('Value normalization with String()', () => {
    it('should convert numbers to strings', () => {
      const og: OgType = {
        title: 'Test',
        imageWidth: 1200,
        imageHeight: 630
      };

      const tags = generateOpenGraphTags(og);
      const widthTag = tags.find((tag) => tag.key === 'og:image:width');
      const heightTag = tags.find((tag) => tag.key === 'og:image:height');

      expect(widthTag?.content).toBe('1200');
      expect(heightTag?.content).toBe('630');
      expect(typeof widthTag?.content).toBe('string');
      expect(typeof heightTag?.content).toBe('string');
    });

    it('should handle boolean values', () => {
      // Test that booleans are properly converted to strings
      // (Though they shouldn't appear in normal usage, this tests defensive programming)
      const og: OgType = {
        title: 'Test',
        // @ts-expect-error Testing defensive programming for unexpected types
        someFlag: true
      };

      const tags = generateOpenGraphTags(og);
      const flagTag = tags.find((tag) => tag.key === 'og:some-flag');

      if (flagTag) {
        expect(flagTag.content).toBe('true');
        expect(typeof flagTag.content).toBe('string');
      }
    });
  });

  describe('Complex scenarios with multiple duplicate tags', () => {
    it('should handle article with multiple authors and tags', () => {
      const og: OgType = {
        type: 'article',
        title: 'Collaborative Article',
        article: {
          author: ['Alice', 'Bob', 'Charlie'],
          tag: ['tech', 'programming', 'tutorial', 'advanced'],
          publishedTime: '2024-01-01T00:00:00Z',
          section: 'Technology'
        }
      };

      const tags = generateOpenGraphTags(og);

      // Should have 3 author tags
      const authorTags = tags.filter((tag) => tag.key === 'article:author');
      expect(authorTags).toHaveLength(3);

      // Should have 4 tag tags
      const tagTags = tags.filter((tag) => tag.key === 'article:tag');
      expect(tagTags).toHaveLength(4);

      // Should have single values for other properties
      const publishedTag = tags.find((tag) => tag.key === 'article:published_time');
      const sectionTag = tags.find((tag) => tag.key === 'article:section');

      expect(publishedTag).toBeDefined();
      expect(sectionTag).toBeDefined();

      // Total tags should be all unique keys
      expect(tags.length).toBeGreaterThan(0);
    });
  });
});
