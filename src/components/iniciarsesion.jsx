import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { context } from './context';

const IniciarSesion = ( ) => {

  const {login} = useContext(context)

  const navigation = useNavigate()

  const [user, setUser] = useState([]);
  const [email, setEmail] = useState([]);
  const [contraseña, setContraseña] = useState([]);

  const getUser = async ( ) => {
    const res = await axios.get('http://localhost:5500/verusuarios')
    setUser(res.data)
  }

  useEffect(()=>{
    getUser()
  },[])
    
  const getEmail = (e) => {
    setEmail(e.target.value)
  }
  const getContraseña = (e) => {
    setContraseña(e.target.value)
  }

  let usuarioEncontrado = user.find((usuario)=>usuario.email===email && usuario.contraseña===contraseña)

  const loguearme = ( ) => {
    login()
    navigation(`/${email}`)
  }

  const ingresar = ( ) => {
    usuarioEncontrado!==undefined?
      loguearme()
    :
      document.getElementById('errorEC').classList.remove('errorECClass')
  }

  return (
    <div className='iniciarsesion'>
        
        <div className="mb-3" >
            <label>Email</label>
            <br />
            <input onChange={getEmail} className='inputInSe' type="email" placeholder="coco@email.com" />
        </div>

        <div className="mb-3">
            <label>Contraseña</label>
            <br />
            <input onChange={getContraseña} className='inputInSe' type="password" placeholder="contraseña" />
            <p id='errorEC' className='errorECClass' style={{color:'rgba(255, 0, 0, 0.849)',marginTop:'0'}} >Error: email o contraseña incorrectos.</p>
        </div>

        <button id="btn" onClick={ingresar}>
            Iniciar sesión
        </button>
    </div>
  );
}

export default IniciarSesion;