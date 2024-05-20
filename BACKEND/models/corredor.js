// models/corredor.js
const mongoose = require('mongoose');

const CorredorSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuario',
        required: true
    },
    category: String,
    team: String,
    street: String,
    interiorNumber: String,
    exteriorNumber: String,
    neighborhood: String,
    postalCode: String,
    city: String,
    state: String,
    raceNumber: String,
    birthDate: Date,
    gender: String
});

const Corredor = mongoose.model('Corredor', CorredorSchema);
module.exports = Corredor;
