import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://lizee-test-dad-nextjs-admin.lizee.io/shop-api/',
});

export const listItems = (page: number, limit: number) => {
  return instance.get(`taxon-products/by-slug/categorie-t-shirts?page=${page}&limit=${limit}`)
    .then((response) => response.data);
};

export const getItem = (productId: string) => {
  return instance.get(`products/by-slug/${productId}`)
    .then((response) => response.data);
};
