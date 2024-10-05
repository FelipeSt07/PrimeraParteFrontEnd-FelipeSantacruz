document.getElementById('solicitud-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    fetch('http://localhost:3000/solicitudes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Solicitud enviada con éxito.');
            window.location.href = 'mascotas.html'; // Redirigir a la lista de mascotas
        } else {
            alert('Error al enviar la solicitud.');
        }
    })
    .catch(error => console.error('Error:', error));
});

// Llenar el selector de mascotas
fetch('http://localhost:3000/mascotas')
    .then(response => response.json())
    .then(data => {
        const select = document.getElementById('id_mascota');
        data.forEach(mascota => {
            const option = document.createElement('option');
            option.value = mascota.id_mascota;
            option.textContent = `${mascota.nombre} - ${mascota.especie}`;
            select.appendChild(option);
        });
    })
    .catch(error => console.error('Error al obtener las mascotas:', error));
