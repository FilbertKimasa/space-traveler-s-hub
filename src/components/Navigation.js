import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Navigation.css';

function Navigation() {
  return (
    <header className="panel-bg">
      <div>
        <img src={logo} alt="logo" className="logo" />
        <span className="app-name">Space Traveler&lsquo;s Hub</span>
      </div>

      <nav>
        <ul>
        <li>
          <Link to="/Rocket" className="rocket-link">Rocket</Link>
        </li>
        <li>
          <Link to="/mission" className="mission-link">Mission</Link>
        </li>
        <li>
          <Link to="/my-profile" className="profile-link">My profile</Link>
        </li>
      </ul>
      </nav>
    </header>
  );
}

export default Navigation;
