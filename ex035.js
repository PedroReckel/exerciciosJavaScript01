const vetorPilha = [1, 2, 3, 4, 5]
const vetorAdiciona = [6, 7, 8, 9, 10]

function juntaArray(vetorInicial, vetorEncrementar) {
    console.log('O vetor incial é: ', vetorInicial)
    for(let i = 0; i < vetorEncrementar.length; i++) {    // Aqui eu tenho que usar um loop for, pois ele precisa adicionar cada elemento do array encrementador em cada posição do array inicial 
        vetorInicial.push(vetorEncrementar[i])
    }
    console.log('O vetor que irá encrementar é: ', vetorEncrementar)
    console.log('O vetor completo é: ', vetorInicial)
}

juntaArray(vetorPilha, vetorAdiciona)


// Assim que ficaria sem o loop for:

const vetorPilha2 = [1, 2, 3, 4, 5]
const vetorAdiciona2 = [6, 7, 8, 9, 10]

vetorPilha2.push(vetorAdiciona2)

console.log(vetorPilha2)