<script lang="ts">
  import { removeHyphensAndCapitalize, SupportBanner, TechInfo, HighlightCompo, H2, H3 } from 'runes-webkit';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
  /*eslint no-undef: "off"*/
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

<p>
  Runes Meta Tags manages the meta tags for a web page. It allows you to easily configure various meta tags including basic SEO (Search Engine Optimization) information, robots meta tag, and social
  media specific meta tags for Twitter and Open Graph.
</p>

<H2>Installation</H2>
<p>Please install <code>runes-meta-tags</code> by using the following command:</p>

<HighlightCompo codeLang="ts" code={modules['./md/installation.md'] as string}  />

<H2>+layout.server.ts</H2>
<p>The <code>+layout.server.ts</code> file is used for serving the default meta tags.</p>
<HighlightCompo codeLang="ts" code={modules['./md/layout-server-ts.md'] as string}  />

<H2>+layout.svelte</H2>
<p>
  Import <code>RunesMetaTags</code> and <code>deepMerge</code> from <code>runes-meta-tags</code>. Add <code>data</code> to the <code>$props()</code>.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/layout-svelte.md'] as string}  />

<H2>about/+page.ts</H2>
<p>You can modify the meta tags if you need. The following is an example for the about page.</p>
<HighlightCompo codeLang="ts" code={modules['./md/about-page-ts.md'] as string}  />

<H2>about/+page.svelte</H2>
<p><code>about/+page.svelte</code> needs any extra code.</p>
<HighlightCompo codeLang="ts" code={modules['./md/about-page-svelte.md'] as string}  />

<H2>Playwright test examples</H2>

<H3>Index page</H3>
<p>Use the following examples to start your Playwright tests for the index page.</p>

<HighlightCompo codeLang="ts" code={modules['./md/playwright-test-index.md'] as string}  />
<H3>About page</H3>
<p>Use the following examples to start your Playwright tests for the About page.</p>

<HighlightCompo codeLang="ts" code={modules['./md/playwright-test-about.md'] as string}  />

<TechInfo {...pkg} />
