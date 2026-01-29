import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <NavLink to="/" className="logo">
          {/* PLACEHOLDER: Add logo image here */}
          <span className="logo-text">AI Responsibility</span>
        </NavLink>

        <nav className="main-nav">
          <NavLink
            to="/learning"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Learning
          </NavLink>
          <NavLink
            to="/quiz"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Quiz
          </NavLink>
          <NavLink
            to="/learn-more"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Learn More
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
