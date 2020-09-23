import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const middleware = createSagaMiddleware();
const enhancer = composeWithDevTools(applyMiddleware(middleware));

function createSagaInjector(runSaga, _rootSaga) {
  const injectedSagas = new Map();
  const isInjected = key => injectedSagas.has(key);
  const injectSaga = (key, saga) => {
    if (isInjected(key)) {
      return;
    }
    const task = runSaga(saga);
    injectedSagas.set(key, task);
  };
  const ejectSaga = key => {
    const task = injectedSagas.get(key);
    if (task.isRunning()) {
      task.cancel();
    }
    injectedSagas.delete(key);
  };
  injectSaga('root', _rootSaga);
  return { injectSaga, ejectSaga };
}
const initialStore = (initialState = {}) => {
  const store = createStore(rootReducer, initialState, enhancer);
  Object.assign(store, createSagaInjector(middleware.run, rootSaga));
  return store;
};
export default initialStore;
