//função com objetos

//criando um objeto com atributos
var pessoas = {
nome: "Carlos",
sobrenome: "Eduardo"
}


//criando um objeto com atributos de outra forma
var pessoa1 = new Object();
pessoa1.nome = "Maria";
pessoa1.sobrenome = "Da sila";

//função de um objeto
pessoa1.falarnome = function(){
    console.log("Meu nome é : " + this.nome);
}

console.log("Sobrenome: " + pessoas.sobrenome);
console.log("Sobrenome: " + pessoa1.sobrenome);

//chamado a função do objeto
pessoa1.falarnome();

//criar função para criar um objeto com nome e sobrenome
function criarObejoto( nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    console.log("Seu nome completo é: " + nome + " " + sobrenome);
}
//chamando a função
criarObejoto("Luiz", "ferreira");