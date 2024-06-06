function mostrarModal() {
  var modal = document.getElementById("myModal");
  modal.classList.add("show");
}

function cerrarModal() {
  var modal = document.getElementById("myModal");
  modal.classList.remove("show");
}

window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
      modal.classList.remove("show");
  }
}

