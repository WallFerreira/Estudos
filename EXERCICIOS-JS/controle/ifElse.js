const imprimirResultado = function (nota) {
    if(nota >= 7){
        console.log('Aprovado com nota = ' + nota)
    } else{
        console.log('Reprovado com nota = ' + nota)
    }
}

imprimirResultado(8)
imprimirResultado(6.9)
imprimirResultado('EPAA') // CUIDADO!!  A linguagem aceita, mas vai dar falso