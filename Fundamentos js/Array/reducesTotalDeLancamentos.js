const foguetesLancados = [
    { pais: "Russia", lancamentos: 32 },
    { pais: "USA", lancamentos: 23 },
    { pais: "China", lancamentos: 16 },
    { pais: "Canadá", lancamentos: 7 },
    { pais: "Alemanha", lancamentos: 4 },
    { pais: "Espanha", lancamentos: 3 },
    { pais: "Brasil", lancamentos: 1 },
]

const totalLancamentos = foguetesLancados.reduce((prevValor, elem) => prevValor + elem.lancamentos, 0)
console.log(totalLancamentos) 