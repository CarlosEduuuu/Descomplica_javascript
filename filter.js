//filter 
//filtrar um array se determinada condição for atendida
//necessário nova variavel
//Não modifica o array

var arr = [1,2,3,4,5,6,7,8,9 ];

//forma inline
var reslt = arr.filter(item => item % 2 == 0);
console.log(reslt);


//função express
var numeros_filtrados = arr.filter(
    function(valor){
        return valor % 2 == 0;
    }
)
console.log(numeros_filtrados);

//função 
function buscaValores(valor){
    return valor % 2 == 0;
}

var numerosEncontrados = arr.filter(buscaValores);
console.log(numerosEncontrados);



//função anônima
var r1 = arr.filter((valor) => {
    return valor % 2 == 0;
});
console.log(r1);


var r2 = arr.filter (valor => valor % 2 ==0);
console.log(r2);