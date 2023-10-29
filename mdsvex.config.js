import mdsvexUrlToImport from './mdsvexplugins/mdsvex-url-to-import.js';
import mdsvexFormatterToImport from './mdsvexplugins/mdsvex-formatter-to-import.js';
import mdsvexGenerateSlug from './mdsvexplugins/mdsvex-generate-slug.js';
import remarkAbbr from 'remark-abbr';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const config = {
  layout: {
    _: './src/lib/mdlayouts/layout.svelte',
    terms: './src/lib/mdlayouts/terms.svelte'
  },
  extensions: ['.svelte.md', '.md', '.svx'],
  smartypants: {
    dashes: 'oldschool'
  },
  remarkPlugins: [
    mdsvexGenerateSlug,
    mdsvexFormatterToImport,
    mdsvexUrlToImport,
    [
      {
        buildUrl(values, defaultBuildUrl) {
          return values.user === 'example' ? false : defaultBuildUrl(values);
        },
        // Use your own repository
        repository: 'https://github.com/NodeArt/BusinessforUkraine'
      }
    ],
    remarkAbbr
  ],
  rehypePlugins: [
    rehypeSlug,
    [
      rehypeAutolinkHeadings,
      {
        behavior: 'wrap'
      }
    ]
  ]
};

export default config;
