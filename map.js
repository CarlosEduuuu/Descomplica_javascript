//map 
//permite que vc interaja dentro de um array e modificar seus elementos usando uma função de calmback

//array de numeros
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//usando o map como se fosse um for
var numerosXdois = arr.map(
    function (valor) {
        return valor * 2;
    });
console.log(numerosXdois);

//vetor de objs
var funcionarios = [
    { nome: "Carlos", idade: 42 },
    { nome: "Eduardo", idade: 24 },
    { nome: "Felix", idade: 33 },
]
//exemplo de map 
var pessoas = funcionarios.map(pessoa => pessoa.nome);
console.log(pessoas);


//EXEMPLO DE FILTER
var nomesPessoas = funcionarios.filter( nomes => nomes.nome.length > 6);
console.log(nomesPessoas);




