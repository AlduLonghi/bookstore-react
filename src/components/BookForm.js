import { Component } from 'react';

class BookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookTitle: '',
      bookCategory: '',
    };
  }

  render() {
    const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <form>
        <div>
          <label htmlFor="title">
            Title of your book:
            <input type="text" id="book" name="book" />
          </label>
        </div>
        <div>
          <label htmlFor="booksCategory">
            Choose a category:
            <select name="category" id="category">
              {bookCategories.map(categ => <option key={categ} value={categ}>{categ}</option>)}
            </select>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default BookForm;
