function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]  //Aguments é um array interno de uma função que tem todos os argumentos que fora passados
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

console.log(soma(1.1, 2.2, 3.3, " teste"))
console.log(soma(" a", "b", "c", " teste"))