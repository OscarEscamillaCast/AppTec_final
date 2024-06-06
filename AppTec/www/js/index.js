document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    redirectToLogin();
}

function redirectToLogin() {
    setTimeout(function() {
        window.location.href = '/www/login.html'; // Asegúrate de que 'login.html' esté en la carpeta correcta
    }, 2000);
}
