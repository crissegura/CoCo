import Carrito from '../media/carrito.png'
import Cubiertos from '../media/cubiertos.png'
import Home from '../media/home.png'
import Usuarios from '../media/usuarios.png'
import Notificaciones from '../media/notificaciones.png'

const Navegador = ( ) => {

    return(
        <div className="navegador">
            <button className='btnNavegador'>
                <img src={Carrito} alt="" className='imgNavegador' />
            </button>
            <button className='btnNavegador'>
                <img src={Cubiertos} alt="" className='imgNavegador' />
            </button>
            <button className='btnNavegador'>
                <img src={Home} alt="" className='imgNavegador' />
            </button>
            <button className='btnNavegador'>
                <img src={Usuarios} alt="" className='imgNavegador' />
            </button>
            <button className='btnNavegador'>
                <img src={Notificaciones} alt="" className='imgNavegador' />
            </button>
        </div>
    )

}

export default Navegador;