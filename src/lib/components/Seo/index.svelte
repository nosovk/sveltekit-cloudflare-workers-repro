<script lang="ts">
  import { page } from '$app/stores';
  import data from '$lib/utils/site-data';
  import { serializeSchema } from '$lib/utils/json-ld';
  import type { Schema } from '$lib/utils/json-ld';
  import { browser } from '$app/environment';

  export let schemas: Schema[];
  export let canonical = '';
  export let title = '';
  export let isPost = false;
  export let thumbnail = '';
  export let description = '';
  export let noindex = false;

  const { siteName, siteUrl, fbAppId } = data;
  const defaultDescription = data.description;
  const defaultImage = siteUrl + (thumbnail || '/preview.png');
</script>

<svelte:head>
  <title>{title} | {siteName}</title>
  <link
    rel="canonical"
    href={canonical ? siteUrl + canonical : siteUrl + ($page.url.pathname ?? '')}
  />
  <meta name="description" content={description || defaultDescription} />
  <meta name="msapplication-TileColor" content={data.theme} />
  <meta name="theme-color" content={data.theme} />
  <meta name="robots" content={noindex ? 'noindex' : 'all'} />
  <meta name="googlebot" content={noindex ? 'noindex' : 'all'} />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-title" content={siteName} />
  <meta name="apple-mobile-web-app-status-bar-style" content={data.theme} />
  <meta name="referrer" content="always" />
  <meta name="subject" content={title} />
  <meta name="rating" content="safe for kids" />
  <meta name="format-detection" content="telephone=no" />

  <!-- Open Graph / Facebook -->
  <meta property="op:markup_version" content="v1.0" />
  <meta property="fb:app_id" content={fbAppId} />
  <meta property="og:type" content={isPost ? 'article' : 'website'} />
  <meta property="og:url" content="{siteUrl}{$page.url.pathname ?? ''}" />
  <meta property="og:title" content={title || siteName} />
  <meta property="og:description" content={description || defaultDescription} />
  <meta property="og:image" content={defaultImage} />
  <meta property="og:image:width" content="1000" />
  <meta property="og:image:height" content="1000" />
  <meta property="og:image:alt" content={description || defaultDescription} />
  <meta property="business:contact_data:country_name" content="Ukraine" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:site_name" content={siteName} />

  <!-- Twitter -->
  <meta property="twitter:card" content={data.twitterCard} />
  <meta property="twitter:site" content={data.twitterSite} />
  <meta property="twitter:url" content="{siteUrl}{$page.url.pathname ?? ''}" />
  <meta property="twitter:title" content={title || siteName} />
  <meta property="twitter:description" content={description || defaultDescription} />
  <meta property="twitter:image" content={defaultImage} />
  <meta property="twitter:image:alt" content={title || siteName} />

  <link rel="preload" href={defaultImage} as="fetch" />
  <link rel="image_src" href={defaultImage} />

  {#if !browser}

    <!-- JSON-LD Schema -->
    {#each schemas as schema}
      {@html serializeSchema(schema)}
    {/each}{/if}
</svelte:head>
