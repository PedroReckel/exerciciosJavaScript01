const fatorial = (num) => {
    let fat = 1
    for(i = num; i > 0; i--) {
        fat = fat * i
        console.log(i)
    }
    console.log(`O faotorial de ${num} é: ${fat}`)
}

fatorial(5)