import React, { useContext } from 'react';
import { ShopContext } from '../../hoc/withContext';
import styles from './card.module.css';
import { AddToCartButton, RemoveFromCartButton } from '../Buttons/Buttons';
import { findProductById } from '../../helpers/cartHelpers';

const ProductCard = ({ origin, name, price, id }) => {
  const { actions, cart } = useContext(ShopContext);
  const { addProductToCart, removeProductFromCart } = actions;
  const isInCart = findProductById(cart, id);
  return (
    <div className={styles.card_wrapper}>
      <header className={styles.card_wrapper_header}>
        <h3>{name}</h3>
        {isInCart && <p>In cart: {isInCart.count} </p>}
      </header>
      <div className={styles.card_wrapper_content}>
        <p>{origin}</p>
        <p>{price} $</p>
        <div>
          <button type="button" onClick={() => addProductToCart(id)}>
            {isInCart && isInCart.count >= 1 ? '+1' : <AddToCartButton />}
          </button>
          <button type="button" onClick={() => removeProductFromCart(id)}>
            {isInCart && isInCart.count > 1 ? '-1' : <RemoveFromCartButton />}
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;