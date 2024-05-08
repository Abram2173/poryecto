import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";



function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword ] = useState()

    const navigate = useNavigate() 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post("http://localhost:3001/register", {
            name,
            email,
            password,
          })
          .then((result) => {
            console.log(result);
            navigate("/login");
          })
          .catch((err) => console.log(err));
      };
    
    return (
        <div className="bg-info p-5 rounded w-10  text-center" style={{ backgroundImage: 'url(./img/regist.jpg)', backgroundSize: 'cover' }}>
        <div className="d-flex justify-content-center align-items-center vh-100" >
            <div className="col-md-4 vh-50">
                    <div className="p-3 rounded 10" 
style={{ backgroundColor: 'transparent', border: '0.3px solid #000', borderRadius: '20px', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 10px 0px, rgba(0, 0, 0, 0.5) 0px 2px 25px 0px' }}>                        <div className="text-center mb-4">
                            <img src="../img/cuenta.png" alt="Descripción de la imagen" className="img-fluid" style={{ maxWidth: '120px' }} />
                        </div>
                        <h1 style={{ color: '#808080', fontWeight: 'bold' }}>Crear Cuenta Nueva</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 ">
                                <label htmlFor="email" 
                                style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 'bold' }}>
                                    <strong>Nombre</strong>
                                </label>
                                <input
                                  type="text"
                                  placeholder="Introducir el Nombre"
                                  autoComplete="off"
                                  name="email"
                                  className="form-control rounded-0"
                                  onChange={(e) => setName(e.target.value)}
                                />
                            </div>                   
                            <div className="mb-3">
                                <label htmlFor="email" 
                                style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 'bold' }}>
                                    <strong>Correo electrónico</strong>
                                </label>
                                <input
                                  type="email"
                                  placeholder="Introducir el Correo"
                                  autoComplete="off"
                                  name="email"
                                  className="form-control rounded-0"
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" 
                                style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 'bold' }}>
                                    <strong>Contraseña</strong>
                                </label>
                                <input
                                  type="password"
                                  placeholder="Introducir la contraseña"
                                  name="password"
                                  className="form-control rounded-0"
                                  onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-success w-50 rounded-pill"
                            >
                                Registrar
                            </button>
                            <p className="mt-3" style={{ color: '#007bff', fontWeight: 'bold' }}>¿Ya tienes una cuenta? <Link to="/login">Acceso</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
