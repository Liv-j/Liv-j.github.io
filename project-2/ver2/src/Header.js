import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

function Header() {
  return (
    <nav className="nav">
      <div className="col-md-8">
        <ul id="navbarNav" className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/destinations">Destinations</Link>
          </li>
          <li>
            <Link to="/ships">Ships</Link>
          </li>
          <li>
            <Link to="/voyages">Voyages</Link>
          </li>
          <li>
            <Link to="/reserve">Reserve<br />a<br />Room</Link>
          </li>
        </ul>
      </div>
      <div className="col-md-2">
        <Link to="/" className="logo-link">
          <img src="img/logo-nav.png" alt="Logo" className="logo-image" />
        </Link>
      </div>
    </nav>
  );
}

export default Header;
