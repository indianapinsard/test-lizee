import { forwardRef, ForwardedRef } from 'react';
import Grid from '@mui/material/Grid';
import { ItemCard } from '../../components';
import { ItemType } from '../../types';

interface Props {
  items: ItemType[];
}

const ItemGrid = forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>) => {
  const { items } = props;
  return (
    <Grid container spacing={3} justifyContent="center" sx={{mb: '80px'}} ref={ref}>
      { items.map((e) => (
        <Grid item key={e.slug}>
          <ItemCard
            name={e.name}
            image={e.images[0].cachedPath}
            description={e.shortDescription}
            slug={e.slug} />
        </Grid>
      ))}
    </Grid>
  );
});

export default ItemGrid;
