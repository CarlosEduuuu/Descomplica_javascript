var arr = [0,-1,-2,-3, 4,5,6,7];
var arr2 = [];


for(var x=0; x < arr.length; x++){
    if (arr[x] > 0){
        arr2.push(arr[x]);

    }
}
console.log("Array completo: " +arr);
console.log("Arraya de numeros positivos: " + arr2);