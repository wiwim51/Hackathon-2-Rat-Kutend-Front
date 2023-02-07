import panier from "../assets/images/panier.png";
import logo from "../assets/images/logo.png";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-home">
      <nav className="header-nav">
        <Link to="/">
          <img src={logo} className="header-logo" alt="logo rat" />
        </Link>
        <ul>
          <li>
            <Link className="header-link" to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/catalogue">
              CATALOGUE
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/map">
              MAP
            </Link>
          </li>
        </ul>
        <div>
          <Link to="/panier">
            <img src={panier} className="header-panier" alt="panier achat" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
