import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import styles from './ErrorPage.module.css';

function ErrorPage(): JSX.Element {
  return (
    <div className={styles.page}>
      <Icon fontSize="large">report_problem</Icon>
      <h1 className={styles.message}>Oops, something went wrong ...</h1>
      <Button
        size="large"
        variant="outlined"
        component={Link}
        to="/"
        sx={{borderRadius: '24px'}}>Revenir à l'accueil</Button>
    </div>
  );
}

export default ErrorPage;

