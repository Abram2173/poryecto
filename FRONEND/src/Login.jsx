import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simulamos la autenticación con credenciales fijas
        if ((email === 'Organizador@rutas.com' && password === 'Org202010') || 
            (email === 'JUEZ@carrera.com' && password === 'juez2020')) {
                if (email === 'Organizador@rutas.com') {
                    navigate('/Organizador');
                } else if (email === 'JUEZ@carrera.com') {
                    navigate('/Juez');
                }
        } else {
            try {
                const response = await axios.post('http://localhost:3001/login', { email, password });
                console.log(response);
                
                if (response.data.message === "Success") {
                    setMessage("¡Inicio de sesión exitoso!");
                    const userId = response.data.userId; // Asegúrate de que el backend devuelva el userId
                    navigate('/home', { state: { userId: response.data.userId } });
                } else {
                    setMessage("¡Inicio de sesión fallido! Verifica tu Correo o Contraseña.");
                }
            } catch (err) {
                console.error('Error al iniciar sesión:', err);
                setMessage("¡Ocurrió un error al iniciar sesión! Por favor, inténtalo de nuevo.");
            }
        }
    };

    const handleGoogleLogin = () => {
        // Aquí deberías implementar el flujo de inicio de sesión con Google
    };

    const handleFacebookLogin = () => {
        // Aquí deberías implementar el flujo de inicio de sesión con Facebook
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ 
            backgroundImage: 'url(./img/loginFO.jpg)', backgroundSize: 'cover', minHeight: '100vh', minWidth: '100vw'
        }}>
            <div className="p-5 rounded text-center" style={{ backgroundColor: 'transparent', border: '0.3px solid #000', borderRadius: '20px', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 10px, rgba(0, 0, 0, 0.5) 0px 2px 25px' }}>
                <img src="./img/usuario.png" alt="Logo" className="img-fluid mb-4" style={{ maxWidth: "110px", maxHeight: "100px" }} />
                <h1 className="text-center" style={{ color: '#ffffff', fontSize: '2rem', fontWeight: 'bold' }}>INICIO DE SESIÓN</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: 'bold' }}>
                            <strong>Correo Electrónico</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Ingresa tu Correo electrónico"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: 'bold' }}>
                            <strong>Contraseña</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Ingresa tu Contraseña"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit" // Asegúrate de que el botón sea del tipo submit
                        className="text-zinc-700 hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700"
                        style={{
                            fontSize: '1.2rem',
                            padding: '1rem 2.5rem',
                            border: 'none',
                            outline: 'none',
                            borderRadius: '0.0rem',
                            cursor: 'pointer',
                            textTransform: 'uppercase',
                            fontWeight: '700',
                            transition: '0.6s',
                            WebkitBoxReflect: 'below 10px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.0))',
                        }}
                    >
                        Iniciar Sesión
                    </button>

                    {message && <p style={{ color: message.includes('fallido') ? '#ffffff' : 'inherit' }}>{message}</p>} {/* Mostrar el mensaje */}
                    <p style={{ color: '#ffffff', fontSize: '0.899rem', fontWeight: 'bold' }}>¿Olvidaste tu contraseña? <Link to="/password-reset-request">Restablecer Contraseña</Link></p>
                </form>
                <div>
                    <button onClick={handleGoogleLogin} className="btn btn-default border w-50 text-decoration-none" style={{
                        backgroundColor: 'white',
                        color: 'black',
                        borderRadius: '90px',
                        marginTop: '20px',
                    }}>
                        <img src="./img/google.png" alt="Google Icon" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                        Iniciar Google
                    </button>
                    <button onClick={handleFacebookLogin} className="btn btn-default border w-50 text-decoration-none" style={{
                        backgroundColor: 'blue',
                        color: 'white',
                        borderRadius: '90px',
                        marginTop: '20px',
                    }}>
                        <img src="./img/facebook2.png" alt="Facebook Icon" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                        Iniciar Facebook
                    </button>
                </div>
                <Link to="/register" className="btn btn-default border w-50 text-decoration-none" style={{
                    backgroundColor: 'black',
                    color: 'ghostwhite',
                    borderRadius: '100',
                    marginTop: '10px',
                }}>
                    Crear Cuenta
                </Link>
            </div>
        </div>
    );
}

export default Login;
