import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { context } from "./context";
import IniciarSesion from "./iniciarsesion";
import Back from '../media/back.png'
import Delete from '../media/delete.png'
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import Loader from "./loader";

const CrearReceta = ( ) => {

    const {isAuthenticated} = useContext(context)
    const navigation = useNavigate()
    const {email,nombrecomedor} = useParams()

    const [nombre, setNombre] = useState([])
    const [comenzales, setComenzales] = useState([])

    const [stock, setStock] = useState([])

    const getStock = async ( ) => {
        const res = await axios.get('http://localhost:5500/vercomedor')
        setStock(res.data)
    }

    useEffect(()=>{
        getStock()
    },[])

    let miComedor = stock.find((producto)=>producto.creador===email)

    let miStock

    miComedor === undefined?
        miStock = ''
    :
        miStock = miComedor.stock

    const siguiente = ( ) => {
        document.getElementById('idIng1').classList.add('divIngredientes')
        document.getElementById('idIng2').classList.remove('divIngredientes')
    }

    const [ingredientes, setIngredientes] = useState([])

    const [modalIngredientes, setModalIngredientes] = useState(false);
    const cerrarModalIngredientes = () => setModalIngredientes(false);
    const abrirModalIngredientes = () => setModalIngredientes(true);

    const [alertYaEsta, setAlertYaEsta] = useState(false);
    const cerrarModalYaEsta = () => setAlertYaEsta(false);
    const abrirModalYaEsta = () => setAlertYaEsta(true);

    const agregar = ( e ) => {
        let yaEsta = ingredientes.find((i)=>i.nombre===e.nombre)
        yaEsta?
            abrirModalYaEsta()
        :   
            ingredientes.push(e)
        cerrarModalIngredientes()
    }

    const quitar = ( e ) => {
        let buscarIng = ingredientes.find((i)=>i.nombre===e.nombre)
        let filtrando = ingredientes.filter((i)=>i.nombre!==buscarIng.nombre)
        buscarIng?
            setIngredientes(filtrando)
        :
            <></>
    }

    const confirmarReceta = ( ) => {
        alert(ingredientes[0].nombre)
    }
    
    return(
        <div>
            {    
                isAuthenticated === false ?
                    <IniciarSesion />
                :
                    <div>
                        <div className="header2">
                        <img src={Back} className="imgHeader" alt="" onClick={()=>navigation(`/${email}/recetas/${nombrecomedor}`)} />
                        </div>
                        <div className="contenedorCrearReceta">
                            <div id="idIng1">
                            <h3>Crear receta</h3>
                            <div className="mb-3" >
                                <label>Nombre del menú</label>
                                <br />
                                <input className='inputInSe' type="text" placeholder="Nombre del menú" onChange={(e)=>setNombre(e.target.value)} />
                            </div>
                            <div className="mb-3" >
                                <label>¿Para cuantas personas rinde la porción?</label>
                                <br />
                                <input className='inputInSe' type="number" placeholder="5" onChange={(e)=>setComenzales(e.target.value)} />
                            </div>
                            <button id="btn" onClick={siguiente}>
                                Siguiente
                            </button>
                            </div>
                            <div id="idIng2" className="divIngredientes" style={{textAlign:'center'}}>
                                <h3>{nombre}</h3>
                                <p>{comenzales} comenzales</p>

                                {
                                    miStock.length===0?
                                        <div>
                                        </div>
                                    :
                                        <div>
                                            <button id="btn" onClick={abrirModalIngredientes}>
                                                Ver productos disponibles
                                            </button>
                                        </div>
                                }
                                {
                                    ingredientes.length===0?
                                        <p>No seleccionaste ningún ingrediente.</p>
                                        :
                                        ingredientes.map((e)=>{
                                            return <div className="divSelIng my-2">
                                                <input 
                                                    className='inputCant1'
                                                    type='text' 
                                                    value={e.nombre}
                                                    disabled
                                                    />
                                                <input 
                                                    type="number"
                                                    className='inputCant2 mx-2'
                                                    placeholder="0"
                                                    />
                                                <input 
                                                    type="text"
                                                    className='inputCant2'
                                                    value={e.unidadmedida}
                                                    disabled
                                                    />
                                                <button id="btnquitar" onClick={()=>quitar(e)}>
                                                    <img 
                                                        src={Delete} 
                                                        className="imgDelete" 
                                                    />
                                                </button>
                                            </div>
                                        })
                                }
                                {
                                    ingredientes.length!==0?
                                        <div className="my-4">
                                            <button id="btn" onClick={confirmarReceta}>
                                                Confirmar receta
                                            </button>
                                        </div>
                                    :
                                        <div>

                                        </div>
                                }
                            </div>
                        </div>
                        <Modal
                            show={modalIngredientes}
                            onHide={cerrarModalIngredientes}
                            backdrop="static"
                            keyboard={false}
                            
                        >
                            <Modal.Header closeButton className='Modal'>
                            <Modal.Title>Productos disponibles</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className='Modal'>
                            <ul>
                                {
                                    miStock.length!==0?
                                        miStock.map((e)=>{
                                            return <p className="pLi">{e.nombre} 
                                                        <button id="btnmas" onClick={()=>agregar(e)}>
                                                            +
                                                        </button>
                                                    </p>
                                        })
                                        :
                                        <Loader />
                                }
                            </ul>
                            </Modal.Body>
                        </Modal>

                        <Modal
                            show={alertYaEsta}
                            onHide={cerrarModalYaEsta}
                        >
                            <Modal.Header closeButton className='alertYaEsta'>
                            <Modal.Title >Error! El producto ya fue seleccionado antes.</Modal.Title>
                            </Modal.Header>
                        </Modal>
                    </div>
            }

            
        </div>
    )

}

export default CrearReceta;