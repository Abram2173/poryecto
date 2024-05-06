const mongoose = require('mongoose')

const CiclimoShema = new mongoose.Schema({
    name: String,
    apellidoP: String,
    apellidoM: String,
    fechaNacimiento: Date,
    email: String,
    password: String,
    message: String,
    curp: String // Nuevo campo para el CURP
})

const CiclimoModel = mongoose.model("usuario", CiclimoShema)
module.exports = CiclimoModel