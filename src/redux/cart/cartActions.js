import cartTypes from './cartTypes';

//--
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

const removeFromCart = (id, updatedProduct) => ({
  type: cartTypes.REMOVE_FROM_CART,
  payload: {
    id,
    updatedProduct,
  },
});

//--

const removeAllInstances = id => ({
  type: cartTypes.REMOVE_ALL_INSTANCES,
  payload: {
    id,
  },
});
//--
const clearCart = () => ({
  type: cartTypes.CLEAR_CART,
});

export default {
  addToCartStart,
  addToCartSuccess,
  addToCartFailure,

  removeFromCart,
  removeAllInstances,
  clearCart,
};
