function planoSalario(plano, salarioAtual) {
    let novoSalario
    switch(plano) {
        case 'a':
            novoSalario = (salarioAtual * 10) / 100 + salarioAtual
            console.log('Seu novo salário é: ' + novoSalario)
            break
        case 'b':
            novoSalario = (salarioAtual * 15) / 100 + salarioAtual
            console.log('Seu novo salário é: ' + novoSalario)
            break
        case 'c':
            novoSalario = (salarioAtual * 20) / 100 + salarioAtual
            console.log('Seu novo salário é: ' + novoSalario)
            break
        default:
            console.log('Plano de salário inválido')
    }
}

planoSalario('c', 850)