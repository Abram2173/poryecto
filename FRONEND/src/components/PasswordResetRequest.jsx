// PasswordResetRequest.js
import React, { useState } from 'react';
import axios from 'axios';

function PasswordResetRequest() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/password-reset-request', { email })
      .then(result => {
        console.log(result);
        setMessage("Se ha enviado un correo electrónico con instrucciones para restablecer tu contraseña.");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Solicitud de Restablecimiento de Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default PasswordResetRequest;
