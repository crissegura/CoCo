import axios, { toFormData } from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Back from '../media/back.png'


const AgregarProducto = ( ) => {

    const {email, nombrecomedor} = useParams()

    const navigation = useNavigate()

    const [nombre, setNombre] = useState([])
    const [cantidad, setCantidad] = useState([])
    const [unidad, setUnidad] = useState([])

    const [productos, setProductos] = useState([])

    const getProductos = async ( ) => {
        const res = await axios.get('http://localhost:5500/vercomedor')
        setProductos(res.data)
    }

    useEffect(()=>{
        getProductos()
    },[])

    let stock = productos.find((producto)=>producto.creador===email)

    let misProductos

    stock===undefined?
        stock = ''
    :
        misProductos = stock.stock


    let nuevoProducto = {nombre:nombre,cantidad:cantidad,unidad:unidad}

    let todosLosProductos = []

    
    misProductos===undefined?
        misProductos = ''
    :
        misProductos.map((e)=>{
            todosLosProductos.push(e)
        })

    todosLosProductos.push(nuevoProducto)

    const agregarStock = ( ) => {

        try {
            axios.put(`http://localhost:5500/agregandoproductos/${email}`,{
            stock: 'Hola'
            }).then(alert('Producto agregado!'))
        } catch (error) {
            console.log('Error: ',error)
        }

    }

    return(
        <div className="agregarproducto">
            <div className="header2">
                    <img src={Back} className="imgHeader" alt="" onClick={()=>navigation(`/${email}/stock/${nombrecomedor}`)} />
            </div>
            <div className="mb-3">
                <label>Nombre del producto</label>
                <br />
                <input className='inputInSe' type="text" placeholder="Fideos" onChange={(e)=>setNombre(e.target.value)} />
            </div>  
            <div className="mb-3">
                <label>Cantidad</label>
                <br />
                <input className='inputInSe' type="number" placeholder="2" onChange={(e)=>setCantidad(e.target.value)} />
            </div>  
            <div className="mb-3">
                <label>Unidad de medida </label>
                <br />
                <input className='inputInSe' type="text" placeholder="kg/g/ml" onChange={(e)=>setUnidad(e.target.value)} />
            </div> 
            <button id="btn" onClick={agregarStock}>
                Guardar prodructo
            </button>
        </div>
    )

}

export default AgregarProducto;