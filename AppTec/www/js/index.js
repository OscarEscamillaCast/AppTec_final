document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    setTimeout(function() {
        window.location.href = 'login.html';
    }, 2000);
}
