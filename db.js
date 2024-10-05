// db.js
const mysql = require('mysql2');

// Crear la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',        // Cambia esto si tu base de datos está en otro host
    user: 'root',       // Reemplaza 'tu_usuario' con tu nombre de usuario de MySQL
    password: '', // Reemplaza 'tu_contraseña' con tu contraseña de MySQL
    database: 'adopcion_mascotas'     // Reemplaza 'nombre_db' con el nombre de tu base de datos
});

// Conectar a la base de datos
connection.connect(err => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos establecida.');
});

// Exportar la conexión para su uso en otras partes de la aplicación
module.exports = connection;
