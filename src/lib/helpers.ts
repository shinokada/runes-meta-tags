import type { MetaProps, TwitterType, OgType, GenericMetaTag, AnyObject } from './types';

/**
 * Deep merges two objects of the same type.
 */
export function deepMerge<T extends object>(target: T, source: Partial<T>): T {
  const merged = { ...target } as T;

  for (const key in source) {
    if (key in target) {
      const targetValue = target[key];
      const sourceValue = source[key];

      if (sourceValue && targetValue && typeof sourceValue === 'object' && typeof targetValue === 'object' && !Array.isArray(sourceValue) && !Array.isArray(targetValue)) {
        merged[key] = deepMerge(targetValue as object, sourceValue as object) as T[Extract<keyof T, string>];
      } else if (sourceValue !== undefined) {
        merged[key] = sourceValue as T[Extract<keyof T, string>];
      }
    }
  }

  return merged;
}

/**
 * Removes hyphens and capitalizes the first letter of each word in a given string.
 */
export function removeHyphensAndCapitalize(str: string) {
  const capitalized = str.replace(/(^|\s|-)\w/g, (match) => match.toUpperCase());
  return capitalized.replace(/-|\s{2,}/g, ' ');
}

/**
 * Splits a string using '/' as the delimiter, removes hyphens from each word, and capitalizes the first letter of each word.
 */
export function splitAndCapitalize(text: string) {
  const parts = text.split('/');
  if (!parts.length) return '';
  return removeHyphensAndCapitalize(parts[parts.length - 1]);
}

/**
 * Generates a meta title by combining the capitalized and cleaned up pathname and the cleaned up name.
 */
export function metaTitle(pathname: string, name: string) {
  return splitAndCapitalize(pathname) ? `${splitAndCapitalize(pathname)} - ${removeHyphensAndCapitalize(name)}` : `${removeHyphensAndCapitalize(name)}`;
}

export function metaDescription(pathname: string, baseDescription: string) {
  return splitAndCapitalize(pathname) ? `${splitAndCapitalize(pathname)} - ${baseDescription}` : `${baseDescription}`;
}

/**
 * Generates a meta image URL based on the provided pathname and site URL.
 */
export function metaImg(pathname: string, siteUrl: string, baseUrl: string = 'https://open-graph-vercel.vercel.app/api/') {
  return splitAndCapitalize(pathname) ? `${baseUrl}${siteUrl}?title=${splitAndCapitalize(pathname)}` : `${baseUrl}${siteUrl}`;
}

// -------------------------------------------------------------
// META TAG GENERATION HELPERS
// -------------------------------------------------------------

/**
 * Generates the necessary meta tags for robots and googlebot based on the input.
 */
export function generateRobotsTags(robots: MetaProps['robots']): GenericMetaTag[] {
  const tags: GenericMetaTag[] = [];

  if (typeof robots === 'boolean') {
    const content = robots ? 'index,follow' : 'noindex,nofollow';
    tags.push({ attribute: 'name', key: 'robots', content });
  } else if (typeof robots === 'object' && robots !== null) {
    const directives = [robots.index === false ? 'noindex' : 'index', robots.follow === false ? 'nofollow' : 'follow', robots.nocache ? 'nocache' : ''].filter(Boolean).join(',');

    tags.push({ attribute: 'name', key: 'robots', content: directives });

    if (robots.googleBot) {
      tags.push({ attribute: 'name', key: 'googlebot', content: robots.googleBot });
    }
  }

  return tags;
}

/**
 * Maps an object's properties to an array of GenericMetaTag objects.
 * Only processes primitive values (string/number), skipping nested objects and arrays.
 */
function mapToMetaTags(obj: AnyObject, prefix: string, attribute: 'name' | 'property', keyMap: { [key: string]: string } = {}, excludeKeys: string[] = []): GenericMetaTag[] {
  const tags: GenericMetaTag[] = [];

  for (const [key, value] of Object.entries(obj)) {
    // Skip excluded keys, undefined/null values, and non-primitive types
    if (
      excludeKeys.includes(key) ||
      value === undefined ||
      value === null ||
      value === '' ||
      typeof value === 'object' // Skip nested objects and arrays
    ) {
      continue;
    }

    const metaKeySuffix = keyMap[key] || key.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
    const metaKey = `${prefix}${metaKeySuffix}`;
    const content = String(value);

    tags.push({
      attribute,
      key: metaKey,
      content
    });
  }

  return tags;
}

/**
 * Generates all Twitter meta tags from the TwitterType object.
 */
export function generateTwitterTags(twitter: TwitterType): GenericMetaTag[] {
  const tags: GenericMetaTag[] = [];

  // Properties handled separately (app card specific)
  const excludeKeys = ['appName', 'appIdIphone', 'appIdIpad', 'appIdGooglePlay', 'appCountry'];

  // Map simple properties
  const twitterMap = {
    imageAlt: 'image:alt',
    playerUrl: 'player',
    playerWidth: 'player:width',
    playerHeight: 'player:height'
  };

  tags.push(...mapToMetaTags(twitter as AnyObject, 'twitter:', 'name', twitterMap, excludeKeys));

  // Handle App Card specific properties
  if (twitter.card === 'app') {
    // App name tags (optional but recommended)
    if (twitter.appName) {
      tags.push(
        { attribute: 'name', key: 'twitter:app:name:iphone', content: twitter.appName },
        { attribute: 'name', key: 'twitter:app:name:ipad', content: twitter.appName },
        { attribute: 'name', key: 'twitter:app:name:googleplay', content: twitter.appName }
      );
    }

    // App IDs (independent of app name)
    if (twitter.appIdIphone) {
      tags.push({ attribute: 'name', key: 'twitter:app:id:iphone', content: twitter.appIdIphone });
    }
    if (twitter.appIdIpad) {
      tags.push({ attribute: 'name', key: 'twitter:app:id:ipad', content: twitter.appIdIpad });
    }
    if (twitter.appIdGooglePlay) {
      tags.push({ attribute: 'name', key: 'twitter:app:id:googleplay', content: twitter.appIdGooglePlay });
    }
    if (twitter.appCountry) {
      tags.push({ attribute: 'name', key: 'twitter:app:country', content: twitter.appCountry });
    }
  }

  return tags;
}

/**
 * Generates all Open Graph meta tags from the OgType object.
 */
export function generateOpenGraphTags(og: OgType): GenericMetaTag[] {
  const tags: GenericMetaTag[] = [];

  // Properties that need special handling
  const excludeKeys = ['localeAlternate', 'video', 'article'];

  // Map simple properties
  const ogMap = {
    imageSecureUrl: 'image:secure_url',
    imageWidth: 'image:width',
    imageHeight: 'image:height',
    imageAlt: 'image:alt',
    siteName: 'site_name'
  };

  tags.push(...mapToMetaTags(og as AnyObject, 'og:', 'property', ogMap, excludeKeys));

  // Handle localeAlternate (array)
  if (og.localeAlternate && og.localeAlternate.length > 0) {
    og.localeAlternate.forEach((alternate) => {
      tags.push({ attribute: 'property', key: 'og:locale:alternate', content: alternate });
    });
  }

  // Handle Video property
  if (og.video) {
    if (typeof og.video === 'string') {
      tags.push({ attribute: 'property', key: 'og:video', content: og.video });
    } else if (typeof og.video === 'object') {
      const videoMap = {
        url: 'video',
        secureUrl: 'video:secure_url',
        type: 'video:type',
        width: 'video:width',
        height: 'video:height'
      };
      tags.push(...mapToMetaTags(og.video as AnyObject, 'og:', 'property', videoMap));
    }
  }

  // Handle Article properties
  if (og.type === 'article' && og.article) {
    const articleExcludeKeys = ['author', 'tag'];

    const articleMap: { [key: string]: string } = {
      publishedTime: 'article:published_time',
      modifiedTime: 'article:modified_time',
      expirationTime: 'article:expiration_time',
      section: 'article:section'
    };

    // Map simple article properties
    tags.push(...mapToMetaTags(og.article as AnyObject, '', 'property', articleMap, articleExcludeKeys));

    // Handle array/string properties (author, tag)
    ['author', 'tag'].forEach((prop) => {
      const value = (og.article as AnyObject)[prop];
      const metaKey = `article:${prop}`;

      if (value) {
        if (Array.isArray(value)) {
          value.forEach((item) => tags.push({ attribute: 'property', key: metaKey, content: item }));
        } else if (typeof value === 'string') {
          tags.push({ attribute: 'property', key: metaKey, content: value });
        }
      }
    });
  }

  return tags;
}
