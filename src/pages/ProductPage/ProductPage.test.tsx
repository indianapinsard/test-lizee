import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import { getItemAxiosResponse } from '../../mocks';
import { instance } from '../../services/api';
import ProductPage from './ProductPage';

describe('ProductPage', () => {

  beforeEach(() => {
    jest.spyOn(instance, 'get').mockResolvedValueOnce(getItemAxiosResponse);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should render loading before fetching data', async () => {
    const { container } = render(<ProductPage />);

    const progress = container.querySelector('.progress');
    const itemBloc = container.querySelector('.item-bloc');

    expect(progress).toBeInTheDocument();
    expect(itemBloc).not.toBeInTheDocument();

    await waitFor(() => {
      expect(progress).not.toBeInTheDocument();
    })
  })

  test('should render item bloc after fetching data', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/product/everyday-white-basic-t-shirt']}>
        <Routes>
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      const progress = container.querySelector('.progress');
      const itemBloc = container.querySelector('.item-bloc');
  
      expect(progress).not.toBeInTheDocument();
      expect(itemBloc).toBeInTheDocument();
    })
  })
});
