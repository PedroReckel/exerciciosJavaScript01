function progressaoAritmetica(A1, n, r) {
    let An = 0
    let Sn = 0
    An = A1 + (n - 1) * r
    Sn = ((A1 + An) * n) / 2
    return Sn
}

console.log(progressaoAritmetica(10, 10, 15))

function progressaoGeometrica (A1, n , r) {
    for(let i = 0; i < n; i++){
        console.log(A1*(r**i))
    }
    console.log('Soma: ' + (A1 * ((r**n)-1))/(r-1))
}

console.log(progressaoGeometrica(10, 5, 3))