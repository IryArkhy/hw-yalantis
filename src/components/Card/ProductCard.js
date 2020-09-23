import React from 'react';
import T from 'prop-types';
import { useHistory } from 'react-router-dom';
import findProductById from '../../helpers/cartHelpers';
import {
  cardWrapper,
  cardWrapperHeader,
  cardWrapperContent,
} from './card.module.css';
import useCart from '../../hooks/useCart';
import routes from '../../routes';
import { GeneralBtnSection, UserProductBtnSection } from './CardButtonSections';

// TODO: remove onDeleteProduct from props inside the CardComponent (useProducts())

const ProductCard = ({
  product,
  openModal,
  onDeleteProduct,
  onGetProductData,
}) => {
  const { cart, addOneToCart, removeOneFromCart } = useCart();
  const history = useHistory();
  const { origin, name, price, id, isEditable } = product;
  const isInCart = findProductById(cart, id);
  const getToProductPage = ({ target, currentTarget }) => {
    if (
      target.type === 'button' ||
      target.nodeName === 'path' ||
      target.nodeName === 'svg'
    ) {
      if (!onGetProductData) return;
      onGetProductData(currentTarget);
    } else {
      history.push(routes.PRODUCT_PAGE.createPath(id));
    }
  };

  const addToCart = () => addOneToCart(id);
  const removeFromCart = () => removeOneFromCart(id);
  const deleteProduct = () => onDeleteProduct(id);

  return (
    <div
      role="presentation"
      data-product={`${name}-${price}-${origin}`}
      data-id={id}
      onClick={getToProductPage}
      className={cardWrapper}
    >
      <header className={cardWrapperHeader}>
        <h3>{name}</h3>
        {isInCart && <p>In cart: {isInCart.count} </p>}
      </header>
      <div className={cardWrapperContent}>
        <p>{origin}</p>
        <p>{price} $</p>
        {isEditable ? (
          <UserProductBtnSection
            onDeleteProduct={deleteProduct}
            onOpenModal={openModal}
          />
        ) : (
          <GeneralBtnSection
            productInCart={isInCart}
            addToCart={addToCart}
            removeFromCard={removeFromCart}
          />
        )}
      </div>
    </div>
  );
};
ProductCard.defaultProps = {
  openModal: null,
  onDeleteProduct: null,
  onGetProductData: null,
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
  onGetProductData: T.func,
};
export default ProductCard;
