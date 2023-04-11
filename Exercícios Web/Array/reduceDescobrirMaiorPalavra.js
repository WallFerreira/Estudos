const palavras = ['oi', 'olaaaar', 'paralelepípedo', 'parangaticutirimiruaro']

const maiorPalavra = palavras.reduce((maiorPalavra, palavraAtual) => {
    console.log(maiorPalavra)
    console.log(palavraAtual)

    if (palavraAtual.length > maiorPalavra.length) {
        return palavraAtual

    } else return maiorPalavra

}, '.')

console.log(maiorPalavra)