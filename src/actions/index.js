const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const createBook = (book) => {
    return {
        type: CREATE_BOOK,
        payload: book
    }
}

const removeBook = (bookId) => {
    return {
        type: REMOVE_BOOK,
        payload: bookId
    }
}