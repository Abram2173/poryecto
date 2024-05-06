import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Bienvenido al Mundo del Ciclismo</h1>
            <p>Descubre el apasionante mundo del ciclismo con nosotros.</p>

            <h2>Tipos de Ciclismo</h2>
            <ul>
    <li>
        
        <img src="./img/img1.jpg" alt="Ciclismo de Carretera" style={{ width: '500px', height: '450px' }} />
    </li>
    <li>
        <strong>Ciclismo de Montaña:</strong> Aventúrate en senderos desafiantes y naturaleza salvaje.
        <img src="ruta-a-imagen-montana.jpg" alt="Ciclismo de Montaña" style={{ width: '200px', height: '150px' }} />
    </li>
    {/* Otros tipos de ciclismo */}
</ul>


            <h2>Consejos para Ciclistas</h2>
            <p>Mejora tu rendimiento y seguridad con nuestros consejos:</p>
            <ul>
                <li>Cómo ajustar correctamente tu bicicleta.</li>
                <li>Técnicas de pedaleo eficientes.</li>
                <li>Consejos para mantener tu bicicleta en óptimas condiciones.</li>
                {/* Otros consejos */}
            </ul>

            <h2>Rutas de Ciclismo</h2>
            <p>Explora nuestras rutas recomendadas:</p>
            <ul>
                <li>Ruta 1: Ciclovía del Río - 20km de ciclismo urbano.</li>
                <li>Ruta 2: Circuito de Montaña - 15km de desafíos naturales.</li>
                {/* Otras rutas */}
            </ul>

            <h2>Eventos y Competiciones</h2>
            <p>No te pierdas los próximos eventos:</p>
            <ul>
                <li>Gran Fondo de Ciclismo - 25 de mayo, inscripciones abiertas.</li>
                <li>Carrera de Montaña Extrema - 10 de junio, plazas limitadas.</li>
                {/* Otros eventos */}
            </ul>

            <h2>Equipamiento Recomendado</h2>
            <p>Descubre el equipamiento esencial para tus aventuras en bicicleta:</p>
            <ul>
                <li>Bicicletas de Carretera: <Link to="/tienda/bicicletas">Ver modelos</Link></li>
                <li>Cascos de Ciclismo: <Link to="/tienda/cascos">Ver selección</Link></li>
                {/* Otros productos y enlaces */}
            </ul>

            <h2>Testimonios y Experiencias</h2>
            <p>Descubre las experiencias de otros ciclistas:</p>
            <blockquote>
                <p>"Gracias a los consejos de este sitio, logré completar mi primera carrera de montaña. ¡Increíble experiencia!" - Juan Pérez</p>
            </blockquote>
            {/* Otros testimonios */}

        </div>
    );
}

export default Home;
