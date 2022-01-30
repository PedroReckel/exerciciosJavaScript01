function anuidade(mes, valorAnuidade) {
    for(i = mes; i >= 12; i++) {
        valorPorMes = jurosCompostos(valorAnuidade, 5)
    }   
}

jurosCompostos = (capitalInicial, taxaJuros, tempoAplicacao) => {
    return (capitalInicial * Math.pow(1 + taxaJuros, tempoAplicacao)).toFixed(2)
}  

anuidade(1, 500)