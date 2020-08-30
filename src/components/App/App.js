import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ShopProvider } from '../../hoc/withContext';
import HomePage from '../../pages/HomePage';
import CartPage from '../../pages/CartPage';
import ProductInfo from '../../pages/ProductPage';
import Header from '../Header';
import Footer from '../Footer/Footer';
import routes from '../../routes';
import '../../assets/stylesheets/main.css';

const App = () => {
  return (
    <ShopProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={routes.HOME_PAGE} component={HomePage} />
          <Route path={routes.CART_PAGE} component={CartPage} />
          <Route path={routes.PRODUCT_PAGE} component={ProductInfo} />
          <Redirect to={routes.HOME_PAGE} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </ShopProvider>
  );
};

export default App;
