import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const EditarUsuario = () => {

    const params = useParams()
    const navegar = useNavigate()

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')

    // useEffect(() => {
    //     axios.post(`api/usuario/obtenerdatausuario/`)
    //         .then(res => {
    //             console.log('hola')
    //             // const dataUsuario = res.data[0]
    //             // setNombre(dataUsuario.nombre)
    //     })
    // }, [])

    function editarUsuario () {
        const actualizarUsuario = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            id: params.id
        }
        console.log(actualizarUsuario);
        axios.post('/api/usuario/actualizarusuario', actualizarUsuario)
        alert('Usuario actualizado con exito')
        navegar(-1)
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <h2 className='mt-4'>Editar Usuario</h2>
                </div>
                <div className='row'>
                    <div className='col-sm-6 offset-3'>
                        <div className='mb-3'>
                            <label htmlFor='nombre' className='form-label'>Nombre</label>
                            <input type='text' className='form-control' value={nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>Email</label>
                            <input type='text' className='form-control' value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='telefono' className='form-label'>Telefono</label>
                            <input type='text' className='form-control' value={telefono} onChange={(e) => {setTelefono(e.target.value)}}></input>
                        </div>
                        <button onClick={editarUsuario} className='btn btn-success'>Guardar Cambios</button>
                    </div>
                </div>
            </div>
        </div>
    )
}