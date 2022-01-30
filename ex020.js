function sacarDinheiro(valorSaque) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorNota = calcularValorNota(valorSaque) //valorNota recebe a chamada recursiva da função calcularValorNota
    while (valorSaque >= valorNota) { //vai executar enquanto o valor do saque for maior que o da nota
        switch (valorNota) {
             //caso o valor seja 100...
            case 100:
                 //100 vai ser deduzido do valor do saque (valorSaque - 100)
                valorSaque -= 100
                //o contador da quantidade de notas de 100 vai receber uma unidade - informa, ao fim, quantas notas serão necessárias
                contador100++
                break
            case 50:
                valorSaque -= 50
                contador50++
                break
            case 10:
                valorSaque -= 10
                contador10++
                break
            case 5:
                valorSaque -= 5
                contador5++
                break
            case 1:
                contador1++
                valorSaque -= 1
                break
        }
        //chamada da função calcularValorNota recursivamente!
        valorNota = calcularValorNota(valorSaque)

    }
    //chamada da função elaborarResultado mandando o valor armazenado para a quantidade de cada nota necessária
    return elaborarResultado(contador100, contador50, contador10, contador5, contador1)
}
//recebe o valor do saque
function calcularValorNota(valorSaque) {
    //a função vai conferir o tipo das notas que vão ser retornadas, de 100, de 50, 10, etc
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}
//função recebendo a quantidade das notas de cada tipo, armazenadas nos contadores correspondentes
function elaborarResultado(contador100, contador50, contador10, contador5, contador1) {
    let resultado = ''
    //se contador100 for maior do que 0...
    if (contador100 > 0) {
        //resultado vai receber a String que informa a quantidade de notas de 100
        resultado += `${contador100} nota(s) de R$ 100. `
    }
    //mesma lógica da anterior, e assim até o fim.
    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `
    }

    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `
    }

    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5. `
    }

    if (contador1 > 0) {
        resultado += `${contador1} moeda(s) de R$ 1. `
    }
    //retorna a String completa com a quantidade de notas necessárias
    return resultado
}
//chamada da função sacarDinheiro mandando o valorSaque = 153
console.log(sacarDinheiro(153))