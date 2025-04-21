<script lang="ts">
	import type { MetaProps } from './types';
	let {
		title,
		robots,
		description,
		keywords,
		twitter,
		og,
		canonical,
		author,
		viewport
	}: MetaProps = $props();
</script>

<svelte:head>
	{#if title}
		<title>{title}</title>
	{/if}

	{#if description}
		<meta name="description" content={description} />
	{/if}

	{#if keywords}
		<meta name="keywords" content={typeof keywords === 'string' ? keywords : keywords.join(', ')} />
	{/if}

	{#if author}
		<meta name="author" content={author} />
	{/if}

	{#if viewport}
		<meta name="viewport" content={viewport} />
	{/if}

	{#if canonical}
		<link rel="canonical" href={canonical} />
	{/if}

	<!-- Robots Meta Tag -->
	{#if typeof robots === 'boolean'}
		{#if robots !== false}
			<meta name="robots" content="index,follow" />
		{:else}
			<meta name="robots" content="noindex,nofollow" />
		{/if}
	{:else if typeof robots === 'object'}
		<meta
			name="robots"
			content={[
				robots.index === false ? 'noindex' : 'index',
				robots.follow === false ? 'nofollow' : 'follow',
				robots.nocache ? 'nocache' : ''
			]
				.filter(Boolean)
				.join(',')}
		/>

		{#if robots.googleBot}
			<meta name="googlebot" content={robots.googleBot} />
		{/if}
	{/if}

	<!-- Twitter Meta Tags -->
	{#if twitter}
		{#if twitter?.card}
			<meta name="twitter:card" content={twitter.card} />
		{/if}

		{#if twitter?.creator}
			<meta name="twitter:creator" content={twitter.creator} />
		{/if}

		{#if twitter?.title}
			<meta name="twitter:title" content={twitter.title} />
		{/if}

		{#if twitter?.site}
			<meta name="twitter:site" content={twitter.site} />
		{/if}

		{#if twitter?.description}
			<meta name="twitter:description" content={twitter.description} />
		{/if}

		{#if twitter?.image}
			<meta name="twitter:image" content={twitter.image} />
		{/if}

		{#if twitter?.imageAlt}
			<meta name="twitter:image:alt" content={twitter.imageAlt} />
		{/if}

		<!-- Twitter Player Card -->
		{#if twitter?.card === 'player' && twitter?.playerUrl}
			<meta name="twitter:player" content={twitter.playerUrl} />
			{#if twitter?.playerWidth}
				<meta name="twitter:player:width" content={twitter.playerWidth} />
			{/if}
			{#if twitter?.playerHeight}
				<meta name="twitter:player:height" content={twitter.playerHeight} />
			{/if}
		{/if}

		<!-- Twitter App Card -->
		{#if twitter?.card === 'app'}
			{#if twitter?.appName}
				<meta name="twitter:app:name:iphone" content={twitter.appName} />
				<meta name="twitter:app:name:ipad" content={twitter.appName} />
				<meta name="twitter:app:name:googleplay" content={twitter.appName} />
			{/if}
			{#if twitter?.appIdIphone}
				<meta name="twitter:app:id:iphone" content={twitter.appIdIphone} />
			{/if}
			{#if twitter?.appIdIpad}
				<meta name="twitter:app:id:ipad" content={twitter.appIdIpad} />
			{/if}
			{#if twitter?.appIdGooglePlay}
				<meta name="twitter:app:id:googleplay" content={twitter.appIdGooglePlay} />
			{/if}
			{#if twitter?.appCountry}
				<meta name="twitter:app:country" content={twitter.appCountry} />
			{/if}
		{/if}
	{/if}

	<!-- Open Graph Meta Tags -->
	{#if og}
		{#if og?.url}
			<meta property="og:url" content={og.url} />
		{/if}

		{#if og?.type}
			<meta property="og:type" content={og.type} />
		{/if}

		{#if og?.title}
			<meta property="og:title" content={og.title} />
		{/if}

		{#if og?.description}
			<meta property="og:description" content={og.description} />
		{/if}

		{#if og?.image}
			<meta property="og:image" content={og.image} />
		{/if}

		{#if og?.imageSecureUrl}
			<meta property="og:image:secure_url" content={og.imageSecureUrl} />
		{/if}

		{#if og?.imageAlt}
			<meta property="og:image:alt" content={og.imageAlt} />
		{/if}

		{#if og?.imageWidth}
			<meta property="og:image:width" content={og.imageWidth.toString()} />
		{/if}

		{#if og?.imageHeight}
			<meta property="og:image:height" content={og.imageHeight.toString()} />
		{/if}

		{#if og?.siteName}
			<meta property="og:site_name" content={og.siteName} />
		{/if}

		{#if og?.locale}
			<meta property="og:locale" content={og.locale} />
		{/if}

		{#if og?.localeAlternate && og.localeAlternate.length > 0}
			{#each og.localeAlternate as alternate}
				<meta property="og:locale:alternate" content={alternate} />
			{/each}
		{/if}

		{#if og?.audio}
			<meta property="og:audio" content={og.audio} />
		{/if}

		<!-- Video Meta Tags -->
		{#if og?.video && typeof og.video === 'string'}
			<meta property="og:video" content={og.video} />
		{:else if og?.video && typeof og.video === 'object'}
			{#if og.video.url}
				<meta property="og:video" content={og.video.url} />
			{/if}
			{#if og.video.secureUrl}
				<meta property="og:video:secure_url" content={og.video.secureUrl} />
			{/if}
			{#if og.video.type}
				<meta property="og:video:type" content={og.video.type} />
			{/if}
			{#if og.video.width}
				<meta property="og:video:width" content={og.video.width.toString()} />
			{/if}
			{#if og.video.height}
				<meta property="og:video:height" content={og.video.height.toString()} />
			{/if}
		{/if}

		<!-- Article Meta Tags -->
		{#if og?.type === 'article' && og?.article}
			{#if og.article.publishedTime}
				<meta property="article:published_time" content={og.article.publishedTime} />
			{/if}
			{#if og.article.modifiedTime}
				<meta property="article:modified_time" content={og.article.modifiedTime} />
			{/if}
			{#if og.article.expirationTime}
				<meta property="article:expiration_time" content={og.article.expirationTime} />
			{/if}
			{#if og.article.section}
				<meta property="article:section" content={og.article.section} />
			{/if}
			{#if og.article.author && typeof og.article.author === 'string'}
				<meta property="article:author" content={og.article.author} />
			{:else if og.article.author && Array.isArray(og.article.author)}
				{#each og.article.author as author}
					<meta property="article:author" content={author} />
				{/each}
			{/if}
			{#if og.article.tag && typeof og.article.tag === 'string'}
				<meta property="article:tag" content={og.article.tag} />
			{:else if og.article.tag && Array.isArray(og.article.tag)}
				{#each og.article.tag as tag}
					<meta property="article:tag" content={tag} />
				{/each}
			{/if}
		{/if}
	{/if}
</svelte:head>

<!--
@component
[Go to docs](https://runes-meta-tag.codewithshin.com/)
## Type
[MetaProps](https://github.com/shinokada/runes-meta-tags/blob/main/src/lib/types.ts#L57)
## Props
@prop title
@prop robots
@prop description
@prop keywords
@prop twitter
@prop og
@prop canonical
@prop author
@prop viewport
-->
