export interface IThumbnail {
  src: string;
  srcSet: string;
}

export type IMeta = {
  published: boolean;
  description: string;
  slug: string;
  url: string;
  title: string;
  snippet: string;
  date: string;
  thumbnail?: IThumbnail;
  thumbnailImg?: string;
  files?: string[];
};

export type IBreadcrumb = {
  url?: string;
  title?: string;
  current?: string;
  subcategory?: string;
};

export type IPage = {
  url: string;
  number: number;
};

export interface IPost {
  meta: IMeta;
  path: string;
}

export interface IClient {
  img: string;
  title: string;
  subtitle: string;
  desc: string;
}

export type IPostsRequest = () => Promise<IPost[]>;

export interface IPageData {
  url: string;
  title: string;
  desc?: string;
  linkTitle: string;
  isCases: boolean;
}
