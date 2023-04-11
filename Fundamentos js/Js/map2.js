const carrinho = [
    '{"nome": "borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }'
]

const mostraPreco = e => JSON.parse(e).preco

let resultado = carrinho.map(mostraPreco)

console.log(resultado)