import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
  books: [
    { id: Math.random(), title: 'Title for book #1', category: 'Horror' },
    { id: Math.random(), title: 'Title for book #2', category: 'Kids' },
    { id: Math.random(), title: 'Title for book #3', category: 'History' },
    { id: Math.random(), title: 'Title for book #4', category: 'Horror' },
    { id: Math.random(), title: 'Title for book #5', category: 'Kids' },
  ],
  filter: '',
};

const store = createStore(rootReducer, initialState);

export default store;
