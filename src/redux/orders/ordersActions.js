import ordersTypes from './ordersTypes';

const getAllOrders = () => ({
  type: ordersTypes.GET_ALL_ORDERS,
});

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
const createOrder = cart => ({
  type: ordersTypes.CREATE_ORDER,
  payload: {
    cart,
  },
});

const createOrderStart = () => ({
  type: ordersTypes.CREATE_ORDER_START,
});

const createOrderSuccess = order => ({
  type: ordersTypes.CREATE_ORDER_SUCCESS,
  payload: {
    order,
  },
});

const createOrderFailure = error => ({
  type: ordersTypes.CREATE_ORDER_FAILURE,
  payload: {
    error,
  },
});

//--
const getOrder = orderId => {
  // console.log({ orderId });
  return {
    type: ordersTypes.GET_ORDER,
    payload: {
      orderId,
    },
  };
};

const getOrderStart = () => ({
  type: ordersTypes.GET_ORDER_START,
});

const getOrderSuccess = order => ({
  type: ordersTypes.GET_ORDER_SUCCESS,
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
  getAllOrders,
  getAllOrdersStart,
  getAllOrdersSuccess,
  getAllOrdersFailure,

  createOrder,
  createOrderStart,
  createOrderSuccess,
  createOrderFailure,

  getOrder,
  getOrderStart,
  getOrderSuccess,
  getOrderFailure,
};
