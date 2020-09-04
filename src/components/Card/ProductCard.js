import React from 'react';
import T from 'prop-types';
import { useHistory } from 'react-router-dom';
import findProductById from '../../helpers/cartHelpers';
import styles from './card.module.css';
import useCart from '../../hooks/useCart';
import routes from '../../routes';
import { GeneralBtnSection, UserProductBtnSection } from './CardButtonSections';

const ProductCard = ({
  origin,
  name,
  price,
  id,
  isEditable,
  openModal,
  onDeleteProduct,
}) => {
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
  isEditable: false,
  openModal: null,
  onDeleteProduct: null,
};
ProductCard.propTypes = {
  id: T.string.isRequired,
  name: T.string.isRequired,
  price: T.number.isRequired,
  origin: T.string.isRequired,
  isEditable: T.bool,
  openModal: T.func,
  onDeleteProduct: T.func,
};
export default ProductCard;
