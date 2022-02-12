function caractereComum(palavra1, palavra2) {
    let estaContido = true
    for(let i = 0; i < palavra1.length; i++) {
        let charPalavra1 = palavra1.charAt(i).toLowerCase()
        for(let j = 0; j < palavra2.length; j++) {
            let charPalavra2 = palavra2.charAt(j).toLowerCase()
            if(charPalavra1 == charPalavra2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
    }
    return estaContido
}

console.log(caractereComum('cba', 'abc'))