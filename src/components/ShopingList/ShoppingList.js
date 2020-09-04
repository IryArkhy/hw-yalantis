import React from 'react';
import styles from './shoplist.module.css';
import { CustomBtn, ControlPanelBtn } from '../Buttons';
import TableRow from './TableRow';
import useCart from '../../hooks/useCart';
import useOrders from '../../hooks/useOrders';

// TODO: maybe create the component for bottomSectionWrapper and move it to the Cart page --> because these are separate components
// TODO: maybe (!) remove the logic form here to Cart page and pass it as props
const ShoppingList = () => {
  const {
    cart,
    addOneToCart,
    removeOneFromCart,
    removeAllFromCart,
    emptyCart,
    totalPrice,
  } = useCart();
  const { postOrder } = useOrders();
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
                  onAddProductToCart={addOneToCart}
                  onRemoveProductFromCart={removeOneFromCart}
                  onRemoveAllInstances={removeAllFromCart}
                />
              ))}
            </tbody>
          </table>
          <div className={styles.bottomSectionWrapper}>
            <p>Total {totalPrice}$</p>
            <CustomBtn text="Clear Cart" actionCallback={emptyCart} />
            <ControlPanelBtn
              onClickCallback={postOrder}
              styles={styles.postOrderBtn}
              text="Buy"
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
