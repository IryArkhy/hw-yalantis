import { takeEvery, put, call } from 'redux-saga/effects';
import makeRequest from '../../servises/api';
import cartActions from './cartActions';
import findProductById from '../../helpers/cartHelpers';
import { notifyError, notifySuccess } from '../../helpers/userNotifiers';
import { USER_MESSAGES } from '../../constants';
import ENDPOINTS from '../../servises/api-constants';
import CT from './cartTypes';

function* addProductToCartWorker({ payload }) {
  const { productId, cart } = payload;
  const { addToCartStart, addToCartSuccess, addToCartFailure } = cartActions;
  const alreadyInCart = findProductById(cart, productId);

  try {
    yield put(addToCartStart());
    if (alreadyInCart) {
      yield put(
        addToCartSuccess({
          ...alreadyInCart,
          count: alreadyInCart.count + 1,
        }),
      );
      notifySuccess(USER_MESSAGES.SUCCESS.ADD_TO_CART);
    } else {
      const data = yield call(
        makeRequest,
        'get',
        ENDPOINTS.CRUD_PRODUCT_BY_ID.createURL(productId),
      );
      yield put(addToCartSuccess({ ...data, count: 1 }));
      notifySuccess(USER_MESSAGES.SUCCESS.ADD_TO_CART);
    }
  } catch (error) {
    yield put(addToCartFailure(error));
    notifyError(USER_MESSAGES.ERROR.ADD_OR_REMOVE_FROM_CART);
  }
}

export function* addProductToCartWatcher() {
  yield takeEvery(CT.ADD_TO_CART, addProductToCartWorker);
}

function* removeProductFromCartWorker({ payload }) {
  const { id, cart } = payload;
  const { removeFromCart } = cartActions;
  const productToDelete = findProductById(cart, id);
  if (!productToDelete) return;

  if (productToDelete.count === 1) {
    yield put(removeFromCart(id, {}));
  } else {
    yield put(
      removeFromCart('', {
        ...productToDelete,
        count: productToDelete.count - 1,
      }),
    );
  }
}
export function* removeProductFromCartWatcher() {
  yield takeEvery(CT.DELETE_FROM_CART, removeProductFromCartWorker);
}

function* removeAllInstancesOfProductWorker({ payload }) {
  const { id } = payload;
  yield put(cartActions.removeAllInstancesSucces(id));
}
export function* removeAllInstancesOfProductWatcher() {
  yield takeEvery(CT.REMOVE_ALL_INSTANCES, removeAllInstancesOfProductWorker);
}

function* clearCartWorker() {
  yield put(cartActions.clearCartSucces());
}
export function* clearCartWatcher() {
  yield takeEvery(CT.CLEAR_CART, clearCartWorker);
}
