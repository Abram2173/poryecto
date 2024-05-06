import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Signup() {
    const [name, setName] = useState()
    const [apellidoP, setApellidoP] = useState()
    const [apellidoM, setApellidoM] = useState()
    const [fechaNacimiento ,setFechaNacimiento] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword ] = useState()
    const [curp, setCurp] = useState()
    const navigate = useNavigate() 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Generar automáticamente el CURP antes de enviar el formulario
        const curpGenerado = generarCurp();
        axios
          .post("http://localhost:3001/register", {
            name,
            apellidoP,
            apellidoM,
            fechaNacimiento,
            email,
            password,
            curp: curpGenerado, // Enviar el CURP generado
          })
          .then((result) => {
            console.log(result);
            navigate("/login");
          })
          .catch((err) => console.log(err));
      };

      const generarCurp = () => {
        // Verifica que todos los campos necesarios estén completos
        if (name && apellidoP && apellidoM && fechaNacimiento) {
            // Lógica para generar el CURP
            // Por ejemplo, podrías concatenar las primeras letras del nombre y los apellidos, y la fecha de nacimiento para formar el CURP
            let primerApellido = apellidoP;
            let segundoApellido = apellidoM;
            
            // Verifica si se ha ingresado un tercer apellido
            if (apellidoP.includes(" ") || apellidoM.includes(" ")) {
                // Si se ha ingresado un tercer apellido, separa los apellidos en primer y segundo apellido
                const apellidosP = apellidoP.split(" ");
                primerApellido = apellidosP[0];
                segundoApellido = apellidosP.length > 1 ? apellidosP[1] : ""; // Toma el segundo apellido solo si se ha ingresado en el campo
                
                const apellidosM = apellidoM.split(" ");
                segundoApellido += apellidosM.length > 1 ? apellidosM[1] : ""; // Agrega el segundo apellido materno si se ha ingresado
            }
            
            const curpGenerado = `${name.substring(0, 1)}${primerApellido.substring(0, 1)}${segundoApellido.substring(0, 1)}${fechaNacimiento.replace(/-/g, "").substring(2)}`;
            setCurp(curpGenerado); // Actualizar el estado del CURP
            return curpGenerado;
        } else {
            // Si falta algún dato necesario, muestra un mensaje de error o maneja la situación de acuerdo a tus requerimientos
            console.log("Por favor completa todos los campos necesarios para generar el CURP.");
            return null;
        }
    };
    
    
    

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ 
            background: 'linear-gradient(to bottom, gray, black)',  minHeight: '100vh', minWidth:'100vw'
            
          }}>
            <div className="bg-white p-5 rounded w-75">
            <div className="text-center mb-4">
        <img src="../img/cuenta.png" alt="Descripción de la imagen" className="img-fluid" style={{ maxWidth: '150px' }} />
      </div>
                <h2>Crear Cuenta Nueva</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 ">
                        <label htmlFor="email">
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
                        <label htmlFor="email">
                            <strong>Apellido Parterno</strong>
                        </label>
                        <input
                          type="text"
                          placeholder="Introducir tu Apallido Paterno"
                          autoComplete="off"
                          name="email"
                          className="form-control rounded-0"
                          onChange={(e) => setApellidoP(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Apallido Marterno</strong>
                        </label>
                        <input
                          type="text"
                          placeholder="Introducir tu Apallido Marterno"
                          autoComplete="off"
                          name="email"
                          className="form-control rounded-0"
                          onChange={(e) => setApellidoM(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                <label htmlFor="fechaNacimiento">
                    <strong>Fecha de Nacimiento</strong>
                    </label>
                    <input
                    type="date"
                    name="fechaNacimiento"
                    className="form-control rounded-0"
                    onChange={(e) => setFechaNacimiento(e.target.value)}
                     />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Correo electronico</strong>
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
                        <label htmlFor="email">
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
    className="btn btn-success w-50 rounded-50"
    style={{
        position: "relative",
        overflow: "hidden",
        border: "none",
        padding: "0",
        cursor: "pointer",
        background: "#000000	",
        borderRadius: "50px",
        color: "ghostwhite",
        fontWeight: "bold",
        fontSize: "17px",
        width: "50%"
    }}
    onMouseEnter={(e) => {
        const overlay = e.target.querySelector('.overlay');
        overlay.style.width = '0';
        overlay.style.height = '0';
        overlay.style.opacity = '0.5';
    }}
    onMouseLeave={(e) => {
        const overlay = e.target.querySelector('.overlay');
        overlay.style.width = '300%';
        overlay.style.height = '300%';
        overlay.style.opacity = '0';
    }}
>
    <span
        className="content"
        style={{
            display: "block",
            padding: "15px 0",
            position: "relative",
            zIndex: "1",
            textAlign: "center",
            transition: "color 0.4s"
        }}
    >
        Registrar
    </span>
    <span
        className="overlay"
        style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "300%",
            height: "300%",
            background: "#000",
            transition: "all 0.4s ease",
            borderRadius: "50%",
            zIndex: "0",
            transform: "translate(-50%, -50%) rotate(45deg)",
            transitionTimingFunction: "cubic-bezier(0.860, 0.000, 0.070, 1.000)",
            opacity: "0"
        }}
    ></span>
</button>

                    <p>Ya tienes una cuenta</p>
                    <Link to="/login" className="btn btn-default border w-50 bg-light rounded-0 text-decoration-none">
                       Acceso 
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Signup