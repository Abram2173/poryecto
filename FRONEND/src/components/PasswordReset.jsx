// PasswordReset.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PasswordReset() {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3001/password-reset/${token}`)
      .then(result => {
        console.log(result);
        setMessage("Ingrese su nueva contraseña.");
      })
      .catch(err => console.log(err));
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001/password-reset/${token}`, { password })
      .then(result => {
        console.log(result);
        setMessage("¡Tu contraseña ha sido restablecida con éxito!");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Restablecer Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="password">Nueva Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Restablecer Contraseña</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default PasswordReset;
