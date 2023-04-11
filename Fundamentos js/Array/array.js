console.log(typeof Array, typeof new Array, typeof [])

// a boa pratica diz que devemos trabalhar com dados do mesmo tipo
console.log("===============================================");

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana']
console.log("===============================================");

console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); //undefined (não existe esse index no array)

console.log("===============================================");

aprovados[3] = 'Paulo' // mais comum para substuir elemento no array
aprovados.push('Abia')
console.log(aprovados.length);
console.log("===============================================");

aprovados[9] ='Rafael'
console.log(aprovados.length);
console.log(aprovados[8] === undefined);
console.log("===============================================");

console.log(aprovados);
console.log("===============================================");

aprovados.sort()
console.log(aprovados);
console.log("===============================================");

delete aprovados[1]

console.log(aprovados[1]);
console.log(aprovados[2]);

console.log("===============================================");

console.log(aprovados);
console.log("===============================================");

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1)
console.log(aprovados);

console.log("===============================================");

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2)
console.log(aprovados);

console.log("===============================================");

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados);

console.log("===============================================");

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
console.log(aprovados);

console.log("===============================================");

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Elemento1', 'Elemento2')
console.log(aprovados);

console.log("===============================================");

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(2, 1, 'Elemento1', 'Elemento2')
console.log(aprovados);







