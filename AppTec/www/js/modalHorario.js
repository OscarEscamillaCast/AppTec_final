document.addEventListener("DOMContentLoaded", function() {
    // Obtener el modal
    var modal = document.getElementById("horarioModal");

    // Obtener el elemento de cierre
    var closeBtn = modal.querySelector(".close");

    // Agregar un evento clic al elemento de cierre
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none"; // Ocultar el modal al hacer clic en el botón de cierre
    });

    // Obtener el enlace para abrir el modal
    var openBtn = document.getElementById("openHorarioModal");

    // Agregar un evento clic al enlace para abrir el modal
    openBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
        modal.style.display = "block"; // Mostrar el modal al hacer clic en el enlace
    });
});