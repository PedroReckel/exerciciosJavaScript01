const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

let count1 = 0
let  count2 = 0

for(let i in numeros) {
    if(numeros[i] >= 10 && numeros[i] <= 20) {
        count1 += 1
    } else {
        count2 += 1
    }
}

console.log(`Existem ${count1} numeros dentro do intervalo.`)
console.log(`Existem ${count2} numero fora do intervalo.`)