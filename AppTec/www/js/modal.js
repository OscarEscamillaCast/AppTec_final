function mostrarModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  
    function cerrarModal() {
        var modal = document.getElementById("myModal");
        modal.style.display = "none"; // Ocultar el modal al hacer clic en el botón de cierre
      }
  
  
  window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
      document.getElementById("myModal").style.display = "none";
    }
  }
  