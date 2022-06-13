let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a   // removendo os parênteses se tiver apenas 1 único parâmetro
// quando você remove o corpo da função, o return é chamado IMPLICITAMENTE

console.log(dobro(2))

let ola = function () {
    return 'Olá'

}
ola = () => 'Olá'
ola = _ => 'Olá'

console.log(ola())