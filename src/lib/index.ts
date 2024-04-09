export { default as RunesMeta } from './RunesMeta.svelte';

export type { MetaProps, TwitterType, OgType } from './RunesMeta.svelte';

type AnyObject = { [key: string]: any };
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