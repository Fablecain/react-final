import React from 'react';
import './header.css';
import Navigation from '../Navigation/Navigation'; // Import your Navigation component

function Header() {
  return (
    <header className="header">
      <h1>Cain's Portfolio</h1>
      <Navigation /> {/* Render your Navigation component here */}
    </header>
  );
}

export default Header;
