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

			if (
				sourceValue &&
				targetValue &&
				typeof sourceValue === 'object' &&
				typeof targetValue === 'object' &&
				!Array.isArray(sourceValue) &&
				!Array.isArray(targetValue)
			) {
				// Assert the types for the recursive merge
				merged[key] = deepMerge(targetValue as object, sourceValue as object) as T[Extract<
					keyof T,
					string
				>];
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
	return splitAndCapitalize(pathname)
		? `${splitAndCapitalize(pathname)} - ${removeHyphensAndCapitalize(name)}`
		: `${removeHyphensAndCapitalize(name)}`;
}

export function metaDescription(pathname: string, baseDescription: string) {
	return splitAndCapitalize(pathname)
		? `${splitAndCapitalize(pathname)} - ${baseDescription}`
		: `${baseDescription}`;
}

/**
 * Generates a meta image URL based on the provided pathname and site URL.
 *
 * @param :string pathname - The pathname to be processed.
 * @param :string siteUrl - The site URL to be used in the generated URL.
 * @return :string The generated meta image URL.
 */
export function metaImg(pathname: string, siteUrl: string) {
	return splitAndCapitalize(pathname)
		? `https://open-graph-vercel.vercel.app/api/${siteUrl}?title=${splitAndCapitalize(pathname)}`
		: `https://open-graph-vercel.vercel.app/api/${siteUrl}`;
}
