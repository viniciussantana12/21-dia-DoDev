let hoteis = [];
let reservas = [];

// Função para verificar se um ID já existe em um array 
function verificarIdExistente(array, id) {
    return array.some(item => item.id === id);
}

// Função para cadastrar um hotel 
function cadastrarHotel(id, nome, categoria, endereco, telefone) {
    if (verificarIdExistente(hoteis, id)) {
        console.log("Erro: ID do hotel já existe.");
        return;
    }

    let novoHotel = {
        id: id,
        nome: nome,
        categoria: categoria,
        endereco: endereco,
        telefone: telefone
    };

    hoteis.push(novoHotel);
    console.log("Hotel cadastrado com sucesso!");
}

// Função para cadastrar uma reserva
function cadastrarReserva(id, idHotel, nomeResponsavel, diaEntrada, diaSaida) {
    if (verificarIdExistente(reservas, id)) {
        console.log("Erro: ID da reserva já existe.");
        return;
    }

    let hotel = hoteis.find(hotel => hotel.id === idHotel);
    if (!hotel) {
        console.log("Erro: Hotel com ID " + idHotel + " não encontrado.");
        return;
    }

    if (new Date(diaEntrada) > new Date(diaSaida)) {
        console.log("Erro: O dia de entrada não pode ser maior que o dia de saída.");
        return;
    }

    let novaReserva = {
        id: id,
        idHotel: idHotel,
        nomeResponsavel: nomeResponsavel,
        diaEntrada: diaEntrada,
        diaSaida: diaSaida
    };

    reservas.push(novaReserva);
    console.log("Reserva cadastrada com sucesso!");
}

function exibirReservasPorHotel(idHotel) {
    let hotel = hoteis.find(hotel => hotel.id === idHotel);
    if (!hotel) {
        console.log("Erro: Hotel com ID " + idHotel + " não encontrado.");
        return;
    }

    console.log(`Reservas no hotel ${hotel.nome}:`);
    reservas.forEach(reserva => {
        if (reserva.idHotel === idHotel) {
            console.log(`Nome do responsável: ${reserva.nomeResponsavel}, Dia de entrada: ${reserva.diaEntrada}, Dia de saída: ${reserva.diaSaida}`);
        }
    });
}

function exibirDetalhesReserva(idReserva) {
    let reserva = reservas.find(reserva => reserva.id === idReserva);
    if (!reserva) {
        console.log("Erro: Reserva com ID " + idReserva + " não encontrada.");
        return;
    }

    let hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);

    console.log(`Nome do hotel: ${hotel.nome}`);
    console.log(`Endereço: ${hotel.endereco}`);
    console.log(`Dia de entrada: ${reserva.diaEntrada}`);
    console.log(`Dia de saída: ${reserva.diaSaida}`);
}

function exibirReservasPorNome(nomeResponsavel) {
    console.log(`Reservas de ${nomeResponsavel}:`);
    reservas.forEach(reserva => {
        if (reserva.nomeResponsavel === nomeResponsavel) {
            let hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);
            console.log(`Hotel: ${hotel.nome}, Dia de entrada: ${reserva.diaEntrada}, Dia de saída: ${reserva.diaSaida}`);
        }
    });
}

function buscarHoteisPorCategoria(categoria) {
    return hoteis.filter(hotel => hotel.categoria === categoria);
}

function atualizarTelefoneHotel(idHotel, novoTelefone) {
    let hotel = hoteis.find(hotel => hotel.id === idHotel);
    if (!hotel) {
        console.log("Erro: Hotel com ID " + idHotel + " não encontrado.");
        return;
    }

    hotel.telefone = novoTelefone;
    console.log("Telefone atualizado com sucesso!");
}

function iniciarSistema() {
    let continuar = true;

    while (continuar) {
        let opcao = prompt(
            "O que você deseja fazer?\n" +
            "1. Cadastrar hotel\n" +
            "2. Cadastrar reserva\n" +
            "3. Exibir reservas por hotel\n" +
            "4. Exibir detalhes de uma reserva\n" +
            "5. Exibir reservas por nome\n" +
            "6. Buscar hotéis por categoria\n" +
            "7. Atualizar telefone de hotel\n" +
            "8. Encerrar programa"
        );

        switch (opcao) {
            case "1":
                let idHotel = prompt("Digite o ID do hotel:");
                let nomeHotel = prompt("Digite o nome do hotel:");
                let categoriaHotel = prompt("Digite a categoria do hotel:");
                let enderecoHotel = prompt("Digite o endereço do hotel:");
                let telefoneHotel = prompt("Digite o telefone do hotel:");
                cadastrarHotel(idHotel, nomeHotel, categoriaHotel, enderecoHotel, telefoneHotel);
                break;
            case "2":
                let idReserva = prompt("Digite o ID da reserva:");
                let idHotelReserva = prompt("Digite o ID do hotel:");
                let nomeResponsavel = prompt("Digite o nome do responsável:");
                let diaEntrada = prompt("Digite o dia de entrada (YYYY-MM-DD):");
                let diaSaida = prompt("Digite o dia de saída (YYYY-MM-DD):");
                cadastrarReserva(idReserva, idHotelReserva, nomeResponsavel, diaEntrada, diaSaida);
                break;
            case "3":
                let idHotelParaExibir = prompt("Digite o ID do hotel:");
                exibirReservasPorHotel(idHotelParaExibir);
                break;
            case "4":
                let idReservaParaExibir = prompt("Digite o ID da reserva:");
                exibirDetalhesReserva(idReservaParaExibir);
                break;
            case "5":
                let nomeParaExibir = prompt("Digite o nome do responsável:");
                exibirReservasPorNome(nomeParaExibir);
                break;
            case "6":
                let categoriaParaBuscar = prompt("Digite a categoria do hotel:");
                let hoteisEncontrados = buscarHoteisPorCategoria(categoriaParaBuscar);
                console.log("Hotéis encontrados:", hoteisEncontrados);
                break;
            case "7":
                let idHotelParaAtualizar = prompt("Digite o ID do hotel:");
                let novoTelefone = prompt("Digite o novo telefone do hotel:");
                atualizarTelefoneHotel(idHotelParaAtualizar, novoTelefone);
                break;
            case "8":
                continuar = false;
                console.log("Programa encerrado.");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}
