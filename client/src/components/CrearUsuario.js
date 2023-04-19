import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import uniquid from 'uniqid'
import axios from 'axios'
import Swal from 'sweetalert2'

export const CrearUsuario = () => {

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')

  const [error, setError] = useState('')
  const [complete, setComplete] = useState(false)

  const navegar = useNavigate()

  useEffect(() => {
    if (nombre.length > 0 && email.length > 0 && telefono.length > 0 ){
      setComplete(true)
    } else {
      setComplete(false)
    }
  },[nombre, email, telefono])

  const crearUsuario = () => {

      var usuario = {
        nombre: nombre,
        email: email,
        telefono: telefono,
        id: uniquid()
      }
      console.log(usuario)

      axios.post('api/usuario/agregarusuario', usuario)
      
      setNombre('')
      setEmail('')
      setTelefono('')

      setError('')

      Swal.fire('✅','Usuario Creado')
      setTimeout(function(){
        navegar(-1)
      }, 2000)
  }

  const handleError = () => {
    setError('Hay campos obligatorios sin completar') 
  }

  return (
    <div className='container'>
      <div className='row'>
        <h2 className='mt-4'>Crear Usuario</h2>
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
          { error !== '' ? <p className='alert alert-danger'>{error}</p> : null}
          <button onClick={complete ? crearUsuario : handleError} className='btn btn-success'>Guardar</button>
        </div>
      </div>
    </div>
    )
}
