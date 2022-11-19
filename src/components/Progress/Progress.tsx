import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

function Progress(): JSX.Element {
  return (
    <Box sx={{width: '100%', textAlign: 'center'}}>
      <CircularProgress />
    </Box>
  );
}

export default Progress;
