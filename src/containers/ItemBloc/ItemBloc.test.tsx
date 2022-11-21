import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getItemAxiosResponse } from '../../mocks';
import ItemBloc from './ItemBloc';

test('should change size on size button click', () => {
  const { container } = render(<ItemBloc data={getItemAxiosResponse.data} />);

  const sizeButtons = container.querySelectorAll('.size-button');
  for (var i = 0; i < sizeButtons.length; i++) {
    userEvent.click(sizeButtons[i]);
    expect(sizeButtons[i]).toHaveClass('MuiButton-contained');
  }
});
