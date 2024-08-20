
const fome = prompt("Você está com fome? (sim/não)")
const dinheiro = prompt("Você tem dinheiro? (sim/não)")
const restauranteAberto = prompt("O restaurante está aberto? (sim/não)")


if(fome === "não" || dinheiro == "não" ){
    console.log("Hoje a janta será em casa");
} else if(dinheiro === "sim" && restauranteAberto === "sim"){
    console.log("Hoje o jantar será no seu restaurante preferido!")
} else{
    console.log("peça um delivery")
}
