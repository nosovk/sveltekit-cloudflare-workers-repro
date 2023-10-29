export const formatDateSitemap = (src: string): string => {
  return src.split('.').reverse().join('-');
};
