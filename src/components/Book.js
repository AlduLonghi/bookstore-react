import PropTypes from 'prop-types';

const Book = props => {
  const {
    bookId, bookTitle, bookCategory, onClick,
  } = props;

  return (
    <tr>
      <td>{bookId}</td>
      <td>{bookTitle}</td>
      <td>{bookCategory}</td>
      <td><button type="button" onClick={() => onClick(bookId)}>Delete</button></td>
    </tr>
  );
};

Book.propTypes = {
  bookId: PropTypes.number,
  bookTitle: PropTypes.string,
  bookCategory: PropTypes.string,
  onClick: PropTypes.func,
};

Book.defaultProps = {
  bookId: null,
  bookTitle: null,
  bookCategory: null,
  onClick: null,
};

export default Book;
