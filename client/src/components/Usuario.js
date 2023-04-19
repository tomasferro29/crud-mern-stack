import axios from 'axios'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Swal from 'sweetalert2'

export const Usuario = (usuario) => {

    const navegar = useNavigate()
    
    useEffect(() => {
        AOS.init()
    }, [])

    function borrarUsuario(id){
        axios.post('/api/usuario/borrarusuario', {id: id})
        Swal.fire('🗑','Usuario Eliminado')
        setTimeout(function(){
          navegar(0)
        }, 1500)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6 offset-3' data-aos='flip-right'>
                    <ul className='list-group'>
                        <li className='list-group-item'>{usuario.nombre}</li>
                        <li className='list-group-item'>{usuario.email}</li>
                        <li className='list-group-item'>{usuario.telefono}</li>
                    </ul>
                    <div className='mt-2'></div>
                    <Link to={`/editarusuario/${usuario.id}`}><li className='btn btn-success'>Editar</li></Link>
                    &nbsp;
                    <button className='btn btn-danger' onClick={() => borrarUsuario(usuario.id)}>Eliminar</button>
                    <div className='mt-4'></div>
                </div>
            </div>
        </div>
    )
}