const express = require('express');
const router = express.Router();

// Ruta para mostrar el formulario de solicitudes
router.get('/solicitud', (req, res) => {
    res.render('solicitud');
});

// Ruta para registrar nueva solicitud
router.post('/solicitud', (req, res) => {
    const { nombre_solicitante, contacto, id_mascota } = req.body;
    // Aquí se conecta con la base de datos para registrar la solicitud
    res.send('Solicitud registrada exitosamente');
});

module.exports = router;
