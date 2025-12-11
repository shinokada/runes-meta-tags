import { metaTitle, metaDescription, metaImg, splitAndCapitalize } from 'runes-meta-tags';

// Generate consistent titles based on pathname
const title = metaTitle('/blog/svelte-5', 'My Site'); 
// Result: "Blog Svelte 5 - My Site"

// Generate descriptions
const description = metaDescription('/blog/svelte-5', 'Learn about');
// Result: "Blog Svelte 5 - Learn about"

// Generate Open Graph images with dynamic titles
const image = metaImg('/blog/svelte-5', 'mysite.com');
// Result: "https://open-graph-vercel.vercel.app/api/mysite.com?title=Blog%20Svelte%205"

// Extract and format the last path segment
const formatted = splitAndCapitalize('/blog/my-awesome-post');
// Result: "My Awesome Post"