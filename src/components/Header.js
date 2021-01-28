import user from '../assets/user.svg';

const Header = () => (
  <header className="d-flex">
    <div className="nav-content-container d-flex">
      <nav className="nav-logo-and-links d-flex">
        <h1>Bookstore CMS</h1>
        <p>books</p>
        <p className="not-selected-link">categories</p>
      </nav>
      <button type="button"><img src={user} className="user-svg" alt="user-logo" /></button>
    </div>
  </header>
);

export default Header;
