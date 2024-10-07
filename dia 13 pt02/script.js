
class Carro {
  constructor(nome, potencia, velocidadeMaxima, aceleracao) {
      this.nome = nome; 
      this.potencia = potencia; 
      this.velocidadeMaxima = velocidadeMaxima; 
      this.aceleracao = aceleracao; 
  }

  calcularTempo(distancia) {
      const tempo = distancia / (this.velocidadeMaxima / this.aceleracao);
      return tempo;
  }
}


class Corrida {
  constructor(nome, tipo, distancia, participantes) {
      this.nome = nome; 
      this.tipo = tipo; 
      this.distancia = distancia; 
      this.participantes = participantes; 
      this.vencedor = null; 
  }

  verificarVencedor() {
      let menorTempo = Infinity;
      let vencedor = null;

      this.participantes.forEach((carro) => {
          const tempo = carro.calcularTempo(this.distancia);
          if (tempo < menorTempo) {
              menorTempo = tempo;
              vencedor = carro.nome;
          }
      });

      this.vencedor = vencedor;
  }

  exibirVencedor() {
      if (this.vencedor) {
          console.log(`O vencedor da corrida é: ${this.vencedor}`);
      } else {
          console.log("Ainda não foi determinado o vencedor da corrida.");
      }
  }
}


const carro1 = new Carro("Ferrari", 1000, 350, 2.5);
const carro2 = new Carro("Mercedes", 950, 340, 2.7);
const carro3 = new Carro("McLaren", 920, 330, 3.0);

const participantes = [carro1, carro2, carro3];

const corrida = new Corrida("Silverstone", "Fórmula 1", 5000, participantes);

corrida.verificarVencedor();
corrida.exibirVencedor();
