function Pessoa() {
    this.idade = 0

    const self = this          //Criar uma constante passando o valor de this, torna ele imutável, ou seja, não importa quem chama, 
                               //ele sempre vai ser esse this, basta substituir pelo nome da variável
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/* .bind(this) */, 1000)  // Quando a função é declarada, BIND é uma estratégia de fazer relação do this da função pai(Pessoa) com o this da função filho(setInterval)
                               // Se não utilizar essa estratégia, o this entra no contexto da função(Pessoa)
}

new Pessoa