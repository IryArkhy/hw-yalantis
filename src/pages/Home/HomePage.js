import React, { useContext } from 'react';
import ProductCard from '../../components/Card';
import Layout from '../../components/Layout';
import { ShopContext } from '../../hoc/withContext';
import styles from './home.module.css';
import { ChangePageButton } from '../../components/Buttons/Buttons';

const HomePage = () => {
  const { products } = useContext(ShopContext);
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
      <div>
        <ChangePageButton type="Previous" />
        <ChangePageButton type="Next" />
      </div>
    </Layout>
  );
};

export default HomePage;
