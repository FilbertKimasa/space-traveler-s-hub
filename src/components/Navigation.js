import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png';

function Navigation() {
  return (
    <header className="panel-bg">
      <Link to="/">
        <img src="../assets/logo.png" alt="logo" />
      </Link>
      <nav />
    </header>
  );
}

export default Navigation;
