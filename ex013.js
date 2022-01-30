const pegarDia = new Date().getDay()

function diaSemana(dia) {
    switch (dia) {
        case 6:
            console.log('Hoje é sábado. Não é dia útil')
            break
        case 5:
            console.log('Hoje é sexta. É dia útil')
            break
        case 4:
            console.log('Hoje é quinta. É dia útil')
            break
        case 3:
            console.log('Hoje é quarta. É dia útil')
            break
        case 2:
            console.log('Hoje é terça. É dia útil')
            break
        case 1:
            console.log('Hoje é segunda. É dia útil')
            break
        case 0:
            console.log('Hoje é domingo. Não é dia útil')
            break
        default:
            console.log('Dia inválido!')
    }
}

diaSemana(pegarDia)