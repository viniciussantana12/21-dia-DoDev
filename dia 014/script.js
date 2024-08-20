function solicitarInformacoes() {
    const nome = prompt("Digite o nome do colaborador:");
    const salario = parseFloat(prompt("Digite o salário do colaborador:"));
    
    calcularAumento(nome, salario);
}


function calcularAumento(nome, salario) {
    let percentualAumento;
    let salarioReajustado;

    
    if (salario <= 1500) {
        percentualAumento = 0.20; 
    } else if (salario <= 2000) {
        percentualAumento = 0.15; 
    } else if (salario <= 3000) {
        percentualAumento = 0.10; 
    } else {
        percentualAumento = 0.05; 
    }

    salarioReajustado = salario * (1 + percentualAumento);

    console.log(`Nome do colaborador: ${nome}`);
    console.log(`Salário atual: R$ ${salario.toFixed(2)}`);
    console.log(`Percentual de aumento: ${(percentualAumento * 100).toFixed(0)}%`);
    console.log(`Salário reajustado: R$ ${salarioReajustado.toFixed(2)}`);

    perguntarNovamente();
}

function perguntarNovamente() {
    const resposta = prompt("Deseja calcular novamente com novas informações? (s/n)").toLowerCase();
    
    if (resposta === 's') {
        solicitarInformacoes();
    } else {
        console.log("Programa encerrado.");
    }
}

solicitarInformacoes();

