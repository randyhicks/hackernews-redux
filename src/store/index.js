import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index';
const logger = createLogger();

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(logger));
};

export default configureStore;
