const vet = [1,2,3,4,5,6,7,8,9,10]

function maiorMenor(vet) {
    let maior 
    let menor 
    for(let i = 0; i < vet.length; i++) {
        if(maior === undefined && menor === undefined) {
            maior = vet[i]
            menor = vet[i]
        } else {
            if(vet[i] > maior) {
                maior = vet[i]
            } 
            if(vet[i] < menor) {
                menor = vet[i]
            }
        }
    } 
    return [maior, menor]
}

console.log(maiorMenor(vet))