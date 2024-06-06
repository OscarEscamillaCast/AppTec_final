document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM completamente cargado y analizado");

    // Obtener elementos del DOM
    const modal = document.getElementById("horarioModal");
    const openModalBtn = document.getElementById("openHorarioModal");
    const closeModalBtn = document.getElementsByClassName("close")[0];

    console.log("Elementos obtenidos:", modal, openModalBtn, closeModalBtn);

    // Abrir el modal al hacer clic en la tarjeta
    openModalBtn.onclick = function(event) {
        event.preventDefault(); // Prevenir la acción por defecto del enlace
        console.log("Botón de abrir modal clicado");
        modal.style.display = "block";
    }

    // Cerrar el modal al hacer clic en el botón de cierre
    closeModalBtn.onclick = function() {
        console.log("Botón de cerrar modal clicado");
        modal.style.display = "none";
    }

    // Cerrar el modal al hacer clic fuera de la ventana del modal
    window.onclick = function(event) {
        if (event.target == modal) {
            console.log("Clic fuera del modal");
            modal.style.display = "none";
        }
    }
});
