import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <table>
    <tr>
      <th>Book ID</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
    {books.map(book => (
      <Book
        key={book.title}
        bookId={book.id}
        bookTitle={book.title}
        bookCategory={book.category}
      />
    ))}
  </table>
);

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array),
};

BooksList.defaultProps = {
  books: [],
};

function mapStateToProps(state) {
  return {
    books: state.booksReducer,
  };
}

export default connect(mapStateToProps)(BooksList);
