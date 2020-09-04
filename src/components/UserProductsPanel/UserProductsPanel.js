import React from 'react';
import Card from '../Card';
import styles from './user-products-panel.module.css';

const testData = {
  origin: 'usa',
  name: 'Test product',
  price: 100,
  id: 'id',
  isEditable: true,
};
const UserProductsPanel = () => {
  return (
    <div className={styles.productsContainer}>
      <Card {...testData} />
      <Card {...testData} />
      <Card {...testData} />
      <Card {...testData} />
      <Card {...testData} />
      <Card {...testData} />
      <Card {...testData} />
      <Card {...testData} />
      <Card {...testData} />
      <Card {...testData} />
    </div>
  );
};
export default UserProductsPanel;
