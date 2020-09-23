import cartTypes from './cartTypes';

//--
const addToCart = (productId, cart) => ({
  type: cartTypes.ADD_TO_CART,
  payload: {
    productId,
    cart,
  },
});

const addToCartStart = () => ({
  type: cartTypes.ADD_TO_CART_START,
});

const addToCartSuccess = product => ({
  type: cartTypes.ADD_TO_CART_SUCCESS,
  payload: {
    product,
  },
});

const addToCartFailure = error => ({
  type: cartTypes.ADD_TO_CART_FAILURE,
  payload: {
    error,
  },
});

//--
const deletProductFromCart = (id, cart) => ({
  type: cartTypes.DELETE_FROM_CART,
  payload: {
    id,
    cart,
  },
});

const removeFromCartSuccess = (id, updatedProduct) => {
  return {
    type: cartTypes.REMOVE_FROM_CART_SUCCESS,
    payload: {
      id,
      updatedProduct,
    },
  };
};

//--

const removeAllInstances = id => ({
  type: cartTypes.REMOVE_ALL_INSTANCES,
  payload: {
    id,
  },
});

const removeAllInstancesSucces = id => ({
  type: cartTypes.REMOVE_FROM_CART_SUCCESS,
  payload: {
    id,
  },
});
//--
const clearCart = () => ({
  type: cartTypes.CLEAR_CART,
});

const clearCartSucces = () => ({
  type: cartTypes.CLEAR_CART_SUCCESS,
});
export default {
  addToCart,
  addToCartStart,
  addToCartSuccess,
  addToCartFailure,

  deletProductFromCart,
  removeFromCartSuccess,

  removeAllInstances,
  removeAllInstancesSucces,
  clearCart,
  clearCartSucces,
};
