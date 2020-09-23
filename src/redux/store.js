import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const middleware = [thunk];
const enhuncer = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(rootReducer, enhuncer);
export const persistor = persistStore(store);

// new --------
const configureStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const storage = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );
  sagaMiddleware.run(rootSaga);

  return store;
};
