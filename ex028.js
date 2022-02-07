const numeros = [0,1,2,3,4,5,6,7,8,9,10]

let numPares = 0
let numImpares = 0

for(let i in numeros) {
    if(numeros[i] % 2 == 0) {
        numPares += 1
    } else {
        numImpares += 1
    }
}

console.log(`O numero de numero pares é: ${numPares}`)
console.log(`O numero de numero impares é: ${numImpares}`)