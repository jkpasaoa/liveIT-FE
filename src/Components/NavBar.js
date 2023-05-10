import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <span>Live It</span>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <span>About</span>
            </Link>
          </li>
          {/* <h1>
        <Link to="/">Snacks</Link>
      </h1> */}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
