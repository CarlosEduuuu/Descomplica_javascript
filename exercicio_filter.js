//Exercicio Filter
//Dado o seguinte array de objs, crie um filter para mostrar somente obs que tenham a categoria eletronico

var produtos = [{ id: 1, descricao: "smartPhone", categoria: "eletronico" },
{ id: 2, descricao: "Tv Led", categoria: "eletronico" },
{ id: 3, descricao: "Fogão", categoria: "Eletrodoméstico" },
{ id: 4, descricao: "Geladeira", categoria: "Eletrodoméstico" }
];

//função express
var eletronicos = produtos.filter(
    function(valor){
    return valor.categoria == "eletronico";
});
console.log(eletronicos);

//forma inline
var reslt = produtos.filter(x => x.categoria == "eletronico");
console.log(reslt);

//função 
function busca_produtos(valor){
    return valor.categoria == "eletronico";
}

var numerosEncontrados = produtos.filter(busca_produtos);
console.log(numerosEncontrados);

//função anônima
var r1 = produtos.filter((valor) => {
    return valor.categoria == "eletronico";
});
console.log(r1);


var r2 = produtos.filter (valor => valor.categoria == "eletronico");
console.log(r2);