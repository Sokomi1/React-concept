import React from 'react';
import logo from '../images/UnAcher.png';
import './Header.css';

export default function Header() {
  return (
    <header className="header-container">
      <img src={logo} alt="Archer" className="logo" />
      <a href="/">Home</a>
    </header>
  );
}
