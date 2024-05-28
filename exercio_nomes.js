






// Criar um array com 5 nomes: Guilherme, Manoel, Samoel , Davi, João.
var nomes = ["Guilherme","Manoel","Samoel","Davi","João"];
console.log("Criar um array com 5 nomes: " + nomes);

// 2 - Acrescentar nome Mônica array
nomes.push(" Mônica");
console.log("Acrescentar nome Mônica no inicio do array: " + nomes);

// 3 - Retirar último elemento do array (Devemos crir um novo array para a retirada pois, o pop vai retirar o último elemeto e os outros serão perdidos.)
nomes.pop();
console.log("Retirar último elemento do array: " + nomes);

// Retirar o primeiro nuumero de um array
nomes.shift();
console.log("Retirar o primeiro nuumero de um array: " + nomes );

// 4 - Encontre a posição do Samoel
console.log("Posição do Samoel: ");
console.log(nomes.indexOf("Samoel"));


// 5 - Trocar o Manoel por Emanoel
nomes.splice(0,1,"Emanoel");
console.log("Trocar o Manoel por Emanoel: " + nomes);