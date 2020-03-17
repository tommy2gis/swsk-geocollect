/*
 * @Author: 史涛 
 * @Date: 2019-01-05 19:31:21 
 * @Last Modified by: 史涛
 * @Last Modified time: 2020-03-17 14:49:28
 */
import { createStore, applyMiddleware, combineReducers,compose } from 'redux';
import { routerReducer } from 'react-router-redux';
import {default as thunkMiddleware } from 'redux-thunk';
const { logger } = require(`redux-logger`);
const middlewares = [thunkMiddleware];
if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

const reducers = combineReducers({
  routerReducer
});

export default createStore(reducers, applyMiddleware(...middlewares));

