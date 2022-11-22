import dayjs from 'dayjs';
import { render, fireEvent } from '@testing-library/react';
import { HomeHeader } from '../containers';

test('Home Header should handle date update', async () => {
  const maDate = new Date()
  maDate.toLocaleDateString("fr")

  const { container } = render(<HomeHeader />);

  const dateInput = container.querySelector('input') as HTMLInputElement;
  expect(dateInput).toHaveValue(dayjs(Date.now()).format('DD/MM/YYYY'));

  fireEvent.change(dateInput, { target: { value: '25/12/2022' } });
  expect(dateInput).toHaveValue('25/12/2022');
});
