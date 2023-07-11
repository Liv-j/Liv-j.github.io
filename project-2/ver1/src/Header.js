import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
     
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/destinations">Destinations</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ships">Ships</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/voyages">Voyages</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reserve">Reserve a Room</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
