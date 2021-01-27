import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { createBook } from '../redux/actions';

const BookForm = ({ createBook }) => {
  const [book, setBook] = useState({ title: '', category: 'invalidOption' });
  const [inputValidity, setInputValidity] = useState({
    titleValidity: false,
    categoryValidity: false,
    invalidSubmition: false,
  });

  const handleChange = (e, inputType) => {
    if (inputType === 'title' && e.target.value.length > 5) {
      setInputValidity({ ...inputValidity, titleValidity: true });
      setBook({ ...book, [e.target.name]: e.target.value });
    } else if (inputType === 'category' && e.target.value !== 'invalidOption') {
      setInputValidity({ ...inputValidity, categoryValidity: true });
      setBook({ ...book, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = () => {
    if (inputValidity.titleValidity === true && inputValidity.categoryValidity === true) {
      const newBook = { ...book, id: Math.random() };
      createBook(newBook);
      setBook({ title: '', category: '' });
    } else {
      setInputValidity({ ...inputValidity, invalidSubmition: true });
    }
  };

  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <form>
      <div>
        <label htmlFor="title">
          Title of your book:
          <input type="text" id="book" name="title" onChange={e => handleChange(e, 'title')} />
          {inputValidity.titleValidity === false && inputValidity.invalidSubmition === true
             && <span>Title should be at least 5 characters long</span>}
        </label>
      </div>
      <div>
        <label htmlFor="booksCategory">
          Choose a category:
          <select name="category" id="category" onChange={e => handleChange(e, 'category')}>
            <option value="invalidOption">Categories:</option>
            {bookCategories.map(categ => <option key={categ} value={categ}>{categ}</option>)}
          </select>
          {inputValidity.categoryValidity === false && inputValidity.invalidSubmition === true
             && <span>Category should not be empty</span>}
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
