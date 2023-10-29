<script lang="ts">
  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';
  import searchIcon from '$lib/components/Search/assets/search.svg';

  export let bordered = false;
  export let searchQuery = '';
  const dispatch = createEventDispatcher();
  let input: HTMLInputElement;

  const keyPress = (e: { key: string }) => {
    if (searchQuery.length && e.key === 'Enter') {
      dispatch('search', { searchQuery });
    }
  };

  const reset = () => {
    dispatch('reset');
    searchQuery = '';
  };

  onMount(() => {
    input?.focus();
  });
</script>

<svelte:window on:keyup={keyPress} />

<form class:bordered on:submit={() => dispatch('search', { searchQuery })} action="search">
  <label>
    <input
      placeholder="Search..."
      minlength="4"
      maxlength="100"
      type="search"
      name="q"
      bind:value={searchQuery}
      bind:this={input}
    />
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="reset" class:active={searchQuery.length} on:click={reset}>
      <span class="burger" />
    </div>
  </label>
  <button type="submit">
    <img src={searchIcon} width="25" height="25" alt="search" />
  </button>
</form>

<style lang="scss">
  form {
    --input-width: 16.25rem;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    label {
      position: relative;
      width: var(--input-width);

      input {
        @extend %input;

        width: 100%;
        appearance: none;

        &::-webkit-search-decoration,
        &::-webkit-search-cancel-button,
        &::-webkit-search-results-button,
        &::-webkit-search-results-decoration {
          display: none;
        }
      }

      .reset {
        @extend %burger;

        position: absolute;
        z-index: 1;
        top: var(--size-12);
        right: var(--size-12);
        display: none;
        margin-right: 0;

        .burger {
          background-color: var(--transparent);

          &::after {
            top: var(--size-12);
            transform: rotate(-45deg);
          }

          &::before {
            top: var(--size-12);
            transform: rotate(45deg);
          }
        }

        &.active {
          display: block;

          &:hover {
            .burger {
              &::after {
                background: var(--color-secondary-light);
              }

              &::before {
                background: var(--color-secondary-light);
              }
            }
          }
        }
      }
    }

    button {
      @extend %flex-center;

      height: var(--size-50);
      padding: 0 var(--size-16);
      border: none;
      background-color: var(--color-secondary);

      img {
        transform: scale(1);
        transition: transform var(--transition-default);
      }

      &:hover {
        img {
          transform: scale(1.15);
        }
      }
    }

    &.bordered {
      --input-width: 100%;

      justify-content: flex-start;

      label {
        input {
          border: 2px solid var(--color-primary);
        }

        .reset {
          &.active {
            .burger {
              display: block;
            }
          }
        }
      }
    }
  }
</style>
