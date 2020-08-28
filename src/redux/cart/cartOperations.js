import cartActions from './cartActions';
import { findProductById } from '../../helpers/cartHelpers';

export const addProductToCart = productId => (dispatch, getState) => {
  const state = getState();
  const { cart, products } = state;

  const productToAdd = findProductById(products.products, productId);
  const alreadyInCart = findProductById(cart.cart, productId);

  dispatch(cartActions.addToCartStart());
  if (!alreadyInCart) {
    dispatch(cartActions.addToCartSuccess({ ...productToAdd, count: 1 }));
    return;
  }
  dispatch(
    cartActions.addToCartSuccess({
      ...alreadyInCart,
      count: alreadyInCart.count + 1,
    }),
  );
};

export const removeProductFromCart = productId => (dispatch, getState) => {
  const state = getState();
  const { cart } = state;
  const productToDelete = findProductById(cart.cart, productId);

  if (!productToDelete) return;
  dispatch(cartActions.removeFromCartStart());

  if (productToDelete.count === 1) {
    dispatch(cartActions.removeFromCartSuccess(productId, {}));
    return;
  }
  dispatch(
    cartActions.removeFromCartSuccess('', {
      ...productToDelete,
      count: productToDelete.count - 1,
    }),
  );
};

export const clearCart = () => dispatch => {
  dispatch(cartActions.clearCartStart());
  dispatch(cartActions.clearCartSuccess());
};
