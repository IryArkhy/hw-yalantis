import { takeEvery, put, call } from 'redux-saga/effects';
import makeRequest from '../../servises/api';
import ordersActions from './ordersActions';
import { notifyError } from '../../helpers/userNotifiers';
import { USER_MESSAGES } from '../../constants';
import ENDPOINTS from '../../servises/api-constants';
import ordersTypes from './ordersTypes';

function* getAllOrdersWorker() {
  const {
    getAllOrdersStart,
    getAllOrdersSuccess,
    getAllOrdersFailure,
  } = ordersActions;

  try {
    yield put(getAllOrdersStart());
    const { items } = yield call(makeRequest, 'get', ENDPOINTS.GET_POST_ORDERS);
    // console.log({ items });
    yield put(getAllOrdersSuccess(items));
  } catch (error) {
    yield put(getAllOrdersFailure(error));
    notifyError(USER_MESSAGES.ERROR.LOAD_ORDERS);
  }
}

function* getOrderWorker({ payload }) {
  const { orderId } = payload;

  const { getOrderStart, getOrderSuccess, getOrderFailure } = ordersActions;

  try {
    yield put(getOrderStart());
    const data = yield call(
      makeRequest,
      'get',
      ENDPOINTS.GET_ORDER_BY_ID.createURL(orderId),
    );
    yield put(getOrderSuccess(data));
  } catch (error) {
    yield put(getOrderFailure(error));
    notifyError(USER_MESSAGES.ERROR.GET_ORDER_BY_ID);
  }
}

function* postOrderWorker({ payload }) {
  const { cart } = payload;
  const {
    createOrderStart,
    createOrderSuccess,
    createOrderFailure,
  } = ordersActions;
  const requestBody = {
    order: {
      pieces: cart.map(product => ({
        productId: product.id,
        count: product.count,
      })),
    },
  };
  try {
    yield put(createOrderStart());
    const data = yield call(
      makeRequest,
      'post',
      ENDPOINTS.GET_POST_ORDERS,
      {},
      requestBody,
    );
    yield put(createOrderSuccess(data));
  } catch (error) {
    yield put(createOrderFailure(error));
    notifyError(USER_MESSAGES.ERROR.POST_ORDER);
  }
}

export default function* ordersWatcher() {
  yield takeEvery(ordersTypes.GET_ALL_ORDERS, getAllOrdersWorker);
  yield takeEvery(ordersTypes.GET_ORDER, getOrderWorker);
  yield takeEvery(ordersTypes.CREATE_ORDER, postOrderWorker);
}
