function bhaskara(ax2, bx, c) {
    const delta = bx * bx - 4 * ax2 * c
    if(delta < 0) {
        return console.log('Não existe raízes reais')
    } else {
        const x1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
        const x2 = (-bx - Math.sqrt(delta)) / (2 * ax2)
        return console.log('O valor de x1 é: ' + x1 + ' e o valor de x2 é: ' + x2)
    }
}

bhaskara(1, 3, 2)
bhaskara(3, 1, 2)