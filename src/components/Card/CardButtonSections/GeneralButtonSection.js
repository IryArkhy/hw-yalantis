import React from 'react';
import T from 'prop-types';
import { AddToCartButton, RemoveFromCartButton } from '../../Buttons';

const GeneralBtnSection = ({ productInCart, addToCart, removeFromCard }) => {
  return (
    <div>
      <button type="button" onClick={addToCart}>
        {productInCart && productInCart.count >= 1 ? '+1' : <AddToCartButton />}
      </button>
      <button type="button" onClick={removeFromCard}>
        {productInCart && productInCart.count > 1 ? (
          '-1'
        ) : (
          <RemoveFromCartButton />
        )}
      </button>
    </div>
  );
};

GeneralBtnSection.propTypes = {
  productInCart: T.shape({
    id: T.string.isRequired,
    name: T.string.isRequired,
    price: T.number.isRequired,
    origin: T.string.isRequired,
    count: T.number,
  }).isRequired,
  addToCart: T.func.isRequired,
  removeFromCard: T.func.isRequired,
};
export default GeneralBtnSection;
