const valor = 'Global'

function minhaFuncao (){
    console.log(valor)
}

function exec () {
    const valor = 'Local'
    minhaFuncao()
}

exec()                     // Quando a função exec() é chamada, ela executa a função dentro dela minhaFuncao (), que por sua vez vai chamar
                           // a constante dentro do seu contexto léxico, declarado dentro ela, caso contrário no cenário mais próximo, 
                           //no caso delarado fora  const valor = 'Global'.