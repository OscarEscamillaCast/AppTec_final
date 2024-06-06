var usuarios = [
    { nombreCompleto: "Miguel Angel Ibarra Basaldua", numeroControl: "20140189", carrera: "Ingeniería en Sistemas Computacionales", fechaExpiracion: "31/12/2024", nip: "1234" },
    { nombreCompleto: "Juan Pérez", numeroControl: "20140185", carrera: "Ingeniería en Software", fechaExpiracion: "31/12/2025", nip: "1421" },
    { nombreCompleto: "María García", numeroControl: "20140189", carrera: "Ciencias de la Computación", fechaExpiracion: "31/12/2026", nip: "9012" },
    { nombreCompleto: "Carlos Rodríguez", numeroControl: "20140201", carrera: "Arquitectura de Software", fechaExpiracion: "31/12/2027", nip: "3456" },
    { nombreCompleto: "Ana López", numeroControl: "20140202", carrera: "Diseño Gráfico", fechaExpiracion: "31/12/2028", nip: "7890" }
];


// login.js
function login() {
    var numDeControlInput = document.getElementById('numDeControl');
    var nipInput = document.getElementById('nip');
    var errorMessage = document.getElementById('errorMessage');

    var numDeControl = numDeControlInput.value.trim();
    var nip = nipInput.value.trim();

    // Validación del formato del número de control
    if (!/^(\d{8})$/.test(numDeControl)) {
        errorMessage.textContent = 'Número de Control inválido. Debe tener exactamente 8 dígitos.';
        return; // Salimos temprano si el formato es incorrecto
    }

    // Validación del formato del NIP
    if (!/^(\d{4})$/.test(nip)) {
        errorMessage.textContent = 'NIP inválido. Debe tener exactamente 4 dígitos.';
        return; // Salimos temprano si el formato es incorrecto
    }

    // Verificamos si el número de control existe en el objeto de usuarios
    var usuario = usuarios.find(u => u.numeroControl === numDeControl);

    if (usuario) {
        // Verificamos si el NIP ingresado coincide con el valor asociado
        if (usuario.nip === nip) {
            // Autenticación exitosa, redirigimos a la página de inicio
            localStorage.setItem('usuarioLogueado', JSON.stringify(usuario)); // Guardamos el usuario en el almacenamiento local
            window.location.href = 'home.html'; // Redirecciona a la página donde mostrarás la información del usuario
        } else {
            errorMessage.textContent = 'NIP incorrecto.';
        }
    } else {
        errorMessage.textContent = 'Número de Control inválido.';
    }
}
