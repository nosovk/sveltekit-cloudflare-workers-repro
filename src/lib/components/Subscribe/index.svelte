<script lang="ts">
  import { fade } from 'svelte/transition';
  import { enhance } from '$app/forms';
  // utils
  import { fadeOptions } from '$lib/utils/animations';

  let subscribeError = '';
  let pending = false;
  let open = false;

  const reset = () => {
    open = false;
    pending = false;
    subscribeError = '';
  };

  const keyPress = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && open) reset();
  };
</script>

<svelte:window on:keyup={keyPress} />

<section>
  {#if open}
    <div
      class="notify"
      in:fade={fadeOptions.in}
      out:fade={fadeOptions.out}
      class:error={!!subscribeError}
    >
      <button class="close-wrapper open-menu" on:click={reset}>
        <span class="burger" />
      </button>
      {#if subscribeError}
        <span class="text-2">{subscribeError}</span>
        <button class="btn" on:click={reset}>Try again</button>
      {:else if pending}
        <span class="text-2">Sending...</span>
      {:else}
        <span class="text-2">Thanks for signing up! We’ll email you soon.</span>
      {/if}
    </div>
  {:else}
    <form
      method="POST"
      action="/api/subscribe"
      in:fade={fadeOptions.in}
      out:fade={fadeOptions.out}
      use:enhance={({ form }) => {
        pending = true;

        return async ({ result }) => {
          subscribeError = '';
          if (result.type === 'failure') {
            subscribeError =
              result.data?.message === 'Member Exists'
                ? 'This email already subscribed!'
                : 'Oops, something went wrong.';
            console.error(`Subscribe error: ${subscribeError}`);
          }
          if (result.type === 'error') {
            subscribeError = result.error?.message;
            console.error(`Subscribe error: ${result.error?.message}`);
            return;
          }
          pending = false;
          open = true;
          form.reset();
        };
      }}
    >
      <span class="text-3">Sign up to stay up to date</span>
      <div class="inputs">
        <input type="email" name="email" maxlength="100" placeholder="email address" required />
        <button type="submit" class="uppercase">subscribe</button>
      </div>
    </form>
  {/if}
</section>

<style lang="scss">
  section {
    @extend %flex-center;

    position: relative;
    width: 100%;
    min-height: 11.25rem;
    margin-top: var(--size-64);
    background-color: var(--color-primary);

    @media screen and (min-width: $min-width-tablet) {
      min-height: 15rem;
    }

    form {
      @extend %flex-center;

      width: fit-content;

      flex-direction: column;

      .inputs {
        @extend %flex-center;

        input {
          @extend %input;

          width: 10.5rem;

          @media screen and (min-width: $min-width-tablet) {
            width: 16.5rem;
          }
        }

        button {
          @extend %flex-center;

          height: var(--size-50);
          padding: 0 var(--size-16);
          border: none;
          background-color: var(--color-secondary);

          @include font(var(--size-15), var(--weight-700), var(--size-22), var(--color-white));

          &:hover {
            color: var(--color-primary);
          }
        }
      }

      .text-3 {
        align-self: flex-start;
        margin-bottom: var(--size-18);
      }
    }

    .notify {
      @extend %flex-center;

      // align-items: flex-start;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: var(--size-40) var(--size-80) var(--size-40) var(--size-28);
      background-color: var(--color-primary);

      &.error {
        flex-direction: column;
        padding: var(--size-30) var(--size-80) var(--size-30) var(--size-28);
        background-color: var(--color-secondary);

        .text-2 {
          margin-bottom: var(--size-24);
          color: var(--color-primary);
        }

        button {
          margin-left: var(--size-54);

          @media screen and (min-width: $min-width-tablet) {
            margin-left: 0;
          }
        }

        .close-wrapper {
          .burger {
            &::before,
            &::after {
              background: var(--color-white);
            }
          }

          &:hover {
            .burger {
              &::before,
              &::after {
                background: var(--color-primary);
              }
            }
          }
        }
      }

      .close-wrapper {
        @extend %burger;

        position: absolute !important;
        z-index: 1;
        top: var(--size-16);
        right: var(--size-20);
        margin-right: 0;

        .burger {
          display: block !important;
        }

        &.open-menu {
          position: fixed;
          display: block;
          background: var(--transparent);

          .burger {
            background-color: var(--transparent);

            &::after {
              top: 0;
              transform: rotate(-45deg);
            }

            &::before {
              top: 0;
              transform: rotate(45deg);
            }
          }
        }
      }
    }
  }
</style>
