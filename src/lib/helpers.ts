import type { MetaProps, TwitterType, OgType, GenericMetaTag, VideoType, ArticleType, AnyObject } from './types';

/**
 * Deep merges two objects of the same type.
 *
 * @template T - The type of the objects to merge.
 * @param {T} target - The target object to merge into.
 * @param {Partial<T>} source - The source object to merge from.
 * @return {T} - The merged object.
 */
export function deepMerge<T extends object>(target: T, source: Partial<T>): T {
  const merged = { ...target } as T;

  for (const key in source) {
    if (key in target) {
      const targetValue = target[key];
      const sourceValue = source[key];

      if (sourceValue && targetValue && typeof sourceValue === 'object' && typeof targetValue === 'object' && !Array.isArray(sourceValue) && !Array.isArray(targetValue)) {
        // Assert the types for the recursive merge
        merged[key] = deepMerge(targetValue as object, sourceValue as object) as T[Extract<keyof T, string>];
      } else if (sourceValue !== undefined) {
        // Assert the type for direct assignment
        merged[key] = sourceValue as T[Extract<keyof T, string>];
      }
    }
  }

  return merged;
}

/**
 * Removes hyphens and capitalizes the first letter of each word in a given string.
 *
 * @param str - The input string to be processed.
 * @return The processed string with hyphens removed and the first letter of each word capitalized.
 */
export function removeHyphensAndCapitalize(str: string) {
  // Capitalize the first letter (including after hyphens)
  const capitalized = str.replace(/(^|\s|-)\w/g, (match) => match.toUpperCase());

  // Remove hyphens and ensure spaces after words
  return capitalized.replace(/-|\s{2,}/g, ' ');
}

/**
 * Splits a string using '/' as the delimiter, removes hyphens from each word, and capitalizes the first letter of each word.
 *
 * @param text - The input string to be processed.
 * @return The processed string with hyphens removed and the first letter of each word capitalized.
 */
export function splitAndCapitalize(text: string) {
  // Split the string using '/' as the delimiter
  const parts = text.split('/');

  // If there are no parts, return an empty string e.g home returns /
  if (!parts.length) return '';

  return removeHyphensAndCapitalize(parts[parts.length - 1]);
}

/**
 * Generates a meta title by combining the capitalized and cleaned up pathname and the cleaned up name.
 *
 * @param pathname - The pathname to be processed.
 * @param name - The name to be processed.
 * @return The generated meta title.
 */
export function metaTitle(pathname: string, name: string) {
  return splitAndCapitalize(pathname) ? `${splitAndCapitalize(pathname)} - ${removeHyphensAndCapitalize(name)}` : `${removeHyphensAndCapitalize(name)}`;
}

export function metaDescription(pathname: string, baseDescription: string) {
  return splitAndCapitalize(pathname) ? `${splitAndCapitalize(pathname)} - ${baseDescription}` : `${baseDescription}`;
}

/**
 * Generates a meta image URL based on the provided pathname and site URL.
 *
 * @param pathname - The pathname to be processed.
 * @param siteUrl - The site URL to be used in the generated URL.
 * @param baseUrl - The base URL for the open graph service. Defaults to 'https://open-graph-vercel.vercel.app/api/'.
 * @return The generated meta image URL.
 */
export function metaImg(pathname: string, siteUrl: string, baseUrl: string = 'https://open-graph-vercel.vercel.app/api/') {
  return splitAndCapitalize(pathname) ? `${baseUrl}${siteUrl}?title=${splitAndCapitalize(pathname)}` : `${baseUrl}${siteUrl}`;
}

// ... (deepMerge and string helper functions remain the same)

// -------------------------------------------------------------
// REVISED HELPER FUNCTIONS FOR META TAG RENDERING
// -------------------------------------------------------------

/**
 * Generates the necessary meta tags for robots and googlebot based on the input.
 * @param robots - The robots configuration (boolean or object).
 * @returns An array of GenericMetaTag objects.
 */
export function generateRobotsTags(robots: MetaProps['robots']): GenericMetaTag[] {
  const tags: GenericMetaTag[] = [];

  if (typeof robots === 'boolean') {
    const content = robots ? 'index,follow' : 'noindex,nofollow';
    // Set attribute to 'name'
    tags.push({ attribute: 'name', key: 'robots', content });
  } else if (typeof robots === 'object' && robots !== null) {
    const directives = [robots.index === false ? 'noindex' : 'index', robots.follow === false ? 'nofollow' : 'follow', robots.nocache ? 'nocache' : ''].filter(Boolean).join(',');

    // Set attribute to 'name'
    tags.push({ attribute: 'name', key: 'robots', content: directives });

    if (robots.googleBot) {
      // Set attribute to 'name'
      tags.push({ attribute: 'name', key: 'googlebot', content: robots.googleBot });
    }
  }

  return tags;
}

/**
 * Maps an object's properties to an array of GenericMetaTag objects.
 * @param obj - The source object (e.g., TwitterType).
 * @param prefix - The meta tag key prefix (e.g., 'twitter:').
 * @param attribute - The HTML attribute type ('name' or 'property'). <-- NEW PARAMETER
 * @param keyMap - Optional map to convert camelCase keys to kebab-case meta keys.
 * @returns An array of GenericMetaTag objects.
 */
function mapToMetaTags(
  obj: AnyObject,
  prefix: string,
  attribute: 'name' | 'property', // This dictates the attribute for ALL generated tags
  keyMap: { [key: string]: string } = {}
): GenericMetaTag[] {
  const tags: GenericMetaTag[] = [];

  for (const [key, value] of Object.entries(obj)) {
    if (value === undefined || value === null || value === '') continue;

    const metaKeySuffix = keyMap[key] || key.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
    const metaKey = `${prefix}${metaKeySuffix}`;

    // Handle string/number content conversion
    const content = typeof value === 'number' ? value.toString() : value;

    tags.push({
      attribute, // <-- ATTRIBUTE IS SET HERE
      key: metaKey,
      content
    });
  }

  return tags;
}

/**
 * Generates all Twitter meta tags from the TwitterType object.
 * @param twitter - The TwitterType configuration.
 * @returns An array of GenericMetaTag objects.
 */
export function generateTwitterTags(twitter: TwitterType): GenericMetaTag[] {
  const tags: GenericMetaTag[] = [];

  // 1. Map simple properties. The attribute is explicitly set to 'name'.
  const twitterMap = {
    imageAlt: 'image:alt',
    playerUrl: 'player',
    playerWidth: 'player:width',
    playerHeight: 'player:height'
  };
  tags.push(...mapToMetaTags(twitter as AnyObject, 'twitter:', 'name', twitterMap));

  // 2. Handle App Card specific properties. The attribute is explicitly set to 'name'.
  if (twitter.card === 'app' && twitter.appName) {
    tags.push(
      { attribute: 'name', key: 'twitter:app:name:iphone', content: twitter.appName },
      { attribute: 'name', key: 'twitter:app:name:ipad', content: twitter.appName },
      { attribute: 'name', key: 'twitter:app:name:googleplay', content: twitter.appName }
    );
    if (twitter.appIdIphone) tags.push({ attribute: 'name', key: 'twitter:app:id:iphone', content: twitter.appIdIphone });
    if (twitter.appIdIpad) tags.push({ attribute: 'name', key: 'twitter:app:id:ipad', content: twitter.appIdIpad });
    if (twitter.appIdGooglePlay) tags.push({ attribute: 'name', key: 'twitter:app:id:googleplay', content: twitter.appIdGooglePlay });
    if (twitter.appCountry) tags.push({ attribute: 'name', key: 'twitter:app:country', content: twitter.appCountry });
  }

  return tags;
}

/**
 * Generates all Open Graph meta tags from the OgType object.
 * @param og - The OgType configuration.
 * @returns An array of GenericMetaTag objects.
 */
export function generateOpenGraphTags(og: OgType): GenericMetaTag[] {
  const tags: GenericMetaTag[] = [];

  // Map simple properties. The attribute is explicitly set to 'property'.
  const ogMap = {
    imageSecureUrl: 'image:secure_url',
    imageWidth: 'image:width',
    imageHeight: 'image:height',
    imageAlt: 'image:alt',
    siteName: 'site_name',
    localeAlternate: 'locale:alternate'
  };
  tags.push(...mapToMetaTags(og as AnyObject, 'og:', 'property', ogMap));

  // 1. Handle localeAlternate (array). The attribute is explicitly set to 'property'.
  if (og.localeAlternate && og.localeAlternate.length > 0) {
    og.localeAlternate.forEach((alternate) => {
      tags.push({ attribute: 'property', key: 'og:locale:alternate', content: alternate });
    });
  }

  // 2. Handle Video property. The attribute is explicitly set to 'property'.
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
      tags.push(...mapToMetaTags(og.video as VideoType as AnyObject, 'og:', 'property', videoMap));
    }
  }

  // 3. Handle Article properties. The attribute is explicitly set to 'property'.
  if (og.type === 'article' && og.article) {
    const articleMap: { [key in keyof ArticleType]: string } = {
      publishedTime: 'article:published_time',
      modifiedTime: 'article:modified_time',
      expirationTime: 'article:expiration_time',
      section: 'article:section',
      author: 'article:author',
      tag: 'article:tag'
    };

    // Map simple article properties
    tags.push(...mapToMetaTags(og.article as AnyObject, '', 'property', articleMap));

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
