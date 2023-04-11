const listaDeGanhadores = [
    { nome: 'Chalie Brown Jr.', email: 'cbj@exemplo.com', nota: '98' },
    { nome: 'Ari Toledo.', email: 'Atoledo@exemplo.com', nota: '100' },
    { nome: 'Jorge Lafon', email: 'Jorgelafon@exemplo.com', nota: '72' },
    { nome: 'Clodovil Henandes', email: 'clohernandes@exemplo.com', nota: '55' },
    { nome: 'Jair Bolsonaro', email: 'jairmito@exemplo.com', nota: '120' },
    { nome: 'Luiz Inácio lula da silva', email: 'lulalivre@exemplo.com', nota: '130' },
]

function ganhador(pessoa){
    return pessoa.nota >= 100
}

const resultado = listaDeGanhadores.filter(ganhador)
console.log(resultado)

