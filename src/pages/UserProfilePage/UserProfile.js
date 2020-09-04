import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Layout from '../../components/Layout';
import styles from './user-profile.module.css';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import useProducts from '../../hooks/useProducts';
import useFilters from '../../hooks/useFilters';
import { CustomBtn } from '../../components/Buttons';

import routes from '../../routes';
import Grid from '../../components/Grid/Grid';
import UserProductsPanel from '../../components/UserProductsPanel/UserProductsPanel';

const UserProfile = () => {
  const {
    products,
    page,
    pages,
    loadProducts,
    getPreviousPage,
    getNextPage,
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

  const handleChangePage = ({ target }) => {
    if (target.innerText === 'Previous') {
      getPreviousPage(page, perPage, origin, prices[0], prices[1]);
    } else {
      getNextPage(page, perPage, origin, prices[0], prices[1]);
    }
  };

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
          <Route
            path={routes.PROFILE_PAGE_ORDERS}
            component={() => (
              <>
                <h2>orders</h2>
              </>
            )}
          />
        </Switch>
      </Grid>
    </>
  );
};

export default UserProfile;
