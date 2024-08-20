let nome
let idade
let temCarta = false 
let temCarro = false 

nome = prompt("Qual é seu nome?")
idade = parseInt(prompt("Qual é a sua idade?"))
let opcaoCarta = prompt("Você possui carteira de motorista? (sim/não")
if(opcaoCarta == "sim") {
    temCarta = true
} 
let opcaoCarro = prompt("Você possui carro? (sim/não")
if(opcaoCarro == "sim") {
    temCarro = true
}



if(idade < 18 || !temCarta) {
    console.log( nome + ", você não pode dirigir")
} else if (idade >= 18 && temCarta && !temCarro) {
    console.log(nome + ", você pode dirigir mas não tem um carro")
} else {
    console.log(nome + ", você será o motorista!")
}