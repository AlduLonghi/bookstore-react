const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const booksReducer = (state, action) => {
  switch (action.type) {
    case CREATE_BOOK: {
      const newArr = [...state.books, action.payload];
      return newArr;
    }
    case REMOVE_BOOK:
      return [...state.books].filter(book => book.id !== action.payload);
    default:
      return state.books;
  }
};

export default booksReducer;
