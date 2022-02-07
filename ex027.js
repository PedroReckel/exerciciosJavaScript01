function alturaCriancas(altura1, tx1, altura2, tx2) {
    if(altura1 == altura2) {
        if(tx1 > tx2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano'
        } else if(tx1 < tx2) {
            return 'A criança 2 ultrapassará a crinça 1 em 1 ano'
        } else {
            return 'As crianças tem igual altura e crescimento'
        }
    } else {
        if(altura1 > altura2) {
            if(tx1 >= tx2) {
                return 'A criança menor não utrapassará a maior'
            } else {
                return `A criança menor ultrapassará a maior em ${calcularTempo(altura1, tx1, altura2, tx2)} anos.`
            }
        } else {
            if(tx2 >= tx1) {
                return 'A criança menor não ultrapassará a maior'
            } else {
                return `A criança menor ultrapassará a maior em ${calcularTempo(altura1, tx1, altura2, tx2)} anos.`
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior) {
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    return qtdAnos
}

console.log(alturaCriancas(150, 2, 130, 4))