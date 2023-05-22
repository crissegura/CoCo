import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { context } from "./context";
import IniciarSesion from "./iniciarsesion";

const CrearUnirse = ( ) => {

    const {isAuthenticated,logout} = useContext(context);

    const navigation = useNavigate()

    const {email} = useParams()

    return(
        <>
        {
            isAuthenticated===false?
                <IniciarSesion />
                :
                <div className="crearUnirse">
                    <button className="my-2" id="btn" onClick={()=>navigation(`/${email}/crearcomedor`)}>
                        Crear comedor
                    </button>
                    <br />
                    <button className="my-2" id="btn" onClick={()=>navigation(`/${email}/unirseacomedor`)}>
                        Unirse a comedor
                    </button>
                    <button onClick={logout}>
                        CERRAR SESION
                    </button>
                </div>
        }
        </>
    )

}

export default CrearUnirse;