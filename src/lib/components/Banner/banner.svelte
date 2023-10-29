<script lang="ts">
  import whiteLogo from '$lib/assets/white-logo.png';
  import { base } from '$app/paths';
</script>

<a class="relative next" href="{base}/about">
  <span class="title">The Business of Leaving: <span class="mobile">How</span></span>
  <span><span class="desktop">How </span>Multinationals Can Responsibly Exit Russia</span>
  <div class="logo">
    <img src={whiteLogo} alt="Logo" />
  </div>

  <div class="square blue" />
  <div class="square yellow" />
</a>

<style lang="scss">
  .relative {
    position: relative;
    left: 0;
    display: block;
    width: 100%;
    padding: rem(34) rem(30);
    margin: 0 auto rem(50);
    overflow: hidden;

    &.next {
      min-height: rem(504);
      background: url('/images/banners/banner_mobile.jpg') no-repeat bottom right;
      background-size: cover;

      @media screen and (min-width: $min-width-medium) {
        min-height: rem(542);
        background: url('/images/banners/banner_desktop.jpg') no-repeat center right;
        background-size: cover;
      }

      span {
        z-index: 1;
        position: relative;
        display: block;
        text-transform: uppercase;

        @include font(rem(27), var(--weight-500), rem(32), var(--color-white));

        @media screen and (min-width: $min-width-small) {
          font-size: rem(38);
          line-height: rem(42);
        }

        @media screen and (min-width: $min-width-tablet) {
          font-size: rem(50);
          line-height: rem(54);
        }

        &.title {
          color: var(--color-primary);
        }

        span {
          display: inline;

          &.mobile {
            @media screen and (min-width: $min-width-small) {
              display: none;
            }
          }

          &.desktop {
            display: none;

            @media screen and (min-width: $min-width-small) {
              display: inline;
            }
          }
        }
      }

      .logo {
        position: absolute;
        bottom: 0;
        width: rem(119);

        @media screen and (min-width: $min-width-small) {
          width: rem(214);
        }
      }

      .square {
        position: absolute;
        width: rem(382);
        height: rem(382);
        border: rem(4) solid;

        &.blue {
          top: rem(25);
          left: rem(18);
          border-color: var(--color-blue);

          @media screen and (min-width: $min-width-small) {
            top: rem(27);
            left: rem(30);
          }
        }

        &.yellow {
          top: rem(284);
          left: rem(165);
          border-color: var(--color-primary);

          @media screen and (min-width: $min-width-small) {
            top: rem(300);
            left: rem(312);
          }
        }
      }
    }

    @media screen and (min-width: $min-width-small) {
      padding: rem(55);
    }
  }
</style>
