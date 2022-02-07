function anuidade(mes, valor) {
    if(mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * Math.pow(1 + (5/100), atraso)).toFixed(2)
    } else {
        return 'Mês inválido'
    }
}

console.log(anuidade(4, 100))