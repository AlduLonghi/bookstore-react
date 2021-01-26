import { Component } from 'react';

class BookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <form>
        <div>
          <label htmlFor="title">
            Title of your book:
            <input type="text" id="book" name="book" onChange={this.handleChange}/>
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
