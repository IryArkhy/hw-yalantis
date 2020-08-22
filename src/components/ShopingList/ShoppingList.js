import React, { useContext } from 'react';
import { ShopContext } from '../../hoc/withContext';
import styles from './shoplist.module.css';
import { countTotalPrice } from '../../helpers/cartHelpers';

const ShoppingList = () => {
  const { cart } = useContext(ShopContext);
  return (
    <>
      {cart.length > 0 && (
        <>
          <table className={styles.shoplist}>
            <thead>
              <tr className={styles.shoplist_tr}>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {cart.map(({ id, name, price, count }) => (
                <tr key={id} className={styles.shoplist_tr}>
                  <td>{name}</td>
                  <td>{price}$</td>
                  <td>{count}</td>
                  <td>{count * price}$</td>
                  {/* <td>
                  <Button label="Delete" onClick={() => onRemove(id)} />
                </td> */}
                </tr>
              ))}
            </tbody>
          </table>
          <p>Total {countTotalPrice(cart)}</p>
        </>
      )}
      {cart.length === 0 && <p>Your shopping list is empty...</p>}
    </>
  );
};

export default ShoppingList;
