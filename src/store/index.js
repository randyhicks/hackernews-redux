import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import rootReducer from '../reducers/index';

const logger = createLogger();
const saga = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(saga, logger));
  saga.run(rootSaga);
  return store;
};

export default configureStore;
