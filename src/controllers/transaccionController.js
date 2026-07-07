const Transaccion = require('../models/transaccion'); // Ajusta el nombre del archivo de tu modelo si es diferente

// Crear un nuevo usuario (Create)
const crearTransaccion = async (req, res) => {
    try {
        const nuevaTransaccion = new Transaccion(req.body);
        await nuevaTransaccion.save();
        res.status(201).json(nuevaTransaccion);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear la transaccion', error: error.message });
    }
};

// Obtener todos los usuarios (Read - Todo)
const obtenerTransacciones = async (req, res) => {
    try {
        const transaccion = await Transaccion.find();
        res.status(200).json(transaccion);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener las transacciones', error: error.message });
    }
};

// Obtener un usuario por su ID (Read - Uno)
const obtenerTransaccion = async (req, res) => {
    try {
        const transaccion = await Transaccion.findById(req.params.id);
        if (!transaccion) {
            return res.status(404).json({ mensaje: 'Transaccion no encontrada' });
        }
        res.status(200).json(transaccion);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener la transaccion', error: error.message });
    }
};

// Actualizar un usuario por su ID (Update)
const actualizarTransaccion = async (req, res) => {
    try {
        // El parámetro { new: true } asegura que Mongoose devuelva el documento actualizado, no el antiguo
        const usuarioActualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
        if (!usuarioActualizado) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        res.status(200).json(usuarioActualizado);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar el usuario', error: error.message });
    }
};

// Eliminar un usuario por su ID (Delete)
const eliminarTransaccion = async (req, res) => {
    try {
        const transaccionEliminada = await Transaccion.findByIdAndDelete(req.params.id);
        
        if (!transaccionEliminada) {
            return res.status(404).json({ mensaje: 'Transaccion no encontrada' });
        }
        res.status(200).json({ mensaje: 'Transaccion eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar la transaccion', error: error.message });
    }
};

module.exports = {
    crearTransaccion,
    obtenerTransacciones,
    obtenerTransaccion,
    actualizarTransaccion,
    eliminarTransaccion
};