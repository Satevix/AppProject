const express = require('express');
const router = express.Router();
const { crearUsuario } = require('../controllers/usuarioController');

router.post('/', crearUsuario);

module.exports = router;
