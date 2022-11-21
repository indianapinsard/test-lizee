import { Fragment, useContext, useState, useEffect, useCallback } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { ItemCard, Progress } from '../../components';
import { Context } from '../../context';
import { listItems } from '../../services/api';

function ItemGrid(): JSX.Element {
  const defaultLimit = 3;
  const { data, setData } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const dataIsEmpty = data.items.length === 0;

  const getListByPage = useCallback(
    (page: number, limit: number = defaultLimit) => {
      if (page !== data.page) {
        setLoading(true);
        listItems(page, limit)
          .then((response) => {
            setData(response);
            setLoading(false);
        });
      }
    },
    [data, setData],
  );

  useEffect(() => {
    if (dataIsEmpty) {
      getListByPage(1, defaultLimit);
    } else {
      setLoading(false);
    }
  }, [dataIsEmpty, getListByPage]);

  return (
    <Fragment>
      { loading 
        ? <Progress />
        : (
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
        )}
    </Fragment>
  );
};

export default ItemGrid;
