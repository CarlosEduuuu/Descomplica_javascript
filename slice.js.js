//Slice
//não modifica o array, ele retorna os elementos desejados
var arr = [1,2,3,4,5,6,7,8,9];

//retirar elementos da posição 1 até uma antes do 5 e salva na variavel retirados
var retirados = arr.slice(1,5);
//exibe os elementos que foram retirados
console.log("slice");
console.log("Elementos retirados: " + retirados);
//exibe o arr intacto
console.log("Array intácto: " + arr);