require('dotenv').config(); // Cargar las variables de entorno al inicio
const express = require('express');
const mongoose = require('mongoose'); // Importar Mongoose
const appTokensito = require('./src/middlewares/appToken')
const app = express();

// Middleware
app.use(express.json());
app.use(appTokensito);
// Importar rutas
const usuarioRoutes = require('./src/routes/usuarioRoutes'); 
const cuentaRoutes = require('./src/routes/cuentaRoutes'); 
const transaccionRoutes = require('./src/routes/transaccionRoutes');
app.get('/', (req, res) => {
    res.send('🚀 ¡API Financiera corriendo con éxito en Vercel!');
});
// Usar rutas
app.use('/api/transaccion', transaccionRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/cuenta', cuentaRoutes);

// --- CONEXIÓN A MONGODB ---
const uri = process.env.MONGO_URI; // Leer la variable de tu archivo .env

// Conectar de forma global sin envolver la app en el .then()
mongoose.connect(uri)
    .then(() => console.log('✅ Conectado exitosamente a MongoDB'))
    .catch((error) => console.error('❌ Error al conectar a MongoDB:', error.message));

// Si quisieras probar local, descomenta esto, pero para Vercel no es necesario:
 if (!process.env.VERCEL) {
     const PORT = process.env.PORT || 3000;
     app.listen(PORT, () => console.log(`🚀 Servidor en puerto ${PORT}`));
 }

// CRUCIAL: Siempre expórtalo en la raíz del archivo, fuera de cualquier función o promesa
module.exports = app;