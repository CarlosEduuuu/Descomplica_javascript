var arr = new Array(1, 2, 4, 5, 7, 9, 12, 34);

var aux = 0;
for (var x = 0; x < arr.length; x++) {
    if (arr[x] > aux) {
        aux = arr[x];
    }
}console.log(aux);