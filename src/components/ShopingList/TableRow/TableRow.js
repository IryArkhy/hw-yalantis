import React from 'react';
import T from 'prop-types';
import RemoveFromCartButton from '../../Buttons/RemoveFromCartButton';
import styles from './table-row.module.css';

const TableRow = ({
  id,
  name,
  price,
  count,
  onAddProductToCart,
  onRemoveProductFromCart,
  onRemoveAllInstances,
}) => {
  const addProductToCart = () => onAddProductToCart(id);
  const removeProductFromCart = () => onRemoveProductFromCart(id);
  const removeAllInstances = () => onRemoveAllInstances(id);
  return (
    <tr className={styles.shoplist_tr}>
      <td>{name}</td>
      <td>{price}$</td>
      <td>
        {count}
        <div className={styles.shoplist_tr_controllers}>
          <button type="button" onClick={addProductToCart}>
            +1
          </button>
          <button type="button" onClick={removeProductFromCart}>
            -1
          </button>
        </div>
      </td>
      <td>{count * price}$</td>
      <td>
        <button type="button" onClick={removeAllInstances}>
          <RemoveFromCartButton />
        </button>
      </td>
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
  onRemoveAllInstances: T.func.isRequired,
};
export default TableRow;
