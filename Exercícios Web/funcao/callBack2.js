const notas = [7.7, 6.5, 8.5, 5.2, 6.8, 9.0, 3.3]

//sem callback

const notasBaixas1 = []

for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)


//com callback

const notasBaixas2 = notas.filter(nota => nota < 7) //é gerado novo array como resposta da função FILTER com os elementos filtrados
console.log(notasBaixas2)


const notasMenoresQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenoresQue7) 
console.log(notasBaixas3)