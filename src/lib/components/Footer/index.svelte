<script lang="ts">
  import { fade } from 'svelte/transition';
  import { enhance } from '$app/forms';
  // utils
  import { menu, socials, terms } from '$lib/utils/menu';
  import { fadeOptions } from '$lib/utils/animations';
  // assets
  import logoWhite from '$lib/components/Header/assets/BfU-logo-w.svg';

  let open = false;
  let error = false;
  let isSent = false;
  let sending = false;

  const openContactUsModal = () => {
    open = true;
  };

  const reset = () => {
    open = false;
    error = false;
    isSent = false;
    sending = false;
  };

  const keyPress = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && open) reset();
  };
</script>

<svelte:window on:keyup={keyPress} />

<footer>
  <div class="container">
    <div class="left">
      <div class="footer-top">
        <a class="logo" href="/" title="logo">
          <img src={logoWhite} width="200" height="24" alt="B4Ukraine logo" />
        </a>

        <nav>
          {#each menu as menuItem}
            <a class="text-footer" title={menuItem.title} href={menuItem.url}>
              {menuItem.title}
            </a>
          {/each}
        </nav>
      </div>
      <div class="footer-middle">
        <p class="text-4">
          <a class="text-4" rel="noreferrer" target="_blank" href="https://www.weareukraine.info/"
            >Learn the truth</a
          > about Russia`s war in Ukraine
        </p>
        <p class="text-4">
          <a class="text-4" rel="noreferrer" target="_blank" href="https://leave-russia.org/"
            >Track companies</a
          >
          that continue doing business in Russia
        </p>
        <p class="mb-0 text-4">Follow us on social media</p>
        <div class="social">
          {#each socials as item}
            <a class="text-4" target="_blank" rel="noreferrer" title={item.title} href={item.url}>
              {item.title}
            </a>
          {/each}
        </div>
        <p class="text-4">
          <a
            class="text-4"
            title="Contact us"
            href="/"
            on:click|preventDefault={openContactUsModal}
          >
            Contact us
          </a>
        </p>
        <p class="text-4">#StopFundingTheWar</p>
      </div>
      <div class="footer-bottom">
        <nav>
          {#each terms as item}
            <a class="text-8" title={item.title} href={item.url} on:click|preventDefault>
              {item.title}
            </a>
          {/each}
        </nav>
        <p class="text-8">
          <a class="text-8" href="https://nodeart.io/en" rel="noreferrer" target="_blank"
            >Code by NodeArt</a
          > All Rights Reserved
        </p>
      </div>
    </div>
    <div class="right">
      <div class="brand">
        <div class="blue" on:mousemove|once={(elem) => (elem.target.dataset.hovered = true)} />
        <div class="yellow" on:mousemove|once={(elem) => (elem.target.dataset.hovered = true)} />
      </div>
      <div class="copyright">
        <nav>
          {#each terms as item}
            <a class="text-8" title={item.title} href={item.url} on:click|preventDefault>
              {item.title}
            </a>
          {/each}
        </nav>
        <p class="text-8">
          <a class="text-8" href="https://nodeart.io/en" rel="noreferrer" target="_blank"
            >Code by NodeArt</a
          > All Rights Reserved
        </p>
      </div>
    </div>
  </div>
</footer>

{#if open}
  <div class="contact-form" in:fade={fadeOptions.in} out:fade={fadeOptions.out}>
    <button class="close-wrapper open-menu" on:click={reset}>
      <span class="burger" />
    </button>
    {#if isSent}
      <span class="text-1" in:fade={fadeOptions.in} out:fade={fadeOptions.out}> Sent! </span>
    {:else if error}
      <span class="text-1" in:fade={fadeOptions.in} out:fade={fadeOptions.out}> Error! </span>
    {:else if sending}
      <span class="text-1" in:fade={fadeOptions.in} out:fade={fadeOptions.out}> Sending... </span>
    {:else}
      <form
        method="POST"
        action="/api/contact"
        in:fade={fadeOptions.in}
        out:fade={fadeOptions.out}
        use:enhance={({ form }) => {
          sending = true;

          return async ({ result }) => {
            error = false;
            if (result.type === 'failure') {
              console.error(`Send message error: ${result.data?.message}`);
              error = true;
              return;
            }
            if (result.type === 'error') {
              console.error(`Send message error: ${result.error?.message}`);
              error = true;
              return;
            }
            form.reset();
            sending = false;
            open = true;
            isSent = true;
          };
        }}
      >
        <span class="text-2">Please tell us all you want</span>
        <input type="text" name="name" maxlength="100" placeholder="name" required />
        <input type="email" name="email" maxlength="100" placeholder="email address" required />
        <textarea
          name="message"
          placeholder="what’s up?"
          minlength="10"
          maxlength="250"
          cols="22"
          rows="4"
          required
        />
        <button type="submit" class="btn uppercase">submit</button>
      </form>
    {/if}
  </div>
{/if}

<style lang="scss">
  @keyframes play-yellow {
    from {
      background-color: var(--color-secondary);
    }

    to {
      background-color: var(--color-primary);
    }
  }

  @keyframes play-blue {
    from {
      background-color: var(--color-secondary);
    }

    to {
      background-color: var(--color-blue);
    }
  }

  %copyright {
    nav {
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;

      a {
        margin-right: var(--size-26);
        color: var(--color-white);

        // TODO: Don`t remove!
        // &:hover {
        //   color: var(--color-primary);
        // }
      }
    }

    p {
      color: var(--color-white);

      a {
        color: var(--color-white);

        &:hover {
          color: var(--color-primary-light);
        }
      }
    }
  }

  footer {
    background-color: var(--color-secondary);

    .text-4 {
      @media screen and (min-width: $min-width-medium) {
        font-size: var(--size-15);
        line-height: var(--size-22);
      }
    }

    .container {
      display: flex;
      padding: 3.4375rem var(--size-30) 5.8125rem;

      @media screen and (min-width: $min-width-tablet) {
        padding: var(--size-40) 6.875rem 7.25rem;
      }

      .left,
      .right {
        width: 100%;

        @media screen and (min-width: $min-width-large) {
          width: 50%;
        }
      }

      .left {
        display: flex;
        flex-direction: column;

        a {
          color: var(--color-primary);

          &:hover {
            color: var(--color-primary-light);
          }

          &:focus,
          &:active {
            color: var(--color-white);
          }
        }

        .footer-top {
          .logo {
            img {
              width: 100%;
              max-width: 12.5rem;
            }
          }

          nav {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-top: var(--size-32);
          }
        }

        .footer-middle {
          p {
            color: var(--color-white);
          }

          .social {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
        }

        .footer-bottom {
          @extend %copyright;

          @media screen and (min-width: $min-width-large) {
            display: none;
          }
        }
      }

      .right {
        display: none;
        flex-direction: column;

        @media screen and (min-width: $min-width-large) {
          display: flex;
        }

        .brand {
          --cube-size: 15rem;
          @extend %flex-center;

          justify-content: flex-start;
          margin-bottom: var(--size-16);

          @media screen and (min-width: $min-width-large) {
            --cube-size: 15rem;
          }

          @media screen and (min-width: $min-width-x-large) {
            --cube-size: 19.75rem;
          }

          .blue,
          .yellow {
            position: relative;
            overflow: hidden;
            width: 50%;
            max-width: var(--cube-size);
            height: var(--cube-size);
            flex: 1 0 50%;
            border: var(--size-2) solid var(--color-white);
            background-color: var(--color-secondary);
            transition: border-color var(--transition-default);
          }

          .blue {
            margin-right: var(--size-15);
          }

          :global(.blue[data-hovered]) {
            border-color: var(--transparent);
            animation: play-blue 0.8s var(--timing-function-default);
            background-color: var(--color-blue);
          }

          :global(.yellow[data-hovered]) {
            border-color: var(--transparent);
            animation: play-yellow 0.8s var(--timing-function-default);
            background-color: var(--color-primary);
          }
        }

        .copyright {
          @extend %copyright;
        }
      }
    }
  }

  .contact-form {
    position: fixed;
    z-index: 201;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 var(--size-40);
    background-color: var(--color-primary);

    @media screen and (min-width: $min-width-small) {
      padding: 0 8rem;
    }

    @media screen and (min-width: $min-width-tablet) {
      top: 50%;
      left: 50%;
      width: 50%;
      max-width: 71.25rem;
      height: 40rem;
      transform: translate(-50%, -50%);
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

    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      span {
        margin-bottom: var(--size-15);
      }

      input,
      textarea {
        @extend %input;

        width: 10.5rem;

        @media screen and (min-width: $min-width-tablet) {
          width: 100%;
          max-width: 34rem;
        }
      }

      input {
        margin-bottom: var(--size-10);
      }

      textarea {
        min-height: 5.25rem;
        padding-top: var(--size-16);
        margin-bottom: var(--size-20);
        line-height: 1.4;
      }

      button {
        background-color: var(--color-secondary);
      }
    }
  }
</style>
