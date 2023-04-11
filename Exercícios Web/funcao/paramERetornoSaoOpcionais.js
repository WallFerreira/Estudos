function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`valor acima do permitido ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 2, 4, 5, 6)) // só vai pegar os 2 primeiros params e ignorar o restante;
console.log(area(5, 5))