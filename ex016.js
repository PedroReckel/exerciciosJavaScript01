function calc(x, y, operacao) {
    switch(operacao) {
        case '+':
            console.log(x, '+', y ,'=', x + y)
            break
        case '-':
            console.log(x, '-', y ,'=', x - y)
            break
        case '*':
            console.log(x, 'x', y ,'=', x * y)
            break
        case '/':
            console.log(x, '/', y ,'=', x / y)
            break
        default:
            console.log('ERRO! Caractere inválido')
    }
}

calc(4, 2, '*')