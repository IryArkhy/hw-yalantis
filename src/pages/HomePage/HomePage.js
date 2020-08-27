import React, { useContext } from 'react';
import ProductCard from '../../components/Card';
import Layout from '../../components/Layout';
import { ShopContext } from '../../hoc/withContext';
import styles from './home.module.css';
import CustomBtn from '../../components/Buttons/CustomButton';

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
