```javascript
const formulario = document.getElementById("formularioVotacion");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const grado = document.getElementById("grado").value;

    const candidato = document.querySelector(
        'input[name="candidato"]:checked'
    );

    const cabildante = document.querySelector(
        'input[name="cabildante"]:checked'
    );

    const contralor = document.querySelector(
        'input[name="contralor"]:checked'
    );

    if (grado === "") {
        mensaje.innerHTML = "⚠️ Debes seleccionar tu grado.";
        mensaje.style.background = "#ffe5e5";
        mensaje.style.color = "#b00000";
        return;
    }

    if (!candidato || !cabildante || !contralor) {
        mensaje.innerHTML =
            "⚠️ Debes seleccionar una opción para cada cargo.";
        mensaje.style.background = "#ffe5e5";
        mensaje.style.color = "#b00000";
        return;
    }

    const confirmar = confirm(
        "¿Estás seguro de que quieres confirmar tu votación?"
    );

    if (!confirmar) {
        return;
    }

    mensaje.innerHTML =
        "✅ Votación realizada correctamente. ¡Gracias por participar!";

    mensaje.style.background = "#e4f8e9";
    mensaje.style.color = "#16733a";

    formulario.reset();
});
```
