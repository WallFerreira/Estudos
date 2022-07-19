//atualizar todas as strings de um array para que fiquem escritas em maiúsculo

var nomes = ["Alberto", "Alex", "Sandro", "Robson"];

function converterParaMaisculo(item, indice) {
    nomes[indice] = nomes[indice].toUpperCase();
}

nomes.forEach(converterParaMaisculo);
console.log(nomes);