import React from 'react';
import T from 'prop-types';
import styles from './table-row.module.css';

const TableRow = ({
  id,
  name,
  price,
  count,
  onAddProductToCart,
  onRemoveProductFromCart,
}) => {
  return (
    <tr className={styles.shoplist_tr}>
      <td>{name}</td>
      <td>{price}$</td>
      <td>
        {count}
        <div className={styles.shoplist_tr_controllers}>
          <button type="button" onClick={() => onAddProductToCart(id)}>
            +1
          </button>
          <button type="button" onClick={() => onRemoveProductFromCart(id)}>
            -1
          </button>
        </div>
      </td>
      <td>{count * price}$</td>
    </tr>
  );
};
TableRow.propTypes = {
  id: T.string.isRequired,
  name: T.string.isRequired,
  price: T.number.isRequired,
  count: T.number.isRequired,
  onAddProductToCart: T.func.isRequired,
  onRemoveProductFromCart: T.func.isRequired,
};
export default TableRow;
