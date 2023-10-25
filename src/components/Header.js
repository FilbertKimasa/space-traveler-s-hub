import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Header.css';

function Header() {
  return (
    <header className="display-flex">
      <div className="head display-flex">
        <img src={logo} alt="logo" className="logo" />
        <span className="app-name">Space Traveler&lsquo;s Hub</span>
      </div>

      <nav>
        <ul className="nav-list display-flex">
          <li>
            <NavLink
              to="/Rocket"
              className="rocket-link"
              style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' : 'none',
              })}
            >
              Rocket
            </NavLink>
          </li>
          <li>
            <NavLink to="/mission" className="mission-link">
              Mission
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-profile"
              className="profile-link"
              style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' : 'none',
              })}
            >
              My profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
