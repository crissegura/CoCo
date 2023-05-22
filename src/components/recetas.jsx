import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { context } from "./context";
import IniciarSesion from "./iniciarsesion";
import Back from '../media/back.png'

const Recetas = ( ) => {

    const {isAuthenticated} = useContext(context)

    const navigation = useNavigate()

    const {email,nombrecomedor} = useParams()

    return(
        <div>   
            {
            isAuthenticated === false ?
                <IniciarSesion />
            :
                <div>
                    <div className="header2">
                        <img src={Back} className="imgHeader" alt="" onClick={()=>navigation(`/${email}/menu/${nombrecomedor}`)} />
                    </div>
                    <div className="contenidoRecetas">
                        <button id="btn" onClick={()=>navigation(`/${email}/crearreceta/${nombrecomedor}`)}>
                            Agregar receta
                        </button>
                    </div>
                </div>
            }
        </div>
    )

}

export default Recetas;