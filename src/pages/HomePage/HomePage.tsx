import { Container } from '@mui/material';
import { ItemGrid, HomeHeader } from '../../containers';

function HomePage(): JSX.Element {
  return (
    <Container className="home" maxWidth="xl" disableGutters>
      <HomeHeader />
      <ItemGrid />
    </Container>
  );
}

export default HomePage;
