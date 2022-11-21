import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { listItemsAxiosResponse } from '../../mocks';
import { Context } from '../../context';
import { instance } from '../../services/api';
import ItemGrid from './ItemGrid';

describe('Item Grid', () => {

  beforeEach(() => {
    jest.spyOn(instance, 'get').mockResolvedValueOnce(listItemsAxiosResponse);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should render loading before fetching data', async () => {
    const { container } = render(<ItemGrid />);

    const progress = container.querySelector('.progress');
    const itemGrid = container.querySelector('.item-grid');

    expect(progress).toBeInTheDocument();
    expect(itemGrid).not.toBeInTheDocument();

    await waitFor(() => {
      expect(progress).not.toBeInTheDocument();
    })
  })

  test('should render item list after fetching data', async () => {
    const setData = jest.fn();

    const { container } = render(
      <MemoryRouter>
        <Context.Provider value={{data: {pages: 0, page: 0, items: []}, setData}}>
          <ItemGrid />
        </Context.Provider>
      </MemoryRouter>
    );

    await waitFor(() => {
      const progress = container.querySelector('.progress');
      const itemGrid = container.querySelector('.item-grid');
  
      expect(progress).not.toBeInTheDocument();
      expect(itemGrid).toBeInTheDocument();
      expect(setData).toHaveBeenCalled();
    })
  })

  test('should render item list without calling api if context items is filled', async () => {
    const setData = jest.fn();

    const { container } = render(
      <MemoryRouter>
        <Context.Provider value={{data: listItemsAxiosResponse.data, setData}}>
          <ItemGrid />
        </Context.Provider>
      </MemoryRouter>
    );

    await waitFor(() => {
      const progress = container.querySelector('.progress');
      const itemGrid = container.querySelector('.item-grid');
  
      expect(progress).not.toBeInTheDocument();
      expect(itemGrid).toBeInTheDocument();
      expect(setData).not.toHaveBeenCalled();
    })
  })

  test('should call api and set context on pagination click', async () => {
    const setData = jest.fn();

    const { container } = render(
      <MemoryRouter>
        <Context.Provider value={{data: listItemsAxiosResponse.data, setData}}>
          <ItemGrid />
        </Context.Provider>
      </MemoryRouter>
    );

    await waitFor(() => {
      const pagination = container.querySelector('.pagination') as HTMLElement;
      const button = pagination.querySelectorAll('button')[2];
      userEvent.click(button);
      expect(setData).toHaveBeenCalled();
    })
  })

  test('should not call api if click on page button that is displayed', async () => {
    const setData = jest.fn();

    const { container } = render(
      <MemoryRouter>
        <Context.Provider value={{data: listItemsAxiosResponse.data, setData}}>
          <ItemGrid />
        </Context.Provider>
      </MemoryRouter>
    );

    await waitFor(() => {
      const pagination = container.querySelector('.pagination') as HTMLElement;
      const button = pagination.querySelectorAll('button')[1];
      userEvent.click(button);
      expect(setData).not.toHaveBeenCalled();
    })
  })
});
