const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const numerosFiltrados = numeros.filter((numero) => numero >= 5 && numero %2 !== 0) // duas condições)

console.log(numerosFiltrados)