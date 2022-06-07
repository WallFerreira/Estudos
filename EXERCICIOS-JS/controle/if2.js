function teste1(num) {
    if (num > 7)
        console.log(num)
    console.log('Final') // essa linha está fora do bloco do if e sempre será chamada independente dá lógica do if ser atendida
}

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7); { // <<-- cuidado com o ; , não utilizar com as estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)