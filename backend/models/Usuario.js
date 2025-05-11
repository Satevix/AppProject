const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombres: { type: String, required: true },
  apellidos: { type: String, required: true },
  identificacion: { type: String, required: true, unique: true },
  correo: { type: String, required: true, unique: true },
  direccion: { type: String },
  ciudad: { type: String },
  pais: { type: String },
  fechaNacimiento: { type: Date },
  contraseña: { type: String, required: true },
  verificado: { type: Boolean, default: false },
  rol: { type: String, default: "usuario" }
}, { timestamps: true });

module.exports = mongoose.model('Usuario', usuarioSchema);
