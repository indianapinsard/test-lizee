import { Fragment } from 'react';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import router from './router';
import './App.css';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
