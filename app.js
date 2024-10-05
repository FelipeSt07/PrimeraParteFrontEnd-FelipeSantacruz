// app.js
const express = require('express');
const axios = require('axios');
const path = require('path');
const bodyParser = require('body-parser');
const connection = require('./db'); // Importar la conexión a la base de datos
const app = express();

// Configuración del puerto
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rutas
// Ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Ruta para listar todas las mascotas
app.get('/mascotas', (req, res) => {
    connection.query('SELECT * FROM mascotas', (error, results) => {
        if (error) {
            console.error('Error al consultar la base de datos:', error);
            return res.status(500).send('Error al consultar la base de datos.');
        }
        // Enviar los datos de las mascotas como respuesta en formato JSON
        res.json(results);
    });
});

// Ruta para mostrar el formulario de solicitud de adopción
app.get('/solicitudes/nueva', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'nuevaSolicitud.html'));
});

// Ruta para registrar una nueva solicitud de adopción
app.post('/solicitudes', (req, res) => {
    const { id_adoptante, id_mascota } = req.body; // Asegúrate de que los campos coincidan con tu formulario
    const fecha_solicitud = new Date(); // Puedes usar la fecha actual
    const estado_solicitud = 'Pendiente'; // Estado inicial de la solicitud

    connection.query('INSERT INTO solicitudes (id_adoptante, id_mascota, fecha_solicitud, estado_solicitud) VALUES (?, ?, ?, ?)', 
    [id_adoptante, id_mascota, fecha_solicitud, estado_solicitud], (error, results) => {
        if (error) {
            console.error('Error al registrar la solicitud:', error);
            return res.status(500).send('Error al registrar la solicitud.');
        }
        res.redirect('/mascotas');
    });
});

// Servidor en funcionamiento
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
