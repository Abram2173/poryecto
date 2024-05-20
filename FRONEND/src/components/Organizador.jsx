import React, { useState } from 'react';

function Organizador() {
  const [nombre, setNombre] = useState("");
  const [redesSociales, setRedesSociales] = useState([]);
  const [sitioWeb, setSitioWeb] = useState("");
  const [fotoPerfil, setFotoPerfil] = useState(null); // Estado para almacenar la foto de perfil

  const handleAgregarRedSocial = () => {
    setRedesSociales([...redesSociales, { nombre: '', enlace: '' }]);
  };

  const handleRedSocialChange = (index, event) => {
    const { name, value } = event.target;
    const updatedRedesSociales = [...redesSociales];
    updatedRedesSociales[index][name] = value;
    setRedesSociales(updatedRedesSociales);
  };

  const handleGuardar = () => {
    // Aquí puedes realizar alguna acción para guardar los datos, incluida la foto de perfil
    console.log("Nombre:", nombre);
    console.log("Redes Sociales:", redesSociales);
    console.log("Foto de perfil:", fotoPerfil);
  };

  const handleFotoPerfilChange = (event) => {
    const foto = event.target.files[0]; // Obtener el archivo de la foto de perfil
    setFotoPerfil(foto); // Almacenar la foto de perfil en el estado
  };

  return (
    <div className="organizador-profile" style={{ minHeight: '100vh', backgroundColor: '#000000', padding: '20px', color: '#ffffff' }}>
      <h1>Perfil del Organizador</h1>
      <label>
        Foto de Perfil:
        <input type="file" onChange={handleFotoPerfilChange} accept="image/*" />
      </label>
      <br />
      <label>
        Nombre del Organizador:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <br />
      <br />
      <div>
        <h2>Redes Sociales:</h2>
        {redesSociales.map((redSocial, index) => (
          <div key={index}>
            <label>
              Nombre:
              <input type="text" name="nombre" value={redSocial.nombre} onChange={(e) => handleRedSocialChange(index, e)} />
            </label>
            <label>
              Enlace:
              <input type="text" name="enlace" value={redSocial.enlace} onChange={(e) => handleRedSocialChange(index, e)} />
            </label>
          </div>
        ))}
        <button onClick={handleAgregarRedSocial}>Agregar Red Social</button>
      </div>
      <br />
      <button style={{ backgroundColor: 'blue', color: 'white' }} onClick={handleGuardar}>Guardar</button>
    </div>
  );
}

export default Organizador;
