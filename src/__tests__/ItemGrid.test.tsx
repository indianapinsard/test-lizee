import { MemoryRouter } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { listItemsAxiosResponse } from '../__mocks__';
import { ItemGrid } from '../containers';

describe('Item Grid', () => {

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should call api and set context on pagination click', async () => {
    const getListByPage = jest.fn();
    const data = listItemsAxiosResponse.data;

    const { container } = render(
      <MemoryRouter>
        <ItemGrid data={data} getListByPage={getListByPage} />
      </MemoryRouter>
    );

    const pagination = container.querySelector('.pagination') as HTMLElement;
    const button = pagination.querySelectorAll('button')[2];
    userEvent.click(button);

    await waitFor(() => {
      expect(getListByPage).toHaveBeenCalled();
    })
  })
});
