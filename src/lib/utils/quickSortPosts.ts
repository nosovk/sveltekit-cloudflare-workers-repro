import type { IPost } from '$lib/utils/types';

export const quickSort = (arr: IPost[]): IPost[] => {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[Math.floor(Math.random() * arr.length)];

  const left = [];
  const right = [];
  const equal = [];

  for (const val of arr) {
    if (typeof val.meta.date === 'string' && typeof pivot.meta.date === 'string') {
      if (
        new Date(val.meta.date.split('.').reverse().toString()) <
        new Date(pivot.meta.date.split('.').reverse().toString())
      ) {
        right.push(val);
      } else if (
        new Date(val.meta.date.split('.').reverse().toString()) >
        new Date(pivot.meta.date.split('.').reverse().toString())
      ) {
        left.push(val);
      } else {
        equal.push(val);
      }
    } else {
      if (val.meta.date < pivot.meta.date) {
        right.push(val);
      } else if (val.meta.date > pivot.meta.date) {
        left.push(val);
      } else {
        equal.push(val);
      }
    }
  }
  return [...quickSort(left), ...equal, ...quickSort(right)];
};
