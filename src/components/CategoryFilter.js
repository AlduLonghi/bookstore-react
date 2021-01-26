import PropTypes from 'prop-types';

const CategoryFilter = ({ onChange }) => {
  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <select name="categoryFilter" id="categoryFilter" onChange={onChange}>
      <option value="All">All</option>
      {bookCategories.map(categ => <option key={`filter-${categ}`} value={categ}>{categ}</option>)}
    </select>
  );
};

CategoryFilter.defaultProps = {
  onChange: null,
};

CategoryFilter.propTypes = {
  onChange: PropTypes.func,
};

export default CategoryFilter;
