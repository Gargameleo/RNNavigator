import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import authReducer from './reducers/auth';
import themeReducer from './reducers/theme';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware());

const rootReducer = combineReducers({ auth: authReducer, theme: themeReducer });

export default () => {
  return createStore(rootReducer, enhancer);
};
