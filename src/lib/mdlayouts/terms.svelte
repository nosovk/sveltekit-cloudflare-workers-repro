<script lang="ts">
  // components
  import Seo from '$lib/components/Seo/index.svelte';
  import Breadcrumbs from '$lib/components/Breadcrumbs/index.svelte';
  // utils
  import { websiteSchema, organizationSchema } from '$lib/utils/json-ld';

  export let title = '';
  export const date = '';
  export const published = '';
  export const category = '';
  export const snippet = '';
  export const thumbnailImg = '';
  export const thumbnail = '';
  export const slug = '';
  export const url = '';
  export const layout = '';
  export let description = '';
  export let canonical = '';
  export let noindex = false;
</script>

<Seo
  {title}
  {description}
  isPost={false}
  {canonical}
  {noindex}
  schemas={[websiteSchema, organizationSchema]}
/>

<div class="container">
  <Breadcrumbs current={title} />
  <div class="content-block">
    <slot />
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

  @media screen and (min-width: 768px) {
    :global(.container .content-block h2) {
      font-size: var(--size-30);
      line-height: var(--size-42);
    }
  }

  :global(.container .content-block h3) {
    font-size: var(--size-15);
    font-weight: var(--weight-700);
    line-height: var(--size-22);
  }

  @media screen and (min-width: 768px) {
    :global(.container .content-block h3) {
      font-size: var(--size-24);
      line-height: var(--size-36);
    }
  }

  :global(.container .content-block h4) {
    font-size: var(--size-15);
    font-weight: var(--weight-700);
    line-height: var(--size-22);
  }

  @media screen and (min-width: 768px) {
    :global(.container .content-block h4) {
      font-size: var(--size-20);
      line-height: var(--size-30);
    }
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

  @media screen and (min-width: 768px) {
    :global(.container .content-block h2 a) {
      font-size: var(--size-30);
      line-height: var(--size-42);
    }
  }

  :global(.container .content-block h3 a) {
    background-color: var(--transparent);
    font-size: var(--size-15);
    font-weight: var(--weight-700);
    line-height: var(--size-22);
    text-decoration: none !important;
  }

  @media screen and (min-width: 768px) {
    :global(.container .content-block h3 a) {
      font-size: var(--size-24);
      line-height: var(--size-36);
    }
  }

  :global(.container .content-block h4 a) {
    background-color: var(--transparent);
    font-size: var(--size-15);
    font-weight: var(--weight-700);
    line-height: var(--size-22);
    text-decoration: none !important;
  }

  @media screen and (min-width: 768px) {
    :global(.container .content-block h4 a) {
      font-size: var(--size-20);
      line-height: var(--size-30);
    }
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

  :global(.container .content-block ul li::before) {
    display: inline-block;
    width: 1em;
    margin-left: -1.2rem;
    color: var(--color-red);
    content: '\2022';
    font-weight: var(--weight-700);
  }

  @media screen and (min-width: 768px) {
    :global(.container .content-block li) {
      font-size: var(--size-20);
      line-height: var(--size-30);
    }

    :global(.container .content-block li::before) {
      margin-left: -1.5rem;
    }
  }

  :global(.container .content-block p) {
    margin: var(--size-10) 0;
    font-size: var(--size-14);
    font-weight: var(--weight-400);
    line-height: var(--size-20);
  }

  @media screen and (min-width: 768px) {
    :global(.container .content-block p) {
      font-size: var(--size-20);
      line-height: var(--size-30);
    }
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

  @media screen and (min-width: 768px) {
    :global(.container .content-block a) {
      font-size: var(--size-20);
      line-height: var(--size-30);
    }
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
</style>
