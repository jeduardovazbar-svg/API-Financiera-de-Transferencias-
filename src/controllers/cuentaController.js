const Cuenta = require('../models/cuenta'); // Ajusta el nombre del archivo de tu modelo si es diferente

// Crear un nuevo usuario (Create)
const crearCuenta = async (req, res) => {
    try {
        const nuevaCuenta = new Cuenta(req.body);
        await nuevaCuenta.save();
        res.status(201).json(nuevaCuenta);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear la cuenta', error: error.message });
    }
};

// Obtener todos los usuarios (Read - Todo)
const obtenerCuentas = async (req, res) => {
    try {
        const cuenta = await Cuenta.find();
        res.status(200).json(cuenta);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener las cuentas', error: error.message });
    }
};

// Obtener un usuario por su ID (Read - Uno)
const obtenerCuenta = async (req, res) => {
    try {
        const cuenta = await Cuenta.findById(req.params.id);
        if (!cuenta) {
            return res.status(404).json({ mensaje: 'Cuenta no encontrada' });
        }
        res.status(200).json(cuenta);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener la cuenta', error: error.message });
    }
};

// Actualizar un usuario por su ID (Update)
const actualizarCuenta = async (req, res) => {
    try {
        // El parámetro { new: true } asegura que Mongoose devuelva el documento actualizado, no el antiguo
        const cuentaActualizada = await Cuenta.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
        if (!cuentaActualizada) {
            return res.status(404).json({ mensaje: 'Cuenta no encontrada' });
        }
        res.status(200).json(cuentaActualizada);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar la cuenta', error: error.message });
    }
};

// Eliminar un usuario por su ID (Delete)
const eliminarCuenta = async (req, res) => {
    try {
        const cuentaEliminada = await Cuenta.findByIdAndDelete(req.params.id);
        
        if (!cuentaEliminada) {
            return res.status(404).json({ mensaje: 'Cuenta no encontrada' });
        }
        res.status(200).json({ mensaje: 'Cuenta eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar la cuenta', error: error.message });
    }
};

module.exports = {
    crearCuenta,
    obtenerCuentas,
    obtenerCuenta,
    actualizarCuenta,
    eliminarCuenta
};