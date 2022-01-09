import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/auth';

const rootReducer = combineReducers({ auth: authReducer });

export default () => {
  return createStore(rootReducer);
};
