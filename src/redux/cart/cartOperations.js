import api from '../../servises/api';
import cartActions from './cartActions';
import findProductById from '../../helpers/cartHelpers';
import { notifyError, notifySuccess } from '../../helpers/userNotifiers';
import { USER_MESSAGES } from '../../constants';
import ENDPOINTS from '../../servises/api-constants';

export const addProductToCart = productId => (dispatch, getState) => {
  const state = getState();
  const { cart } = state;

  dispatch(cartActions.addToCartStart());
  const alreadyInCart = findProductById(cart.cart, productId);

  if (alreadyInCart) {
    dispatch(
      cartActions.addToCartSuccess({
        ...alreadyInCart,
        count: alreadyInCart.count + 1,
      }),
    );
    notifySuccess(USER_MESSAGES.ADD_TO_CART_SUCCESS);
  } else {
    api
      .getProducts('get', ENDPOINTS.CRUD_PRODUCT_BY_ID.createURL(productId))
      .then(({ data }) => {
        dispatch(cartActions.addToCartSuccess({ ...data, count: 1 }));
        notifySuccess(USER_MESSAGES.ADD_TO_CART_SUCCESS);
      })
      .catch(error => {
        notifyError(USER_MESSAGES.ADD_OR_REMOVE_FROM_CART_FAILURE);
        dispatch(cartActions.addToCartFailure(error));
      });
  }
};

export const removeProductFromCart = productId => (dispatch, getState) => {
  const state = getState();
  const { cart } = state;
  const productToDelete = findProductById(cart.cart, productId);

  if (!productToDelete) return;

  if (productToDelete.count === 1) {
    dispatch(cartActions.removeFromCart(productId, {}));
  } else {
    dispatch(
      cartActions.removeFromCart('', {
        ...productToDelete,
        count: productToDelete.count - 1,
      }),
    );
  }
};

export const removeAllInstancesOfProduct = productId => dispatch => {
  dispatch(cartActions.removeAllInstances(productId));
};

export const clearCart = () => dispatch => dispatch(cartActions.clearCart());
