import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../../utils/theme';
import Layout from '../Layout';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <h1>My online shop</h1>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
