import type { AnyObject } from './types.ts';

export function deepMerge(target: AnyObject, source: AnyObject): AnyObject {
  const merged: AnyObject = Object.assign({}, target);
  for (const key of Object.keys(source)) {
    const targetValue: any = target[key];
    const sourceValue: any = source[key];
    if (typeof targetValue === 'object' && sourceValue !== null) {
      merged[key] = deepMerge(targetValue, sourceValue);
    } else if (sourceValue !== undefined) {
      merged[key] = sourceValue;
    }
  }
  return merged;
}

export function removeHyphensAndCapitalize(str: string) {
  // Capitalize the first letter (including after hyphens)
  const capitalized = str.replace(/(^|\s|-)\w/g, (match) => match.toUpperCase());

  // Remove hyphens and ensure spaces after words
  return capitalized.replace(/-|\s{2,}/g, ' ');
}

export function splitAndCapitalize(text: string) {
  // Split the string using '/' as the delimiter
  const parts = text.split('/');

  // If there are no parts, return an empty string e.g home returns /
  if (!parts.length) return '';

  return removeHyphensAndCapitalize(parts[parts.length - 1]);
}

export function metaTitle(pathname: string, name: string) {
  return splitAndCapitalize(pathname)
    ? `${splitAndCapitalize(pathname)} - ${removeHyphensAndCapitalize(name)}`
    : `${removeHyphensAndCapitalize(name)}`;
}

export function metaDescription(pathname: string, baseDescription: string) {
  return splitAndCapitalize(pathname)
    ? `${splitAndCapitalize(pathname)} - ${baseDescription}`
    : `${baseDescription}`;
}

export function metaImg(pathname: string, siteUrl: string) {
  return splitAndCapitalize(pathname)
    ? `https://open-graph-vercel.vercel.app/api/${siteUrl}?title=${splitAndCapitalize(pathname)}`
    : `https://open-graph-vercel.vercel.app/api/${siteUrl}`;
}
