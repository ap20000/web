import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#download">Download</a></li>
        <li><a href="#career">Career</a></li>
        <li><a href="#pricing">Pricing</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
