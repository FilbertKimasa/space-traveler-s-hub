import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Header.css';

function Header() {
  return (
    <header className="panel-bg">
      <div className="head">
        <img src={logo} alt="logo" className="logo" />
        <span className="app-name">Space Traveler&lsquo;s Hub</span>
      </div>

      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/Rocket" className="rocket-link">
              Rocket
            </Link>
          </li>
          <li>
            <Link to="/mission" className="mission-link">
              Mission
            </Link>
          </li>
          <li>
            <Link to="/my-profile" className="profile-link">
              My profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
