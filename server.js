const { log } = require('console')
const express = require('express')
const app = express()
const PORT = 5000


// conexion con mongoDb
const archivoBd = require('./conexion')

// importacion de la ruta usuarios
const rutaUsuario = require('./rutas/usuario')

// importar body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/usuario', rutaUsuario)

app.get('/', (req, res) => {
    res.status(200).send(`Hola Creador`)  
})

app.listen(PORT, () => {
    log(`server running at port ${PORT} ` )
})