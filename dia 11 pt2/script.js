let modelos = [];
let anos = [];
let valores = [];

let continuar = true;


while (continuar) {
    let modelo = prompt("Digite o modelo do carro:");
    let ano = parseInt(prompt("Digite o ano do carro:"));
    let valor = prompt("Digite o valor do carro:");

    valor = parseFloat(valor.replace(/\./g, '').replace(',', '.'));

    modelos.push(modelo);
    anos.push(ano);
    valores.push(valor);

    let resposta = prompt("Deseja adicionar outro carro? (s/n)").toLowerCase();
    if (resposta !== "s") {
        continuar = false;
    }
}

console.log("Carros inseridos:");
for (let i = 0; i < modelos.length; i++) {
    console.log(`${modelos[i]}, ${anos[i]} Valor: R$ ${valores[i].toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`);
}


function ordenarCarrosPorValor(modelos, anos, valores) {
    let n = valores.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (valores[j] > valores[j + 1]) {
                
                let tempValor = valores[j];
                valores[j] = valores[j + 1];
                valores[j + 1] = tempValor;

            
                let tempModelo = modelos[j];
                modelos[j] = modelos[j + 1];
                modelos[j + 1] = tempModelo;

            
                let tempAno = anos[j];
                anos[j] = anos[j + 1];
                anos[j + 1] = tempAno;
            }
        }
    }
}

ordenarCarrosPorValor(modelos, anos, valores);

console.log("\nCarros ordenados por valor:");
for (let i = 0; i < modelos.length; i++) {
    console.log(`${modelos[i]}, ${anos[i]} Valor: R$ ${valores[i].toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`);
}
