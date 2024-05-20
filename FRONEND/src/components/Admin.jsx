import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simular carga de usuarios
    const fakeUsersData = [
      { id: 1, name: 'Organizador', email: 'Organizador@rutas.com', permissions: 'basic' },
      { id: 2, name: 'Usuario 2', email: 'usuario2@example.com', permissions: 'standard' },
      { id: 3, name: 'Usuario 3', email: 'usuario3@example.com', permissions: 'admin' }
    ];
    setUsers(fakeUsersData);
  }, []);

  const handlePermissionChange = (userId, newPermissions) => {
    // Simular actualización de permisos
    const updatedUsers = users.map(user =>
      user.id === userId ? { ...user, permissions: newPermissions } : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h2>Panel de Control de Administrador</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <div>
              <strong>Nombre:</strong> {user.name}
            </div>
            <div>
              <strong>Correo electrónico:</strong> {user.email}
            </div>
            <div>
              <strong>Permisos:</strong> 
              <select
                value={user.permissions}
                onChange={e => handlePermissionChange(user.id, e.target.value)}
              >
                <option value="basic">Básico</option>
                <option value="standard">Estándar</option>
                <option value="admin">Administrador</option>
              </select>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
