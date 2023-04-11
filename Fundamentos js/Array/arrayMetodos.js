const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //retira o último elemento da lista --> 'Massa'
console.log(pilotos);
console.log("===============================================================");

pilotos.shift() //retira o primeiro elemento da lista --> 'Vetel'
console.log(pilotos);
console.log("===============================================================");

pilotos.push('Verstappen') // Add elemento na última posição
console.log(pilotos);
console.log("===============================================================");

pilotos.unshift('Hamilton') //Add o elemento na primeira posição 
console.log(pilotos);
console.log("===============================================================");

pilotos.splice(2, 0, 'Bottas', 'Massa') // pode add elementos a partir de uma posição do array
console.log(pilotos);
console.log("===============================================================");

pilotos.splice(3, 1) // pode remover elementos a partir de uma posição do array
console.log(pilotos);
console.log("===============================================================");

pilotos.splice(3, 1, 'Senna') // pode remover e add elementos ao mesmo tempo
console.log(pilotos);
console.log("===============================================================");


const algunsPilotos1 = pilotos.slice(2) // retorna novo array.. apartir do indice indicado
console.log(algunsPilotos1);
console.log("===============================================================");

const algunsPilotos2 = pilotos.slice(1, 4) // o elemento indicado no segundo parâmentro não entra
console.log(algunsPilotos2);
console.log("===============================================================");
