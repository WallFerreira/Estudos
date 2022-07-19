console.log('--------------------------------------------------------------------------------------------------')

/*  01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */

function exec(a, b) {

    console.log(`SOMA: ${a + b}`)
    console.log(`SUBTRAÇÃO: ${a - b}`)
    console.log(`MULTIPLICAÇÃO: ${a * b}`)
    console.log(`DIVISÃO: ${a / b}`)

}
console.log('#### EXERCICIO 1 ####')
exec(4, 2)

console.log('--------------------------------------------------------------------------------------------------')
/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */


function triangulos(a, b, c) {

    if (a === b && b === c) {
        console.log(`Triangulo Equilátero: A:${a}, B:${b}, C:${c}`)
    } else {
        if (a === b || b === c || a === c) {
            console.log(`Triangulo Isósceles: A:${a}, B:${b}, C:${c}`)
        } else {
            console.log(`Triangulo Escaleno: A:${a}, B:${b}, C:${c}`)
        }
    }
}

console.log('#### EXERCICIO 2 ####')
triangulos(2, 2, 2)
triangulos(1, 2, 2)
triangulos(3, 2, 1)

console.log('--------------------------------------------------------------------------------------------------')

/* 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente. */

function expoente(base, expo) {
    let resposta = base ** expo
    //    let resultado = Math.pow(base, expoente) --> segunda for de fazer a lógica de exponencial

    return console.log(` O de ${base} elevado à ${expo} é igual ${resposta}`)
}

console.log('#### EXERCICIO 3 ####')
expoente(2, 2)
expoente(2, 3)
expoente(2, 4)


console.log('--------------------------------------------------------------------------------------------------')

/* 04) ​Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

function divisao(dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo / divisor)); //retorna um resultado arredondado
    console.log(`Resto: ${dividendo % divisor}`) //retorna o resto da divisão
}

console.log('#### EXERCICIO 4 ####')
divisao(11, 4)


console.log('--------------------------------------------------------------------------------------------------')

/* 05) ​Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto). */

function converterValorDecimal(valorDecimal) {
    let valorConvertidoEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ".")}`
    // é realizada operação de fixação quantidade de números após a vírgula
    // conversão para string
    // e troca de . para , 
    console.log(`o valor ${valorDecimal} convertido em reais é ${valorConvertidoEmReais}`)
}

console.log('#### EXERCICIO 5 ####')

converterValorDecimal(0.30000000000000004)
converterValorDecimal(0.700000000004)
converterValorDecimal(0.800000003232000000004)
converterValorDecimal(0.50000000000001005)

console.log('--------------------------------------------------------------------------------------------------')

/* 06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

function jurosSimples(capIncial1, taxJuros1, tempAplic1) {
    let montanteJurosSimples = (capIncial1 * taxJuros1 * tempAplic1)
    console.log(`Juros simples ${montanteJurosSimples}`)

}

function jurosComposto(capIncial2, taxJuros2, tempAplic2) {
    let montanteJurosComposto = (capIncial2 * (1 + taxJuros2) ** tempAplic2)
    console.log(`Juros composto ${montanteJurosComposto}`)

}

console.log('#### EXERCICIO 6 ####')

jurosSimples(2, 2, 2)
jurosComposto(2, 2, 2)

console.log('--------------------------------------------------------------------------------------------------')
/* 
07) ​Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. 
Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 
os valores seriam respectivamente: 3, -5, 12. 
Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais. 
Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”. */

function bhaskara(ax2, bx, c) { // bhaskara --> (b² - 4*a*c)
    let retorno = []
    let delta = (bx ** 2) - (4 * ax2 * c)  // função que extrairá o delta △
    if (delta < 0) {
        console.log(`Delta é negativo não executa função: ${delta}`)

    } else {
        console.log(`Delta é positivo: ${delta}`)

    }

    let x1 = (-bx + Math.sqrt(delta) / 2 * ax2).toFixed(3) // fórmula: -b +-√△(raiz quadrada de delta) / 2*a
    let x2 = (-bx - Math.sqrt(delta) / 2 * ax2).toFixed(3)

    retorno.push(x1)
    retorno.push(x2)

    return retorno

}

console.log('#### EXERCICIO 7 ####')

console.log(`Equação 1# ` + bhaskara(1, 3, 2))
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ')

console.log(`Equação 2# ` + bhaskara(3, 1, 2))
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ')

console.log(`Equação 3# ` + bhaskara(5, -1, 12))
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ')

console.log(`Equação 4# ` + bhaskara(-8, 3, 12))
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ')

console.log('--------------------------------------------------------------------------------------------------')

/* 08) ​Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo). 

Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)*/


let relatorioDePontos = "30, 40, 20, 4, 51, 25, 42, 38"

function recorde(relatorioDePontos) {
    let pontuacoes = relatorioDePontos.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > maiorPontuacao) { // compara se a pontuação recebida é maior que a pontuação recorde.
            maiorPontuacao = pontuacoes[i]  // caso seja maior, a pontuação maior assume o valor da pontuação atual.
            qtdQuebraDeRecords++           // Então é acrescentado +1 em quantidade de recordes quebrados.

        } else if (pontuacoes[i] < menorPontuacao) { // da mesma forma se compara o valor atual com a pior pontuação.
            menorPontuacao = pontuacoes[i]         // caso seja menor a menor pontuação assume o valor da pontuação atual.
            piorJogo = i++;                       // Então é acrescentado +1 no número do pior jogo.
        }
    }

    return `Melhor pontuação: ${maiorPontuacao} || pior jogo ${piorJogo} ||  Quebra de recordes: ${qtdQuebraDeRecords}`

}

console.log('#### EXERCICIO 8 ####')


console.log(recorde(relatorioDePontos))

console.log('--------------------------------------------------------------------------------------------------')

/* 
09)​ Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado. */


function correcaoDeProva(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}

function arredondar(nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}
console.log('#### EXERCICIO 9 ####')

correcaoDeProva(100)
correcaoDeProva(30)
correcaoDeProva(38)
correcaoDeProva(88)
correcaoDeProva(61)

console.log('--------------------------------------------------------------------------------------------------')

/* 
10) ​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false. */

function verificaInteiro(numero) {
    if (numero % 3 === 0) {
        return `O número ${numero} É divisível por 3 ==> TRUE`
    } else {
        return `O número ${numero} NÃO é divisível por 3 ==> FALSE`
    }
}

console.log('#### EXERCICIO 10 ####')


console.log(verificaInteiro(3))
console.log(verificaInteiro(2))
console.log(verificaInteiro(6))
console.log(verificaInteiro(125))

console.log('--------------------------------------------------------------------------------------------------')

/* 11) ​As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false. */

function calculaAnoBissexto(ano) {
    if (ano <= 0) {
        return `Só Deus sabe o que rolou antes de tudo`
    } else if (ano % 400 == 0) {
        return true

    } else if (ano % 100 == 0) {
        return false

    } else if (ano % 4 == 0 && ano < 2022) {
        return `O Ano ${ano} foi um ano bissexto --> true`

    } else if (ano % 4 == 0 && ano == 2022) {
        return `O Ano ${ano} é um ano bissexto --> true`

    } else if (ano % 4 == 0 && ano > 2022) {
        return `O Ano ${ano} será um ano bissexto --> true`

    } else {
        return `O Ano ${ano} não foi, não é e nem será um ano bissexto --> false`

    }

}
console.log('#### EXERCICIO 11 ####')

console.log(calculaAnoBissexto(1988))
console.log(calculaAnoBissexto(2024))
console.log(calculaAnoBissexto(2023))
console.log(calculaAnoBissexto(-1))

console.log('--------------------------------------------------------------------------------------------------')

/* 12)​ Faça um algoritmo que calcule o fatorial de um número. */

function calculaFatorial(numero) {
    if (numero != 0) {
        return numero * calculaFatorial(numero - 1)
    } else {
        return 1
    }

}

console.log('#### EXERCICIO 12 ####')

console.log(calculaFatorial(13))
console.log(calculaFatorial(5))
console.log(calculaFatorial(12))
console.log('--------------------------------------------------------------------------------------------------')

/* 13) ​Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

/* diautil
fimDeSemana
diaInvalido */

function verificadia(dia) {
    switch (dia) {
        case 1:
            return `O dia ${dia} é fim de semana`
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return `o dia ${dia} é um dia útil`

        case 7:
            return `O dia ${dia} é fim de semana`

        default:
            return `O dia ${dia} é um dia inválido`

    }

}

console.log('#### EXERCICIO 13 ####')

console.log(verificadia(2))
console.log(verificadia(4))
console.log(verificadia(7))
console.log(verificadia(5))
console.log(verificadia(9))

console.log('--------------------------------------------------------------------------------------------------')

/* 14) ​Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console. */

function verificaFruta(fruta) {
    switch (fruta) {
        case 'maçã':
            console.log('Não vendemos maçãs aqui')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwis')
            break
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo')
            break
        default:
            console.log('erro no console')
            
    }
}
console.log('#### EXERCICIO 13 ####')


verificaFruta('kiwi')
verificaFruta('maçã')
verificaFruta('melancia')
verificaFruta('churrasco')

console.log('--------------------------------------------------------------------------------------------------')

/* 15) ​Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”. */

function vendeVeiculo(modeloDoVeiculo) {
    switch (modeloDoVeiculo) {
        case 'hatch':
            return `Compra efetuada com sucesso`
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return `Tem certeza que não prefere este modelo?`
            
        default:
            return `Não trabalhamos com este tipo de automóvel ${modeloDoVeiculo} aqui.`

    }

}

console.log('#### EXERCICIO 13 ####')

console.log(vendeVeiculo('hatch'))
console.log(vendeVeiculo('sedan'))
console.log(vendeVeiculo('motocicleta'))
console.log(vendeVeiculo('caminhonete'))
console.log(vendeVeiculo('Aeronave'))

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
console.log('---------------------------------------------------------------------------------------------------')
=======
console.log('--------------------------------------------------------------------------------------------------')
>>>>>>> 35343b2 (resolvendo lista de exercicios - Funções)
=======
console.log('---------------------------------------------------------------------------------------------------')
>>>>>>> 1a7996d (add arquivo novo)
=======
console.log('--------------------------------------------------------------------------------------------------')
>>>>>>> 35343b21dbcc125640560363b6d18201620cad81
