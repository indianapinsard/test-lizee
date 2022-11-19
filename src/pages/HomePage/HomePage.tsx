import { Suspense, useRef } from 'react';
import { useLoaderData, Await } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import { Progress } from '../../components';
import { ItemGrid, HomeHeader } from '../../containers';
import { ItemListPromiseType } from '../../types';

function HomePage(): JSX.Element {
  const { data } = useLoaderData() as ItemListPromiseType;
  const ref = useRef<HTMLDivElement>(null);

  const onShopClick = () => {
    if (ref.current) {
      ref.current.scrollIntoView();
    }
  };

  return (
    <Container maxWidth="xl" disableGutters>
      <HomeHeader onShopClick={onShopClick} />
      <Suspense fallback={<Progress />}>
        <Await resolve={data}>
          {(resolvedArticles) => <ItemGrid items={resolvedArticles.data.items} ref={ref} />}
        </Await>
      </Suspense>
    </Container>
  );
}

export default HomePage;
