//reduce
//reduz o array a um único valor
//Ex: uma soma

var numeros = [2,3,12,4,7,90,33];

var soma = numeros.reduce(function(total, numero){
return total += numero;
});
console.log(soma);


var somados = numeros.reduce(function(total, ele){
    return total += ele;
},200);//valor inicial do total
console.log(somados);


