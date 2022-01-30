let ano = new Date()
ano = ano.getFullYear()

function anoBissexto() {
    if(ano % 4 == 0 && ano % 100 !=0 || ano % 400 == 0) {
        return `Esse ano de ${ano} é bissexto!`
    } else {
        return `Esse ano de ${ano} não é bissexto!`
    }
}

console.log(anoBissexto(ano))