const produtos = [
    { nome: 'Notebook', preco: 2999, fragil: true },
    { nome: 'Ipad PRO', preco: 4199, fragil: true },
    { nome: 'Copo de plastico', preco: 12.49, fragil: false },
    { nome: 'Chinelo Havaianas', preco: 19.99, fragil: false },
    { nome: 'Display 29" Gamer', preco: 4500, fragil: true },
    { nome: 'Estatua Hulk', preco: 4500, fragil: false }
]


console.log(produtos.filter(p => p.fragil != false && p.preco > 2500))


