import { Link, useNavigate } from "react-router-dom";
import Logo from '../media/logo.png'
import ComedorComunitario from '../media/comedorcomunitario.png'
import Background from '../media/background.png'

const Inicio = ( ) => {

    const navigation = useNavigate()

    return(
        <div className="inicio">
            <div className="divImgInicio">
                <img src={Logo} className='imgInicio1' alt="" /><br />
                <img src={ComedorComunitario} className='imgInicio2' alt="" />
            </div>
            <button id="btn" onClick={()=>navigation('/iniciarsesion')}>
                INICIAR SESIÓN
            </button>
            <p className="my-2">
                Si no tenés una cuenta 
                <Link className="mx-1" to='/registrarme'>REGISTRATE</Link>
            </p>
        </div>
    )

}

export default Inicio;
