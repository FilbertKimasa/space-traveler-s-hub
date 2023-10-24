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

      <nav />
    </header>
  );
}

export default Navigation;
