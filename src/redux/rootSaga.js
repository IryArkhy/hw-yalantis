import { all } from 'redux-saga/effects';
import {
  getAllProductsWatcher,
  productsWithDebounceWatcher,
  getUserProductsWatcher,
  getProductWatcher,
  getProductsOriginsWatcher,
  createProductWatcher,
  editProductWatcher,
  deleteProductWatcher,
} from './products/productSagas';
import {
  getAllOrdersWatcher,
  getOrderWatcher,
  postOrderWatcher,
} from './orders/ordersSagas';
import {
  addProductToCartWatcher,
  removeProductFromCartWatcher,
  removeAllInstancesOfProductWatcher,
  clearCartWatcher,
} from './cart/cartSagas';

export default function* rootSaga() {
  yield all([
    getAllProductsWatcher(),
    productsWithDebounceWatcher(),
    getUserProductsWatcher(),
    getProductWatcher(),
    getProductsOriginsWatcher(),
    createProductWatcher(),
    editProductWatcher(),
    deleteProductWatcher(),
    getAllOrdersWatcher(),
    getOrderWatcher(),
    postOrderWatcher(),
    addProductToCartWatcher(),
    removeProductFromCartWatcher(),
    removeAllInstancesOfProductWatcher(),
    clearCartWatcher(),
  ]);
}
