import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'; // Importa el componente Navbar
import '../estilos/Home.css';

function Home() {
    const location = useLocation();
    const userId = location.state?.userId;

    return (
        <div>
            <Navbar userId={userId} /> {/* Pasar userId como prop a Navbar */}
            <div style={{ minHeight: '100vh', backgroundColor: '#808080', padding: '20px', color: '#ffffff' }}>
                {/* Tarjeta Grande */}
                <div style={{ backgroundColor: 'transparent', borderRadius: '20px', padding: '150px', marginBottom: '50px', backgroundImage: 'url("./img/fondoPr.jpg")', backgroundSize: '100%' }}>
                    <h2>Bienvenidos A CARRERA DE CICLISMOS</h2>
                    <p>Grandes ligas de Carreras de Ciclismo...</p>
                </div>
                
                {/* Tarjetas de Botón de Radio */}
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', padding: '20px', flex: '1', marginRight: '10px' }}>
                        <h3>Botón de Radio 1</h3>
                        <p>Contenido del botón de radio 1...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
