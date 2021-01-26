const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = {
  books: [
    { id: Math.random(), title: 'Title for book #1', category: 'Horror' },
    { id: Math.random(), title: 'Title for book #2', category: 'Kids' },
    { id: Math.random(), title: 'Title for book #3', category: 'History' },
    { id: Math.random(), title: 'Title for book #4', category: 'Horror' },
    { id: Math.random(), title: 'Title for book #5', category: 'Kids' },
  ],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK: {
      const newArr = { ...state, books: [...state.books, action.payload] };
      return newArr;
    }
    case REMOVE_BOOK:
      return { ...state, books: [...state.books].filter(book => book.id !== action.payload) };
    default:
      return state;
  }
};

export default booksReducer;
