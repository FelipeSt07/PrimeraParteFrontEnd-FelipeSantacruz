document.getElementById('form-mascota').addEventListener('submit', function(event) {
    const nombre = document.getElementById('nombre').value;
    const especie = document.getElementById('especie').value;
    const raza = document.getElementById('raza').value;
    const edad = document.getElementById('edad').value;

    if (!nombre || !especie || !raza || !edad) {
        event.preventDefault();
        alert("Todos los campos son obligatorios");
    }
});
