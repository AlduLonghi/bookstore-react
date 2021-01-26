const CategoryFilter = () => {
  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <select name="categoryFilter" id="categoryFilter" onChange={handleChange}>
      <option value="All">All</option>
      {bookCategories.map(categ => <option key={`filter-${categ}`} value={categ}>{categ}</option>)}
    </select>
  );
};

export default CategoryFilter;
