const mongoose = require('mongoose');

const usuarioShema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        enum: ['Admin','Supervisor','Operador'],
        default: 'Operador'
    }
});

module.exports = mongoose.model('Usuario',usuarioShema);