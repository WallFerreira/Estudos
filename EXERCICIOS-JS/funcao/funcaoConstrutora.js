function Carro(velocidadeMaxima =200, delta = 5){
    // Atributo privado
    let velocidadeAtual = 0  //atributo visivel somente dentro da função construtora Carro
    
    //metodo publico
    this.acelerar = function (){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    // metodo publico
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
}

const uno = new Carro // vai utilizar os parâmetros padrões definidos na função construtora Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro (350, 20) // vai utilizar os parametro passados na instância
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)