
const listaDePessoasAprovadas = [
    'cbj@exemplo.com',
    'Atoledo@exemplo.com',
    'Jorgelafon@exemplo.com',
    'clohernandes@exemplo.com',
    'jairmito@exemplo.com',
    'lulalivre@exemplo.com',
];

const enviarEmail = (objetoEmail) => {
    console.log(`Email para ${objetoEmail.email} com a nota ${objetoEmail.nota} enviado com sucesso`)
}

let listaDeEmails;

listaDeEmails = listaDePessoasAprovadas.map((email) => {
    return { email: email, nota: 10 };
});

// console.log(listaDeEmails)


listaDeEmails.forEach((objetoEmail) =>enviarEmail(objetoEmail));