const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClienteSchema = new Schema({
    nombre: String,
    correo: String,
    numero: Number,
    construccion: Date,
    aluminio: Number,
    cemento: Number,
    madera: Number,
    cobre: Number,
    vidrio: Number
});
module.exports = new mongoose.model('Cliente', ClienteSchema);