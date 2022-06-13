function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1

console.log(getPreco())
console.log(produto.getPreco())


const carro = {
    preco: 20450,
    desc: 0.20
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.12, '$'))   // Chamando a função call, você passa os params diretamente dentro da função
console.log(getPreco.apply(global, [0.11, '$'])) // Chamando a função apply, 1º se define o contexto(objeto) e depois um Array com os params.