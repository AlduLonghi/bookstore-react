const BookForm = () => {
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
        <label htmlFor="cars">
          Choose a category:
          <select name="category" id="category">
            {bookCategories.map(categ => <option value={categ}>{categ}</option>)}
          </select>
        </label>
      </div>
      <button type="submit" />
    </form>
  );
};

export default BookForm;
