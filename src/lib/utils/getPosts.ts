import type { IPostsRequest } from '$lib/utils/types';

export const getPosts: IPostsRequest = async () => {
  const allPostFiles = import.meta.glob('/src/routes/what-we-do/**/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { metadata }: any = await resolver();
      const postPath = path.slice(11, -16);

      return {
        meta: metadata,
        path: postPath
      };
    })
  );

  return allPosts;
};

export const getNews: IPostsRequest = async () => {
  const allNewsFiles = import.meta.glob('/src/routes/whats-new/**/*.md');
  const iterableNewsFiles = Object.entries(allNewsFiles);

  const allNews = await Promise.all(
    iterableNewsFiles.map(async ([path, resolver]) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { metadata }: any = await resolver();
      const postPath = path.slice(11, -16);

      return {
        meta: metadata,
        path: postPath
      };
    })
  );

  return allNews;
};

export const getActions: IPostsRequest = async () => {
  const allActionsFiles = import.meta.glob('/src/routes/take-action/**/*.md');
  const iterableActionsFiles = Object.entries(allActionsFiles);

  const allActions = await Promise.all(
    iterableActionsFiles.map(async ([path, resolver]) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { metadata }: any = await resolver();
      const postPath = path.slice(11, -16);

      return {
        meta: metadata,
        path: postPath
      };
    })
  );

  return allActions;
};

export const getLetters: IPostsRequest = async () => {
  const allLettersFiles = import.meta.glob('/src/routes/letters/**/*.md');
  const iterableLettersFiles = Object.entries(allLettersFiles);

  const allLetters = await Promise.all(
    iterableLettersFiles.map(async ([path, resolver]) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { metadata }: any = await resolver();
      const postPath = path.slice(11, -16);

      return {
        meta: metadata,
        path: postPath
      };
    })
  );

  return allLetters;
};
