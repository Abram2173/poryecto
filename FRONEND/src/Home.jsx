import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos/Home.css';

function Home() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <h2>Logo</h2>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Acerca de</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
          <li>
            <Link to="/login">Iniciar Sesión</Link>
          </li>

        </ul>
      </nav>
      <h1>Hola gente</h1>
    </div>
  );
}

export default Home;
