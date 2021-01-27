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
    } else {
      setInvalidSubmition(true);
    }
  };

  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <form>
      <div>
        <label htmlFor="title">
          Title of your book:
          <input type="text" id="book" name="title" onChange={e => handleChange(e, 'title')} />
          {invalidSubmition
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
          {invalidSubmition
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
