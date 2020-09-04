import { combineReducers } from 'redux';
import ordersTypes from './ordersTypes';

const ordersReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ordersTypes.GET_ALL_ORDERS_SUCCESS:
      return payload.orders;

    case ordersTypes.CREATE_ORDER_SUCCESS:
      return [payload.order, ...state];

    default:
      return state;
  }
};

const currentOrderReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ordersTypes.GET_ORDER_SUCCESS:
      return payload.order;

    default:
      return state;
  }
};

const ordersErrorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ordersTypes.GET_ALL_ORDERS_FAILURE:
    case ordersTypes.CREATE_ORDER_FAILURE:
    case ordersTypes.GET_ORDER_FAILURE:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  orders: ordersReducer,
  currentOrder: currentOrderReducer,
  error: ordersErrorReducer,
});
