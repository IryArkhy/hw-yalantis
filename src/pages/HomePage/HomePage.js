import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../../components/Card';
import Spinner from '../../components/Loader';
import Layout from '../../components/Layout';
import styles from './home.module.css';
import CustomBtn from '../../components/Buttons/CustomButton';
import { getAllProducts } from '../../redux/products/productsOperations';

const HomePage = () => {
  const products = useSelector(state => state.products.products);
  const page = useSelector(state => state.products.page);
  const pages = useSelector(state => state.products.pages);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();
  const getPreviousPage = () => {
    if (page === 1) return;
    dispatch(getAllProducts({ page: page - 1, perPage: 18 }));
  };
  const getNextPage = () => {
    if (page === pages) return;
    dispatch(getAllProducts({ page: page + 1, perPage: 18 }));
  };
  return (
    <Layout>
      <h2 className={styles.home_title}>Products List</h2>
      <div className={styles.products_wrapper}>
        {products.map(({ id, name, origin, price }) => (
          <ProductCard
            key={id}
            name={name}
            origin={origin}
            price={price}
            id={id}
          />
        ))}
      </div>
      {loading && <Spinner />}
      <div className={styles.buttons_wrapper}>
        <CustomBtn
          actionCallback={getPreviousPage}
          text="Previous"
          isDisabled={page === 1}
        />
        <p>
          Page: {page}/{pages}
        </p>
        <CustomBtn
          text="Next"
          isDisabled={page === pages}
          actionCallback={getNextPage}
        />
      </div>
    </Layout>
  );
};

export default HomePage;
