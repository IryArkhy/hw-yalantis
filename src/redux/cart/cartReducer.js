import { combineReducers } from 'redux';
import cartTypes from './cartTypes';

const cartReducer = (state = [], { type, payload }) => {
  switch (type) {
    case cartTypes.ADD_TO_CART_SUCCESS: {
      if (payload.product.count === 1) return [...state, payload.product];

      return state.map(product =>
        product.id === payload.product.id
          ? { ...product, ...payload.product }
          : product,
      );
    }

    case cartTypes.REMOVE_FROM_CART_SUCCESS: {
      if (payload.id) return state.filter(product => product.id !== payload.id);

      return state.map(product =>
        product.id === payload.updatedProduct.id
          ? payload.updatedProduct
          : product,
      );
    }

    case cartTypes.CLEAR_CART_SUCCESS:
      return [];
    default:
      return state;
  }
};

const cartErrorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case cartTypes.ADD_TO_CART_FAILURE:
    case cartTypes.REMOVE_FROM_CART_FAILURE:
    case cartTypes.CLEAR_CART_FAILURE:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  cart: cartReducer,
  error: cartErrorReducer,
});
