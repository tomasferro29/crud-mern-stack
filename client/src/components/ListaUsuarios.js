import React, { useEffect, useState } from 'react';
import { Usuario } from './Usuario';
import axios from 'axios';

export const ListaUsuarios = () => {

    const [usuarios, setUsuarios] = useState([]);

    useEffect( () => {
        axios.get('api/usuario/obtenerusuario').then(res => {
            console.log(res.data);
            setUsuarios(res.data)
        }).catch( err => {
            console.log(err);
        })
            // .then(users => setUsuarios(users.data))
    }, []);

    const listaUsuarios = usuarios && usuarios.map( (u) => {
        return (
            <div>
                <Usuario 
                nombre={u.nombre}
                telefono={u.telefono}
                email={u.email}
                id={u.id}
                key={u.id}
                />
            </div>
        )
    })
    return (
        <div>
            <h2>Lista de Usuarios</h2>
            { listaUsuarios }
        </div>
    );
}