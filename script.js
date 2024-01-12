// Función para calcular el factorial de un número
function calcularFactorial(numero) {
    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }

    return resultado;
}


function esNumero(valor) {
    return !isNaN(parseFloat(valor)) && isFinite(valor);
}

let numero;

do {
    let input = prompt("Ingresa un número para calcular su factorial");

    if (esNumero(input)) {
        numero = parseFloat(input);
        break;
    } else {
        alert("Por favor, ingresa un número válido.");
    }
} while (true);


let factorial = calcularFactorial(numero);


document.write(`El factorial de ${numero} es: ${factorial}`);
