import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import authReducer from './reducers/auth';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware());

const rootReducer = combineReducers({ auth: authReducer });

export default () => {
  return createStore(rootReducer, enhancer);
};
