import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import SignoMas from '../media/signomas.png'
import Back from '../media/back.png'
import Editar from '../media/editar.png'
import { useNavigate, useParams } from 'react-router-dom';
import { context } from './context';
import IniciarSesion from './iniciarsesion'
import Loader from './loader';


const Stock = ( ) => {

    const {isAuthenticated} = useContext(context)

    const navigation = useNavigate()

    const {email,nombrecomedor} = useParams()

    const [productos, setProductos] = useState([])

    const getProductos = async ( ) => {
        const res = await axios.get('http://localhost:5500/vercomedor')
        setProductos(res.data)
    }

    useEffect(()=>{
        getProductos()
    },[])

    let miComedor = productos.find((producto)=>producto.creador===email)

    let miStock

    miComedor === undefined?
        miStock = ''
    :
        miStock = miComedor.stock

    return(
        <div>
        {
            isAuthenticated === false ?
                <IniciarSesion />
            :
            <div className='stock'>
                <div className="header2">
                    <img src={Back} className="imgHeader" alt="" onClick={()=>navigation(`/${email}/inicio/${nombrecomedor}`)} />
                    <h3 className="CoCoHe">CoCo</h3>
                    <img src={SignoMas} className="imgHeader" alt="" onClick={()=>navigation(`/${email}/agregarproducto/${nombrecomedor}`)} />
                </div>
                <div>
                    {
                        miComedor === undefined?
                        <Loader />
                    :
                        miStock.map((mstk)=>{
                            return <div>
                                <p key={mstk.nombre} className='nombreProductos' >{mstk.nombre}  <img className='imgEdit' src={Editar} onClick={()=>alert('Juan carlos Messi')} /></p>
                                <p className='descripcionStock'>Unidades: {mstk.cantidad}</p>
                                <p className='descripcionStock'>Unidad de medida: {mstk.unidadmedida}</p>
                                <p className='descripcionStock'>Cantidad unitaria: {mstk.cantidadunitaria}</p>
                                <p className='descripcionStock'>Total: {mstk.cantidad*mstk.cantidadunitaria}{mstk.unidadmedida}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        }
        </div>
    )

}

export default Stock;