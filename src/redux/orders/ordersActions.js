import OT from './ordersTypes';

const getAllOrders = () => ({
  type: OT.GET_ALL_ORDERS,
});

const getAllOrdersStart = () => ({
  type: OT.GET_ALL_ORDERS_START,
});

const getAllOrdersSuccess = orders => ({
  type: OT.GET_ALL_ORDERS_SUCCESS,
  payload: {
    orders,
  },
});

const getAllOrdersFailure = error => ({
  type: OT.GET_ALL_ORDERS_FAILURE,
  payload: {
    error,
  },
});

//--
const createOrder = cart => ({
  type: OT.CREATE_ORDER,
  payload: {
    cart,
  },
});

const createOrderStart = () => ({
  type: OT.CREATE_ORDER_START,
});

const createOrderSuccess = order => ({
  type: OT.CREATE_ORDER_SUCCESS,
  payload: {
    order,
  },
});

const createOrderFailure = error => ({
  type: OT.CREATE_ORDER_FAILURE,
  payload: {
    error,
  },
});

//--
const getOrder = orderId => {
  console.log({ orderId });
  return {
    type: OT.GET_ORDER,
    payload: {
      orderId,
    },
  };
};

const getOrderStart = () => ({
  type: OT.GET_ORDER_START,
});

const getOrderSuccess = order => ({
  type: OT.GET_ORDER_SUCCESS,
  payload: {
    order,
  },
});

const getOrderFailure = error => ({
  type: OT.GET_ORDER_FAILURE,
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
