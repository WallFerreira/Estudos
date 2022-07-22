const numeros = [2, 5, 6, 40, 22, 63, 15, 36, 18, 123]


function media(acc, numero) {    // é passado o 1º parâmetro que é o acumulador(acc) e o 2º como o elemento(numero) do array
  
    console.log(acc, numero)
    const novoTotal = acc.total + numero
    const novaQtde = acc.qtde + 1

    return {
        total: novoTotal,
        qtde: novaQtde,
        media: novoTotal / novaQtde
    }
}

const valorInicial = { total: 0, qtde: 0, media: 0 }

const valorFinal = numeros.reduce(media, valorInicial)

console.log(valorFinal.media)