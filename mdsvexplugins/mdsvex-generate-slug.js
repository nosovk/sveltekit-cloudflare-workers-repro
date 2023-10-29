import { dirname } from 'path';

// Generate a slug from md file location
// we need to get folder name of md file and use it as slug
// if slug is not empty, we use it
export default function mdsvexGenerateSlug() {
  return function transformer(tree, vFile) {
    const filepath = dirname(vFile.filename).split('/').reverse()[0];

    let fileRelativePath = vFile.filename.slice(vFile.filename.lastIndexOf('/src/routes') + 11);
    let url = fileRelativePath.slice(0, fileRelativePath.lastIndexOf('/index.md'));

    if (!vFile.data.fm) vFile.data.fm = {};
    if (!vFile.data.fm.slug) vFile.data.fm.slug = filepath;
    if (!vFile.data.fm.url) vFile.data.fm.url = url;
  };
}
