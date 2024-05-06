import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword ] = useState()
    const [message, setMessage] = useState()
    const navigate = useNavigate() 
    
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, password})
        .then(result => {
            console.log(result);
            if(result.data === "Success"){
                setMessage("¡Inicio de sesión exitoso!"); // Mensaje de éxito
                navigate('/home');
            } else {
                setMessage("¡Inicio de sesión fallido! Verifica tu Correo o Contraseña."); // Mensaje de fallo
            }
        })
        .catch(err=> console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ 
            background: 'linear-gradient(to bottom, gray, black)',  minHeight: '100vh', minWidth:'100vw'
            
          }}>
            <div className="bg-white p-5 rounded w-10  text-center">
            <img src="./img/usuario.png" alt="Logo" className="img-fluid mb-4" style={{maxWidth: "150px", maxHeight: "150px"}}/>
                <h2 className="text-center">INICIO DE SECCION</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Correo Electronico</strong>
                        </label>
                        <input
                          type="email"
                          placeholder="Ingresa tu Correo electronico"
                          autoComplete="off"
                          name="email"
                          className="form-control rounded-0"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
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
                    <button type="submit" className="w-10 rounded-10" style={{ 
                    fontSize: '1.2rem',
                    padding: '1rem 2.5rem',
                    border: 'none',
                    outline: 'none',
                    borderRadius: '0.0rem',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    backgroundColor: 'rgb(14, 14, 26)',
                    color: 'rgb(234, 234, 234)',
                    fontWeight: '700',
                    transition: '0.6s',
                    boxShadow: '0px 0px 10px #1f4c65',
                    WebkitBoxReflect: 'below 10px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.0))',
                    }}>
                    Iniciar Sesión
                    </button>

                    {message && <p>{message}</p>} {/* Mostrar el mensaje */}
                    <p>¿No tienes cuenta?</p>
                </form>
                <Link to="/register" className="btn btn-default border w-50 text-decoration-none" style={{ 
  backgroundColor: 'black',
  color: 'ghostwhite',
  borderRadius: '100',
}}>
  Crear Cuenta
</Link>

            </div>
        </div>
    );
}


export default Login
