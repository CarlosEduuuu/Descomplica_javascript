class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
        this.desligado =true;
    }

    ligar(){
        if(this.ligado){
            console.log("já está ligado!");
            return//para sair da função
        }
        this.ligado = true;
    }
    desligar(){
        if(this.desligado){
            console.log("Já está desligado");
            return
        }
        this.desligado = true;
     }
}
 

class SmathPhone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

var s1 = new DispositivoEletronico("Samsung");

var s2 = new SmathPhone("Lg", "preto" , "A23s")
console.log(s1);
console.log(s2);

s1.desligar();
s1.desligar();
s1.ligar();
s1.ligar();


