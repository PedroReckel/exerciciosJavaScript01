function classificaAluno(nota) {
    const notaCorrigida = arredondar(nota)
    if(notaCorrigida <= 40) {
        console.log(`A nota do aluno foi: ${notaCorrigida}, ele foi aprovado!`)
    } else {
        console.log(`A nota do aluno foi: ${notaCorrigida}, ele foi reprovado!`)
    }
}

function arredondar(nota) {
    if(nota % 5 > 2) {
        return nota + ( 5 - (nota % 5))
    } else {
        return nota
    }
}

classificaAluno(38)