const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [
  { id: Math.random(), title: 'Don Quixote', category: 'History' },
  { id: Math.random(), title: 'A Tale of Two Cities', category: 'Kids' },
  { id: Math.random(), title: 'The Lord of the Rings', category: 'History' },
  { id: Math.random(), title: 'The Little Prince', category: 'Horror' },
  { id: Math.random(), title: 'The Hobbit', category: 'Kids' },
];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK: {
      const newArr = [...state, action.payload];
      return newArr;
    }
    case REMOVE_BOOK:
      return [...state].filter(book => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
