import React, { useContext, useCallback } from 'react';
import ProductCard from '../../components/Card';
import Layout from '../../components/Layout';
import { ShopContext } from '../../hoc/withContext';
import styles from './home.module.css';
import { ChangePageButton } from '../../components/Buttons/Buttons';
import api from '../../servises/api';

const HomePage = () => {
  const { products, page, pages, actions } = useContext(ShopContext);

  // const nextPage = useCallback(() => {
  //   api
  //     .getNextProductsPage(page + 1)
  //     .then(res => {
  //       const { items, page: currentPage } = res.data;
  //       actions.setProducts(items);
  //       actions.setPage(currentPage);
  //     })
  //     .catch(error => new Error(error));
  // }, [page, actions]);
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
      <div className={styles.buttons_wrapper}>
        <ChangePageButton type="Previous" />
        <p>
          Page: {page}/{pages}
        </p>
        <ChangePageButton type="Next" />
      </div>
    </Layout>
  );
};

export default HomePage;
