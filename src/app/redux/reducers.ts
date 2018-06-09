import { combineReducers, Reducer } from 'redux';
import { routerReducer } from 'react-router-redux';
import { worldReducer } from './modules/world';
import { IStore } from './IStore';

const { reducer } = require('redux-connect');

const rootReducer: Reducer<IStore> = combineReducers<any>({
  routing: routerReducer,
  world: worldReducer,
  reduxAsyncConnect: reducer
});

export default rootReducer;
