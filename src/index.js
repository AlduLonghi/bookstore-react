import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import booksReducer from './reducers/books';

const initialState = [
  { id: Math.random(), title: 'Title for book #1', category: 'Horror' },
  { id: Math.random(), title: 'Title for book #2', category: 'Kids' },
  { id: Math.random(), title: 'Title for book #3', category: 'History' },
  { id: Math.random(), title: 'Title for book #4', category: 'Horror' },
  { id: Math.random(), title: 'Title for book #5', category: 'Kids' },
];

const store = createStore(booksReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
