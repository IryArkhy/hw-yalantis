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
const removeFromCartStart = () => ({
  type: cartTypes.REMOVE_FROM_CART_START,
});

const removeFromCartSuccess = (id, updatedProduct) => ({
  type: cartTypes.REMOVE_FROM_CART_SUCCESS,
  payload: {
    id,
    updatedProduct,
  },
});

const removeFromCartFailure = error => ({
  type: cartTypes.REMOVE_FROM_CART_FAILURE,
  payload: {
    error,
  },
});

//--
const removeAllInstancesStart = () => ({
  type: cartTypes.REMOVE_ALL_INSTANCES_START,
});

const removeAllInstancesSuccess = id => ({
  type: cartTypes.REMOVE_ALL_INSTANCES_SUCCESS,
  payload: {
    id,
  },
});
const removeAllInstancesFailure = error => ({
  type: cartTypes.REMOVE_ALL_INSTANCES_FAILURE,
  payload: {
    error,
  },
});
//--
const clearCartStart = () => ({
  type: cartTypes.CLEAR_CART_START,
});

const clearCartSuccess = () => ({
  type: cartTypes.CLEAR_CART_SUCCESS,
});

const clearCartFailure = error => ({
  type: cartTypes.CLEAR_CART_FAILURE,
  payload: {
    error,
  },
});

export default {
  addToCartStart,
  addToCartSuccess,
  addToCartFailure,

  removeFromCartStart,
  removeFromCartSuccess,
  removeFromCartFailure,

  removeAllInstancesStart,
  removeAllInstancesSuccess,
  removeAllInstancesFailure,

  clearCartStart,
  clearCartSuccess,
  clearCartFailure,
};
