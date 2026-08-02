import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  // Estado para manejar la visibilidad del menú
  const [menuActive, setMenuActive] = useState(false);

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <button className="navbar-toggle" onClick={toggleMenu}>
        <div className={`navbar-toggle-icon ${menuActive ? 'active' : ''}`} />
      </button>
      <ul className={`${menuActive ? 'active' : ''}`}>
        <li><a href="#hero">Inicio</a></li>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#technologies">Tecnologías</a></li>
        <li><a href="#formation">Formación</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
