document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    setTimeout(function() {
        window.location.href = 'www/login.html';
    }, 2000);
}