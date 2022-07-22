const pessoas = [
    {id: 4 ,nome: 'Hebe Camargo'},
    {id: 3 ,nome: 'Chorão'},
    {id: 2 ,nome: 'Ruffus'},
    {id: 1 ,nome: 'Pedro de Lara'},
];

const filtraPessoas = pessoas.map((pessoa) => pessoa.id < 3)

console.log(filtraPessoas)