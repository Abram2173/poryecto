import React, { useState } from 'react';

const JuezPerfil = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    curp: '',
    fechaNacimiento: '',
    sexo: '',
    entidadNacimiento: '',
    nacionalidad: '',
    descripcionGeneral: '',
    sentenciasPublicaciones: '',
    enlacesInteres: '',
    contacto: {
      email: '',
      telefono: '',
      direccion: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleContactoChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      contacto: {
        ...formData.contacto,
        [name]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del juez:', formData);
    // Aquí puedes enviar los datos a un servidor o procesarlos como necesites
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000000', padding: '20px', color: '#ffffff' }}>
      <h1 style={styles.title}>Perfil del Juez</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.field}>
          <label>Nombre Completo:</label>
          <input
            type="text"
            name="nombreCompleto"
            value={formData.nombreCompleto}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.field}>
          <label>CURP:</label>
          <input
            type="text"
            name="curp"
            value={formData.curp}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.field}>
          <label>Fecha de Nacimiento:</label>
          <input
            type="date"
            name="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.field}>
          <label>Sexo:</label>
          <select
            name="sexo"
            value={formData.sexo}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">Selecciona</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <div style={styles.field}>
          <label>Entidad de Nacimiento:</label>
          <input
            type="text"
            name="entidadNacimiento"
            value={formData.entidadNacimiento}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.field}>
          <label>Nacionalidad:</label>
          <input
            type="text"
            name="nacionalidad"
            value={formData.nacionalidad}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.field}>
          <label>Descripción General:</label>
          <textarea
            name="descripcionGeneral"
            value={formData.descripcionGeneral}
            onChange={handleChange}
            style={styles.textarea}
          />
        </div>
        <div style={styles.field}>
          <label>Sentencias y Publicaciones:</label>
          <textarea
            name="sentenciasPublicaciones"
            value={formData.sentenciasPublicaciones}
            onChange={handleChange}
            style={styles.textarea}
          />
        </div>
        <div style={styles.field}>
          <label>Enlaces de Interés:</label>
          <textarea
            name="enlacesInteres"
            value={formData.enlacesInteres}
            onChange={handleChange}
            style={styles.textarea}
          />
        </div>
        <h2>Contacto</h2>
        <div style={styles.field}>
          <label>Correo Electrónico:</label>
          <input
            type="email"
            name="email"
            value={formData.contacto.email}
            onChange={handleContactoChange}
            style={styles.input}
          />
        </div>
        <div style={styles.field}>
          <label>Teléfono de Oficina:</label>
          <input
            type="tel"
            name="telefono"
            value={formData.contacto.telefono}
            onChange={handleContactoChange}
            style={styles.input}
          />
        </div>
        <div style={styles.field}>
          <label>Dirección:</label>
          <textarea
            name="direccion"
            value={formData.contacto.direccion}
            onChange={handleContactoChange}
            style={styles.textarea}
          />
        </div>
        <button type="submit" style={styles.button}>Guardar Perfil</button>
      </form>
    </div>
  );
};

const styles = {
  title: {
    textAlign: 'center',
    color: '#ffffff',
  },
  form: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  field: {
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default JuezPerfil;
