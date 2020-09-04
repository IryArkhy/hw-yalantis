import React from 'react';
import Layout from '../../components/Layout';
import ShoppingList from '../../components/ShopingList';
import styles from './cartPage.module.css';

// TODO: redirect user to user orders page after sending the order
const CartPage = () => {
  return (
    <Layout>
      <h2 className={styles.cartPageTitle}>Your shopping list</h2>
      <ShoppingList />
    </Layout>
  );
};

export default CartPage;
