const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5)
        break   // BREAK não haje sobre o bloco IF mas sim pelo bloco FOR ou While
    // BREAK vai interromper o laço em que ele está relacionado e sair para a próxima sentença de codigo fora do laço.
    console.log(`X${x} = ${nums[x]} `)
}

for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`Y${y} = ${nums[y]}`)  // CONTINUE não haje sobre o bloco IF mas sim pelo bloco FOR ou While
    // CONTINUE vai interromper a repetição atual e pula para a próxima ( não sai do laço, apenas pula )
}

externo: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo // especificando para qual laço precisamos sair, nesse caso FOR externo.
        console.log(`Par =  ${a},${b}`)
    }
}
console.log('FIM')
