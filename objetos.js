//função para calcula dois valores

function calcula_valor(a, b) {
    return a + b;
}

var result = calcula_valor(3, 5);
console.log(result);


//passo passar 1,2 ou 3 parâmetros
function calcula_valor_2(a = 0, b = 5, c = 5) {
    return a + b + c;
}
var result2 = calcula_valor_2();
console.log(result2)


function calcularVariosParametros(...args) {
    console.log(args);
}

var result3 = calcularVariosParametros(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


