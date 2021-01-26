import { connect } from 'react-redux';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { createBook } from '../redux/actions';

class BookForm extends Component {
  constructor({ createBook }) {
    super(createBook);

    this.state = {};
    this.createBook = createBook;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    this.setState(prevState => {
      this.createBook({ ...prevState, id: Math.random() });
      return null;
    });
  }

  render() {
    const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    console.log(this.state);
    return (
      <form>
        <div>
          <label htmlFor="title">
            Title of your book:
            <input type="text" id="book" name="bookTitle" onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="booksCategory">
            Choose a category:
            <select name="category" id="category" onChange={this.handleChange}>
              {bookCategories.map(categ => <option key={categ} value={categ}>{categ}</option>)}
            </select>
          </label>
        </div>
        <button type="button" onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

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
