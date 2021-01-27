import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { changeFilter, removeBook } from '../redux/actions/index';
import CategoryFilter from '../components/CategoryFilter';
import '../styles/index.scss';

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
    <div className="books-container">
      <CategoryFilter onChange={handleFilterChange} />
      {displayedBooks().map(book => (
        <Book
          key={book.id}
          bookId={book.id}
          bookTitle={book.title}
          bookCategory={book.category}
          onClick={handleRemoveBook}
        />
      ))}
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array),
  removeBook: PropTypes.func,
  changeFilter: PropTypes.func,
  filter: PropTypes.string,
};

BooksList.defaultProps = {
  books: [],
  removeBook: null,
  changeFilter: null,
  filter: '',
};

const mapStateToProps = state => ({
  books: state.booksReducer,
  filter: state.filterReducer,
});

const mapDispatchToProps = {
  removeBook,
  changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
