import { createStore } from 'redux';
import booksReducer from './reducers/books';

const initialState = [
  { id: Math.random(), title: 'Title for book #1', category: 'Horror' },
  { id: Math.random(), title: 'Title for book #2', category: 'Kids' },
  { id: Math.random(), title: 'Title for book #3', category: 'History' },
  { id: Math.random(), title: 'Title for book #4', category: 'Horror' },
  { id: Math.random(), title: 'Title for book #5', category: 'Kids' },
];

const store = createStore(booksReducer, initialState);

export default store;
