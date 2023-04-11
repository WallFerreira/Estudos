//considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e desconsidere
//também dias decorridos desde o último aniversário.

function converteIdadeAnosParaDias(idade){
    let anoQueNasceu = 2022 - idade;
    let qntDeAnosBissextos = Math.floor(idade / 4)
    
    const umAnoEmDias = 365;
    return ` Você nasceu em ${anoQueNasceu} e tem ${idade} anos, que é igual a ${idade * umAnoEmDias + qntDeAnosBissextos} dias de vida`;
}

console.log(converteIdadeAnosParaDias(33));
console.log(converteIdadeAnosParaDias(25));
console.log(converteIdadeAnosParaDias(18));
console.log(converteIdadeAnosParaDias(28))


//considerei ano bissexto e add o ano que a pessoa nasceu!