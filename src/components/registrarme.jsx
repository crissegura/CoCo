import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Registrarme = ( ) => {

    const navigation = useNavigate()

    const [nombre, setNombre] = useState([])
    const [apellido, setApellido] = useState([])
    const [fechanacimiento, setFechanacimiento] = useState([])
    const [celular, setCelular] = useState([])
    const [email, setEmail] = useState([])
    const [contraseña, setContraseña] = useState([])

    const getNombre = (e) => {
        setNombre(e.target.value)
    }
    const getApellido = (e) => {
        setApellido(e.target.value)
    }
    const getFechanacimiento = (e) => {
        setFechanacimiento(e.target.value)
    }
    const getCelular = (e) => {
        setCelular(e.target.value)
    }
    const getEmail = (e) => {
        setEmail(e.target.value)
    }
    const getContraseña = (e) => {
        setContraseña(e.target.value)
    }

    const nuevoRegistro = (e) => {
        e.preventDefault()
        try {
            axios.post('http://localhost:5500/agregarusuario',{
            nombre: nombre,
            apellido: apellido,
            fechanacimiento: fechanacimiento,
            celular: celular,
            email: email,
            contraseña: contraseña,
            rol: ''
        }).then(navigation('/confirmarregistro'))
        } catch (error) {
            console.log('Error ->', error)
        }
    }

    return(
        <div className="registrarme">
            <h3 className="h3Re">¡Completá con tus datos!</h3>
            <div className="mb-3" >
                <label>Nombre</label>
                <br />
                <input onChange={getNombre} className='inputInSe' type="text" placeholder="Co" />
            </div>
            <div className="mb-3">
                <label>Apellido</label>
                <br />
                <input onChange={getApellido} className='inputInSe' type="text" placeholder="Co" />
            </div>
            <div className="mb-3">
                <label>Fecha de nacimiento</label>
                <br />
                <input onChange={getFechanacimiento} className='inputInSe' type="date" />
            </div>
            <div className="mb-3">
                <label>Celular</label>
                <br />
                <input onChange={getCelular} className='inputInSe' type="text" placeholder="1112345678" />
            </div>
            <div className="mb-3">
                <label>Email</label>
                <br />
                <input onChange={getEmail} className='inputInSe' type="email" placeholder="coco@email.com" />
            </div>
            <div className="mb-3">
                <label>Contraseña</label>
                <br />
                <input onChange={getContraseña} className='inputInSe' type="password" placeholder="contraseña" />
            </div>
            <button id="btn" onClick={nuevoRegistro}>
                Registrarme
            </button>
        </div>
    )

}

export default Registrarme;