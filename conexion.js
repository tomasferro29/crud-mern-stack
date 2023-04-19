const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/crudmernstack')

const objetodb = mongoose.connection

objetodb.on('connected', () => {
    console.log('Conexion correcta a MongoDb');
})

objetodb.on('error', () => {
    console.log('Error en la conexion a MongoDb');
})

module.exports = mongoose