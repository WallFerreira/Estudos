// function simboloMais(numero) {
//     let resultado = [];
//     for (let i = 0; i < numero; i++) {
//         resultado.push('+');
//     }
//     return resultado
// }

function simboloMais(quantidade) {
    let resultado = ''
    for(let i = 0; i < quantidade; i++)
    resultado += '+'
    return resultado
    }

console.log(simboloMais(6))
console.log(simboloMais(5))
console.log(simboloMais(4))
console.log(simboloMais(3))
console.log(simboloMais(2))
console.log(simboloMais(1))