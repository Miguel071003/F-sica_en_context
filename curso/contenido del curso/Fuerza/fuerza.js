function verificarRespuesta10() {
    const respuesta10 = document.getElementById("respuesta10").value.toLowerCase();
    const resultadoDiv10 = document.getElementById("result10");

    if (respuesta10 === "500 centímetros") {
        resultadoDiv10.textContent = "¡Correcto!";
        resultadoDiv10.style.color = "green";
    } 
    if (respuesta10 === "500 cm") {
        resultadoDiv10.textContent = "¡Correcto!";
        resultadoDiv10.style.color = "green";
    }
    if (respuesta10 === "500") {
        resultadoDiv10.textContent = "¡Correcto! pero Recuerda que su unidad de medida son centímetros";
        resultadoDiv10.style.color = "green";
    }
    else {
        resultadoDiv10.textContent = "Incorrecto. Intenta de nuevo.";
        resultadoDiv10.style.color = "red";
    }
}