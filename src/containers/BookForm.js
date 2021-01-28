import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { createBook } from '../redux/actions';

const BookForm = ({ createBook }) => {
  const [book, setBook] = useState({ title: '', category: 'invalidOption' });
  const [invalidSubmition, setInvalidSubmition] = useState(false);

  const handleChange = e => {
    if (e.target.value.length > 5 || e.target.value !== 'invalidOption') {
      setBook({ ...book, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = () => {
    if (book.title !== '' && book.category !== 'invalidOption') {
      const newBook = { ...book, id: Math.random() };
      createBook(newBook);
      setBook({ title: '', category: 'invalidOption' });
      setInvalidSubmition(false);
      document.getElementById('book-form').reset();
    } else {
      setInvalidSubmition(true);
    }
  };

  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <form id="book-form">
      <h3>Add a book</h3>
      <div className="d-flex input-container">
        <div className="input-text">
          <input type="text" id="book" name="title" placeholder="Book title" onChange={e => handleChange(e, 'title')} />
          {invalidSubmition
             && <span className="error-span">Title should be at least 5 characters long</span>}
        </div>
        <div className="input-select">
          <select name="category" id="category" onChange={e => handleChange(e, 'category')}>
            <option value="invalidOption">Category:</option>
            {bookCategories.map(categ => <option key={categ} value={categ}>{categ}</option>)}
          </select>
          {invalidSubmition
             && <span className="error-span">Category should not be empty</span>}
        </div>
        <button className="add-book-btn" type="button" onClick={handleSubmit}>add book</button>
      </div>
    </form>
  );
};

BookForm.defaultProps = {
  createBook: null,
};

BookForm.propTypes = {
  createBook: PropTypes.func,
};

const mapDispatchToProps = {
  createBook,
};

export default connect(null, mapDispatchToProps)(BookForm);
