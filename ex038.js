function imprimirImpares(inicio = 0, fim = 100) {
    if (inicio > fim) {
        inicio = fim + inicio
        fim = inicio - fim
        inicio = inicio - fim        
    }

    console.log('Os numeros impares no intervalo são:')
    for(let i = inicio; i <= fim; i++) {
        if(i % 2 == 0) {
            continue
        } else {
            console.log(i)
        }
    }
}

imprimirImpares(19, 3) 