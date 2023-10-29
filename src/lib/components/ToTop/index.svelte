<script lang="ts">
  import { fade } from 'svelte/transition';
  import arrowNav from '$lib/components/ToTop/arrow-slide-nav.svg';

  let currentPosition: number;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
</script>

<svelte:window bind:scrollY={currentPosition} />

{#if currentPosition > 50}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="button" on:click={scrollToTop} transition:fade={{ duration: 100 }}>
    <img src={arrowNav} width="50" height="50" alt="to top" />
  </div>
{/if}

<style lang="scss">
  .button {
    position: fixed;
    z-index: 110;
    right: 3%;
    bottom: 7rem;
    border-radius: var(--size-20);
    background-color: var(--midnight-blue);
    cursor: pointer;
    opacity: 0.7;
    transition: all ease-out 0.2s;
  }

  .button:hover {
    opacity: 1;
  }

  .button img {
    width: var(--size-50);
    transform: rotate(-90deg) translateX(-8%);
  }
</style>
