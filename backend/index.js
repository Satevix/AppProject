const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

console.log('Cadena de conexión:', process.env.MONGO_URI);


const PORT = process.env.PORT || 5000;

app.use(express.json());

// Rutas
app.use('/api/usuarios', require('./routes/usuarios'));

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Conectado a MongoDB");
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error("Error al conectar a MongoDB", err));
