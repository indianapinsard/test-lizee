import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import ContextProvider from './context';
import routes from './routes';
import theme from './theme';

function App() {
  const router = createBrowserRouter(routes);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;
