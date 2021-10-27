import '../styles/navbar.css';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h1 className="main-logo">M-M</h1>
        <ul className="nav-elements">
          <li>Home</li>
          <hr width="1" size="30" />
          <li>Calculator</li>
          <hr width="1" size="30" />
          <li>Quote</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
