const mongoose = require('mongoose');

const cuentaSchema = new mongoose.Schema({
    // Vinculación directa al usuario independiente de este proyecto
    usuarioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    // Número de cuenta cifrado (Requerimiento de imagen_2.png)
    numeroCuentaCifrado: {
        type: String,
        required: true,
        unique: true
    },
    // Vector de Inicialización (IV) único por cada registro
    iv: {
        type: String,
        required: true
    },
    // Etiqueta de autenticación generada por aes-256-gcm
    authTag: {
        type: String,
        required: true
    },
    // Control estricto de saldo para el monedero digital
    saldo: {
        type: Number,
        required: true,
        min: [0, 'El saldo no puede quedar en números negativos'],
        default: 0
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Cuenta', cuentaSchema);