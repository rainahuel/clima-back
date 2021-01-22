const mongoose = require('mongoose')
const Schema = mongoose.Schema

const paisSchema = new Schema({
    pais: {type: String, required: [true, 'el pais es requerido']},
    lat: {type: String, required: [true, 'la latitud requerido']},
    lon: {type: String, required: [true, 'la lonngitud necesario']},
})

module.exports = mongoose.model('paises', paisSchema)