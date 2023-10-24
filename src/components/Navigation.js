import React from 'react';

import logo from '../assets/logo.png';

function Navigation() {
  return (
    <header className="panel-bg">
      <div>
        <img src={logo} alt="logo" />
        <span>Space Traveler&lsquo;s Hub</span>
      </div>

      <nav />
    </header>
  );
}

export default Navigation;
