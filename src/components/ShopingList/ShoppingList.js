import React from 'react';
import T from 'prop-types';
import styles from './shoplist.module.css';
import TableRow from './TableRow';

const ShoppingList = ({
  cart,
  onAddProductToCart,
  onRemoveOneFromCart,
  onRemoveAllFromCart,
}) => {
  return (
    <>
      {cart.length > 0 && (
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
              <TableRow
                className={styles.shoplist_tr}
                key={id}
                id={id}
                name={name}
                price={price}
                count={count}
                onAddProductToCart={onAddProductToCart}
                onRemoveProductFromCart={onRemoveOneFromCart}
                onRemoveAllInstances={onRemoveAllFromCart}
              />
            ))}
          </tbody>
        </table>
      )}
      {!cart.length && (
        <p className={styles.emptyCart}>Your shopping list is empty...</p>
      )}
    </>
  );
};
ShoppingList.propTypes = {
  cart: T.arrayOf(
    T.shape({
      name: T.string.isRequired,
      price: T.number.isRequired,
      origin: T.string.isRequired,
      count: T.number.isRequired,
    }),
  ).isRequired,
  onAddProductToCart: T.func.isRequired,
  onRemoveOneFromCart: T.func.isRequired,
  onRemoveAllFromCart: T.func.isRequired,
};
export default ShoppingList;
