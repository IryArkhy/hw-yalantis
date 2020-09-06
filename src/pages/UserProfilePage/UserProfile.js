import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import styles from './user-profile.module.css';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import Grid from '../../components/Grid/Grid';
import UserProductsPanel from '../../components/UserProductsPanel/UserProductsPanel';

import useProducts from '../../hooks/useProducts';
import useFilters from '../../hooks/useFilters';
import routes from '../../routes';
import OrdersPanel from '../../components/OrdersPanel';

// TODO: make request (getOrders) in useEffect
// TODO: think about filters. Do you leave this control panel (after refactoring) or make the other one?
const UserProfile = () => {
  const {
    // products,
    // page,
    // pages,
    loadProducts,
    // getPreviousPage,
    // getNextPage,
  } = useProducts();

  const {
    perPage,
    prices,
    origin,
    handleChangePrice,
    handleChangePerPage,
    handleChangeOrigin,
    clearFilters,
  } = useFilters();

  const loadUserChosenProducts = () =>
    loadProducts(null, perPage, origin, prices[0], prices[1]);

  // const handleChangePage = ({ target }) => {
  //   if (target.innerText === 'Previous') {
  //     getPreviousPage(page, perPage, origin, prices[0], prices[1]);
  //   } else {
  //     getNextPage(page, perPage, origin, prices[0], prices[1]);
  //   }
  // };

  const optionsForControlPanel = {
    perPage,
    prices,
    handleChangePrice,
    origin,
    handleChangeOrigin,
    loadUserChosenProducts,
    clearFilters,
    handleChangePerPage,
  };

  return (
    <>
      <Grid>
        <div className={styles.profileNav}>
          <div className={styles.navWrap}>
            <NavLink to={routes.PROFILE_PAGE_PODUCTS}>Your Products</NavLink>
            <NavLink to={routes.PROFILE_PAGE_ORDERS}>Your Orders</NavLink>
          </div>
          <ControlPanel
            options={optionsForControlPanel}
            style={styles.controlPanelWrpr}
          />
        </div>
        <Switch>
          <Route
            path={routes.PROFILE_PAGE_PODUCTS}
            component={UserProductsPanel}
          />
          <Route path={routes.PROFILE_PAGE_ORDERS} component={OrdersPanel} />
        </Switch>
      </Grid>
    </>
  );
};

export default UserProfile;
