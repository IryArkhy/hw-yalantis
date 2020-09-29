import { takeEvery, put, call } from 'redux-saga/effects';
import makeRequest from '../../servises/api';
import cartActions from './cartActions';
import findProductById from '../../helpers/cartHelpers';
import { notifyError, notifySuccess } from '../../helpers/userNotifiers';
import { USER_MESSAGES } from '../../constants';
import ENDPOINTS from '../../servises/api-constants';
import cartTypes from './cartTypes';

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

function* removeProductFromCartWorker({ payload }) {
  const { id, cart } = payload;

  const { removeFromCartSuccess } = cartActions;
  const productToDelete = findProductById(cart, id);
  if (!productToDelete) return;

  if (productToDelete.count === 1) {
    yield put(removeFromCartSuccess(id, {}));
  } else {
    yield put(
      removeFromCartSuccess('', {
        ...productToDelete,
        count: productToDelete.count - 1,
      }),
    );
  }
}

function* removeAllInstancesOfProductWorker({ payload }) {
  const { id } = payload;
  yield put(cartActions.removeAllInstancesSucces(id));
}

function* clearCartWorker() {
  yield put(cartActions.clearCartSucces());
}

export default function* cartWatcher() {
  yield takeEvery(cartTypes.ADD_TO_CART, addProductToCartWorker);
  yield takeEvery(cartTypes.DELETE_FROM_CART, removeProductFromCartWorker);
  yield takeEvery(
    cartTypes.REMOVE_ALL_INSTANCES,
    removeAllInstancesOfProductWorker,
  );
  yield takeEvery(cartTypes.CLEAR_CART, clearCartWorker);
}
