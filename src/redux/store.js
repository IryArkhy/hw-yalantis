import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const middleware = createSagaMiddleware();
const enhancer = composeWithDevTools(applyMiddleware(middleware));

export const initialStore = () => {
  const store = createStore(rootReducer, enhancer);
  middleware.run(rootSaga);

  return store;
};
export const persistor = persistStore(initialStore());
