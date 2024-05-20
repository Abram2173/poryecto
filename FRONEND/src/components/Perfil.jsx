import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const { userId } = useParams();
    const [activeSection, setActiveSection] = useState('general');
    const [formData, setFormData] = useState({
        category: '',
        team: '',
        street: '',
        interiorNumber: '',
        exteriorNumber: '',
        neighborhood: '',
        postalCode: '',
        city: '',
        state: '',
        raceNumber: '',
        birthDate: '',
        gender: 'male'
    });

    useEffect(() => {
        axios.get(`http://localhost:3001/user/${userId}`)
            .then(response => setUser(response.data))
            .catch(error => console.error("Error fetching user data:", error));
    }, [userId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Agregar userId a los datos del formulario
        const formDataWithUserId = { ...formData, userId };
        axios.post(`http://localhost:3001/user/${userId}/corredor`, formDataWithUserId)
            .then(response => console.log("Datos guardados:", response.data))
            .catch(error => console.error("Error saving user data:", error));
    };

    const renderSection = () => {
        if (!user) return <div>Loading...</div>;

        switch (activeSection) {
            case 'general':
                return (
                    <div>
                        <h2>Información General</h2>
                        <p>Nombre: {user.name}</p>
                        <p>Correo electrónico: {user.email}</p>
                    </div>
                );
            case 'corredor':
                return (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <h2>Datos del Corredor</h2>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
                            <label htmlFor="category">Categoría:</label>
                            <input type="text" id="category" name="category" value={formData.category} onChange={handleInputChange} />

                            <label htmlFor="team">Equipo:</label>
                            <input type="text" id="team" name="team" value={formData.team} onChange={handleInputChange} />

                            <label htmlFor="street">Calle:</label>
                            <input type="text" id="street" name="street" value={formData.street} onChange={handleInputChange} />

                            <label htmlFor="interiorNumber">Número Interior:</label>
                            <input type="text" id="interiorNumber" name="interiorNumber" value={formData.interiorNumber} onChange={handleInputChange} />

                            <label htmlFor="exteriorNumber">Número Exterior:</label>
                            <input type="text" id="exteriorNumber" name="exteriorNumber" value={formData.exteriorNumber} onChange={handleInputChange} />

                            <label htmlFor="neighborhood">Colonia:</label>
                            <input type="text" id="neighborhood" name="neighborhood" value={formData.neighborhood} onChange={handleInputChange} />

                            <label htmlFor="postalCode">Código Postal:</label>
                            <input type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleInputChange} />

                            <label htmlFor="city">Ciudad:</label>
                            <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} />

                            <label htmlFor="state">Entidad:</label>
                            <input type="text" id="state" name="state" value={formData.state} onChange={handleInputChange} />

                            <label htmlFor="raceNumber">Número de Carrera:</label>
                            <input type="text" id="raceNumber" name="raceNumber" value={formData.raceNumber} onChange={handleInputChange} />

                            <label htmlFor="birthDate">Fecha de Nacimiento:</label>
                            <input type="date" id="birthDate" name="birthDate" value={formData.birthDate} onChange={handleInputChange} />

                            <label htmlFor="gender">Género:</label>
                            <select id="gender" name="gender" value={formData.gender} onChange={handleInputChange}>
                                <option value="male">Masculino</option>
                                <option value="female">Femenino</option>
                                <option value="other">Otro</option>
                            </select>

                            <button type="submit" style={{ marginTop: '20px', alignSelf: 'center', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Guardar</button>
                        </form>
                    </div>
                );
            case 'contacts':
                return (
                    <div>
                        <h2>Contactos</h2>
                        <p>Teléfono: {user.phone}</p>
                        <p>Dirección: {user.address}</p>
                    </div>
                );
            case 'security':
                return (
                    <div>
                        <h2>Seguridad</h2>
                        <p>Cambiar contraseña</p>
                        <p>Autenticación de dos factores: Activada</p>
                    </div>
                );
            case 'settings':
                return (
                    <div>
                        <h2>Ajustes</h2>
                        <p>Idioma: {user.language}</p>
                        <p>Notificaciones: {user.notifications}</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="user-profile" style={{ minHeight: '100vh', backgroundColor: '#000000', padding: '20px', color: '#ffffff' }}>
            <nav>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li style={{ display: 'inline', marginRight: '20px', cursor: 'pointer', color: '#007bff' }} onClick={() => setActiveSection('general')}>Información General</li>
                    <li style={{ display: 'inline', marginRight: '20px', cursor: 'pointer', color: '#007bff' }} onClick={() => setActiveSection('corredor')}>Datos del Corredor</li>
                    <li style={{ display: 'inline', marginRight: '20px', cursor: 'pointer', color: '#007bff' }} onClick={() => setActiveSection('contacts')}>Contactos</li>
                    <li style={{ display: 'inline', marginRight: '20px', cursor: 'pointer', color: '#007bff' }} onClick={() => setActiveSection('security')}>Seguridad</li>
                    <li style={{ display: 'inline', marginRight: '20px', cursor: 'pointer', color: '#007bff' }} onClick={() => setActiveSection('settings')}>Ajustes</li>
                </ul>
            </nav>
            <section>
                {renderSection()}
            </section>
        </div>
    );
};

export default UserProfile;
