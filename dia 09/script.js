nome = prompt("Qual é o seu nome?")
idade = parseInt(prompt("Qual é a sua idade?"))
peso = parseInt(prompt("Qual é o seu peso?"))
altura = parseFloat(prompt("Qual é a sua altura?"))
profissao = prompt("Qual é a sua profissão?")

console.log("Olá! Eu sou o " + nome + "! Tenho " + idade + " anos, peso " + peso + "kg, minha altura é " + altura + ", e minha profissão é " + profissao + ".")

if(idade >= 18) {
    console.log("Está liberado para tomar umas geladas!")
} else {
    console.log("Sem gelada para você.")
}

let meses = idade * 12
let semanas = idade * 52
let dias = idade *365

console.log("Sua idade em meses é: " + meses)
console.log("Sua idade em semanas é: " + semanas)
console.log("Sua idade em dias é: " + dias)