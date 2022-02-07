const numInteiros = [1, -2, -9 ,5 , 7, -7, 0, 10, 6, 4, -8]

const contarNegativos = () => {
    let qtdNegativos = 0
    for(let i in numInteiros) {
        if(numInteiros[i] < 0) {
            qtdNegativos += 1
        }
    }
    console.log(numInteiros)
    console.log(`A quantidade de numero negativos é ${qtdNegativos}`)
}

contarNegativos(numInteiros)