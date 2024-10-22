//respuesta 1
function verificarRespuesta1() {
    const respuesta = document.getElementById("respuesta").value.toLowerCase();
    const resultadoDiv = document.getElementById("result");

    if (respuesta === "1000 milímetros") {
        resultadoDiv.textContent = "¡Correcto!";
        resultadoDiv.style.color = "green";
    }
    else if (respuesta === "1000 mm") {
        resultadoDiv.textContent = "¡Correcto!";
        resultadoDiv.style.color = "green";
    } 
    else if (respuesta === "1000") {
        resultadoDiv.textContent = "¡Correcto! pero Recuerda que su unidad de medida es milímetros";
        resultadoDiv.style.color = "green";
    }
    else {
        resultadoDiv.textContent = "Incorrecto.";
        resultadoDiv.style.color = "red";
    }
}
//respuesta 2
function verificarRespuesta2() {
    const respuesta2 = document.getElementById("respuesta2").value.toLowerCase();
    const resultadoDiv2 = document.getElementById("result2");

    if (respuesta2 === "3600 segundos") {
        resultadoDiv2.textContent = "¡Correcto!";
        resultadoDiv2.style.color = "green";
    } 
    else if (respuesta2 === "3600 s") {
        resultadoDiv2.textContent = "¡Correcto!";
        resultadoDiv2.style.color = "green";
    } 
    else if (respuesta2 === "3600") {
        resultadoDiv2.textContent = "¡Correcto! pero  Recuerda que su unidad de medida es segundos";
        resultadoDiv2.style.color = "green";
    }
    else {
        resultadoDiv2.textContent = "Incorrecto.";
        resultadoDiv2.style.color = "red";
    }
}
//respuesta 3
function verificarRespuesta3() {
    const respuesta3 = document.getElementById("respuesta3").value.toLowerCase();
    const resultadoDiv3 = document.getElementById("result3");

    if (respuesta3 === "5000 gramos") {
        resultadoDiv3.textContent = "¡Correcto!";
        resultadoDiv3.style.color = "green";
    } 
    else if (respuesta3 === "5000 gr") {
        resultadoDiv3.textContent = "¡Correcto!";
        resultadoDiv3.style.color = "green";
    }
    else if (respuesta3 === "5000") {
        resultadoDiv3.textContent = "¡Correcto! pero Recuerda que su unidad de medida es gramos";
        resultadoDiv3.style.color = "green";
    }
    else {
        resultadoDiv3.textContent = "Incorrecto.";
        resultadoDiv3.style.color = "red";
    }
}
//respuesta 4
function verificarRespuesta4() {
    const respuesta4 = document.getElementById("respuesta4").value.toLowerCase();
    const resultadoDiv4 = document.getElementById("result4");

    if (respuesta4 === "10000 metros") {
        resultadoDiv4.textContent = "¡Correcto!";
        resultadoDiv4.style.color = "green";
    } 
    else if (respuesta4 === "10000 m") {
        resultadoDiv4.textContent = "¡Correcto!";
        resultadoDiv4.style.color = "green";
    }
    else if (respuesta4 === "10000") {
        resultadoDiv4.textContent = "¡Correcto! pero Recuerda que su unidad de medida es metros";
        resultadoDiv4.style.color = "green";
    }
    else {
        resultadoDiv4.textContent = "Incorrecto.";
        resultadoDiv4.style.color = "red";
    }
}
//respuesta 5
function verificarRespuesta5() {
    const respuesta5 = document.getElementById("respuesta5").value.toLowerCase();
    const resultadoDiv5 = document.getElementById("result5");

    if (respuesta5 === "1000 litros") {
        resultadoDiv5.textContent = "¡Correcto!";
        resultadoDiv5.style.color = "green";
    }
    else if (respuesta5 === "1000 l") {
        resultadoDiv5.textContent = "¡Correcto!";
        resultadoDiv5.style.color = "green";
    }
    else if (respuesta5 === "1000") {
        resultadoDiv5.textContent = "¡Correcto! pero Recuerda que su unidad de medida es litros";
        resultadoDiv5.style.color = "green";
    }
    else {
        resultadoDiv5.textContent = "Incorrecto. Intenta de nuevo.";
        resultadoDiv5.style.color = "red";
    }
}
//respuesta 6
function verificarRespuesta6() {
    const respuesta6 = document.getElementById("respuesta6").value.toLowerCase();
    const resultadoDiv6 = document.getElementById("result6");

    if (respuesta6 === "25 m/s") {
        resultadoDiv6.textContent = "¡Correcto!";
        resultadoDiv6.style.color = "green";
    }
    else if (respuesta6 === "25") {
        resultadoDiv6.textContent = "¡Correcto! pero Recuerda que su unidad de medida es m/s";
        resultadoDiv6.style.color = "green";
    }
    else {
        resultadoDiv6.textContent = "Incorrecto. Intenta de nuevo.";
        resultadoDiv6.style.color = "red";
    }
}
//respuesta 7
function verificarRespuesta7() {
    const respuesta7 = document.getElementById("respuesta7").value.toLowerCase();
    const resultadoDiv7 = document.getElementById("result7");

    if (respuesta7 === "9.81 Newtons") {
        resultadoDiv7.textContent = "¡Correcto!";
        resultadoDiv7.style.color = "green";
    } 
    else if (respuesta7 === "9.81 N") {
        resultadoDiv7.textContent = "¡Correcto!";
        resultadoDiv7.style.color = "green";
    }
    else if (respuesta7 === "9.81") {
        resultadoDiv7.textContent = "¡Correcto! pero pero Recuerda que su unidad de medida es Newtons";
        resultadoDiv7.style.color = "green";
    }
    else {
        resultadoDiv7.textContent = "Incorrecto. Intenta de nuevo.";
        resultadoDiv7.style.color = "red";
    }
}
//resultado 8
function verificarRespuesta8() {
    const respuesta8 = document.getElementById("respuesta8").value.toLowerCase();
    const resultadoDiv8 = document.getElementById("result8");

    if (respuesta8 === "735.5 vatios") {
        resultadoDiv8.textContent = "¡Correcto!";
        resultadoDiv8.style.color = "green";
    }
    else if (respuesta8 === "735.5") {
        resultadoDiv8.textContent = "¡Correcto! pero pero Recuerda que su unidad de medida es vatios";
        resultadoDiv8.style.color = "green";
    }
    else {
        resultadoDiv8.textContent = "Incorrecto. Intenta de nuevo.";
        resultadoDiv8.style.color = "red";
    }
}
//resultado 9
function verificarRespuesta9() {
    const respuesta9 = document.getElementById("respuesta9").value.toLowerCase();
    const resultadoDiv9 = document.getElementById("result9");

    if (respuesta9 === "2 g/cm³") {
        resultadoDiv9.textContent = "¡Correcto!";
        resultadoDiv9.style.color = "green";
    } 
    if (respuesta9 === "2") {
        resultadoDiv9.textContent = "¡Correcto! pero Recuerda que su unidad de medida es g/cm³";
        resultadoDiv9.style.color = "green";
    }
    else {
        resultadoDiv9.textContent = "Incorrecto. Intenta de nuevo.";
        resultadoDiv9.style.color = "red";
    }
}
//resultado 10
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

