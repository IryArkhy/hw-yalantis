import React, { useContext } from 'react';
import ProductCard from '../../components/Card';
import Layout from '../../components/Layout';
import { ShopContext } from '../../hoc/withContext';
import styles from './home.module.css';
import { ChangePageButton } from '../../components/Buttons/Buttons';

const HomePage = () => {
  const { products, page, pages, actions } = useContext(ShopContext);
  const { getNextPage, getPreviousPage } = actions;
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
        <ChangePageButton
          type="Previous"
          isDisabled={page === 1}
          onChangePage={getPreviousPage}
        />
        <p>
          Page: {page}/{pages}
        </p>
        <ChangePageButton
          type="Next"
          isDisabled={page === pages}
          onChangePage={getNextPage}
        />
      </div>
    </Layout>
  );
};

export default HomePage;
