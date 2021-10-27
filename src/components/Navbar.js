import '../styles/navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h1 className="main-logo">Math Magicians</h1>
        <ul className="nav-elements">
          <li><NavLink className="links" activeClassName="activelinks" exact to="/">Home</NavLink></li>
          <hr width="1" size="30" />
          <li><NavLink className="links" activeClassName="activelinks" to="/calculator">Calculator</NavLink></li>
          <hr width="1" size="30" />
          <li><NavLink className="links" activeClassName="activelinks" to="/quote">Quote</NavLink></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
