import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-cloudflare-workers';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
      scss: {
        prependData: `@use "src/mixins.scss" as *;`
      }
    }),
    mdsvex(mdsvexConfig)
  ],
  kit: { adapter: adapter(),
    paths: {
    relative: false,
    base: "/b4u"
  }
  },
};

export default config;
