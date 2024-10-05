document.addEventListener("DOMContentLoaded", () => {
    fetch('http://localhost:3000/mascotas')
        .then(response => response.json())
        .then(data => {
            const tbody = document.getElementById('mascotas-tbody');
            data.forEach(mascota => {
                const row = `<tr>
                    <td>${mascota.id_mascota}</td>
                    <td>${mascota.nombre}</td>
                    <td>${mascota.especie}</td>
                    <td>${mascota.raza}</td>
                    <td>${mascota.edad}</td>
                    <td>${mascota.estado_adopcion === 0 ? 'Disponible' : 'Adoptada'}</td>
                </tr>`;
                tbody.innerHTML += row;
            });
        })
        .catch(error => console.error('Error al obtener las mascotas:', error));
});
