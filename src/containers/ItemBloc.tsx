import { useState } from 'react';
import { Container, Stack, Box, Typography } from '@mui/material';
import { SizeButtonGroup } from '../components';
import { ItemDataType } from '../types';

interface Props {
  data: ItemDataType;
}

function ItemBloc(props: Props): JSX.Element {
  const { data } = props;
  const { name, description, variants, images } = data;

  const sizeList = Object.values(variants).map(
    (e) => ({code: e.code, name: e.name})
  );

  const [size, setSize] = useState(sizeList[0].code);

  const onSizeClick = (s: string) => {
    setSize(s);
  };

  return (
    <Container className="item-bloc" maxWidth="lg" sx={{pt: {xs: '40px', md: '80px'}}}>
      <Stack direction={{xs: 'column', md: 'row'}} gap={{xs: '40px', md: '80px'}}>
        <Stack>
          <Typography variant="h1" component="h1">{name}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{my: {xs: '24px', md: '40px'}}}>
            {description}
          </Typography>
          <Typography variant="h3" gutterBottom>
            {`${variants[size].price.current} ${variants[size].price.currency}`}
          </Typography>
          <SizeButtonGroup selectedSize={size} sizeList={sizeList} onSizeClick={onSizeClick} />
        </Stack>
        <Box component="img" src={images[0].cachedPath} alt={data?.name} />
      </Stack>
    </Container>
  );
};

export default ItemBloc;
