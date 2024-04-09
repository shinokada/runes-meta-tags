<script lang="ts">
  import {
    removeHyphensAndCapitalize,
    SupportBanner,
    TechInfo,
    BellActiveAltOutline,
    pkg,
    HighlightCompo,
    H2
  } from 'runes-webkit';

  // const cardsToExclude = ['Seven Props'];
  // const brand = {
  //   title: 'Brands, Regular, and Solid Icons',
  //   description: '2000+ SVG Icons.',
  //   icon: BellActiveAltOutline,
  //   iconClass: 'text-green-500'
  // };
  // let filteredCards = $state(insertObjectToArray(excludeByTitle(cards, cardsToExclude), brand, 2));
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<SupportBanner>
  To Keep It Going, Please Show Your Love.<a href="https://ko-fi.com/Z8Z2CHALG" target="_blank"
    ><img
      height="40"
      style="border:0px;height:40px;"
      src="https://storage.ko-fi.com/cdn/kofi3.png?v=3"
      alt="Buy Me a Coffee at ko-fi.com"
    /></a
  >
</SupportBanner>

<h1 class="my-8 flex justify-center">{removeHyphensAndCapitalize(__NAME__)}</h1>

<H2>Installation</H2>

<HighlightCompo codeLang="ts" code={modules['./md/installation.md'] as string} />
<H2>+layout.server.ts</H2>

<HighlightCompo codeLang="ts" code={modules['./md/layout-server-ts.md'] as string} />

<H2>+layout.svelte</H2>
<HighlightCompo codeLang="ts" code={modules['./md/layout-svelte.md'] as string} />

<H2>about/+page.ts</H2>
<HighlightCompo codeLang="ts" code={modules['./md/about-page-ts.md'] as string} />

<H2>about/+page.svelte</H2>
<HighlightCompo codeLang="ts" code={modules['./md/about-page-svelte.md'] as string} />

<TechInfo {...pkg} />
