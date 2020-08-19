import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import Header from '../Header';
import HomePage from '../../pages/Home/HomePage';
import CartPage from '../../pages/Cart/Cart';
import theme from '../../utils/theme';
import routes from '../../routes';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={routes.HOME_PAGE} component={HomePage} />
          <Route path={routes.CART_PAGE} component={CartPage} />
          <Redirect to={routes.HOME_PAGE} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
