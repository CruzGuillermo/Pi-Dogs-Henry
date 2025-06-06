import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getDogName } from '../../Redux/Actions.js';
import './Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();

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

  // En vez de return null acá, devolvemos el JSX solo si la ruta es /home
  return (
    <>
      {location.pathname === '/home' && (
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

         
        </header>
      )}
    </>
  );
};

export default Navbar;
