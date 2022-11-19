import { createBrowserRouter, defer } from 'react-router-dom';
import { ErrorPage, HomePage, ProductPage } from './pages';
import axios from 'axios';

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => {
      const data = axios.get('https://lizee-test-dad-nextjs-admin.lizee.io/shop-api/taxon-products/by-slug/categorie-t-shirts');
      return defer({data});
    },
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'product/:productId',
    element: <ProductPage />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
