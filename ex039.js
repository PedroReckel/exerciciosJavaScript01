const vetorA = [1, 2, 3, 4, 5]
const vetorB = [5, 4, 3, 4, 5]
console.log(`Antes da troca: ${vetorA}`)
console.log(`Antes da troca: ${vetorB} `)

function trocarArray(array1, array2) {
    for(let i = 0; i < array1.length; i++) {
        array1[i] = array1[i] + array2[i]
        array2[i] = array1[i] - array2[i]
        array1[i] = array1[i] - array2[i]
    }
    console.log(`Depois da troca: ${array1}`)
    console.log(`Depois da troca: ${array2}`)
}

trocarArray(vetorA, vetorB)