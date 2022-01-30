function planoSaude(idade) {
    const valorFixo = 100
    let valorFinal = 0
    if(idade < 10) {    
        valorFinal = valorFixo + 80
    } else if(idade > 10 && idade < 30) {
        valorFinal = valorFixo + 50
    } else if(idade > 30 && idade < 60) {
        valorFinal = valorFixo + 95
    } else {
        valorFinal = valorFixo + 130
    }
    console.log(`Com a sua idade de ${idade}, seu plano deu o total de: ${valorFinal}`)
}

planoSaude(90)