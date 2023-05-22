import axios from "axios";
import { useEffect, useState } from "react";


const UnirseComedor = ( ) => {

    const [comedor, setComedor] = useState([])

    const verComedores = async ( ) => {
        const res = await axios.get('http://localhost:5500/vercomedor')
        setComedor(res.data)
    }

    useEffect(() => {
        verComedores()
    }, []);

    //buscador
    const [bcomedor, setBcomedor] = useState([])

    let filtrarcomedor = comedor.filter(com=> com.nombre.toLowerCase().includes(bcomedor.toString().toLocaleLowerCase()))

    return(
        <div className="unirseComedor">
            <h3 className="h3Re"> Seleccioná un comedor </h3>
            <div className="mb-3">
                <label>Buscar comedor</label>
                <br />
                <input className='inputInSe' type="text" placeholder="Nombre del comedor" onChange={(e)=>setBcomedor(e.target.value)} />
            </div>
            <div className="contenedorComedores">
                <h5 className="mx-2 mb-3">Comedores disponibles</h5>
                {
                    filtrarcomedor.length!==0?
                        <div className="contenedorComedores">
                            {
                                filtrarcomedor.map((c)=>{
                                    return <button className="pcomedores" >{c.nombre}</button>
                                })
                            }
                        </div>
                        :
                        <div className="contenedorComedores">
                            <p> No se encontró ningún comedor llamado "{bcomedor}" </p>
                        </div>
                }
            </div>
        </div>
    )

}

export default UnirseComedor;