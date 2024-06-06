// Arreglo con números de control válidos
var validNumControls = ['20140185', '12345678', '87654321']; // Ejemplo de números de control válidos

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

    // Verificamos si el número de control está en el arreglo de números de control válidos
    if (validNumControls.includes(numDeControl)) {
        // Aquí puedes agregar la lógica de autenticación
        // Por ahora, simplemente redirigiremos a la página de inicio
        window.location.href = 'index.html';
    } else {
        errorMessage.textContent = 'Número de Control inválido.';
    }
}
