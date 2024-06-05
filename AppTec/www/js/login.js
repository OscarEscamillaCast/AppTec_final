function login() {
    var numDeControlInput = document.getElementById('numDeControl');
    var nipInput = document.getElementById('nip');
    var errorMessage = document.getElementById('errorMessage');

    var numDeControl = numDeControlInput.value;
    var nip = nipInput.value;

    if (numDeControl && nip) {
        // Aquí puedes agregar la lógica de autenticación
        // Por ahora, simplemente redirigiremos a la página de inicio
        window.location.href = 'index.html';
    } else {
        errorMessage.textContent = 'Por favor ingresa tu Número de Control y NIP.';
    }
}
