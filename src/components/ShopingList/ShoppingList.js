import React, { useContext } from 'react';
import { ShopContext } from '../../hoc/withContext';
import { countTotalPrice } from '../../helpers/cartHelpers';
import styles from './shoplist.module.css';
import CustomBtn from '../Buttons/CustomButton';
import TableRow from '../TableRow';

const ShoppingList = () => {
  const { cart, actions } = useContext(ShopContext);
  const { addProductToCart, removeProductFromCart } = actions;
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
                  onAddProductToCart={addProductToCart}
                  onRemoveProductFromCart={removeProductFromCart}
                />
              ))}
            </tbody>
          </table>
          <div className={styles.bottomSectionWrapper}>
            <p>Total {countTotalPrice(cart)}$</p>
            <CustomBtn text="Clear Cart" actionCallback={actions.clearCart} />
          </div>
        </>
      )}
      {cart.length === 0 && (
        <p className={styles.emptyCart}>Your shopping list is empty...</p>
      )}
    </>
  );
};

export default ShoppingList;
