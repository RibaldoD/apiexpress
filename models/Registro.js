const mongoose = require('mongoose');
const { Schema } = mongoose;

const RegistroSchema = new Schema({
    nombre: String,
    correo: String,
    telefono: Number,
    contraseña: String,
    Confcontraseña: String
});
module.exports = new mongoose.model('Regristro', RegistroSchema);