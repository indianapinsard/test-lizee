import { AxiosPromise } from 'axios';

export interface ItemListPromiseType {
  data: AxiosPromise;
};

export interface ItemType {
  slug: string;
  name: string;
  shortDescription: string;
  images: {
    cachedPath: string;
  }[];
};

export type ItemListType = ItemType[];
