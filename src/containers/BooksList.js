import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { changeFilter, removeBook } from '../redux/actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, removeBook, changeFilter, filter,
}) => {
  const handleRemoveBook = bookId => removeBook(bookId);
  const handleFilterChange = e => changeFilter(e.target.value);

  const displayedBooks = () => {
    if (filter !== 'All') {
      return [...books].filter(book => book.category === filter);
    }
    return books;
  };

  return (
    <div>
      <table>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {displayedBooks().map(book => (
          <Book
            key={book.id}
            bookId={book.id}
            bookTitle={book.title}
            bookCategory={book.category}
            onClick={handleRemoveBook}
          />
        ))}
      </table>
      <CategoryFilter onChange={handleFilterChange} />
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array),
  removeBook: PropTypes.func,
  changeFilter: PropTypes.func,
  filter: PropTypes.instanceOf(Object),
};

BooksList.defaultProps = {
  books: [],
  removeBook: null,
  changeFilter: null,
  filter: '',
};

const mapStateToProps = state => ({
  books: state.booksReducer.books,
  filter: state.filterReducer.filter,
}
);

const mapDispatchToProps = {
  removeBook,
  changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
