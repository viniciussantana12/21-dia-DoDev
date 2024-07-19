let confirmar = "n"
let salarioAtual
while(confirmar != "s") {
    let nome = prompt("Digite seu nome")
    let idade = parseInt(prompt("Digite sua idade"))
    salarioAtual = parseFloat(prompt("Digite o seu salário atual"))
    console.log("nome: " + nome + ", idade: " + idade + ", salário atual: " + salarioAtual)
    confirmar = prompt("As informações estão corretas? (s/n)");
}


let aumento = 0.015
console.log("Previsão salarial para os próximos 10 anos:")

for (let ano = 1; ano <= 10; ano++) {
    salarioAtual += salarioAtual * aumento
    aumento *= 2

    console.log((2023 + ano) + " = R$ " + salarioAtual)
}

