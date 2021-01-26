import { combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filters';

const rootReducer = combineReducers({ booksReducer, filterReducer });

export default rootReducer;
