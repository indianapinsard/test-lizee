import { useState, useEffect, useCallback } from 'react';
import { Progress } from '../components';
import { listItems } from '../services/api';
import { Container } from '@mui/material';
import { ItemGrid, HomeHeader } from '../containers';

function HomePage(): JSX.Element {
  const defaultLimit = 3;
  const [data, setData] = useState({pages: 0, page: 0, items: []});
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
    <Container className="home" maxWidth="xl" disableGutters>
        <HomeHeader />
        { loading ? <Progress /> : <ItemGrid data={data} getListByPage={getListByPage} /> }
    </Container>
  );
}

export default HomePage;
