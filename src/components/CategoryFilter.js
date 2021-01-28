import PropTypes from 'prop-types';
import '../styles/index.scss';

const CategoryFilter = ({ onChange }) => {
  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div className="category-filter-cont d-flex">
      <select name="categoryFilter" id="categoryFilter" className="category-filter" onChange={onChange}>
        <option value="All">All</option>
        {bookCategories.map(categ => <option key={`filter-${categ}`} value={categ}>{categ}</option>)}
      </select>
    </div>
  );
};

CategoryFilter.defaultProps = {
  onChange: null,
};

CategoryFilter.propTypes = {
  onChange: PropTypes.func,
};

export default CategoryFilter;
