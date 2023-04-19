const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const schema = mongoose.Schema

const schemaUsuario = new schema({
    nombre: String,
    email: String,
    telefono: String,
    id: String
})

const ModeloUsuario = mongoose.model('usuarios', schemaUsuario)
module.exports = router

// router.get('/ejemplo', (req, res) => {
//     res.status(200).send('ruta ejemplo funcionando')
// })

router.get('/agregarusuario', (req, res) => {
    res.send('ruta agregar usuario')
})

router.post('/agregarusuario', (req, res) => {
    const nuevoUsuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        id: req.body.id
    })
    nuevoUsuario.save()
    console.log(nuevoUsuario)
})

router.get('/obtenerusuario', async (req, res) => {
    const usuarios = await ModeloUsuario.find({})
    res.send(usuarios)
}) 


router.post('/obtenerdatausuario', (req, res) => {
    const dataUsuario = ModeloUsuario.find({id: req.body.id})
    res.send(dataUsuario)
}) 

router.post('/actualizarusuario', async (req, res) => {
    await ModeloUsuario.findOneAndUpdate({id: req.body.id}, {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono
    })
})

router.post('/borrarusuario', async (req, res) => {
    await ModeloUsuario.findOneAndDelete({id: req.body.id})
})