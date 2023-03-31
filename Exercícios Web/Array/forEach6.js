//obter um novo array contendo apenas as marcas iniciadas com a letra “F”

var marcas = ["Fiat", "Chevrolet", "Ford", "Volkswagen"]
var marcasIniciadasComF = [];
var novoIndice = 0;

function selecionarMarcas(item, indice) {
    if (marcas[indice].indexOf("F") == 0) {
        marcasIniciadasComF[novoIndice] = marcas[indice];
        novoIndice++;
    }
}

marcas.forEach(selecionarMarcas);
console.log(marcasIniciadasComF);