import user from '../assets/user.svg';

const Nabvar = () => (
  <nav className="d-flex">
    <div className="nav-content-container d-flex">
      <div className="nav-logo-and-links d-flex">
        <h1>Bookstore CMS</h1>
        <p>books</p>
        <p className="not-selected-link">categories</p>
      </div>
      <button type="button"><img src={user} className="user-svg" alt="user-logo" /></button>
    </div>
  </nav>
);

export default Nabvar;
