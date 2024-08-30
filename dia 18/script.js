class Livro {
    constructor(titulo, autor, editora, anoPublicacao) {
        this.Titulo = titulo;
        this.Autor = autor;
        this.Editora = editora;
        this.AnoPublicacao = anoPublicacao;
        this.Disponibilidade = true;
    }
}

let livros = [];
livros.push(new Livro("livro1", "Marcos", "Editora A", 2001));
livros.push(new Livro("livro2", "Marcos", "Editora F", 1997));
livros.push(new Livro("livro3", "Carlos", "Editora F", 2010));
livros.push(new Livro("livro4", "João", "Editora A", 2005));
livros.push(new Livro("livro5", "Fábio", "Editora C", 2020));

class Biblioteca {
    constructor(nome, endereco, telefone, acervoLivros) {
        this.Nome = nome;
        this.Endereco = endereco;
        this.Telefone = telefone;
        this.AcervoLivros = acervoLivros;
    }

    BuscarLivrosPeloTitulo(titulo) {
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo === titulo) {
                console.log(livro);
            }
        });
    }

    EmprestarLivro(titulo) {
        let emprestado = false;
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo === titulo) {
                if (livro.Disponibilidade === true) {
                    livro.Disponibilidade = false;
                    emprestado = true;
                    console.log(`O livro "${titulo}" foi emprestado.`);
                }
            }
        });
        if (!emprestado) {
            console.log(`O livro "${titulo}" não está disponível para empréstimo.`);
        }
        return emprestado;
    }

    DevolverLivro(titulo) {
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo === titulo) {
                livro.Disponibilidade = true;
                console.log(`O livro "${titulo}" foi devolvido com sucesso.`);
            }
        });
    }
}

let biblioteca = new Biblioteca("Biblioteca DoDev", "Rua 2", "123456", livros);

biblioteca.BuscarLivrosPeloTitulo("livro2");
biblioteca.EmprestarLivro("livro1");
biblioteca.DevolverLivro("livro1")