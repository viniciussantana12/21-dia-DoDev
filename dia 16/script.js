let nomes = [];
let senhas = [];

function solicitarOpcao() {
    let escolha = prompt(
        "O que você deseja fazer?\n" +
        "Digite 'cadastrar' para Cadastro\n" +
        "Digite 'login' para Fazer Login\n" +
        "Digite 'excluir' para Excluir um Cadastro\n" +
        "Digite 'encerrar' para Encerrar o Programa"
    ).toLowerCase();
    return escolha;
}

function cadastrar() {
    let nome = prompt("Digite um nome:");
    let senha = prompt("Digite uma senha:");
    nomes.push(nome);
    senhas.push(senha);
    console.log("Cadastro realizado com sucesso!");
}

function login(nome, senha) {
    let index = nomes.indexOf(nome);
    if (index !== -1 && senhas[index] === senha) {
        return true;
    } else {
        return false;
    }
}

function excluirCadastro(nome) {
    let index = nomes.indexOf(nome);
    if (index !== -1) {
        nomes.splice(index, 1);
        senhas.splice(index, 1);
        console.log("Cadastro excluído com sucesso!");
    } else {
        console.log("Nome não encontrado.");
    }
}

let continuar = true;

while (continuar) {
    let opcao = solicitarOpcao();

    switch (opcao) {
        case 'cadastrar':
            cadastrar();
            break;
        case 'login':
            let nomeLogin = prompt("Digite seu nome:");
            let senhaLogin = prompt("Digite sua senha:");
            if (login(nomeLogin, senhaLogin)) {
                console.log("Login feito com sucesso!");
            } else {
                console.log("Nome ou senha incorretos!");
            }
            break;
        case 'excluir':
            let nomeExcluir = prompt("Digite o nome que deseja excluir:");
            excluirCadastro(nomeExcluir);
            break;
        case 'encerrar':
            console.log("Encerrando o programa.");
            continuar = false;
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }

    if (continuar) {
        continuar = prompt("Deseja continuar? (s/n)").toLowerCase() === 's';
    }
}

console.log("Programa encerrado.");
