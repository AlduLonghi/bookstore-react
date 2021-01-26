import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../redux/actions/index';

const BooksList = ({ books, removeBook }) => {
  const handleRemoveBook = bookId => {
    removeBook(bookId);
  };

  return (
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      {books.map(book => (
        <Book
          key={book.id}
          bookId={book.id}
          bookTitle={book.title}
          bookCategory={book.category}
          onClick={handleRemoveBook}
        />
      ))}
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array),
  removeBook: PropTypes.func,
};

BooksList.defaultProps = {
  books: [],
  removeBook: null,
};

const mapStateToProps = state => ({
  books: state.booksReducer,
});

const mapDispatchToProps = {
  removeBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
