export const getCurrentPageNumber = (pathname: string) => {
  const isNumber = (str: string) => /^[0-9.,]+$/.test(str);
  const last = pathname.substring(pathname.lastIndexOf('/') + 1);
  return isNumber(last) ? Number(last) : 1;
};
