import { all } from 'redux-saga/effects';
import productsWatcher from './products/productSagas';
import ordersWatcher from './orders/ordersSagas';
import cartWatcher from './cart/cartSagas';

export default function* rootSaga() {
  yield all([productsWatcher(), ordersWatcher(), cartWatcher()]);
}
