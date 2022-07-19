const meuNomeCompleto = [
    { nome: 'Wallace' },
    { nome: 'Vilasboas' },
    { nome: 'Ferreira' },
]

console.log('Logando partes do nome')
meuNomeCompleto.forEach((umaParteDoNome) => {
    console.log(umaParteDoNome.nome)
})

console.log('Logando o indice de cada parte do nome')
meuNomeCompleto.forEach(function(umaParteDoNome, posicao){
    console.log(`A parte ${umaParteDoNome.nome} está na posição:  ${posicao}`)
    
})

console.log('Logando cada nome e o array completo')
