import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { ItemCard } from '../components';
import { ItemListResponseType } from '../types';

interface Props {
  data: ItemListResponseType;
  getListByPage: (page: number) => void;
}

function ItemGrid(props: Props): JSX.Element {
  const { data, getListByPage } = props;

  return (
    <Stack sx={{mb: '40px'}} alignItems="center">
      <Grid
        className="item-grid"
        container
        spacing={3}
        justifyContent="center"
        sx={{mb: '40px'}}
      >
        { data.items.map((e) => (
          <Grid item key={e.slug}>
            <ItemCard
              name={e.name}
              image={e.images[0].cachedPath}
              description={e.shortDescription}
              slug={e.slug} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        className="pagination"
        variant="outlined"
        color="primary"
        page={data.page}
        count={data.pages}
        onChange={(e, value) => getListByPage(value)} />
    </Stack>
  );
};

export default ItemGrid;
