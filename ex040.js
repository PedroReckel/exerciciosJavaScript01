const notas = [2.2, 10.0, 5.5, 5.0, 8.0, 9.0, 4.9]
console.log(notas)

function conceitoNotas(notas) {
    let conceitos = []
    for(i in notas) {
        if(notas[i] <= 4.9) {
            conceitos.push('D')
        } else if(notas[i] >= 5.0 && notas[i] <= 6.9) {
            conceitos.push('C')
        } else if (notas[i] >= 7.0 && notas[i] <= 8.9) {
            conceitos.push('B')
        } else if (notas[i] >= 9.0 && notas[i] <= 10.0) {
            conceitos.push('A')
        } else {
            conceitos.push('Nota inválida')
        }
    }
    return conceitos
}

console.log(conceitoNotas(notas))