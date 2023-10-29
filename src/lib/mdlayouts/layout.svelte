<script context="module" lang="ts">
  import { a, img, blockquote } from './components';
  export { a, img, blockquote };
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  // components
  import Seo from '$lib/components/Seo/index.svelte';
  import Social from '$lib/components/Social/index.svelte';
  import Breadcrumbs from '$lib/components/Breadcrumbs/index.svelte';
  // utils
  import { websiteSchema, articleSchema } from '$lib/utils/json-ld';
  import data from '$lib/utils/site-data';
  import { menu } from '$lib/utils/menu';

  export let published = true;
  export let title = '';
  export let description = '';
  export let canonical = '';
  export let noindex = false;
  export let thumbnail = { src: '', srcSet: '' };
  export let thumbnailImg = '';
  let breadcrumb = { url: '', title: '' };
  // eslint-disable-next-line no-useless-escape
  const filename = thumbnailImg?.replace(/^.*[\\\/]/, '') ?? 'image.png';

  onMount(() => {
    menu.forEach((item) => {
      if ($page.url.pathname.includes(item.url)) {
        breadcrumb = item;
      }
    });
  });
</script>

<Seo
  {title}
  {description}
  isPost={true}
  {canonical}
  {noindex}
  thumbnail={thumbnail.src}
  schemas={[
    {
      ...articleSchema,
      image: thumbnail.src,
      url: data.siteUrl + $page.url.pathname,
      name: title,
      description: description,
      backstory: description,
      headline: title
    },
    websiteSchema
  ]}
/>

<div class="container">
  <Breadcrumbs url={breadcrumb.url} title={breadcrumb.title} current={title} />
  <div class="content-block">
    <!-- svelte-ignore component-name-lowercase -->
    <img
      srcset={thumbnail.srcSet}
      src={thumbnail.src}
      width="500"
      height="500"
      alt={title}
      class="main"
    />
    <Social thumbnail={thumbnail.src} {filename} {title} url={$page.url.pathname} />
    <div class="divider" />
    <slot />
    <Social thumbnail={thumbnail.src} {filename} {title} url={$page.url.pathname} />
  </div>
</div>

<style lang="scss">
  .container {
    display: block;
    width: 100%;
    min-width: 20rem;
    max-width: 62.5rem;
    box-sizing: border-box;
    padding: 0 var(--size-30);
    margin: 0 auto;
  }

  .content-block {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    color: var(--color-secondary);
  }

  .divider {
    height: var(--size-20);
  }

  :global(.container .content-block h1) {
    width: 100%;
    font-size: var(--size-46);
    font-weight: var(--weight-500);
    letter-spacing: 0.04em;
    line-height: var(--size-58);
  }

  :global(.container .content-block h2) {
    font-size: var(--size-18);
    font-weight: var(--weight-400);
    line-height: var(--size-32);
  }

  :global(.container .content-block h3) {
    font-size: var(--size-15);
    font-weight: var(--weight-700);
    line-height: var(--size-22);
  }

  :global(.container .content-block h4) {
    font-size: var(--size-15);
    font-weight: var(--weight-700);
    line-height: var(--size-22);
  }

  :global(.container .content-block h1 a) {
    background-color: var(--transparent);
    font-size: var(--size-46);
    font-weight: var(--weight-500);
    letter-spacing: 0.04em;
    line-height: var(--size-58);
    text-decoration: none !important;
  }

  :global(.container .content-block h2 a) {
    background-color: var(--transparent);
    font-size: var(--size-18);
    font-weight: var(--weight-400);
    line-height: var(--size-32);
    text-decoration: none !important;
  }

  :global(.container .content-block h3 a) {
    background-color: var(--transparent);
    font-size: var(--size-15);
    font-weight: var(--weight-700);
    line-height: var(--size-22);
    text-decoration: none !important;
  }

  :global(.container .content-block h4 a) {
    background-color: var(--transparent);
    font-size: var(--size-15);
    font-weight: var(--weight-700);
    line-height: var(--size-22);
    text-decoration: none !important;
  }

  :global(.container .content-block ul) {
    padding: 0 0 0 var(--size-32);
    margin: 0 0 0 var(--size-32);
    list-style: none;
  }

  :global(.container .content-block ol) {
    padding: 0 0 0 var(--size-32);
    margin: 0 0 0 var(--size-32);
  }

  :global(.container .content-block li) {
    font-size: var(--size-14);
    font-weight: var(--weight-400);
    line-height: var(--size-20);
  }

  :global(.container .content-block ol li::marker) {
    color: var(--color-red);
  }

  :global(.container .content-block ol li em) {
    color: var(--color-secondary);
    font-style: normal;
  }

  :global(.container .content-block ul li::before) {
    display: inline-block;
    width: 1em;
    margin-left: -1.2rem;
    color: var(--color-red);
    content: '\2022';
    font-weight: var(--weight-700);
  }

  :global(.container .content-block p) {
    margin: var(--size-10) 0;
    font-size: var(--size-14);
    font-weight: var(--weight-400);
    line-height: var(--size-20);
  }

  :global(.container .content-block p:first-child) {
    margin-top: 0;
  }

  :global(.container .content-block p img) {
    display: block;
    margin: 0 auto;
  }

  :global(.container .content-block strong) {
    font-weight: var(--weight-700);
  }

  :global(.container .content-block a) {
    padding: var(--size-4) var(--size-6) var(--size-6);
    background-color: var(--color-primary);
    color: var(--color-secondary);
    font-size: var(--size-14);
    font-weight: var(--weight-400);
    line-height: var(--size-20);
    text-decoration: none;
  }

  :global(.container .content-block a:hover) {
    background-color: var(--color-primary-light);
  }

  :global(.container .content-block a:active) {
    background-color: var(--color-secondary);
    color: var(--color-primary);
  }

  :global(.container .content-block a:focus) {
    background-color: var(--color-secondary);
    color: var(--color-primary);
  }

  :global(.container .content-block > img) {
    width: 100%;
    max-width: 31.25rem;
    height: auto;
    margin: 0 auto;
  }

  :global(.container .content-block img.main) {
    margin-bottom: var(--size-20);
  }

  :global(.container .content-block del) {
    padding: var(--size-4) var(--size-6) var(--size-6);
    background-color: var(--color-primary);
    color: var(--color-secondary);
    font-size: var(--size-14);
    font-weight: var(--weight-400);
    line-height: var(--size-20);
    text-decoration: none;
  }

  @media screen and (min-width: 768px) {
    :global(.container .content-block h3) {
      font-size: var(--size-24);
      line-height: var(--size-36);
    }

    :global(.container .content-block h3 a) {
      font-size: var(--size-24);
      line-height: var(--size-36);
    }

    :global(.container .content-block h4 a) {
      font-size: var(--size-20);
      line-height: var(--size-30);
    }

    :global(.container .content-block li) {
      margin-bottom: var(--size-6);
      font-size: var(--size-20);
      line-height: var(--size-30);
    }

    :global(.container .content-block li::before) {
      margin-left: -1.5rem;
    }

    :global(.container .content-block p) {
      font-size: var(--size-20);
      line-height: var(--size-30);
    }

    :global(.container .content-block h2) {
      font-size: var(--size-30);
      line-height: var(--size-42);
    }

    :global(.container .content-block h4) {
      font-size: var(--size-20);
      line-height: var(--size-30);
    }

    :global(.container .content-block h2 a) {
      font-size: var(--size-30);
      line-height: var(--size-42);
    }

    :global(.container .content-block a) {
      font-size: var(--size-20);
      line-height: var(--size-30);
    }

    :global(.container .content-block del) {
      font-size: var(--size-20);
      line-height: var(--size-30);
    }
  }
</style>
