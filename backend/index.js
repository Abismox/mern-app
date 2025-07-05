// Carga variables de entorno
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());            // Permite solicitudes desde otros orígenes
app.use(morgan('dev'));     // Logger de peticiones HTTP
app.use(express.json());    // Parseo de JSON en el body

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Hello, MERN backend!');
});

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
