import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../redux/actions/index';
import CategoryFilter from '../components/CategoryFilter';
import filterReducer from '../redux/reducers/filters';

const BooksList = ({ books, removeBook, filterReducer }) => {
  const handleRemoveBook = bookId => {
    removeBook(bookId);
  };

  const handleFilterChange = e => {
    filterReducer(e.target.value);
  };

  return (
    <div>
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
      <CategoryFilter />
    </div>
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
  books: state.booksReducer.books,
});

const mapDispatchToProps = {
  removeBook,

};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
