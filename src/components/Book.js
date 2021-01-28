import PropTypes from 'prop-types';

const Book = props => {
  const {
    bookId, bookTitle, bookCategory, onClick,
  } = props;

  return (
    <div className="book-description d-flex">
      <div className="book-main-properties">
        <p>{bookCategory}</p>
        <h2>{bookTitle}</h2>
        <p>Author name</p>
        <div className="book-options d-flex">
          <button type="button">Comments</button>
          <button type="button" onClick={() => onClick(bookId)}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="completion-container d-flex">
        <div className="graphic-container">
          <div className="circle-1" />
          <div className="circle-2" />
        </div>
        <div>
          <p>75%</p>
          <p>completed</p>
        </div>
      </div>
      <div />
    </div>
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
