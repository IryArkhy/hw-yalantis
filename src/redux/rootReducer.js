import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productsReducer from './products/productsReducer';
import cartReducer from './cart/cartReducer';
import loadingReducer from './loading/loadingReducer';
import ordersReducer from './orders/ordersReducer';

const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: 'cart',
};

const rootReducer = combineReducers({
  products: productsReducer,
  cart: persistReducer(cartPersistConfig, cartReducer),
  orders: ordersReducer,
  loading: loadingReducer,
});

export default rootReducer;
