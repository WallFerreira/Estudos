//  função factory a a partir dos parâmetros

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Coca-cola', '7.50'))
console.log(criarProduto('Guaraná Antártica', '6.50'))