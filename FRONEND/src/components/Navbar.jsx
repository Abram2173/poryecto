import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BurguerButton from './BurguerButton';

function Navbar({ userId }) {
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        // cuando está true lo pasa a false y viceversa
        setClicked(!clicked);
    };

    const handleLogout = () => {
        // Aquí puedes agregar la lógica de cierre de sesión, como eliminar el token o limpiar el estado del usuario
        // Por ejemplo, eliminar un token de localStorage
        localStorage.removeItem('authToken');
        
        // Redirigir a la página de inicio de sesión
        navigate('/');
    };

    return (
        <>
            <NavContainer>
                <img src="./img/Logotipo.png" alt="Logotipo" width="100" height="50" />
                <h2>Carrera de <span>Ciclismo</span></h2>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <a onClick={handleClick} href="#h">Inscripción</a>
                    <a onClick={handleClick} href="#h">Organizador</a>
                    {userId && (
                        <Link to={`/perfil/${userId}`} onClick={handleClick}>Perfil</Link>
                    )}
                    {userId && (
                        <a onClick={handleLogout} style={{ cursor: 'pointer' }}>Cerrar Sesión</a>
                    )}
                </div>
                <BurguerButton clicked={clicked} handleClick={handleClick} />
            </NavContainer>
        </>
    );
}

export default Navbar;

const NavContainer = styled.nav`
  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  padding: 0.4rem;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    a {
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: blue;
    }
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
