import { visit } from 'unist-util-visit';

// forgive me
const RE_SCRIPT_START = /<script [^>]*context=["']module["'][^>]*>/i;

// look for thumbnailImg in formatter part of the markdown
// if it exists we create manual import of image for vite
// and export it to page metadata (that is available in layout)
// that allows to use imagetools plugin for thumbnail generation
export default function formatterToImport() {
  return function transformer(tree, vFile) {
    if (vFile.data.fm?.thumbnailImg) {
      // if all thumbnails will have the same sizes we can set them here, avoiding putting
      // them in markdown formatter
      const scripts = `import thumbnailSrcSet from "./${vFile.data.fm.thumbnailImg}?format=jpg;png&as=srcset&w=1000";\n
      import thumbnailSrc from "./${vFile.data.fm.thumbnailImg}?format=jpg&w=1000";
      let thumbnail={src: thumbnailSrc, srcSet: thumbnailSrcSet};
      metadata.thumbnail=thumbnail;\n`;
      let is_script = false;
      visit(tree, 'html', (node) => {
        if (RE_SCRIPT_START.test(node.value)) {
          is_script = true;
          node.value = node.value.replace(RE_SCRIPT_START, (script) => `${script}\n${scripts}`);
        }
      });

      if (!is_script) {
        tree.children.push({
          type: 'html',
          value: `<script context="module">\n${scripts}</script>`
        });
      }
    }
  };
}
