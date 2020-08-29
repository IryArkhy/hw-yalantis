import cartActions from './cartActions';
import { findProductById } from '../../helpers/cartHelpers';
import { notifyError } from '../../helpers/userNotifiers';
import { USER_MESSAGES } from '../../constants';

export const addProductToCart = productId => (dispatch, getState) => {
  const state = getState();
  const { cart, products } = state;

  const productToAdd = findProductById(products.products, productId);
  if (!productToAdd) {
    notifyError(USER_MESSAGES.ADD_OR_REMOVE_FROM_CART_FAILURE);
    dispatch(cartActions.addToCartFailure(new Error()));
    return;
  }
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

  if (!productToDelete) {
    notifyError(USER_MESSAGES.ADD_OR_REMOVE_FROM_CART_FAILURE);
    dispatch(cartActions.addToCartFailure(new Error()));
    return;
  }
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

export const removeAllInstancesOfProduct = productId => (
  dispatch,
  getState,
) => {
  const state = getState();
  const { cart } = state;
  const productToDelete = findProductById(cart.cart, productId);

  if (!productToDelete) {
    notifyError(USER_MESSAGES.ADD_OR_REMOVE_FROM_CART_FAILURE);
    dispatch(cartActions.addToCartFailure(new Error()));
    return;
  }

  dispatch(cartActions.removeAllInstancesStart());
  dispatch(cartActions.removeAllInstancesSuccess(productId));
};

export const clearCart = () => dispatch => {
  dispatch(cartActions.clearCartStart());
  dispatch(cartActions.clearCartSuccess());
};
