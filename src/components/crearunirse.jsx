import { useContext } from "react";
import { context } from "./context";
import IniciarSesion from "./iniciarsesion";

const CrearUnirse = ( ) => {

    const {isAuthenticated,logout} = useContext(context);

    console.log(isAuthenticated)

    return(
        <>
        {
            isAuthenticated===false?
                <IniciarSesion />
                :
                <div className="crearUnirse">
                    <button className="my-2" id="btn">
                        Crear comedor
                    </button>
                    <br />
                    <button className="my-2" id="btn">
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