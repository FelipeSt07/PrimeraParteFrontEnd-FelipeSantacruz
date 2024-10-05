const express = require('express');
const router = express.Router();

// Ruta para mostrar el formulario de registro de mascotas
router.get('/registrar', (req, res) => {
    res.render('registrarMascota');
});

// Ruta para manejar el POST de registrar nueva mascota
router.post('/mascotas', (req, res) => {
    const { nombre, especie, raza, edad } = req.body;
    // Aquí se conecta con la base de datos para registrar la mascota
    res.send('Mascota registrada exitosamente');
});

module.exports = router;
