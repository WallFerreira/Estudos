Array.prototype.map2 = function (calback) {
    let newArray = []
    for (let i = 0; i < this.length; i++){
        newArray.push(calback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }'
]

const mostraPreco = e => JSON.parse(e).preco

let resultado = carrinho.map2(mostraPreco)

console.log(resultado)