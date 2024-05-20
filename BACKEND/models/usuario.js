const mongoose = require('mongoose')

const CiclimoShema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    message: String,
})

const CiclimoModel = mongoose.model("usuario", CiclimoShema)
module.exports = CiclimoModel

