// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, [darkMode]);

  return (
    <header className="navbar">
      <div className="navbar__logo">
        🐾 DogApp
      </div>
      <button className="darkmode-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️' : '🌙'}
      </button>
    </header>
  );
};

export default Navbar;
