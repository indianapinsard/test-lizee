import { AxiosResponse } from 'axios';

export const listItemsAxiosResponse = {
  data: {
    pages: 2,
    page: 1,
    items: [{
      name: 'Item 1',
      slug: 'item-1',
      shortDescription: 'Description item 1',
      images: [{cachedPath: 'src-item-1'}],
    }, {
      name: 'Item 2',
      slug: 'item-2',
      shortDescription: 'Description item 2',
      images: [{cachedPath: 'src-item-2'}],
    }],
  }
} as AxiosResponse;

export const getItemAxiosResponse = {
  data: {
    name: 'Item 1',
    description: 'Description item 1',
    images: [{cachedPath: 'src-item-1'}],
    variants: {
      small: {name: 'Small', code: 'small', price: {current: 2000, currency: 'EUR'}},
      medium: {name: 'Medium', code: 'medium', price: {current: 3000, currency: 'EUR'}},
      large: {name: 'Marge', code: 'large', price: {current: 4000, currency: 'EUR'}},
    }
  }
} as AxiosResponse;
