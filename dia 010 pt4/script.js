function calcularSequenciaFibonacci(inicio) {
    let fibonacciArray = [];
    
    
    fibonacciArray[0] = inicio - 1;
    fibonacciArray[1] = inicio;


    for (let i = 2; i < 10; i++) {
        fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    }

    return fibonacciArray;
}

let numero = parseInt(prompt("Digite um número inteiro positivo:"));


if (numero > 0) {
    let sequenciaFibonacci = calcularSequenciaFibonacci(numero);
    console.log("Sequência de Fibonacci a partir de " + (numero - 1) + ": " + sequenciaFibonacci.join(", "));
} else {
    console.log("Por favor, digite um número inteiro positivo.");
}
