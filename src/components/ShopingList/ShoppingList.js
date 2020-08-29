import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { countTotalPrice } from '../../helpers/cartHelpers';
import styles from './shoplist.module.css';
import CustomBtn from '../Buttons/CustomButton';
import TableRow from './TableRow';
import {
  addProductToCart,
  removeProductFromCart,
  removeAllInstancesOfProduct,
  clearCart,
} from '../../redux/cart/cartOperations';

const ShoppingList = () => {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
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
                <TableRow
                  className={styles.shoplist_tr}
                  key={id}
                  id={id}
                  name={name}
                  price={price}
                  count={count}
                  onAddProductToCart={addProductToCart}
                  onRemoveProductFromCart={removeProductFromCart}
                  onRemoveAllInstances={() =>
                    dispatch(removeAllInstancesOfProduct(id))
                  }
                />
              ))}
            </tbody>
          </table>
          <div className={styles.bottomSectionWrapper}>
            <p>Total {countTotalPrice(cart)}$</p>
            <CustomBtn
              text="Clear Cart"
              actionCallback={() => dispatch(clearCart())}
            />
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
