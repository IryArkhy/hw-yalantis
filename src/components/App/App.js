import React, { useEffect, useCallback } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HomePage from '../../pages/HomePage';
import CartPage from '../../pages/CartPage';
import ProductInfo from '../../pages/ProductPage';
import UserProfile from '../../pages/UserProfilePage/UserProfile';
import OrderPage from '../../pages/OrderInfoPage';
import Header from '../Header';
import Footer from '../Footer/Footer';
import routes from '../../routes';
import useProducts from '../../hooks/useProducts';
import productsActions from '../../redux/products/productsActions';
import '../../assets/stylesheets/main.css';

const App = () => {
  const { loadProducts } = useProducts();
  const dispatch = useDispatch();
  useEffect(
    useCallback(() => {
      loadProducts(null, null, [], null, null, true);
      dispatch(productsActions.getProductsOrigins());
    }, [dispatch, loadProducts]),
    [],
  );

  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={routes.HOME_PAGE} component={HomePage} />
          <Route path={routes.CART_PAGE} component={CartPage} />
          <Route path={routes.ORDER_PAGE.INDEX} component={OrderPage} />
          <Route path={routes.PROFILE_PAGE} component={UserProfile} />
          <Route path={routes.PRODUCT_PAGE.INDEX} component={ProductInfo} />
          <Redirect to={routes.HOME_PAGE} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
