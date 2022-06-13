// factory simples

function criarPessoa(){
    return{
        nome:'Ana',
        sobrenome: 'Silva'     // Função factory é uma função que retorna um objeto, e a cada vez que essa função é chamada, 
                               // é gerada então uma nova instancia dessa função
    }
}

console.log(criarPessoa())

