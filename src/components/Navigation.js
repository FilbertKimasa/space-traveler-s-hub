import React from 'react';

import logo from '../assets/logo.png';

function Navigation() {
  return (
    <header className="panel-bg">
      <img src={logo} alt="logo" />

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
