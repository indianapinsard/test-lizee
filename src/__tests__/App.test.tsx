import axios from 'axios';
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { render } from '@testing-library/react';
import { listItemsAxiosResponse } from '../__mocks__';
import routes from '../routes';
import App from '../App';

describe('App', () => {

  beforeEach(() => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce(listItemsAxiosResponse);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should render home page by default', async () => {
    const { container } = render(<App />);

    const header = container.querySelector('.home-header');
    expect(header).toBeInTheDocument();
  })

  test('landing on error page if trying to access a bad route', () => {
    const badRoute = '/some/bad/route';
    const router = createMemoryRouter(routes, {
      initialEntries: [badRoute],
    });
  
    const { container } = render(<RouterProvider router={router} />);

    expect(container.querySelector('.error')).toBeInTheDocument();
  })
});
