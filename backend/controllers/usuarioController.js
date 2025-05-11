const Usuario = require('../models/Usuario');

const crearUsuario = async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).json({ message: "Usuario registrado correctamente", usuario });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Error al registrar usuario", detalle: error.message });
  }
};

module.exports = { crearUsuario };
