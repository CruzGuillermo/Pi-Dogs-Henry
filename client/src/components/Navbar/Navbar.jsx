import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getDogName } from '../../Redux/Actions.js';
import './Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      dispatch(getDogName(search.trim()));
      setSearch('');
    }
  };

  return (
    <header className="nav">
      <div className="nav__brand">🐾 DogApp</div>

      <form className="nav__search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      <Link to="/CreateDog" className="nav__link">Crear 🐶</Link>

      <button className="nav__theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️' : '🌙'}
      </button>
    </header>
  );
};

export default Navbar;
