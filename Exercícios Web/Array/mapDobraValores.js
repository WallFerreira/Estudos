// modelo 1
const numeros = [10, 41, 63, 3, 14, 33, 5, 55, 81, 76];

const dobraValores = numeros.map(function(numero){
    return numero * 2
})
console.log('Modelo 1')
console.log(dobraValores)
console.log('--------------------------------------------------')


// modelo 2 

const numeros2 = [10, 41, 63, 3, 14, 33, 5, 55, 81, 76];

const dobraValores2 = numeros2.map((numero2) => numero2 * 2 )

console.log('Modelo 2')
console.log(dobraValores2)
console.log('--------------------------------------------------')


// modelo 3 

const numeros3= [10, 41, 63, 3, 14, 33, 5, 55, 81, 76];

function dobrador(numero3){
    return numero3 * 2
}

const dobraValores3 = numeros3.map(dobrador)

console.log('Modelo 3')
console.log(dobraValores3)
console.log('--------------------------------------------------')
