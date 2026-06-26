const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombreCompleto: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    fechaRegistro: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('usuario', usuarioSchema);