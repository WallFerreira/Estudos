const notas = [6.1, 3.1, 4.4, 7.2, 9.5]

for (let i in notas) {
    console.log(i, notas[i]) // recebe o índice do array
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 56
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
} 
