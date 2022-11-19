import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';

function ErrorPage(): JSX.Element {
  return (
    <Container maxWidth="md" sx={{height: '100vh'}}>
      <Stack alignItems="center" justifyContent="space-around" sx={{height: '100%'}}>
        <Icon sx={{fontSize: '8em'}}>warning_amber</Icon>
        <Typography variant="h1" component="h1">
          Oops, something went wrong ...
        </Typography>
        <Button variant="outlined" component={Link} to="/">
          Go to home page
        </Button>
      </Stack>
    </Container>
  );
}

export default ErrorPage;
