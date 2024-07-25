let nomes = [];
let senhas = [];
let continuar = true;

while(continuar) {
    
    let escolha = prompt(
        "O que você quer fazer?\n" +
        "Digite 1 para Cadastro\n" +
        "Digite 2 para Login\n" +
        "Digite 3 para Excluir um Cadastro\n" +
        "Digite 4 para Encerrar o Programa"
    );
    switch(escolha) {
        case "1":
            let nome = prompt("Digite um nome")
            let senha = prompt("digite uma senha")
            nomes.push(nome)
            senhas.push(senha)
            break;
        case "2":
            let nomeLogin = prompt("Digite seu login")
            let senhaLogin = prompt("digite sua senha")
            let indexLogin = nomes.indexOf(nomeLogin);

            if(indexLogin !== -1 && senhas[indexLogin] === senhaLogin) {
                console.log("Login sucessfull")
            }else{
                console.log("Erro: Nome ou senha incorretos.")
            }
            break;
        case "3":
            let nomeExcluir = prompt("Digite o login que quer excluir");
            let senhaExcluir = prompt("Digite sua senha");
            let indexExcluir = nomes.indexOf(nomeExcluir);
      
            if (indexExcluir !== -1 && senhas[indexExcluir] === senhaExcluir) {
              nomes.splice(indexExcluir, 1);
              senhas.splice(indexExcluir, 1);
              console.log("Cadastro excluído com sucesso.");
            } else {
              console.log("Erro: Nome ou senha incorretos.");
            }
            break;
        case "4":
            console.log("Encerrando o programa.");
            continuar = false;
            break;
        default:
            alert("inválido");
    }

    let resposta = prompt("Deseja voltar? (s/n)").toLowerCase();
    if (resposta !== "s") {
        continuar = false;
    }
    
}