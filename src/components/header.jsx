import { context } from './context';
import { useContext } from 'react';
import IniciarSesion from './iniciarsesion';


const Header = ( ) => {

    const {logout,isAuthenticated} = useContext(context)
    
    return(
        <div className='contenedorHeader'>
            {
                isAuthenticated===false?
                    <IniciarSesion />
                :
                    <div className="header">
                        <h3 className="CoCoHe">CoCo</h3>
                        <button onClick={()=>logout()}>
                            cerrar
                        </button>
                    </div>
            }
        </div>
    )

}

export default Header;