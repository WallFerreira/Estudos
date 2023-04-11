 const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

 aprovados.forEach(function(nome, indice){  //(recebe sempre 3 parâmetros, o nome, o indice e o próprio array)
    console.log(`${indice + 1}) ${nome}`) 
 })

 aprovados.forEach(nome => console.log(nome))

 const exibirAprovados = aprovado => console.log(aprovado)

 aprovados.forEach(exibirAprovados)