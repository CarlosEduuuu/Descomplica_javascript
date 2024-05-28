//faz um corte no array (mudifica o array original porém é possível edita-lo)
var arr = [1,2,3,4,5,6,7];
//a partir da posição 2, retirar 3 elementos
console.log(arr.splice(2, 1));
//exibe o arry origigal modificado
console.log(arr);
//retira dois elementos e substitui-os
console.log(arr.splice(2,2,100,200));
//exibe o arry substituído
console.log(arr);

//adiciona mais um elemento no primeiro lugar no vetor
var pais = ["Brasil","Peru", "Chile"];
console.log(pais);
//retira o primeiro elemento de um array
pais.shift();
//exibe array 
console.log(pais);
//adiciona um elemento no inicio de um array
pais.unshift("Colombia");
console.log(pais);