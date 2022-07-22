const pokemons = [
    {
        name: 'Pikachu',
        type: 'Eletric'
    },
    {
        name: 'Charizard',
        type: 'Fire'
    },
    {
        name: 'Psiduck',
        type: 'Psychic'
    },
]

const objetoFinal = {
    eletric: [],
    fire: []
}

const pokemonsPorTipo = pokemons.reduce((pokemonsPorTipo, pokemonAtual) => {
    console.log(pokemonAtual)
    pokemonsPorTipo[pokemonAtual.type] = pokemonsPorTipo[pokemonAtual.type] || [];
    pokemonsPorTipo[pokemonAtual.type].push(pokemonAtual)
    return pokemonsPorTipo

}, {})

console.log(pokemonsPorTipo)