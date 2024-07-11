let nome = ""
let idade = 0
let altura = 0
let peso = 0

nome = prompt('Qual é seu nome?')
idade = parseInt(prompt('Qual é sua idade?'))
altura = parseFloat(prompt('Qual é sua altura?'))
peso = parseInt(prompt('Qual é seu peso?'))


let anoNasc = 0
anoNasc = 2023 - idade

let IMC = 0
IMC = peso / (altura * altura)

console.log('Olá ' + nome + ", você tem " + idade + " anos, nasceu em " + anoNasc + ", tem " + altura + " de altura, pesa " + peso + "kg e seu IMC é " + IMC)