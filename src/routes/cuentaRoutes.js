const express = require('express');
const router = express.Router();
const cuentaController = require('../controllers/cuentaController');

// Rutas para Usuarios
router.post('/', cuentaController.crearCuenta);
router.get('/', cuentaController.obtenerCuentas);
router.get('/:id', cuentaController.obtenerCuenta);
router.put('/:id', cuentaController.actualizarCuenta); // Puedes usar .patch también
router.delete('/:id', cuentaController.eliminarCuenta);

module.exports = router;