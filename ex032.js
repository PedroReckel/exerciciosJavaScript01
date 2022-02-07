const vetMedia = [8,7,6,4,2,3,5]

function calcularMedia(vetMedia) {
    let soma = 0
    let media = 0
    for(let i in vetMedia) {
        soma += vetMedia[i]
    }
    media = soma / vetMedia.length
    return media
}

console.log(calcularMedia(vetMedia))