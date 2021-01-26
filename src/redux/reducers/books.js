const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK: {
      const newArr = [...state, action.payload];
      return newArr;
    }
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
