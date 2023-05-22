import Header from "./header";
import Navegador from "./navegador";
import {useNavigate, useParams} from 'react-router-dom';

const InicioUser = ( ) => {

    const navigation = useNavigate()

    const {email, nombrecomedor} = useParams()

    return(
        <div className="containerInicio">
            <Header />

            <button id="btn" className="my-2" onClick={()=>navigation(`/${email}/stock/${nombrecomedor}`)}>
                STOCK
            </button>
            <button id="btn" className="my-2" onClick={()=>navigation(`/${email}/menu/${nombrecomedor}`)}>
                MENÚ
            </button>
            <button id="btn" className="my-2">
                USUARIOS/MIEMBROS?
            </button>
            <button id="btn" className="my-2">
                NOTIFICACIONES
            </button>

            <Navegador />
        </div>
    )

}

export default InicioUser;