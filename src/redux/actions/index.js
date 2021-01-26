const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const createBook = book => ({
  type: CREATE_BOOK,
  payload: book,
});

export const removeBook = bookId => ({
  type: REMOVE_BOOK,
  payload: bookId,
});
