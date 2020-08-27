import React from 'react';
import styles from './table-row.module.css';

const TableRow = ({ columns, children }) => {
  return (
    <tr className={styles.shoplist_tr}>
      <th>Item</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Total</th>
    </tr>
  );
};

export default TableRow;
