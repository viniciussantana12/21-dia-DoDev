let saldo = 1000;
let maiorValorInserido = 0;
let somaValoresInseridos = 0;
let totalTransacoes = 0;
continuar = false 

do {
    const nome = prompt("Digite seu nome: ");
    const cpf = prompt("Digite seu CPF: ");
    const valor = Number(prompt("Digite o valor da transação: "));
    const operacao = prompt("Qual operação deseja fazer? S / D")

    if (valor < 0) {
        console.log("Valor inválido. A transação não foi realizada.");
    } else if ( operacao == "S" && valor > saldo) {
        console.log("Saldo insuficiente. A transação não foi realizada");
    } else if (operacao == "S") {
        console.log(`Olá, $(nome) (${cpf}), seu saldo atual é R$${saldo}.`);
        saldo -= valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        console.log(`transação realizada com sucesso. Seu saldo atual é R$${saldo}.`);
    } else {
        console.log(`olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}.`);
        saldo += valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        } 
        console.log(`Transação realizada com sucesso. Seu saldo atual é R$${saldo}.`);
    }

    const opcao = prompt("Deseja continuar? (1 para continuar, 2 para parar):");
    if (opcao === "1") {
        continuar = true
    } else if (opcao === "2") {
        continuar = false
    } else {
        console.log("Opção inválida. Programa encerrado.");
        continuar = false
    }
} while (continuar)

console.log(`Saldo final: R$${saldo}`);
console.log(`Maior valor inserido: R$${maiorValorInserido}`)
console.log(`Média dos valores inseridos: R$${(somaValoresInseridos / totalTransacoes)}`);