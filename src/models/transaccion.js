const mongoose = require('mongoose');

const transaccionSchema = new mongoose.Schema({
    cuentaOrigen: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cuenta',
        required: true
    },
    cuentaDestino: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cuenta',
        required: true
    },
    monto: {
        type: Number,
        required: true,
        min: [0.01, 'El monto a transferir debe ser mayor a cero']
    },
    estado: {
        type: String,
        enum: ['Exitoso', 'Fallido'],
        default: 'Exitoso'
    },
    fecha: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transaccion', transaccionSchema);