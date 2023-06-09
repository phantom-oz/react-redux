import { createStore, combineReducers, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));
export default store;
