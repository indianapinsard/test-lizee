import { ErrorPage, HomePage, ProductPage } from './pages';

const routes = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'product/:productId',
    element: <ProductPage />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
