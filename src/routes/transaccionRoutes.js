const express = require('express');
const router = express.Router();
const transaccionController = require('../controllers/transaccionController');

// Rutas para Usuarios
router.post('/', transaccionController.crearTransaccion);
router.get('/', transaccionController.obtenerTransacciones);
router.get('/:id', transaccionController.obtenerTransaccion);
router.put('/:id', transaccionController.actualizarTransaccion); // Puedes usar .patch también
router.delete('/:id', transaccionController.eliminarTransaccion);

module.exports = router;