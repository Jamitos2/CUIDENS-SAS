document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        let nombre = document.getElementById("nombre").value.trim();
        let apellidos = document.getElementById("apellidos").value.trim();
        let correo = document.getElementById("correo").value.trim();
        let mensaje = document.getElementById("mensaje").value.trim();
        
        if (nombre === "") {
            alert("Por favor, ingrese su nombre.");
            return;
        }
        
        if (apellidos === "") {
            alert("Por favor, ingrese sus apellidos.");
            return;
        }

        if (!validarCorreo(correo)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            return;
        }
        
        if (mensaje === "") {
            alert("Por favor, ingrese su mensaje.");
            return;
        }
        
        alert("Formulario enviado correctamente.");
        form.submit();
    });

    function validarCorreo(correo) {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(correo);
    }
});
