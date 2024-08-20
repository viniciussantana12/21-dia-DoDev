let nomes = [];
let notas = [];
let continuar = true;

while (continuar) {
    let nome = prompt("Digite o nome do aluno:");
    let nota = parseFloat(prompt("Digite a nota do aluno:"));

    nomes.push(nome);
    notas.push(nota);

    let resposta = prompt("Deseja inserir mais um aluno? (s/n)");
    if (resposta.toLowerCase() !== 's') {
        continuar = false;
    }
}

let somaNotas = 0;

console.log("Notas dos alunos:");
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i] + ": " + notas[i]);
    somaNotas += notas[i];
}

let media = somaNotas / nomes.length;

console.log("Soma das notas: " + somaNotas);
console.log("Média geral da turma: " + media);
