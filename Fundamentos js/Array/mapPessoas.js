const pessoas = [
    { id: 4, nome: 'Hebe Camargo' },
    { id: 3, nome: 'Chorão' },
    { id: 2, nome: 'Ruffus' },
    { id: 1, nome: 'Pedro de Lara' },
];

// function filtraPessoas(pessoa) {
//     pessoa.id + 1
//     return pessoa
// }

const pessoasFiltradas = pessoas.map((pessoa) => pessoa.id +1)

console.log(pessoasFiltradas)