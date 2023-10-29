export const getFileName = (src: string) => {
  if (typeof src !== 'string') {
    console.error('Image path error!');
    return '';
  }
  return src.substring(src.lastIndexOf('/') + 1);
};
