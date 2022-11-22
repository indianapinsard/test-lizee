import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { ItemSizeType } from '../types';

interface Props {
  onSizeClick: (code: string) => void;
  sizeList: ItemSizeType[];
  selectedSize: string;
}

function SizeButtonGroup(props: Props): JSX.Element {
  const { onSizeClick, sizeList, selectedSize } = props;

  return (
    <ButtonGroup aria-label="button group">
      { sizeList.map((e) => (
        <Button
          className="size-button"
          key={e.code} 
          variant={e.code === selectedSize ? 'contained' : 'outlined'}
          onClick={() => onSizeClick(e.code)}
        >
          {e.name}
        </Button>
      )) }
    </ButtonGroup>
  );
}

export default SizeButtonGroup;
