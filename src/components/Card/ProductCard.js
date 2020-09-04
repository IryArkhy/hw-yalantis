import React from 'react';
import T from 'prop-types';
import { useHistory } from 'react-router-dom';
import findProductById from '../../helpers/cartHelpers';
import styles from './card.module.css';
import useCart from '../../hooks/useCart';
import routes from '../../routes';
import { GeneralBtnSection, UserProductBtnSection } from './CardButtonSections';

// TODO: remove onDeleteProduct from props inside the CardComponent (useProducts())

const ProductCard = ({ product, openModal, onDeleteProduct }) => {
  const { cart, addOneToCart, removeOneFromCart } = useCart();
  const history = useHistory();
  const { origin, name, price, id, isEditable } = product;
  const isInCart = findProductById(cart, id);
  const getToProductPage = ({ target }) => {
    if (
      target.type === 'button' ||
      target.nodeName === 'path' ||
      target.nodeName === 'svg'
    )
      return;
    history.push(routes.PRODUCT_PAGE.createPath(id));
  };

  const addToCart = () => addOneToCart(id);
  const removeFromCard = () => removeOneFromCart(id);

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
        {isEditable ? (
          <UserProductBtnSection
            onDeleteProduct={onDeleteProduct}
            onOpenModal={openModal}
          />
        ) : (
          <GeneralBtnSection
            productInCart={isInCart}
            addToCart={addToCart}
            removeFromCard={removeFromCard}
          />
        )}
      </div>
    </div>
  );
};
ProductCard.defaultProps = {
  openModal: null,
  onDeleteProduct: null,
};
ProductCard.propTypes = {
  product: T.shape({
    id: T.string.isRequired,
    name: T.string.isRequired,
    price: T.number.isRequired,
    origin: T.string.isRequired,
    isEditable: T.bool,
  }).isRequired,
  openModal: T.func,
  onDeleteProduct: T.func,
};
export default ProductCard;
