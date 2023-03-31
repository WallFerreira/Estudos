function inverso(valor) {
   const tipo = typeof valor

   if(tipo == "boolean") console.log(!valor)
   else if (tipo =="number") console.log(-valor)
   else
    console.log(`Booleano ou Número esperados, o parâmetro informado é do tipo: ${tipo}`)
}

inverso(true)
inverso(false)
inverso(234)
inverso(-135)
inverso([1234,21313])

