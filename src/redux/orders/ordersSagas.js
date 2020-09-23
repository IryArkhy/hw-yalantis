import { takeEvery, put, call } from 'redux-saga/effects';
import makeRequest from '../../servises/api';
import ordersActions from './ordersActions';
import { notifyError } from '../../helpers/userNotifiers';
import { USER_MESSAGES } from '../../constants';
import ENDPOINTS from '../../servises/api-constants';
import OT from './ordersTypes';

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
export function* getAllOrdersWatcher() {
  yield takeEvery(OT.GET_ALL_ORDERS, getAllOrdersWorker);
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
export function* getOrderWatcher() {
  yield takeEvery(OT.GET_ORDER, getOrderWorker);
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
export function* postOrderWatcher() {
  yield takeEvery(OT.CREATE_ORDER, postOrderWorker);
}
