function dinheiro(valor) {
    return console.log('R$' + valor.toFixed(2).toString().replace("." , ","))
}

dinheiro(0.30000000000000004)