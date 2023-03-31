// modelo 1
const fahrenheit = [0, 32, 45, 50, 75, 80, 120];

const celsius = fahrenheit.map((numero) => Math.round((numero - 32) * 5 / 9))

console.log(`Os números convertidos de fahrenheit [${fahrenheit}] = em Celsius [${celsius}]`)