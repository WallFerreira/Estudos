//exibindo o valor da somatória a cada posição do array e também o índice sendo percorrido

var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;

function somar(item, indice) {
    total += item;
    console.log("[índice " + indice + "]= " + total + " -> ");
}

numeros.forEach(somar);