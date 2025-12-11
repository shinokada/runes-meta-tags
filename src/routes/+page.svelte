<script lang="ts">
  import { removeHyphensAndCapitalize, SupportBanner, TechInfo, H2, H3 } from 'runes-webkit';
  import { HighlightCompo, HighlightSvelte } from 'svelte-rune-highlight';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const pkg = {
    pkgName: __NAME__,
    pkgVersion: __VERSION__,
    repoUrl: __GITHUBURL__,
    runaticsVersion: __RUNATICS_VERSION__,
    svelteVersion: __SVELTE_VERSION__,
    svelteKitVersion: __SVELTEKIT_VERSION__,
    svelteRuneHighlight: __SVELTE_RUNE_HIGHLIGHT_VERSION__,
    viteVersion: __VITE_VERSION__
  };
</script>

<SupportBanner class="relative mt-8">
  To Keep It Going, Please Show Your Love.<a href="https://ko-fi.com/Z8Z2CHALG" target="_blank" aria-label="Buy Me a Coffee at ko-fi.com"
    ><img height="40" style="border:0px;height:40px;" src="https://storage.ko-fi.com/cdn/kofi3.png?v=3" alt="Buy Me a Coffee at ko-fi.com" /></a
  >
</SupportBanner>

<h1 class="my-8 flex justify-center">{removeHyphensAndCapitalize(__NAME__)}</h1>

<p class="mb-4">
  Runes Meta Tags is a powerful meta tag management library for SvelteKit applications. It provides an elegant way to configure SEO meta tags, Open Graph tags for social media sharing, Twitter Cards,
  and more. With built-in support for deep merging, you can define default meta tags at the layout level and override them on specific pages.
</p>

<H2>Features</H2>
<ul class="mb-4 ml-6 list-disc space-y-2">
  <li>✨ Easy-to-use API with TypeScript support</li>
  <li>🔄 Deep merge support for inheriting and overriding meta tags</li>
  <li>🌐 Full Open Graph protocol support</li>
  <li>🐦 Twitter Card meta tags</li>
  <li>🤖 Robots meta tag configuration</li>
  <li>📱 Responsive social media images</li>
  <li>🎯 Article, video, and other content type support</li>
  <li>🔗 Canonical URL support</li>
  <li>🧪 Helper functions for consistent meta tag generation</li>
</ul>

<H2>Installation</H2>
<HighlightCompo lang="js" code={modules['./md/installation.md'] as string} />

<H2>Quick Start Guide</H2>

<H3>Step 1: Configure Layout Server</H3>
<p class="mb-4">
  Create a <code>+layout.server.ts</code> file to define your default meta tags. These will be used across all pages unless overridden.
</p>
<HighlightCompo lang="ts" code={modules['./md/layout-server-ts.md'] as string} />

<H3>Step 2: Setup Layout Component</H3>
<div class="mb-4 rounded-lg bg-blue-50 p-4 text-sm text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" role="alert">
  <strong>Tip:</strong> The <code>deepMerge</code> function allows page-specific meta tags to override layout defaults while preserving unmodified properties.
</div>
<p class="mb-4">
  Import <code>MetaTags</code> and <code>deepMerge</code> in your <code>+layout.svelte</code>. The <code>deepMerge</code> function intelligently combines layout and page-specific meta tags.
</p>
<HighlightSvelte code={modules['./md/layout-svelte.md'] as string} />

<H3>Step 3: Create Page-Specific Meta Tags (Optional)</H3>
<p class="mb-4">
  Override meta tags for specific pages by creating a <code>+page.ts</code> file. Only include the properties you want to change - everything else inherits from the layout.
</p>
<HighlightCompo lang="ts" code={modules['./md/about-page-ts.md'] as string} />

<H3>Step 4: Use in Your Page Component</H3>
<p class="mb-4">Your page components don't need any special code - the meta tags are handled automatically!</p>
<HighlightSvelte code={modules['./md/about-page-svelte.md'] as string} />

<H2>Advanced Usage</H2>

<H3>Using Helper Functions</H3>
<p class="mb-4">The library provides helpful utility functions to generate consistent meta tags:</p>
<HighlightCompo lang="ts" code={modules['./md/helper-functions.md'] as string} />

<H3>Deep Merge Behavior</H3>
<p class="mb-4">Understanding how <code>deepMerge</code> works is important for effective meta tag management:</p>
<HighlightCompo lang="ts" code={modules['./md/deep-merge-example.md'] as string} />

<H3>Keywords Configuration</H3>
<p class="mb-4">Keywords can be defined as a string or array and are automatically inherited from layout unless overridden:</p>
<HighlightCompo lang="ts" code={modules['./md/keywords-example.md'] as string} />

<H3>Article Meta Tags</H3>
<p class="mb-4">For blog posts and articles, use the article type with additional metadata:</p>
<HighlightCompo lang="ts" code={modules['./md/article-example.md'] as string} />

<H3>Video Content</H3>
<p class="mb-4">Configure video meta tags for rich video previews:</p>
<HighlightCompo lang="ts" code={modules['./md/video-example.md'] as string} />

<H3>Robots Configuration</H3>
<p class="mb-4">Control how search engines index your pages:</p>
<HighlightCompo lang="ts" code={modules['./md/robots-example.md'] as string} />

<H3>Twitter Card Types</H3>
<p class="mb-4">Different Twitter Card types for various content:</p>
<HighlightCompo lang="ts" code={modules['./md/twitter-cards-example.md'] as string} />

<H2>Testing with Playwright</H2>

<H3>Index Page Tests</H3>
<p class="mb-4">Example tests for your home page meta tags:</p>
<HighlightCompo lang="ts" code={modules['./md/playwright-test-index.md'] as string} />

<H3>Page-Specific Tests</H3>
<p class="mb-4">Test that page-specific meta tags override layout defaults correctly:</p>
<HighlightCompo lang="ts" code={modules['./md/playwright-test-about.md'] as string} />

<H2>API Reference</H2>

<H3>MetaProps Interface</H3>
<p class="mb-4">Complete type definition for meta tag configuration:</p>
<HighlightCompo lang="ts" code={modules['./md/api-reference.md'] as string} />

<H2>Best Practices</H2>

<div class="mb-4 space-y-4">
  <div class="rounded-lg bg-green-50 p-4 dark:bg-green-900/30">
    <strong class="text-green-800 dark:text-green-300">✓ DO:</strong>
    <ul class="mt-2 ml-6 list-disc space-y-1 text-green-800 dark:text-green-300">
      <li>Define common meta tags (keywords, site name, default image) in <code>+layout.server.ts</code></li>
      <li>Use <code>deepMerge</code> to inherit layout meta tags on pages</li>
      <li>Always include <code>og:url</code> using <code>url.href</code> in page-specific <code>+page.ts</code></li>
      <li>Use helper functions for consistent title and description formats</li>
      <li>Test your meta tags with Playwright</li>
      <li>Provide meaningful image alt text for accessibility</li>
    </ul>
  </div>

  <div class="rounded-lg bg-red-50 p-4 dark:bg-red-900/30">
    <strong class="text-red-800 dark:text-red-300">✗ DON'T:</strong>
    <ul class="mt-2 ml-6 list-disc space-y-1 text-red-800 dark:text-red-300">
      <li>Duplicate the entire meta tag structure on every page</li>
      <li>Forget to add <code>og:url</code> to page-specific meta tags</li>
      <li>Use the deprecated <code>RunesMetaTags</code> component (use <code>MetaTags</code> instead)</li>
      <li>Hardcode URLs - always use <code>url.href</code> for dynamic URLs</li>
      <li>Skip testing - meta tags are crucial for SEO</li>
    </ul>
  </div>
</div>

<H2>Migration Guide</H2>
<div class="mb-4 rounded-lg bg-yellow-50 p-4 text-sm text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" role="alert">
  <strong>Note:</strong> As of v0.5.0, use <code>MetaTags</code> instead of <code>RunesMetaTags</code>. The old component name is deprecated and will be removed in v1.0.0.
</div>
<HighlightCompo lang="ts" code={modules['./md/migration-guide.md'] as string} />

<H2>Troubleshooting</H2>

<H3>Meta tags not showing up</H3>
<ul class="mb-4 ml-6 list-disc space-y-2">
  <li>Ensure <code>MetaTags</code> component is placed in your <code>+layout.svelte</code></li>
  <li>Check that <code>layoutMetaTags</code> is returned from <code>+layout.server.ts</code></li>
  <li>Verify <code>deepMerge</code> is correctly combining layout and page meta tags</li>
  <li>Use browser DevTools to inspect the <code>&lt;head&gt;</code> section</li>
</ul>

<H3>Tests failing for og:url</H3>
<ul class="mb-4 ml-6 list-disc space-y-2">
  <li>Add <code>url</code> parameter to your page's load function: <code>export const load = (&#123; url &#125;) =&gt; &#123;...&#125;</code></li>
  <li>Include <code>url: url.href</code> in the <code>og</code> object of <code>pageMetaTags</code></li>
  <li>Ensure the test expects the full URL including protocol and domain</li>
</ul>

<H3>Keywords not appearing on pages</H3>
<ul class="mb-4 ml-6 list-disc space-y-2">
  <li>Confirm <code>keywords</code> is defined in <code>+layout.server.ts</code></li>
  <li>Check that <code>deepMerge</code> is being used in <code>+layout.svelte</code></li>
  <li>If a page defines <code>pageMetaTags</code> without <code>keywords</code>, they should inherit from layout</li>
</ul>

<TechInfo {...pkg} class="dark:bg-stone-900" />
