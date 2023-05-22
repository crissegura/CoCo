import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CrearComedor = ( ) => {

    const {email} = useParams()

    //verificar nombre del comedor
    const [comedor, setComedor] = useState([])

    const verComedores = async ( ) =>{
        const res = await axios.get('http://localhost:5500/vercomedor')
        setComedor(res.data)
    }

    useEffect(()=>{
        verComedores()
    },[])



    //info para crear comedor
    const [nombreComedor, setNombreComedor] = useState([])
    const [emailComedor, setEmailComedor] = useState([])
    const [celularComedor, setCelularComedor] = useState([])

    let fecha = new Date()

    let inicioComedor = fecha.getDate()+'/'+(fecha.getMonth()+1)+'/'+fecha.getFullYear()

    const crear = ( e ) => {
        e.preventDefault()
        try {
                axios.post('http://localhost:5500/crearcomedor',{
                    nombre: nombreComedor,
                    fechainicio: inicioComedor,
                    creador: email,
                    celular: celularComedor,
                    email: emailComedor
                }).then(alert(`Comedor ${nombreComedor} creado exitosamente!`))
        } catch (error) {
            console.log(error)
        }
    }

    let existe = comedor.find((com)=>com.nombre.toLowerCase()===nombreComedor.toString().toLowerCase())

    const errorNombre = ( ) => {
        document.getElementById('errorEC').classList.remove('errorECClass')
        document.getElementById('inputNC').classList.add('inputError')
    }

    const successNombre = ( ) => {
        document.getElementById('errorEC').classList.add('errorECClass')
        document.getElementById('inputNC').classList.remove('inputError')
    }

    const verificarNombre = ( ) => {
        existe!==undefined?
        errorNombre()
    :
        successNombre()
    }

    setTimeout(verificarNombre,1000)

    const getNombreComedor = (e) =>{
        setNombreComedor(e.target.value)
    }

    return(
        <div className="crearComedor">
            <h3 className="h3Re">¡Completá los datos!</h3>
            <div className="mb-3" >
                <label>Nombre del comedor</label>
                <br />
                <input className='inputInSe' id='inputNC' type="text" placeholder="Comedor" onChange={getNombreComedor} />
                <p id='errorEC' className='errorECClass' style={{color:'rgba(255, 0, 0, 0.849)',marginTop:'0'}} >Error: nombre no disponible</p>
            </div>
            <div className="mb-3" >
                <label>Email</label>
                <br />
                <input className='inputInSe' type="email" placeholder="coco@gmail.com" onChange={(e)=>setEmailComedor(e.target.value)} />
            </div>
            <div className="mb-3" >
                <label>Celular</label>
                <br />
                <input className='inputInSe' type="text" placeholder="1112345678" onChange={(e)=>setCelularComedor(e.target.value)} />
            </div>
            <div className="mb-3" >
                <label>Creador</label>
                <br />
                <input className='inputInSe' type="text" disabled={true} placeholder={email} />
            </div>
            <button id='btn' onClick={crear}>
                Crear
            </button>
        </div>
    )

}

export default CrearComedor;