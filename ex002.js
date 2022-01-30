function triangulo(a, b, c) {
    if(a < b + c && b < a + c && c < a + b) {
        if(a == b && b == c && c == a) {
            return console.log('O triângulo é equilátero, pois tem todos os lados iguais')
        } else if(a == b || b == c || c == a) {
            return console.log('O triângulo é isósceles, pois ele tem dois lados iguais')
        } else {
            return console.log('O triângulo é escaleno, pois todos os lados são diferentes')
        }
    } else {
        return console.log('Não é possivel existir um triâgulo!')
    }
}

triangulo(4, 5, 4)