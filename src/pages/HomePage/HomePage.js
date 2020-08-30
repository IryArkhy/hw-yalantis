import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/Card';
import Spinner from '../../components/Loader';
import Layout from '../../components/Layout';
import CustomBtn from '../../components/Buttons/CustomButton';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import styles from './home.module.css';
import useProducts from '../../hooks/useProducts';
import useFilters from '../../hooks/useFilters';

const HomePage = () => {
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

  const loading = useSelector(state => state.loading);

  const loadUserChosenProducts = () =>
    loadProducts(null, perPage, origin, prices[0], prices[1]);

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
    <Layout>
      <ControlPanel options={optionsForControlPanel} />
      <h2 className={styles.home_title}>Products List</h2>
      <div className={styles.products_wrapper}>
        {products.map(({ id, name, origin: region, price }) => (
          <ProductCard
            key={id}
            name={name}
            origin={region}
            price={price}
            id={id}
          />
        ))}
      </div>
      {loading && <Spinner />}
      <div className={styles.buttons_wrapper}>
        <CustomBtn
          actionCallback={() =>
            getPreviousPage(page, perPage, origin, prices[0], prices[1])
          }
          text="Previous"
          isDisabled={page === 1}
        />
        <p>
          Page: {page}/{pages}
        </p>
        <CustomBtn
          text="Next"
          isDisabled={page === pages}
          actionCallback={() =>
            getNextPage(page, perPage, origin, prices[0], prices[1])
          }
        />
      </div>
    </Layout>
  );
};

export default HomePage;
