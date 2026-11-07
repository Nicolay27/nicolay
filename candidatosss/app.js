let intentos = 3;

// Usuario y contraseña "simulados"
const usuarioCorrecto = "nicolaynagles27@gmail.com";
const passwordCorrecto = "nicolay12345";

function login() {
  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;
  const mensaje = document.getElementById("mensaje");

  // 🔹 IF para bloquear si ya no hay intentos
  if (intentos === 0) {
    mensaje.textContent = "Cuenta bloqueada ❌";
    mensaje.style.color = "red";
    return;
  }

  // 🔹 IF para validar credenciales
  if (usuario === usuarioCorrecto && password === passwordCorrecto) {
    mensaje.textContent = "Bienvenido ✅";
    mensaje.style.color = "green";
  } else {
    intentos--;

    // 🔹 IF para mostrar intentos restantes
    if (intentos > 0) {
      mensaje.textContent = "Datos incorrectos. Intentos restantes: " + intentos;
      mensaje.style.color = "orange";
    } else {
      mensaje.textContent = "Cuenta bloqueada ❌";
      mensaje.style.color = "red";
    }
  }
}