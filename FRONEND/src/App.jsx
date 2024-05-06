import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios'; // Importar Axios
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import './App.css';
let vacio = '';

// Establecer la URL base para Axios
axios.defaults.baseURL = 'http://localhost:5173/login';

function App() {
  const abrir_cerrar_menu = () =>{
    let menu_desplegable = document.getElementById('menu');
    let boton_cerrar = document.getElementById('x');
    menu_desplegable.classList.toggle('abrir_menu');
    boton_cerrar.classList.toggle('colocar_x');
  };
  return (
    <div>
                   <header>
              <div className="barras">
                 <button onClick= {abrir_cerrar_menu} className='boton_menu' id='x'></button>
             </div>
             <nav id='menu' className="desplegable">
                 <ul>
                     <li><a href={vacio}>Home</a></li>
                     <li><a href={vacio}>Galeria</a></li>
                     <li><a href={vacio}>Proyectos</a></li>
                     <li><a href={vacio}>Contactanos</a></li>
                 </ul>  
             </nav>
             </header>
    <Router>
      <div >
        <Routes>
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>
    </Router>
    </div>
  );

}

export default App;
