const enviarEmail = (pessoaAprovada, indice) => {
    const parte1 = `${indice + 1}) ${pessoaAprovada.email}: Parabéns ${pessoaAprovada.nome}`;
    const mensagem = `${parte1} sua nota foi ${pessoaAprovada.nota}`;
    console.log(mensagem)
}


const listaDePessoasAprovadas = [
    { nome: 'Chalie Brown Jr.', email: 'cbj@exemplo.com', nota: '98' },
    { nome: 'Ari Toledo.', email: 'Atoledo@exemplo.com', nota: '100' },
    { nome: 'Jorge Lafon', email: 'Jorgelafon@exemplo.com', nota: '72' },
    { nome: 'Clodovil Henandes', email: 'clohernandes@exemplo.com', nota: '55' },
    { nome: 'Jair Bolsonaro', email: 'jairmito@exemplo.com', nota: '120' },
    { nome: 'Luiz Inácio lula da silva', email: 'lulalivre@exemplo.com', nota: '130' },
]

const pessoasFiltradas = listaDePessoasAprovadas.filter((pessoa) => pessoa.nota >= 100)

pessoasFiltradas.forEach(function(pessoa, indice){
    enviarEmail(pessoa, indice)
} 
)
// console.log(pessoasFiltradas)