<script lang="ts">
  // types
  import type { IPost } from '$lib/utils/types';
  // components
  import Social from '$lib/components/Social/index.svelte';
  import { onMount } from 'svelte';

  export let post: IPost;
  export let type = '';

  const { meta } = post;
  // eslint-disable-next-line no-useless-escape
  const filename = meta.thumbnailImg?.replace(/^.*[\\\/]/, '') ?? 'image.png';
  let date = '';

  const getDate = () => {
    let str = meta.date;
    const arr = str.split('.');
    const month = arr[1];
    const day = arr[0].startsWith('0') ? arr[0].slice(1) : arr[0];
    const year = arr[2];
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    const monthName = months[Number(month) - 1];
    date = `${monthName} ${day}, ${year}`;
  };

  onMount(() => getDate());
</script>

<div class="preview" class:minimal={type && type === 'minimal'}>
  <a href={post.path} class="img-wrapper">
    {#if meta?.thumbnail}
      <img
        srcset={meta.thumbnail.srcSet}
        src={meta.thumbnail.src}
        width="320"
        height="320"
        alt={meta.title}
      />
    {/if}
  </a>
  <div class="row">
    <div class="date">
      <span class="text-8">{date}</span>
    </div>
    <Social thumbnail={meta.thumbnail?.src ?? ''} {filename} title={meta.title} url={post.path} />
  </div>
  <p class="relative text-7">
    {meta.snippet}
  </p>
  {#if type && type === 'goto'}
    <a href={post.path} class="link text-7">Go to &#8594;</a>
  {/if}
</div>

<style lang="scss">
  .preview {
    position: relative;
    width: 100%;
    margin-bottom: var(--size-32);

    @media screen and (min-width: $min-width-large) {
      width: 30%;
      max-width: rem(319);
      flex: 1 0 30%;
      margin-right: var(--size-22);

      &:nth-child(3n) {
        margin-right: 0;
      }
    }

    &.minimal {
      margin-bottom: var(--size-18);
    }

    .img-wrapper {
      display: block;
      overflow: hidden;
      min-width: 20rem;
      min-height: 20rem;
      padding: 0;
      background-color: var(--transparent);

      @media screen and (min-width: $min-width-large) {
        min-width: unset;
        max-width: 24.375rem;
        min-height: unset;
        max-height: 24.375rem;
      }

      img {
        width: 100%;
        height: auto;
        transform: scale(1);
        transition: transform var(--transition-default);
      }

      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: var(--size-20);
    }

    .text-7 {
      @include truncate(4);

      min-width: 20rem;
      min-height: 5.5rem;
      margin-top: var(--size-18);

      @media screen and (min-width: $min-width-large) {
        max-width: 24.375rem;
      }
    }

    .link {
      position: absolute;
      z-index: 1;
      right: 0;
      bottom: var(--size-8);
      min-width: unset;
      min-height: unset;
      margin-top: unset;
    }
  }
</style>
