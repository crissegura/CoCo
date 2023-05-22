import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { context } from "./context";
import IniciarSesion from "./iniciarsesion";
import Back from '../media/back.png'

const Menu = ( ) => {

    const {isAuthenticated} = useContext(context)

    const navigation = useNavigate()

    const {email,nombrecomedor} = useParams()


    return(
        <>
            {
            isAuthenticated === false ?
                <IniciarSesion />
            :
                <div className="divMenu">
                    <div className="header2">
                        <img src={Back} className="imgHeader" alt="" onClick={()=>navigation(`/${email}/inicio/${nombrecomedor}`)} />
                    </div>
                    <button id="btn" className="my-2" onClick={()=>navigation(`/${email}/recetas/${nombrecomedor}`)}>
                        Recetas
                    </button>
                    <button id="btn" className="my-2">
                        Calendario
                    </button>
                </div>
            }
        </>
    )

}

export default Menu;