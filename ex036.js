const valorNumerico = [4,5,9,7,2,1,3,6]

const func1 = (arrayNumerico1, numInteiro1) => {
    const arrayMultiplicacao1 = []
    for(let i in arrayNumerico1) {
        arrayMultiplicacao1.push(arrayNumerico1[i] * numInteiro1)
    }
    return arrayMultiplicacao1
}

console.log(func1(valorNumerico, 2))

const func2 = (arrayNumerico2, numInteiro2) => {
    const arrayMultiplicacao2 = []
    for(let i in arrayNumerico2) {
        if(arrayNumerico2[i] > 5) {
            arrayMultiplicacao2.push(arrayNumerico2[i] * numInteiro2)
        } else {
            continue
        }
    }
    return arrayMultiplicacao2
}

console.log(func2(valorNumerico, 2))