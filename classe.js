//criação da class
class Pessoas {
    //construtor de objetos
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    //métodos
    falar() {
        console.log("Olá " + this.nome);
    }
    //métodos
    get nomeCompleto() {
        console.log("Meu nome completo é: " + this.nome + " " + this.sobrenome);
    }
}
//criação do objeto
p1 = new Pessoas("Carlos", "Eduardo");
p2 = new Pessoas("Carla", "Ferreira");
p3 = new Pessoas("marcos" , "Felix");

//chamada dos métodos get
p1.falar();
p2.nomeCompleto;
p3.falar();
p3.nomeCompleto;