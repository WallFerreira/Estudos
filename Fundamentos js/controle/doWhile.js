function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let numero = -1;

do {
    numero =getInteiroAleatorioEntre(-1, 10)
    console.log(numero)
} while (numero != -1)

console.log('### FIM DE JOGO ###')
