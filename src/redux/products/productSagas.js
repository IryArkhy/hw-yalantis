import { takeEvery, put, call, delay } from 'redux-saga/effects';
import makeRequest from '../../servises/api';
import productsActions from './productsActions';
import { notifyError, notifySuccess } from '../../helpers/userNotifiers';
import { USER_MESSAGES } from '../../constants';
import ENDPOINTS from '../../servises/api-constants';
import PT from './productsTypes';

function* getAllProductsWorker({ payload }) {
  const {
    getAllProductsStart,
    getAllProductsSuccess,
    getAllProductsFailure,
  } = productsActions;

  try {
    yield put(getAllProductsStart());
    const { items, page, totalItems, perPage } = yield call(
      makeRequest,
      'get',
      ENDPOINTS.PRODUCTS,
      payload,
    );
    yield put(
      getAllProductsSuccess({
        products: items,
        page,
        pages: Math.ceil(totalItems / perPage),
      }),
    );
  } catch (error) {
    yield put(getAllProductsFailure(error));
    notifyError(USER_MESSAGES.ERROR.LOAD_PRODUCTS);
  }
}

export function* getAllProductsWatcher() {
  yield takeEvery(PT.GET_ALL_PRODUCTS, getAllProductsWorker);
}
function* productsWithDebounceWorker({ payload }) {
  // const { pageNum, perPage, region, minPrice, maxPrice } = payload;
  const {
    getProductsDebounceStart,
    getAllProductsSuccess,
    getProductsDebounceFailure,
  } = productsActions;

  try {
    yield call(delay, 2000);
    yield put(getProductsDebounceStart());
    const { items, page, totalItems, perPage } = yield call(
      makeRequest,
      'get',
      ENDPOINTS.PRODUCTS,
      payload,
    );
    yield put(
      getAllProductsSuccess({
        products: items,
        page,
        pages: Math.ceil(totalItems / perPage),
      }),
    );
  } catch (error) {
    yield put(getProductsDebounceFailure(error));
    notifyError(USER_MESSAGES.ERROR.LOAD_PRODUCTS);
  }
}

export function* productsWithDebounceWatcher() {
  yield takeEvery(PT.LOAD_PRODUCTS_WITH_DEBOUNCE, productsWithDebounceWorker);
}

function* getUserProductsWorker({ payload }) {
  const {
    getUserProductsStart,
    getUserProductsSuccess,
    getUserProductsFailure,
  } = productsActions;

  try {
    yield put(getUserProductsStart());
    const { items, totalItems } = yield call(
      makeRequest,
      'get',
      ENDPOINTS.PRODUCTS,
      payload,
    );
    yield put(
      getUserProductsSuccess({
        products: items,
        count: totalItems,
      }),
    );
  } catch (error) {
    yield put(getUserProductsFailure(error));
    notifyError(USER_MESSAGES.ERROR.LOAD_PRODUCTS);
  }
}

export function* getUserProductsWatcher() {
  yield takeEvery(PT.GET_USER_PRODUCTS, getUserProductsWorker);
}

function* getProductWorker({ payload }) {
  const { productId } = payload;

  const {
    getProductStart,
    getProductSuccess,
    getProductFailure,
  } = productsActions;

  try {
    yield put(getProductStart());
    const data = yield call(
      makeRequest,
      'get',
      ENDPOINTS.CRUD_PRODUCT_BY_ID.createURL(productId),
    );
    yield put(getProductSuccess(data));
  } catch (error) {
    yield put(getProductFailure(error));
    notifyError(USER_MESSAGES.ERROR.FIND_PRODUCT_BY_ID);
  }
}

export function* getProductWatcher() {
  yield takeEvery(PT.GET_PRODUCT, getProductWorker);
}

function* getProductsOriginsWorker() {
  const {
    getProductOriginsStart,
    getProductOriginsSuccess,
    getProductOriginsFailure,
  } = productsActions;

  try {
    yield put(getProductOriginsStart());
    const { items } = yield call(
      makeRequest,
      'get',
      ENDPOINTS.GET_PRODUCTS_ORIGINS,
    );
    yield put(getProductOriginsSuccess(items));
  } catch (error) {
    notifyError(USER_MESSAGES.ERROR.LOAD_PRODUCT_ORIGINS);
    put(getProductOriginsFailure(error));
  }
}

export function* getProductsOriginsWatcher() {
  yield takeEvery(PT.GET_PRODUCT_ORIGINS, getProductsOriginsWorker);
}

function* createProductWorker({ payload }) {
  const { name, price, origin } = payload;
  const requestBody = {
    product: {
      name,
      price,
      origin,
    },
  };
  const {
    createProductStart,
    createProductSuccess,
    createProductFailure,
  } = productsActions;

  try {
    yield put(createProductStart());
    const data = yield call(
      makeRequest,
      'post',
      ENDPOINTS.PRODUCTS,
      {},
      requestBody,
    );
    yield put(createProductSuccess(data));
  } catch (error) {
    notifyError(USER_MESSAGES.ERROR.CREATE_PRODUCT);
    yield put(createProductFailure(error));
  }
}

export function* createProductWatcher() {
  yield takeEvery(PT.CREATE_PRODUCT, createProductWorker);
}

function* editProductWorker({ payload }) {
  const { id, name, origin, price } = payload;
  const requestBody = {
    product: {
      name,
      price,
      origin,
    },
  };
  const {
    updateProductStart,
    updateProductSuccess,
    updateProductFailure,
  } = productsActions;

  try {
    yield put(updateProductStart());
    const data = yield call(
      makeRequest,
      'patch',
      ENDPOINTS.CRUD_PRODUCT_BY_ID.createURL(id),
      {},
      requestBody,
    );
    yield put(updateProductSuccess(data));
    notifySuccess(USER_MESSAGES.SUCCESS.EDIT_PRODUCT);
  } catch (error) {
    yield put(updateProductFailure(error));
    notifyError(USER_MESSAGES.ERROR.EDIT_PRODUCT);
  }
}

export function* editProductWatcher() {
  yield takeEvery(PT.UPDATE_PRODUCT, editProductWorker);
}

function* deleteProductWorker({ payload }) {
  const { productId } = payload;
  const {
    deleteProductStart,
    deleteProductSuccess,
    deleteProductFailure,
  } = productsActions;

  try {
    yield put(deleteProductStart());
    yield call(
      makeRequest,
      'delete',
      ENDPOINTS.CRUD_PRODUCT_BY_ID.createURL(productId),
    );
    yield put(deleteProductSuccess(productId));
    notifySuccess(USER_MESSAGES.SUCCESS.DELETE_PRODUCT);
  } catch (error) {
    yield put(deleteProductFailure(error));
    notifyError(USER_MESSAGES.ERROR.DELETE_PRODUCT);
  }
}

export function* deleteProductWatcher() {
  yield takeEvery(PT.DELETE_PRODUCT, deleteProductWorker);
}
