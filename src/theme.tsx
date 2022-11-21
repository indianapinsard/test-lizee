import { lightBlue } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[300],
      light: lightBlue[100],
      dark: lightBlue[500],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: 'large',
      },
      styleOverrides: {
        root: {
          borderRadius: '24px',
        },
        contained: {
          color: '#fff',
        }
      },
    },
  }
});

export default responsiveFontSizes(theme);
