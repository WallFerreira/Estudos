//atualizar os valores declarados no array com os valores obtidos com a somatória de 
//cada posição e em seguida imprimimos os itens desse array

var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;

function somar(item, indice) {
    total += item;
    numeros[indice] = total;
}

numeros.forEach(somar);
console.log(numeros);