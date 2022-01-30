jurosSimples = (capitalInicial, taxaJuros, tempoAplicacao) => {
    return (capitalInicial + (capitalInicial * taxaJuros * tempoAplicacao)).toFixed(2)
}   

jurosCompostos = (capitalInicial, taxaJuros, tempoAplicacao) => {
    return (capitalInicial * Math.pow(1 + taxaJuros, tempoAplicacao)).toFixed(2)
}  

console.log(jurosSimples(1200, 0.02, 10))
console.log(jurosCompostos(8000, 0.012, 6))