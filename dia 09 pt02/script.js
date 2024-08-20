let continuar;

do {

let idade = parseInt(prompt("Digite sua idade"))
let peso = parseInt(prompt("Digite seu peso em kg"))
let altura = parseFloat(prompt("Digite sua altura em metros"))

let IMC = peso / (altura * altura)
if (IMC < 18.5) {
    console.log(" Seu IMC é " + IMC + "kg/m2, e você está na faixa de magreza.")
} else if (IMC >= 18.5 && IMC < 24.9) {
    console.log(" Seu IMC é " + IMC + "kg/m2, e você está na faixa normal.")
} else if(IMC >= 24.9 && IMC < 30) {
    console.log(" Seu IMC é " + IMC + "kg/m2, e você está na faixa de sobrepeso.")
} else if(IMC >= 30) {
    console.log(" Seu IMC é " + IMC + "kg/m2, e você está na faixa de obesidade.")
}

let anoAtual = 2023
let anoNasc = anoAtual - idade 
console.log("Você nasceu no ano de " + anoNasc)

let anoVivido = anoNasc
let idadeAtual = 0

for ( anoVivido = anoNasc; anoVivido <= anoAtual; anoVivido++) {
    console.log(anoVivido + " - " + idadeAtual + " anos de idade")
    idadeAtual++
}


     continuar = prompt("Deseja inserir os dados novamente? (s/n)").toLowerCase();
} while (continuar == "s")