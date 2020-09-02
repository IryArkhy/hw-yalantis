import React from 'react';
import T from 'prop-types';
import { useHistory } from 'react-router-dom';
import { AddToCartButton, RemoveFromCartButton } from '../Buttons';
import findProductById from '../../helpers/cartHelpers';
import styles from './card.module.css';
import useCart from '../../hooks/useCart';
import routes from '../../routes';

const ProductCard = ({ origin, name, price, id }) => {
  const { cart, addOneToCart, removeOneFromCart } = useCart();

  const isInCart = findProductById(cart, id);

  const history = useHistory();

  const getToProductPage = ({ target }) => {
    if (
      target.type === 'button' ||
      target.nodeName === 'path' ||
      target.nodeName === 'svg'
    )
      return;
    history.push(routes.PRODUCT_PAGE.createPath(id));
  };

  return (
    <div
      role="presentation"
      onClick={getToProductPage}
      className={styles.card_wrapper}
    >
      <header className={styles.card_wrapper_header}>
        <h3>{name}</h3>
        {isInCart && <p>In cart: {isInCart.count} </p>}
      </header>
      <div className={styles.card_wrapper_content}>
        <p>{origin}</p>
        <p>{price} $</p>
        <div>
          <button type="button" onClick={() => addOneToCart(id)}>
            {isInCart && isInCart.count >= 1 ? '+1' : <AddToCartButton />}
          </button>
          <button type="button" onClick={() => removeOneFromCart(id)}>
            {isInCart && isInCart.count > 1 ? '-1' : <RemoveFromCartButton />}
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: T.string.isRequired,
  name: T.string.isRequired,
  price: T.number.isRequired,
  origin: T.string.isRequired,
};
export default ProductCard;
