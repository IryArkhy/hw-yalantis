import React, { useContext } from 'react';
import { ShopContext } from '../../hoc/withContext';
import { countTotalPrice } from '../../helpers/cartHelpers';
import styles from './shoplist.module.css';
import CustomBtn from '../Buttons/CustomButton';

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
                <tr key={id} className={styles.shoplist_tr}>
                  <td>{name}</td>
                  <td>{price}$</td>
                  <td>
                    {count}
                    <div className={styles.shoplist_tr_controllers}>
                      <button
                        type="button"
                        onClick={() => addProductToCart(id)}
                      >
                        +1
                      </button>
                      <button
                        type="button"
                        onClick={() => removeProductFromCart(id)}
                      >
                        -1
                      </button>
                    </div>
                  </td>
                  <td>{count * price}$</td>
                </tr>
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
