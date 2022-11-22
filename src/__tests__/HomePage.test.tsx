import { MemoryRouter } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { listItemsAxiosResponse } from '../__mocks__';
import { instance } from '../services/api';
import { HomePage } from '../pages';

describe('Item Grid', () => {

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should render loading before fetching data', async () => {
    const api = jest.spyOn(instance, 'get').mockResolvedValueOnce(listItemsAxiosResponse);
    const { container } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    const progress = container.querySelector('.progress');
    const itemGrid = container.querySelector('.item-grid');

    expect(progress).toBeInTheDocument();
    expect(itemGrid).not.toBeInTheDocument();

    await waitFor(() => {
      expect(progress).not.toBeInTheDocument();
    })
  })

  test('should render item list after fetching data', async () => {
    const api = jest.spyOn(instance, 'get').mockResolvedValueOnce(listItemsAxiosResponse);
    const { container } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    await waitFor(() => {
      const progress = container.querySelector('.progress');
      const itemGrid = container.querySelector('.item-grid');

      expect(progress).not.toBeInTheDocument();
      expect(itemGrid).toBeInTheDocument();
    })
  })

  test('should call api and set context on pagination click', async () => {
    const api = jest.spyOn(instance, 'get').mockResolvedValueOnce(listItemsAxiosResponse);
    const { container } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    const progress = container.querySelector('.progress');

    await waitFor(() => {
      expect(progress).not.toBeInTheDocument();
    })

    const pagination = container.querySelector('.pagination') as HTMLElement;
    const button = pagination.querySelectorAll('button')[2];
    userEvent.click(button);

    await waitFor(() => {
      expect(api).toHaveBeenCalledTimes(2);
    })
  })

  test('should not call api if click on page button that is displayed', async () => {
    const api = jest.spyOn(instance, 'get').mockResolvedValueOnce(listItemsAxiosResponse);
    const { container } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    const progress = container.querySelector('.progress');

    await waitFor(() => {
      expect(progress).not.toBeInTheDocument();
    })

    const pagination = container.querySelector('.pagination') as HTMLElement;
    const button = pagination.querySelectorAll('button')[1];
    userEvent.click(button);

    await waitFor(() => {
      expect(api).toHaveBeenCalledTimes(1);
    })
  })
});
