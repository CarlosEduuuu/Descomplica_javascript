//É usado para percorrer um array, mas usa uma função de modo diferente do for tradicional
var arr = [10,20,30,40,50];

//imprimir o array
arr.forEach(valor => console.log(valor));

arr.forEach(function(valor, ele){
    console.log(valor);
});