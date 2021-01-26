import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { createBook } from '../redux/actions';

const BookForm = ({ createBook }) => {
  const [book, setBook] = useState({ title: '', category: '' });

  const handleChange = e => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const newBook = { ...book, id: Math.random() };
    createBook(newBook);
    setBook({ title: '', category: '' });
  };

  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <form>
      <div>
        <label htmlFor="title">
          Title of your book:
          <input type="text" id="book" name="title" onChange={handleChange} />
        </label>
      </div>
      <div>
        <label htmlFor="booksCategory">
          Choose a category:
          <select name="category" id="category" onChange={handleChange}>
            <option disabled selected value>Categories:</option>
            {bookCategories.map(categ => <option key={categ} value={categ}>{categ}</option>)}
          </select>
        </label>
      </div>
      <button type="button" onClick={handleSubmit}>Submit</button>
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
