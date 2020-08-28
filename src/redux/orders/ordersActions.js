import ordersTypes from './ordersTypes';

const getAllOrdersStart = () => ({
  type: ordersTypes.GET_ALL_ORDERS_START,
});

const getAllOrdersSuccess = orders => ({
  type: ordersTypes.GET_ALL_ORDERS_SUCCESS,
  payload: {
    orders,
  },
});

const getAllOrdersFailure = error => ({
  type: ordersTypes.GET_ALL_ORDERS_FAILURE,
  payload: {
    error,
  },
});

//--
const createOrderStart = () => ({
  type: ordersTypes.CREATE_ORDER_START,
});

const createOrderSuccess = data => ({
  type: ordersTypes.CREATE_ORDER_SUCCESS,
  payload: {
    data,
  },
});

const createOrderFailure = error => ({
  type: ordersTypes.CREATE_ORDER_FAILURE,
  payload: {
    error,
  },
});

//--
const getOrderStart = () => ({
  type: ordersTypes.GET_ORDER_START,
});

const getOrderSuccess = order => ({
  type: ordersTypes.CREATE_ORDER_SUCCESS,
  payload: {
    order,
  },
});

const getOrderFailure = error => ({
  type: ordersTypes.GET_ORDER_FAILURE,
  payload: {
    error,
  },
});

export default {
  getAllOrdersStart,
  getAllOrdersSuccess,
  getAllOrdersFailure,

  createOrderStart,
  createOrderSuccess,
  createOrderFailure,

  getOrderStart,
  getOrderSuccess,
  getOrderFailure,
};
