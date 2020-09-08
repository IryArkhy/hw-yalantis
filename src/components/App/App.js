import React, { useEffect, useCallback } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HomePage from '../../pages/HomePage';
import CartPage from '../../pages/CartPage';
import ProductInfo from '../../pages/ProductPage';
import Header from '../Header';
import Footer from '../Footer/Footer';
import routes from '../../routes';
import {
  getAllProducts,
  getProductsOrigins,
} from '../../redux/products/productsOperations';
import '../../assets/stylesheets/main.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(
    useCallback(() => {
      dispatch(getAllProducts({ perPage: 18 }));
      dispatch(getProductsOrigins());
    }, [dispatch]),
  );

  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={routes.HOME_PAGE} component={HomePage} />
          <Route path={routes.CART_PAGE} component={CartPage} />
          <Route path={routes.PRODUCT_PAGE.INDEX} component={ProductInfo} />
          <Redirect to={routes.HOME_PAGE} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
