const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(` ${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // CallBack .. para cada elemento encontrado ele executa a função imprimir
fabricantes.forEach(fabricante => console.log(fabricante))  