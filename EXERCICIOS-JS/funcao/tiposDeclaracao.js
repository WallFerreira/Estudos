console.log(soma(3, 5)) 
// function declaration
// quando declarado função dessa forma, a função pode ser chamada antes, pois o interpretador do JS carrega 1º funções


//console.log(sub(3, 5)) <<<--- Não funciona se chamar aqui
// function declaration
// Quando declarada função como "function declaration", a funcção não pode ser chamada antes



// function declaration
function soma(x, y) {   
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}                        //nas duas situações que temos FUNCTION EXPRESSION, seja função nomeada ou anonima, é obirgado a chamar depois da função

// named function expression
const mult = function mult(x, y) {
    return x * y
}