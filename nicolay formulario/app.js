function guardarDatos() {
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;

  if (nombre === "" || correo === "") {
    alert("Por favor completa todos los campos");
    return;
  }

  const usuario = { nombre, correo };

  // Obtener datos guardados
  let datos = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Agregar nuevo dato
  datos.push(usuario);

  // Guardar en localStorage
  localStorage.setItem("usuarios", JSON.stringify(datos));

  mostrarDatos();

  // Limpiar campos
  document.getElementById("nombre").value = "";
  document.getElementById("correo").value = "";
}

function mostrarDatos() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  let datos = JSON.parse(localStorage.getItem("usuarios")) || [];

  datos.forEach(user => {
    const li = document.createElement("li");
    li.textContent = user.nombre + " - " + user.correo;
    lista.appendChild(li);
  });
}

// Mostrar datos al cargar la página
document.addEventListener("DOMContentLoaded", mostrarDatos);