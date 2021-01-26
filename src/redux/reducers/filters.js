const CHANGE_FILTER = 'CHANGE_FILTER';

const filterReducer = (state, action) => {
  switch (action.payload) {
    case ('Action' || 'Biography' || 'History' || 'Horror' || 'Kids' || 'Learning' || 'Sci-Fi'):
      return {...state, filter: action.payload};
    default:
      return state.filter;
  }
};

export default filterReducer;
