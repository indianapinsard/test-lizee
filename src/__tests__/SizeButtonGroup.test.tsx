import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SizeButtonGroup } from '../components';

describe('Size Button Group', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should change size on size button click', () => {
    const onSizeClick = jest.fn();
    const selectedSize = 'small';
    const sizeList = [{name: 'Small', code: 'small'}, {name: 'Large', code: 'large'}];
  
    const { container } = render(
      <SizeButtonGroup
        onSizeClick={onSizeClick}
        selectedSize={selectedSize}
        sizeList={sizeList}
      />
    );

    const sizeButtons = container.querySelectorAll('.size-button');
    for (var i = 0; i < sizeButtons.length; i++) {
      userEvent.click(sizeButtons[i]);
      expect(onSizeClick).toHaveBeenCalledWith(sizeList[i].code);
    }
  })
});
